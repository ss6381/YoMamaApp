import { StatusBar, StyleSheet, Text, View } from 'react-native';
import CircleButton from './components/CircleButton';
import BackButton from './components/BackButton';
import { useState } from 'react';
import Joke from './components/Joke';


export default function App() {
  const [showJoke, setShowJoke] = useState(false);

  const handleOnClick = () => {
    setShowJoke(!showJoke);
  };

  return (
    <>
      {showJoke ? (
        <View style={styles.container}>
          <BackButton onClick={handleOnClick} />
          <Joke />
        </View>
      ) : (
        <View style={styles.container}>
          <CircleButton onClick={handleOnClick} title="Yo Mama!" />
        </View>
      )}
      <StatusBar barStyle={"light-content"} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
