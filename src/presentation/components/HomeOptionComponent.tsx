import React from 'react';
import { Card, Text, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../routes/navigation/types';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
interface Props {
  title: string;
  description: string;
  component: any;
  url: string;
}

export const HomeOptionComponent = (props: Props) => {
  const theme = useTheme();
  const navigation =
    useNavigation<BottomTabNavigationProp<RootStackParamList>>();
  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.colors.primaryContainer,
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: 16,
    },
  });
  const redirect = () => {
    navigation.navigate(props.url as keyof RootStackParamList);
  };
  return (
    <>
      <Card style={styles.card} onPress={redirect}>
        <Card.Content>
          <Text variant="titleLarge">{props.title}</Text>
          <Text variant="bodyMedium">{props.description}</Text>
        </Card.Content>
      </Card>
    </>
  );
};
