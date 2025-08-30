import { Modal, StyleSheet, View } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import DatePicker from 'react-native-modern-datepicker';

interface DatePickerProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  selectedDate: string;
  setDate: (date: string) => void;
}
export const DatePickerModal = ({
  visible,
  setVisible: setVisible,
  selectedDate,
  setDate,
}: DatePickerProps) => {
  const theme = useTheme();
  const handlePress = () => {
    setVisible(false);
  };
  const handleChange = (date: string) => {
    setDate(date);
  };
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      backgroundColor: theme.colors.surface,
    },
    datePicker: {
      width: 320,
      height: 400,
      backgroundColor: theme.colors.surface,
    },
  });
  return (
    <View>
      <Modal visible={visible} onDismiss={handlePress} transparent={true}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <DatePicker
              isGregorian={true}
              style={styles.datePicker}
              selected={selectedDate}
              onSelectedChange={handleChange}
              onDateChange={handleChange}
            />
            <Button onPress={handlePress}>Cerrar</Button>
          </View>
        </View>
      </Modal>
    </View>
  );
};
