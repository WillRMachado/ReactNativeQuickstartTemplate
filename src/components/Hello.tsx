import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  decrement,
  increment,
  asyncIncrement,
} from '../store/counter/counter.store';

// import { Container } from './styles';

const Hello: React.FunctionComponent = () => {
  const sel = useSelector((state: any) => state.store);

  const dispatch = useDispatch();

  return (
    <View>
      <Text testID="myTestId">{sel?.counter}</Text>
      <TouchableOpacity
        onPress={() => {
          dispatch(increment(5));
        }}>
        <Text>plus</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          dispatch(asyncIncrement(1));
        }}>
        <Text>plus async</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{borderWidth: 1}}
        onPress={() => {
          dispatch(decrement());
        }}>
        <Text>minus</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Hello;
