import React, {useContext} from "react";
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from "react-native";
import {Context} from "../context/BlogContext";
import {Feather} from "@expo/vector-icons";

const IndexScreen = () => {

    const {data, addBlogPost, deleteBlogPost} = useContext(Context);

    return (

        <View>
            <Button title="Add Post" onPress={addBlogPost} />
            <FlatList 
                data={data}
                keyExtractor={(x) => x.title} 
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <Text style={styles.title}>
                                {item.title} - {item.id}
                            </Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather style={styles.icon} name="trash" />
                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: "gray"
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});

export default IndexScreen;


// We need this component to have access to the information in the BlogProvider
// component. That is why we are importing the BlogContext component in this 
// file. 

// To make a use of this context we need to import another hook function 
// from the React library. Remember hooks are functions those provide 
// additional functionality to a function component. 

// So, we are importing the hook function called "useContext". This is 
// essentially a function which is going to say that ok look at the 
// Context component and provide us access to the prop assigned to 
// that component. 

// To make use of BlogContext and useContext() together we are added
// in a new variable declaration inside of the IndexScreen component
// called "blogPosts" assigned to the useContext() hook which takes the 
// BlogContext component as an argument. 

// Now, the value of the blogPosts variable is going to be exactly 
// the value that we assigned in the BlogContext component at 
// the BlogContext.js file. 

// This is how the IndexScreen component has access to the information
// assigned at the parent component. This is how any child component can
// get access to information from the parent component. 