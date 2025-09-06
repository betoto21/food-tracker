import React, { useState } from 'react';
import { Card, IconButton, Text, useTheme } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Menu, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { FoodOptionComponent } from './FoodOptionComponent';
import { FoodModel } from '../../domain/models/FoodModel';
import { FoodDialog } from './FoodDialog';

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
  const [visible, setVisible] = useState(false);
  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.colors.primaryContainer,
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '5%',
    },
    headerRow: {
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
                <IconButton icon="dots-vertical" size={20} />
              </MenuTrigger>
              <MenuOptions customStyles={{ optionsContainer: styles.menu }}>
                <FoodOptionComponent setVisibleEdit={setVisible} />
              </MenuOptions>
            </Menu>
          </View>
          <Text variant="bodyMedium">{description}</Text>
        </Card.Content>
      </Card>
      <FoodDialog
        setVisible={setVisible}
        visible={visible}
        isEditing={true}
        food={food}
        onSubmit={setRefresh}
      />
    </View>
  );
};
