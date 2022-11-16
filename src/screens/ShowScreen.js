import React, { useContext } from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import { Context } from "../context/BlogContext";
import { EvilIcons } from "@expo/vector-icons";

const ShowScreen = ({navigation}) => {

    const { state } = useContext(Context);

    // If the ID that was provided in to the screen is equal to the blogpost ID then we have 
    // found our blogpost, lets assign it to the "blogpost" variable and now we can show it on 
    // screen 
    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam("id"));

    return(
            <View>
                <Text>{blogPost.title}</Text> {/* Here we are displaying the blogpost which we found by its ID above */}
                <Text>{blogPost.content}</Text>
            </View>
    )
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Edit")}>
            <EvilIcons name="pencil" size={35} />
          </TouchableOpacity>
        ),
    };
}

const styles = StyleSheet.create({});

export default ShowScreen;