import React from 'react'
import { HomeScreen } from '../screens/HomeScreen';
import { FoodScreen } from '../screens/FoodScreen';
import { HistoryScreen } from '../screens/HistoryScreen';
import { Appbar, BottomNavigation, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';


export const BottomTab = () => {
  const theme = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Inicio', focusedIcon: 'home' },
    { key: 'foods', title: 'Comidas', focusedIcon: 'silverware-fork-knife' },
    { key: 'history', title: 'Historial', focusedIcon: 'history' },
  ]);
  const style = StyleSheet.create({
    topBar: {
      textAlign: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
    }})
  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    foods: FoodScreen,
    history: HistoryScreen,
  });

  return (
    <>
      <Appbar.Header style={style.topBar}>
        <Appbar.Content title={routes[index].title} color={theme.colors.onPrimary}/>
      </Appbar.Header>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        style={{ flex: 1}}
      />
    </>
  );
}

