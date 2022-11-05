import React, {useContext} from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {

    const blogPosts = useContext(BlogContext);

    return (

        <View>
            <Text>Index Screen</Text>
            <FlatList 
                data={blogPosts}
                keyExtractor={(x) => x.title} 
                renderItem={({ item }) => {
                    return (
                        <Text>
                            {item.title}
                        </Text>
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({});

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