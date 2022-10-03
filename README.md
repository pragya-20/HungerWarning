# hungerWarning

<h3>Overview<h3>
Hunger Warning is an application which will provide a place to order a variety of cuisines.<br/>
<br/>

<h3>Concepts Used</h3>

- Figma files and assets usage
- Relative path vs Absolute path and their usage
- To improve code readability by giving meaningful names
- Internal StyleSheets
- ScaledSheet is a react native component preset in [Library](https://github.com/nirsky/react-native-size-matters), take the same stylesObject a regular StyleSheet will take, plus a special (optional) annotation that will automatically apply the scale functions used to scale the App UIs accross different devices.
- Image containers: faced a scenario in which whenever I was removing the borderWidth of the image, Image was stretchng from the left end. Resolved this by surrounding it in a View.<br/>
- align-self; justifyContent; flexDirection
- Adding custom fonts: downloaded the respective font family, included in assets.<br/>Created react-native.config.js file to allows us to set up different configuration files for different environments.
- Margins to align elements verticaly and horizontaly.

- TouchableOpacity and it's difference with Pressable.
- resizeMode: Prop of Image view which determines how to resize the image when the frame doesn't match the raw image dimensions. <br/>Values accepted:{ cover,contain, stretch,repeat,center}
- Image path using source and require

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

* Error: Got an invalid value for 'component' prop for the screen 'MainScreen'. It must be a valid React Component.

> export default appname was missing

- fatal: Could not read from remote repository.

* tabBarLabel:() => {return null}

<h3>Learnings</h3>

- Button from React Native [library](https://reactnative.dev/docs/button) is not much customizable so, we use either pressable or touchable
- Avoid using absolute: position - It's rigid and make it difficult to write layouts that respond well to changing content
- One needs to link the assets to the project by running the command: "$ npx react-native-asset" as it automatically install native dependencies related to assets.

* Stack Navigator and it dependencies Installation: don't copy dependencies from other projects and do it fresh in the current project

* [KeyboardAwareScrollView](https://blog.logrocket.com/keyboardawarescrollview-keyboardavoidingview-react-native/): used to avoid the overlapping of the input elements due to keyboard. It let's us to scroll over the whole screen and focus on the element you are working.

Learned to simplify the ode as muh as possible , it improves readability and easy to understand.
Implemented Login and Sign Up using Firebase Authentiation.
Firebase provides multiple ways to login or sign up in the app inluding email paswwor, anonymously, using soial media handles.
useState() is a reat native hook whih returns an arrayy with 2 values, first whih the state value and the seond one is the funtion whih updates the state value<br/>
useState take an argument and initializes the state as well.
hooks an be used with in funtion omponents only not with the lass omponents. but these are the alternative of states of lass in funtion omponents<br/>
hooks should be plaed and alled from the top level as they need to be exeuted in the same sequene every time app renders
<br/>
useRef <br/>
useEffet: its the hook whih lets you perform the side effets in funtion omponents. using this, we tell the reat that this omponent needs to do something after first render and every render.
so, whenever there is some omputational things we need in our app, we separate those in useEffet method so that it doesn't delay the app rendering.<br/>
onhangeText prop of TextInput: it's a allbak funtion whih is alled when the text's input hanges. hange text is passed as a single string argument to the allbak handler. To use the text input value and refer it somewhere you need to use hangeText and assign it with stateVariable. Then you an use that state variable with in the ode
value prop of the text input lets you foribly set the initial value in the input and doesn't let you enter anything beyond that

<br/>
To hek if the user is urrently signedin or not in the appliation, firebase provides a method alled onAuthStatehanged whih allows you to subsribe the users urrent authentiation state and reive an event whatever the state hanges 
Important, onAuthStatehanged is asynh method whih runs after the onnetion with the firebase established
If the user retuned within the handler is null then it means that the user is signed out urrntly,otherwise they are signedin and and a UI is returned

TO Ask Saurav: Therefore it is important to setup an "initializing" state which blocks render of our main application whilst the connection is established:

the onAuthStatehanged method also returns an unsubsriber method whih allows us to stop listening events when teh hook is of no use

EMailPassword Sign in: user an both register and sign using the method reateUserWithEmailAndPassword whih performs 2 operations: first, reating the user if they are not the existing ones and then signing them in.
.then(): this is a promise whih exeuted only if the promise is resolved and if the promise is rejeted then .ath() will be exeuted whih handles the errors
post that there is .finally() whih exeutes always
One suessfully reated and signedin /signed in, any onAuthStatehanges listener will trigger an event with the user details

What so every the method you use to login/sign-up, you need to enable that mentod in the firebase onsole as well.

- PlaceholderColor
- placeholder fontfamily

* Pass the horizontal={true} prop to the ScrollView Component.
