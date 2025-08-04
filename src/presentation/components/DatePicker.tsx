import { Modal, View } from "react-native";
import { globalStyles } from "../theme/theme";
import { Button} from "react-native-paper";
import DatePicker from 'react-native-modern-datepicker';

interface DatePickerProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    selectedDate: string;
    setDate: (date: string) => void;
}
export const DatePickerModal = ({visible, setVisible: setVisible, selectedDate, setDate} : DatePickerProps) => {
    const handlePress = () => {
        setVisible(false);
    }
    const handleChange = (date: string) => {
        setDate(date);
    }
  return (
    <View>
      <Modal visible={visible} onDismiss={handlePress} transparent={true}>
        <View style={globalStyles.centeredView}>
          <View style={globalStyles.modalView}>
            <DatePicker
                isGregorian={true}
                style={globalStyles.datePicker}
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
}
