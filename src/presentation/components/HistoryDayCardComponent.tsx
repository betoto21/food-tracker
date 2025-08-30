import { StyleSheet, View } from 'react-native'
import { Card, Text, useTheme } from 'react-native-paper'

interface HistoryDayProps {
  foodType: string;
  tittle: string;
  description: string;
}
export const HistoryDayCardComponent = ({foodType, tittle, description} : HistoryDayProps) => {
  const theme = useTheme();
  const styles = StyleSheet.create({
     cardHistory: {
        backgroundColor: theme.colors.secondaryContainer,
        width: '95%',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '3%',
        marginTop: '4%',
      },
      headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    
  })
 return (
    <View>
       <Card style={styles.cardHistory}>
        <Card.Title title={foodType} titleStyle={{ fontWeight: 'bold', fontSize: 16}} />
         <Card.Content>
           <View style={styles.headerRow}>
             <Text variant="titleLarge" style={{ fontWeight: 'bold', marginBottom: '5%' }}>
               {tittle}
             </Text>
           </View>
           <Text variant="bodyMedium">{description}</Text>
         </Card.Content>
       </Card>
     </View>
  )
}
