import React, {useState} from 'react';

import { FlatList } from 'react-native';
import data from './data'
import NotificationItem  from './item';



export default function NotificationList() {
 
    const [clicked,setClick] = useState('');

    const onClick = (key) =>{
        if(!clicked.includes(key)){
         setClick(clicked + key)
        }
    }
    return(

        <FlatList
            data= {data}
            renderItem = {({item, index}) =>  <NotificationItem item = {item}
            onPress={() => {onClick(item.key)}}
            bgColor = {clicked.includes(item.key) ? '#fff' : '#d3f3de'} index = {item.key} />
            
        }
            
        />

        
    )
};
