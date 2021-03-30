import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../Component/Search';
import FilmDetail from '../Component/FilmDetail'

const Stack = createStackNavigator()

function SearchStackNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Search"
                    component={Search}
                    options={{ title: 'Rechercher' }}
                />
                <Stack.Screen 
                    name="FilmDetail"
                    component={FilmDetail}
                    options={{ title: 'Détails du film' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default SearchStackNavigator;