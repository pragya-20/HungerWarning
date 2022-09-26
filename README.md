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

<h3>Learnings</h3>

- Button from React Native [library](https://reactnative.dev/docs/button) is not much customizable so, we use either pressable or touchable
- Avoid using absolute: position - It's rigid and make it difficult to write layouts that respond well to changing content
- One needs to link the assets to the project by running the command: "$ npx react-native-asset" as it automatically install native dependencies related to assets.

* Stack Navigator and it dependencies Installation: don't copy dependencies from other projects and do it fresh in the current project

* [KeyboardAwareScrollView](https://blog.logrocket.com/keyboardawarescrollview-keyboardavoidingview-react-native/): used to avoid the overlapping of the input elements due to keyboard. It let's us to scroll over the whole screen and focus on the element you are working.
