import React from 'react'
import { View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { globalStyles } from '../theme/theme'

export const NoHistoryComponent = () => {
  return (
    <View >
       <Card style={globalStyles.cardHistory}>
         <Card.Content>
           <View style={globalStyles.headerRow}>
             <Text variant="titleLarge" style={{ fontWeight: 'bold', marginBottom: 10 }}>
               No hay historial para esta fecha
             </Text>
           </View>
         </Card.Content>
       </Card>
     </View>
  )
}

