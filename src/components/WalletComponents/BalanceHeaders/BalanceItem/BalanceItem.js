
import React from 'react';
import { View} from 'react-native';
import BalanceHeader from '../BalanceHeader';
import PicPayCardHeader from '../PicPayCardHeader'


export default function BalanceItem({item}) {
    
    
    
  return (
      <View>
          {item.title == 'Balance' ? <BalanceHeader/> : <PicPayCardHeader/> }
       </View>
  )
}


