import React, { useState } from 'react'
import { Card, IconButton, Text } from 'react-native-paper'
import { globalStyles } from '../theme/theme';
import { View } from 'react-native';
import { Menu, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import { FoodOptionComponent } from './FoodOptionComponent';
import { FoodModel } from '../../domain/models/FoodModel';
import { FoodDialog } from './FoodDialog';

interface FoodCardComponentProps {
  id: number;
  title: string;
  description: string;
  type: number;
}
export const FoodCardComponent = ( {id, title, description, type} : FoodCardComponentProps) => {
  const food: FoodModel ={
    id,
    name: title,
    description,
    type
  }
  const [visible, setVisible] = useState(false);
   return (
     <View>
       <Card style={globalStyles.card}>
         <Card.Content>
           <View style={globalStyles.headerRow}>
             <Text variant="titleLarge" style={globalStyles.titleText}>
               {title}
             </Text>
             <Menu>
               <MenuTrigger>
                 <IconButton icon="dots-vertical" size={20} />
               </MenuTrigger>
               <MenuOptions
                 customStyles={{ optionsContainer: globalStyles.menu }}
               >
                 <FoodOptionComponent setVisibleEdit={setVisible}/>
               </MenuOptions>
             </Menu>
           </View>
           <Text variant="bodyMedium">{description}</Text>
         </Card.Content>
       </Card>
       <FoodDialog setVisible={setVisible}  visible= {visible} isEditing={true} food={food}/>
     </View>
   );
}


