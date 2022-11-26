# HungerWarning

<h3>Overview<h3>
Hunger Warning is an application which will provide a place to order a variety of cuisines.<br/>

<br/>

<h3>Concepts Used</h3>

- Figma files and assets usage
- Relative path vs Absolute path and their usage

- Internal StyleSheets
- ScaledSheet is a react native component preset in [Library](https://github.com/nirsky/react-native-size-matters), take the same stylesObject a regular StyleSheet will take, plus a special (optional) annotation that will automatically apply the scale functions used to scale the App UIs accross different devices.
- Image containers: faced a scenario in which whenever I was removing the borderWidth of the image, Image was stretchng from the left end. Resolved this by surrounding it in a View.<br/>
- [Layout with flex-box](https://reactnative.dev/docs/flexbox): align-self; justifyContent; flexDirection
- Adding custom fonts: downloaded the respective font family, included in assets.<br/>Created react-native.config.js file to allows us to set up different configuration files for different environments.
- Margins to align elements verticaly and horizontaly.

- [TouchableOpacity](https://reactnative.dev/docs/touchablehighlight), [TouchableHighlight](https://reactnative.dev/docs/touchableopacity) and it's difference with [Pressable](https://reactnative.dev/docs/pressable).
- resizeMode: Prop of Image view which determines how to resize the image when the frame doesn't match the raw image dimensions. <br/>Values accepted:{ cover,contain, stretch,repeat,center}
- Image path using source and require, URI as well

* zIndex: specifies the stack order of elements(an element with greater stack order will keep in front of the element which have lower stack order
* [Stack Navigation](https://reactnavigation.org/docs/stack-navigator/): To move from 1 screen to another by passing the props to the child components
* [Tab Navigation nested inside Stack Navigation](https://reactnavigation.org/docs/nesting-navigators/) to provide tabs on a particular screen for further navigation.<br/>
  Transparent tab navigator contains only icons as tabs without label and color changes for the active screen

* Added forgot password link using Linking.openURL: [Linking](https://reactnative.dev/docs/linking) is a react native Library which lets you open the URL with any of the installed app
* Implemented the Login, Signup, Signout feature using [firebase authentication](https://rnfirebase.io/auth/usage)
* Separate tabs for login and signup section build using useState hook which changes the button label if the state is set to login.<br/>
  A separate authentication method gets called for login and
  sign up whenever user click on the button.
* If a user is logged in, the Main Screen will be visible which includes a list of food items <br/>
  While, if the user is signed out then the Get Started screen will be opened. This has been achieved using the onAuthStateChanged(), it checks the userState and if the userState hasn't changed then set that user otherwise return null. If the user is returned then, redirect to Main Screen else, redirects to Get Started Screen
* Data which is visible in the food menu is getting fetched from the API using GET method.
* [Networking](https://reactnative.dev/docs/network): fetched data from the API to load it inside the app
* Search feature(user can searh for the food item): Response fetched from API got converted into json and then that data have been filtered using .filter() which only works on array and returns the result which is satisfying the function criteria.<br/>
  .map() is also used with .filter to return the values in an array format where the first parameter is the value and the second parameter returs the index where the value resides
* We need the data from API as soon as the app renders, so we kept this function inside the useEffect() hook<br/>
  Similarly, when the user needs to be checked if it's logged in or not, that function as well is inside useEffect()

* Add new line in jsx - {'\n\n'}

<h3>Errors/Warnings

- Unable to Load Script. Make sure you're either running Metro('run npx react-native start') or that your bundle 'index.android.bundle' is packaged correctly for release

  > Unable to Load Script. Make sure you're either running Metro('run npx react-native start') or that your bundle 'index.android.bundle' is packaged correctly for release

- SyntaxError: /home/saurav/reactNative_Projects/HungerWarning/App.js: Private names are only allowed in property accesses (`obj.#FF4B3A`) or in `in` expressions (`#FF4B3A in obj`).

  > Installed the extension color heighlight in VSCode

- The action 'NAVIGATE' with payload {"name":"loginSignUp"} was not handled by any navigator.
  > Screen name was defined different and the screen name which was getting refered had different screen name

* Got a component with the name 'loginSignUp' for the screen 'LogIn'. React Components must start with an uppercase letter. If you're passing a regular function and not a component, pass it as children to 'Screen' instead. Otherwise capitalize your component's name.
  > All the screen components should start with uppercase

- source={require('./assets/images/animeLady.png')}
  | ^
  > Folders for the files have been changed due to which the parent directory of the referred asset have also been changed.

* <b>Error:</b> Got an invalid value for 'component' prop for the screen 'MainScreen'. It must be a valid React Component.

  > export default appname was missing

* <b>Error:</b> Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:<br/>
  You might have mismatching versions of React and the renderer (such as React DOM)<br/>
  You might be breaking the Rules of Hooks
  <br/>You might have more than one copy of React in the same app

  >     Here I declared the state variable outside the function component and was setting the value in a component and using it in different component. So, I resolved it by creating the state valriable in one function component and passed it to another component as a prop.

<br/>
<br/>
<h3>Learnings</h3>

- Button from React Native [library](https://reactnative.dev/docs/button) is not much customizable so, we use either pressable or touchable
- Avoid using absolute: position - It's rigid and make it difficult to write layouts that respond well to changing content
- One needs to link the assets to the project by running the command: "$ npx react-native-asset" as it automatically install native dependencies related to assets.

* To improve code readability by giving meaningful names to styleSheets

* Stack Navigator and it dependencies Installation: don't copy dependencies from other projects and do it fresh in the current project

* [KeyboardAwareScrollView](https://blog.logrocket.com/keyboardawarescrollview-keyboardavoidingview-react-native/): used to avoid the overlapping of the input elements due to keyboard. It let us to scroll over the whole screen and focus on the element you are working.

* Simplify the code as much as possible , it improves readability and easy to understand.
* Overriden the default style of the [ScrollView](https://reactnative.dev/docs/scrollview) by giving custom styling via contentContainerStyle which wraps all the child elements
* Change the focus to next textInput when the submit buttom is pressed for the previous textInput using useRef hook and [onSubmitEditing](https://reactnative.dev/docs/textinput) callback with .current and .focus()
* Implemented Login and Sign Up using Firebase Authentiation.
  Firebase provides multiple ways to login or sign up in the app inluding email paswword, anonymously, using soial media handles.
* <b>[useState()](https://reactjs.org/docs/hooks-state.html)</b> is a react native hook which returns an array with 2 values, first the state value and the seond one is the function whih updates the state value<br/>
  useState() take an argument to initializes the state<br/>
  Hooks are the alternative to states in Class components and be used with in the function components only <br/>
  Hooks should be plcaed and called from the top level as they need to be exeuted in the same sequene every time app renders
  <br/>
* <b>[useRef](https://reactjs.org/docs/hooks-reference.html#useref):</b> It allows you to directly creates a reference to the DOM element. It’s similar to document.getElementById and the ref created will act as the id of the element <br/>
* <b>[useEffect](https://reactjs.org/docs/hooks-effect.html):</b> its the hook whih lets you perform the side effects in funtion components. Using this, we tell the react that this component needs to do something after first render and every render.
  so, whenever there is some computational things we need in our app, we separate those in useEffet method so that it doesn't delay the app rendering.<br/>
* <b>onChangeText</b> prop of TextInput: it's a callback function which iscalled when the text's input changes. changeText is passed as a single string argument to the callback handler. To use the text input value and refer it somewhere you need to use changeText and assign it with stateVariable. Use that state variable with in the code
* <b>value</b> prop of the text input lets you forcibly set the initial value in the inputText

<br/>

- To chek if the user is currently signed in or not in the application, firebase provides a method called [onAuthStatechanged](https://rnfirebase.io/auth/usage#listening-to-authentication-state) which allows you to subscribe the users current authentiation state and receive an event whatever the state changes
  <br/>Important, onAuthStatehanged is async method which runs after the connetion with the firebase established
  <br/>If the user returned within the handler is null then it means that the user is signed out currently otherwise they are signedin and a UI is returned

- [EmailPassword sign-in](https://rnfirebase.io/auth/usage#emailpassword-sign-in): user can both register and sign using the following methods:

  1. createUserWithEmailAndPassword which creates the user if they are not the existing ones and
  2. if that is the existing user then .signInWithEmailPassword() method is used to sign them in.

- Post the above mentioned methods' execution,
  <br/>.then(): this is a promise whih executed only if the promise is resolved and if the promise is rejeted then .catch() will be exeuted which handles the errors
  and there is .finally() which always executes

  > <b>What so ever the method you use to login/sign-up, you need to enable that method in the [firebase console](https://console.firebase.google.com/) as well.</b>

* We can style the [placeholder](https://reactnative.dev/docs/textinput#placeholder) text as well, following props have been used in this project:
  - PlaceholderColor
  - placeholder fontfamily
    <br/>
* To make a horizontal scrollView, you need to Pass the horizontal={true} prop to the ScrollView Component.
* Always write a clean code
* Separate all the screens in different files.
* Try to abstract out views and components that can be re-used.
* When using external APIs, these APIs use some sort of keys and secrets and one should not push them to github as anyone can use them via your account.
* Any React Native application created using 'create-react-app' supports environment valriables out of the box, it reads variable that begin with REACT_APP and make them available through process env.<br/>
  To Store API keys, create a new file called .env in the root directory of React Application. Then, prefix the API key name with REACT_APP like: REACT_APP_API_KEY="key" and to access the API Key in any file in React app using process.env like: const api_key=process.env.REACT_APP_API_KEY.<br/>
  > Make sure that you add .env file to the .gitignore file to prevent git from tracking
  > <br/>
  > .env file needs to be configured first to [inject](https://blog.logrocket.com/understanding-react-native-env-variables/) the custom environment variables into the React Native environment. To do so, there are many packages which can be used to achieve it such as react-native-config, dotenv.<br/>
* Ignore a file in git: just add the file name in .gitignore file
* Underlay color: The color of the underlay that will show through when the touch is active.
