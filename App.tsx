/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Button,
  TouchableWithoutFeedback,
  FlatList,
  InputAccessoryView,
} from 'react-native';
import CheckBox from './src/checkbox';


const App = () => {

  //types

  // todo type
  type Todo = {
    id: number;
    task: string;
    completed: boolean;
  };

  // usestate
  const [todos, setTodos] = useState<Todo[]>([]);
  const [onchangeText, setOnChangeText] = useState('')


  //todoリストに追加していく。
  const handleSubmit = (inputvalue: string) => {
    console.log('submit');

    const newTodo: Todo = {
      id: todos.length,
      task: inputvalue,
      completed: false
    };

    setTodos([newTodo, ...todos]);
    console.log(todos);
    setOnChangeText('');
  }


  // ダミーデータ
  const DDD: Todo = {
    id: 1,
    task: 'aaa',
    completed: false
  }


  // components
  const TodoItem = ({ todo }) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <CheckBox />
        <TextInput
          value={todo.task}
          style={{ padding: 20, }}
          onSubmitEditing={(e) => console.log('press')}
        />
        <View
          style={{ padding: 20, backgroundColor: 'red', width: 20, height: 20 }}
        />
      </View>
    );
  };


  return (
    <View>
      <SafeAreaView style={[styles.Container, { width: '100%', height: '95%' }]}>
        <StatusBar />
        <ScrollView>
          {
            todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          }
        </ScrollView>
      </SafeAreaView>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{
          position: 'absolute',
          bottom: 20,
          width: '100%',
          paddingBottom: 50,
          paddingLeft: 30,
          backgroundColor: 'white'
        }}
      >
        <TextInput
          placeholder='input'
          onChangeText={setOnChangeText}
          value={onchangeText}
          style={{ padding: 20 }}
          onSubmitEditing={(inputvalue) => handleSubmit(inputvalue.nativeEvent.text)}
        />
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    marginTop: 50,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
