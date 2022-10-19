import React from 'react';
import './blog.css'

const Blog = () => {
    return (
        <div className='blog'>
            <div>
                <ul> <li> <h4>What is the purpose of react router?</h4></li> </ul>

                <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL. Let us create a simple application to React to understand how the React Router works.</p>
            </div>

            <div>
                <ul> <li> <h4>How does context api work?</h4></li></ul>

                <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.</p>
            </div>

            <div>
            <ul> <li> <h4>what is useRef Hook?</h4></li></ul>
                <p>
                The useRef Hook allows you to persist values between renders. It can be used to store a mutable value that does not cause a re-render when updated. It can be used to access a DOM element directly.
                To create a ref in a functional component we use the useRef() hook which returns a mutable object with a . current property set to the initialValue we passed to the hook. This returned object will persist for the full lifetime of the component. </p>
            </div>

        </div>
    );
};

export default Blog;