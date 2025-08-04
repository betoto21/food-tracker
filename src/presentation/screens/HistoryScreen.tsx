import { useEffect, useState } from 'react'
import { View } from 'react-native'
import { DatePickerModal } from '../components/DatePicker';
import { ActivityIndicator, Button, MD3Colors, Text } from 'react-native-paper';
import { getToday} from 'react-native-modern-datepicker';
import { globalColors, globalStyles } from '../theme/theme';
import { HistoryDay } from '../components/HistoryDay';
import { getHistory } from '../../data/api/HistoryApi';
import { HistoryInfo } from '../../domain/models/HistoryInfo';
import { NoHistoryComponent } from '../components/NoHistoryComponent';



export const HistoryScreen = () => {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState(getToday());
  const [history, setHistory] = useState<HistoryInfo>({} as HistoryInfo);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getHistoryList = getHistory(date);
    setHistory(getHistoryList);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [date]);

  
  return (
    <View>
      <View
        style={{
          padding: 20,
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
              marginRight: 10,
              marginBottom: 5,
              fontSize: 16,
            }}
          >
            Fecha seleccionada:
          </Text>
          <Text style={globalStyles.dateText}>{date}</Text>
        </View>
        <Button
          onPress={() => setOpen(true)}
          style={globalStyles.button}
          textColor={globalColors.surface_container_low}
        >
          Seleccionar una fecha
        </Button>
      </View>
      <View>
        {loading ? (
          <ActivityIndicator animating={true} color={globalColors.primary} size={'large'} style={globalStyles.activityIndicator} />
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
}
