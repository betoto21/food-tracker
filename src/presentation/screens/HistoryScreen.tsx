/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { DatePickerModal } from '../components/DatePicker';
import { ActivityIndicator, Button, Text, useTheme } from 'react-native-paper';
import { getToday } from 'react-native-modern-datepicker';
import { HistoryDay } from '../components/HistoryDay';
import { HistoryInfo } from '../../domain/models/HistoryInfo';
import { NoHistoryComponent } from '../components/NoHistoryComponent';
import { getHistoryDay } from '../../domain/use-cases/HistoryUseCases';
import { FoodModel } from '../../domain/models/FoodModel';

export const HistoryScreen = () => {
  const emptyFood: FoodModel = {
    id: 0,
    name: '',
    description: '',
    type: 0,
  };
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(getToday());
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(0);
  const [breakfast, setBreakfast] = useState<FoodModel>(emptyFood);
  const [lunch, setLunch] = useState<FoodModel>(emptyFood);
  const [dinner, setDinner] = useState<FoodModel>(emptyFood);
  const { width, height } = Dimensions.get('window');
  const [refresh, setRefresh] = useState(false);
  const reset = () => {
    setResults(0);
    setBreakfast(emptyFood);
    setLunch(emptyFood);
    setDinner(emptyFood);
  };

  const theme = useTheme();
  useEffect(() => {
    reset();
    const fetchHistory = async () => {
      reset();
      setLoading(true);

      try {
        const historyList: HistoryInfo[] = await getHistoryDay(date);
        setResults(historyList.length);
        if (historyList && historyList.length > 0) {
          historyList.forEach(item => {
            const foodData = item.foods;
            if (item.foodType === 1) {
              setBreakfast(foodData);
            } else if (item.foodType === 2) {
              setLunch(foodData);
            } else if (item.foodType === 3) {
              setDinner(foodData);
            }
          });
        }
      } catch (error) {
        console.error('Error al obtener el historial:', error);
        reset();
      } finally {
        setRefresh(false);
        setLoading(false);
      }
    };
    fetchHistory();
  }, [date, refresh]);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    dateText: {
      borderColor: theme.colors.primary,
      borderWidth: 1,
      paddingHorizontal: width * 0.04,
      paddingVertical: height * 0.007,
      borderRadius: 5,
      marginRight: width * 0.04,
      marginTop: height * 0.01,
      fontWeight: 'bold',
    },
    button: {
      paddingHorizontal: width * 0.04,
      paddingVertical: height * 0.001,
      marginTop: height * 0.04,
      backgroundColor: theme.colors.primary,
    },
    activityIndicator: {
      margin: 'auto',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View
        style={{
          paddingHorizontal: width * 0.05,
          paddingVertical: height * 0.01,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}
      >
        <DatePickerModal
          visible={open}
          setVisible={setOpen}
          selectedDate={date}
          setDate={setDate}
        />
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              marginTop: height * 0.01,
              fontSize: 16,
            }}
          >
            Fecha seleccionada:
          </Text>
          <Text style={styles.dateText}>{date}</Text>
        </View>
        <Button
          onPress={() => setOpen(true)}
          style={styles.button}
          textColor={theme.colors.surface}
        >
          Seleccionar una fecha
        </Button>
      </View>
      {loading ? (
        <ActivityIndicator
          animating={true}
          color={theme.colors.primary}
          size={'large'}
          style={styles.activityIndicator}
        />
      ) : (
        <>
          {results > 0 ? (
            <HistoryDay
              breakfast={breakfast}
              lunch={lunch}
              dinner={dinner}
              refresh={refresh}
              setRefresh={setRefresh}
            />
          ) : (
            <NoHistoryComponent refresh={refresh} setRefresh={setRefresh} />
          )}
        </>
      )}
    </View>
  );
};
