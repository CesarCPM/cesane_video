import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import stackRoutes from "./stackRoutes";
import Movies from '../pages/movies';

const Drawer = createDrawerNavigator();

function Routes(){
    return(
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                drawerStyle:{
                    backgroundColor: '#0F1016',
                    paddingTop: 20
                },

                drawerActiveBackgroundColor: '#E72F49',
                drawerActiveTintColor: '#FFF',
                drawerInactiveTintColor: '#FFF'
            }}
        
        >
            <Drawer.Screen
             name="HomeDrawer" 
             component={stackRoutes}
             options={{
                 title: 'Início',
                drawerIcon: ({focused, size, color}) => (
                    <MaterialCommunityIcons
                    name={focused ? 'home' : 'home-outline'}
                    size={size} 
                    color={color} />
                )
             }}
             />
            <Drawer.Screen 
            name="Movies" 
            component={Movies}
            options={{
                title: 'Filmes',
                drawerIcon: ({focused, size,color}) => (
                    <MaterialCommunityIcons  
                    name={focused ? 'archive' : 'archive-outline'}
                    size={size}
                    color={color} />
                )
            }}
             />
        </Drawer.Navigator>
    )
}

export default Routes;