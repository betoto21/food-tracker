import React from 'react'
import { Card, Text } from 'react-native-paper'
import { globalStyles } from '../theme/theme'

interface Props{
    title: string,
    description: string,
    component: any
}

export const HomeOptionComponent = (props: Props) => {
  return (
    <>
      <Card style={globalStyles.card} >
        <Card.Content>
          <Text variant="titleLarge">{props.title}</Text>
          <Text variant="bodyMedium">{props.description}</Text>
        </Card.Content>
      </Card>
    </>
  );
}
