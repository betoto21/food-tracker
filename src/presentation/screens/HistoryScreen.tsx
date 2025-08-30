import { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { DatePickerModal } from '../components/DatePicker';
import { ActivityIndicator, Button, Text, useTheme } from 'react-native-paper';
import { getToday } from 'react-native-modern-datepicker';
import { HistoryDay } from '../components/HistoryDay';
import { getHistory } from '../../data/api/HistoryApi';
import { HistoryInfo } from '../../domain/models/HistoryInfo';
import { NoHistoryComponent } from '../components/NoHistoryComponent';

export const HistoryScreen = () => {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(getToday());
  const [history, setHistory] = useState<HistoryInfo>({} as HistoryInfo);
  const [loading, setLoading] = useState(false);
  const { width, height } = Dimensions.get('window');
  const theme = useTheme();
  useEffect(() => {
    setLoading(true);
    const getHistoryList = getHistory(date);
    setHistory(getHistoryList);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [date]);
  const styles = StyleSheet.create({
    dateText: {
      borderColor: theme.colors.primary,
      borderWidth: 1,
      paddingHorizontal: width * 0.04,
      paddingVertical: height * 0.007,
      borderRadius: 5,
      marginRight : width * 0.04,
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
    <View>
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
      <View>
        {loading ? (
          <ActivityIndicator
            animating={true}
            color={theme.colors.primary}
            size={'large'}
            style={styles.activityIndicator}
          />
        ) : (
          <>
            {history && history.breakfast && history.lunch && history.dinner ? (
              <HistoryDay
                date={history.date}
                breakfast={history.breakfast}
                lunch={history.lunch}
                dinner={history.dinner}
              />
            ) : (
              <NoHistoryComponent />
            )}
          </>
        )}
      </View>
    </View>
  );
};
