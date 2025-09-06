import React from 'react'
import { Button, Dialog, Portal, Text } from 'react-native-paper'

interface ConfirmDialogProps {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  onConfirm: () => void;
}
export const ConfirmDialog = ({visible, setVisible, onConfirm} : ConfirmDialogProps) => {
    const hideDialog = () => {
        onConfirm()
        setVisible(false)
    };
    
  return (
    <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>
            Confirmar
          </Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium" style={{ marginBottom: 10}}>¿Esta seguro que quiere continuar?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => hideDialog()} >
              Aceptar
            </Button>
            <Button onPress={hideDialog}>
             Cancelar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
  )
}
