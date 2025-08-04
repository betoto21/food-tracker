import React, { useEffect, useState } from 'react'
import { Button, Dialog, Portal, RadioButton, Text, TextInput } from 'react-native-paper'
import { FoodModel } from '../../domain/models/FoodModel';
import { View } from 'react-native';

interface FoodDialogProps {
    visible: boolean;
    setVisible: (visible: boolean) => void;
    isEditing: boolean;
    food? : FoodModel;
}
export const FoodDialog = ({ visible, setVisible, isEditing, food }: FoodDialogProps) => {
  const hideDialog = () => setVisible(false);
  const [nombre, setNombre] = useState(isEditing ? food?.name : '');
  const [descripcion, setDescripcion] = useState(
    isEditing ? food?.description : '',
  );
  const [foodType, setFoodType] = useState(isEditing ? food?.type : 0);
  const [checked, setChecked] = React.useState(0);

  useEffect(() => {
    if (isEditing && food) {
      setNombre(food.name);
      setDescripcion(food.description);
      setFoodType(food.type);
      setChecked(food.type);
    }
  },[food, isEditing]);

  return (
    <>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>
            {isEditing ? 'Editar' : 'Agregar nueva'} comida
          </Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium" style={{ marginBottom: 10}}>Nombre de la comida:</Text>
            <TextInput
              label="Ingrese el nombre de la comida"
              value={nombre}
              onChangeText={text => setNombre(text)}
              style={{ marginBottom: 10}}
            />
            <Text variant="bodyMedium"  style={{ marginBottom: 10}}>Descripcion de la comida</Text>
            <TextInput
              label="Ingrese la descripcion de la comida"
              value={descripcion}
              onChangeText={text => setDescripcion(text)}
              style={{ marginBottom: 10}}
            />
            <Text variant="bodyMedium" style={{ marginBottom: 10}}>Seleccione el tipo de comida</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton
                value="0"
                status={checked === 1 ? 'checked' : 'unchecked'}
                onPress={() => setChecked(1)}
              />
              <Text  variant="bodyMedium">Desayuno</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton
                value="0"
                status={checked === 2 ? 'checked' : 'unchecked'}
                onPress={() => setChecked(2)}
              />
              <Text  variant="bodyMedium">Comida</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton
                value="0"
                status={checked === 3 ? 'checked' : 'unchecked'}
                onPress={() => setChecked(3)}
              />
              <Text  variant="bodyMedium">Cena</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <RadioButton
                value="0"
                status={checked === 4 ? 'checked' : 'unchecked'}
                onPress={() => setChecked(4)}
              />
              <Text  variant="bodyMedium">Fuera de la dieta</Text>
            </View>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>
              {isEditing ? 'Guardar' : 'Agregar'}
            </Button>
            <Button onPress={hideDialog}>
             Cancelar
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </>
  );
};
