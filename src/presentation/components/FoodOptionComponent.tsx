import { useTheme } from 'react-native-paper';
import { MenuOption} from 'react-native-popup-menu';


interface FoodOptionComponentProps {
  setVisibleEdit: (visible: boolean) => void;
}
export const FoodOptionComponent = ({setVisibleEdit} : FoodOptionComponentProps) => {
  const theme = useTheme();
  const showDialog = () => {
    setVisibleEdit(true);
  }
  return (
    <>
      <MenuOption onSelect={() => alert(`Save`)} text="Confimar comida"/>
      <MenuOption onSelect={() => showDialog()} text="Editar" />
      <MenuOption onSelect={() => alert(`Delete`)} text="Eliminar" />
      
    </>
  );
};
