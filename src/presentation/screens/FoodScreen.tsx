import React, { useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FAB, useTheme } from 'react-native-paper';
import { FoodDialog } from '../components/FoodDialog';
import { StyleSheet } from 'react-native';
import { FoodListComponent } from '../components/FoodListComponent';

const Tab = createMaterialTopTabNavigator();

export const FoodScreen = () => {
  const [visible, setVisible] = useState(false);
  const [refreshScreen, setRefreshScreen] = useState(false)
  const theme = useTheme();
  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.colors.primaryContainer,
      width: 420,
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 20,
    },
    floatinButton: {
      position: 'absolute',
      margin: 16,
      right: 6,
      bottom: 6,
      backgroundColor: theme.colors.onPrimaryContainer,
    },
  });

  const showDialog = () => {
    setVisible(true);
  };

  return (
    <>
      <Tab.Navigator
      style={{ flex: 1 }}
        screenOptions={{
          tabBarLabelStyle: { fontSize: 16 },
          tabBarIndicatorStyle: { backgroundColor: theme.colors.primary },
          tabBarActiveTintColor: theme.colors.primary,
          tabBarInactiveTintColor: theme.colors.onSurfaceVariant,
          tabBarStyle: {
            backgroundColor: theme.colors.background,
            borderBottomColor: theme.colors.primaryContainer,
            borderBottomWidth: 1,
          },
        }}
      >
        <Tab.Screen name="Desayunos">
          {() => <FoodListComponent foodType={1} refresh={refreshScreen} setRefresh={setRefreshScreen}/>}
          
        </Tab.Screen>
        <Tab.Screen name="Comidas">
          {() => <FoodListComponent foodType={2} refresh={refreshScreen} setRefresh={setRefreshScreen}/>}
        </Tab.Screen>
        <Tab.Screen name="Cenas">
          {() => <FoodListComponent foodType={3} refresh={refreshScreen} setRefresh={setRefreshScreen}/>}
        </Tab.Screen>
      </Tab.Navigator>
      <FAB
        icon="plus"
        style={styles.floatinButton}
        color={theme.colors.onPrimary}
        onPress={showDialog}
      />

      <FoodDialog setVisible={setVisible} visible={visible} isEditing={false} onSubmit={setRefreshScreen}/>
    </>
  );
};
