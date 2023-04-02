### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

    React is a user interface library built on top of Javascript. It breaks pieces of HTML into reusable pieces called components. You can use it to build stylish, customizable, interactive user interfaces for your applications.

- What is Babel?

    Babel is a Javascript compiler that can translate Javascript in your code into Javascript that is valid in various enviornments.  

- What is JSX?

    JSX is a syntax extension that allows you to configure  U.I. in React using HTML-like React elements.

- How is a Component created in React?

    A component is created in its individual sheet where the its logic and arguments (props) are defined. It is then exported and rendered (along with any coinciding children components) into valid JSX in another script and the DOM is updated to reflect the changes instille by the react component.

- What are some difference between state and props?

    The primary difference between state and props is that state is mutuable based on user action and props are immutable information passed among various components.

- What does "downward data flow" refer to in React?

    Downward data flow refers to the passage of information from parent to child in React components.

- What is a controlled component?

    A controlled components derives its value via activity and input from the state of the component.

- What is an uncontrolled component?

    An uncontrolled component is one that derives its value via properties. Any changes in state are managed via parent components. 

- What is the purpose of the `key` prop when rendering a list of components?

    A key prop creates a realationship between the DOM and that individual component to determine whether the component should be rerendered.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?

    If the order of that component is modified and the index is changed, React will not be able to associate that particular component with its affiliated key.

- Describe useEffect.  What use cases is it used for in React components?

    Anytime you want to mutate a component after the DOM has rendered. If you wanted to fetch some data, directly change the DOM, or use a timer, you would want to use useEffect.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

    The hook useRef allows you to access a value that will persist accross component renders. You can mutate this value without rerendering the rest of the component.

- When would you use a ref? When wouldn't you use one?
  
    Refs can be used in rare cases where you want to directly manipulate the DOM of a child component. A use case might be you want to interact with some text (zoom/highlight) or trigger some animation. In most cases you would not want to use them and instead use what is customary of React logic: a parent component to control the state of a child component.

- What is a custom hook in React? When would you want to write one?

    A custom hook allows you to take component logic and re-use it across an application. It can be used to introduce custom functionality that does not exist in any third-party libraries that your app may need.