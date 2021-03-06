import React from "react";
import {createStackNavigator} from '@react-navigation/stack'

import Home from "../pages/home";

const Stack = createStackNavigator();

function stackRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
            name="Home" 
            component={Home}
            options={{
                headerShown: false
            }}
            />
        </Stack.Navigator>
    )
}

export default stackRoutes;