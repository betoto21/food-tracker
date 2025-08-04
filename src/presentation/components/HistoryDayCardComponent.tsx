import React from 'react'
import { View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import { globalStyles } from '../theme/theme'

interface HistoryDayProps {
  foodType: string;
  tittle: string;
  description: string;
}
export const HistoryDayCardComponent = ({foodType, tittle, description} : HistoryDayProps) => {
 return (
    <View>
       <Card style={globalStyles.cardHistory}>
        <Card.Title title={foodType} titleStyle={{ fontWeight: 'bold', fontSize: 16}} />
         <Card.Content>
           <View style={globalStyles.headerRow}>
             <Text variant="titleLarge" style={{ fontWeight: 'bold', marginBottom: 10 }}>
               {tittle}
             </Text>
           </View>
           <Text variant="bodyMedium">{description}</Text>
         </Card.Content>
       </Card>
     </View>
  )
}
