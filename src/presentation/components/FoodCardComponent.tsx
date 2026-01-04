import React, { useState } from 'react';
import { Card, IconButton, Text, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Menu, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { FoodOptionComponent } from './FoodOptionComponent';
import { FoodModel } from '../../domain/models/FoodModel';
import { FoodDialog } from './FoodDialog';
import { ConfirmDialog } from './ConfirmDialog';
import { DeleteFoodUseCase } from '../../domain/use-cases/FoodsUseCases';
import { addHistory } from '../../domain/use-cases/HistoryUseCases';

interface FoodCardComponentProps {
  id: number;
  title: string;
  description: string;
  type: number;
  setRefresh: (refresh: boolean) => void;
}
export const FoodCardComponent = ({
  id,
  title,
  description,
  type,
  setRefresh,
}: FoodCardComponentProps) => {
  const theme = useTheme();
  const food: FoodModel = {
    id,
    name: title,
    description,
    type,
  };
  const [visibleFoodDialog, setVisibleFoodDialog] = useState(false);
  const [visibleConfirmDialog, setVisibleConfirmDialog] = useState(false);
  const [visibleConfirmFood, setVisibleConfirmFood] = useState(false);
  const deleteFood = async () => {
    const obj = {
      id,
      name: title,
      description,
      type,
    };
    await DeleteFoodUseCase(obj);
    setRefresh(true);
  };
  const confirmFood = async () => {
    const obj = {
      id,
      name: title,
      description,
      type,
    };
    await addHistory(obj);
  };
  const styles = StyleSheet.create({
    card: {
      flex: 1,
      backgroundColor: theme.colors.primaryContainer,
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 16,
    },
    headerRow: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    titleText: {},
    menu: {
      backgroundColor: '#F3EDF7',
    },
  });
  return (
    <View>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.headerRow}>
            <Text variant="titleLarge" style={styles.titleText}>
              {title}
            </Text>
            <Menu>
              <MenuTrigger>
                <IconButton icon="dots-vertical" size={24} />
              </MenuTrigger>
              <MenuOptions customStyles={{ optionsContainer: styles.menu }}>
                <FoodOptionComponent
                  setVisibleEdit={setVisibleFoodDialog}
                  setConfirmDialog={setVisibleConfirmDialog}
                  onConfirmFood={setVisibleConfirmFood}
                />
              </MenuOptions>
            </Menu>
          </View>
          <Text variant="bodyMedium">{description}</Text>
        </Card.Content>
      </Card>

      <FoodDialog
        setVisible={setVisibleFoodDialog}
        visible={visibleFoodDialog}
        isEditing={true}
        food={food}
        onSubmit={setRefresh}
      />
      <ConfirmDialog
        setVisible={setVisibleConfirmFood}
        visible={visibleConfirmFood}
        onConfirm={confirmFood}
      />
      <ConfirmDialog
        setVisible={setVisibleConfirmDialog}
        visible={visibleConfirmDialog}
        onConfirm={deleteFood}
      />
    </View>
  );
};
