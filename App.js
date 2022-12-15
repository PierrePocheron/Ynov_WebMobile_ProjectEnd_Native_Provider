import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import Login from './Login';
import Register from './Register';


export default function App() {
  return (
    <NativeRouter>
      <View style={styles.container}>
        <View style={styles.nav}>
          <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Home</Text>
          </Link>
          <Link to="/login" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Login</Text>
          </Link>
          <Link to="/register" underlayColor="#f0f4f7" style={styles.navItem}>
            <Text>Register</Text>
          </Link>

          <Route exact path="/" component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </View>
      </View>
    </NativeRouter>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
