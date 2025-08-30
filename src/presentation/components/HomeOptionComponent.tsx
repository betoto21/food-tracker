import React from 'react';
import { Card, Text, useTheme } from 'react-native-paper';
import { StyleSheet } from 'react-native';

interface Props {
  title: string;
  description: string;
  component: any;
}

export const HomeOptionComponent = (props: Props) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
    card: {
      backgroundColor: theme.colors.primaryContainer,
      width: '95%',
      marginLeft: 'auto',
      marginRight: 'auto',
      marginTop: '4%',
    },
  });
  return (
    <>
      <Card style={styles.card}>
        <Card.Content>
          <Text variant="titleLarge">{props.title}</Text>
          <Text variant="bodyMedium">{props.description}</Text>
        </Card.Content>
      </Card>
    </>
  );
};
