import createDataContext from "./createDataContext";

const blogReducer = (state, action) => {

    switch(action.type) {

        case "delete_blogpost":

            return state.filter(blogPost => blogPost.id !== action.payload);

        case "add_blogpost":

            return(
                    [
                        ...state, 

                        {
                            id: Math.floor(Math.random() * 99999),

                            title: `Blog Post #${state.length + 1}`
                        }
                    ]
            )

        default:
            return state;
    }
};

const addBlogPost = (dispatch) => {

    return () => {
        dispatch({type: "add_BlogPost"});
    }

};

const deleteBlogPost = dispatch => {
    
    return (id) => {
        dispatch({type: "delete_blogpost", payload: id})
    };

}

export const {Context, Provider} = createDataContext(
    
    blogReducer, 
    {addBlogPost, deleteBlogPost},
    []
);



// If we were to send some information from the top level component to 
// a nested child component at a very low level then we are going to 
// assign a prop containing that information to our BlogContext component.
// In this case we need to send the "value" to the nested child component
// thus we are assigning the prop "value" to the BlogContext component. 

// This means we want to share the blogPosts array from the parent component
// (BlogContext) at the top with some deeply nested child component
// way at the  bottom. So, now any of our child components 
// (any components below the parent component) can add in a little bit  
// of code that is going to essentially reach back upto that provider  
// and extract that value prop. 

// We need to decide which component inside our application need to have
// access to that piece of information. In this case we only have one 
// appropriate component and that is the IndexScreen component. 

// Now, we will open up the IndexScreen.js file and we will make 
// sure that IndexScreen component has access to the piece of 
// information in there. 