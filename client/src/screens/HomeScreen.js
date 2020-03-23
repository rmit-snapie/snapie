import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {navigateTo, pushTo} from './navigate';

const CreatePost = ({navigation}) => {
  const [postText, setPostText] = useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={styles.textInput}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          navigateTo(navigation, 'Home Screen', {post: postText});
        }}
      />
    </>
  );
};

const HomeScreen = ({navigation, route: {params}}) => {
  useEffect(() => {
    console.log('use effect called');
    if (params?.post) {
      console.log('Hello world!');
    }
  }, [params]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is home screen</Text>
      <Button
        title="Create new post"
        onPress={() => navigateTo(navigation, 'Create Post Screen')}
      />
      <Text style={styles.text1}>Post: {params?.post} </Text>
      <View style={styles.buttonsWrapper}>
        <Button
          title="Go to loading screen"
          onPress={() => navigateTo(navigation, 'Loading Screen')}
        />
        <Button
          title="Go to details screen"
          onPress={() =>
            navigateTo(navigation, 'Details Screen', {someProps: 'some props'})
          }
        />
        <Button
          title="Push to loading screen"
          onPress={() => pushTo(navigation, 'Loading Screen')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonsWrapper: {
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
  textInput: {
    height: 200,
    padding: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 20,
  },
  text1: {
    margin: 10,
  },
});

export {HomeScreen, CreatePost};
