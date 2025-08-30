import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Card, Text, useTheme } from 'react-native-paper'

export const NoHistoryComponent = () => {
  const theme = useTheme();
    const styles = StyleSheet.create({
       cardHistory: {
          backgroundColor: theme.colors.secondaryContainer,
          width: 420,
          marginLeft: 'auto',
          marginRight: 'auto',
          padding: 30,
          marginTop: 10,
        },
        headerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      
    })
  return (
    <View >
       <Card style={styles.cardHistory}>
         <Card.Content>
           <View style={styles.headerRow}>
             <Text variant="titleLarge" style={{ fontWeight: 'bold', marginBottom: 10 }}>
               No hay historial para esta fecha
             </Text>
           </View>
         </Card.Content>
       </Card>
     </View>
  )
}

