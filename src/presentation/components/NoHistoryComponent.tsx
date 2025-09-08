import React from 'react'
import { RefreshControl, ScrollView, StyleSheet, View } from 'react-native'
import { Card, Text, useTheme } from 'react-native-paper'

interface HistoryDayProps {
  refresh: boolean;
  setRefresh: (refresh: boolean) => void;
}
export const NoHistoryComponent = ({refresh, setRefresh} : HistoryDayProps) => {
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
    <ScrollView 
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={() => setRefresh(true)}
              colors={[theme.colors.primary]}
              tintColor={theme.colors.primary}
            />
          }>
       <Card style={styles.cardHistory}>
         <Card.Content>
           <View style={styles.headerRow}>
             <Text variant="titleLarge" style={{ fontWeight: 'bold', marginBottom: 10 }}>
               No hay historial para esta fecha
             </Text>
           </View>
         </Card.Content>
       </Card>
     </ScrollView>
  )
}

