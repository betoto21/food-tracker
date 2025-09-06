import { MenuOption} from 'react-native-popup-menu';


interface FoodOptionComponentProps {
  setVisibleEdit: (visible: boolean) => void;
  setConfirmDialog: (visible : boolean) => void;
}
export const FoodOptionComponent = ({setVisibleEdit, setConfirmDialog} : FoodOptionComponentProps) => {
  const showDialog = () => {
    setVisibleEdit(true);
  }
  const showDeleteMessage = () => {
    setConfirmDialog(true);
  }
  return (
    <>
      <MenuOption onSelect={() => alert(`Save`)} text="Confimar comida"/>
      <MenuOption onSelect={() => showDialog()} text="Editar" />
      <MenuOption onSelect={() => showDeleteMessage()} text="Eliminar" />
      
    </>
  );
};
