import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Card, Text, useTheme } from 'react-native-paper';

export const NoFoodComponent = () => {
  const theme = useTheme();
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
  });
  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
    }}>
      <Card style={styles.card}>
        <Card.Content>
          <View style={styles.headerRow}>
            <Text variant="titleLarge" >
              No hay comidas disponibles
            </Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}
