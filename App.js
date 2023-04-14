import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { Button,TextInput } from 'react-native-paper';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={LoginScreen} options={{title:'Inicio'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function LoginScreen({navigation}){
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  });
  return(
    <View style={styles.container}>
       <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Usuario"
            onBlur={onBlur}
            mode='outlined'
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            label="Contraseña"
            onBlur={onBlur}
            
            mode='outlined'
            onChangeText={onChange}
            value={value}
          />
        )}
        name="firstName"
      />
      {errors.firstName && <Text>This is required.</Text>}

      <Button
      style={{marginTop:15}}
      icon="send"
      mode='contained'
      onPress={() =>{
      navigation.navigate('Usuario')
      }}

      >Ingresar</Button>
       </View>
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
