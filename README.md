# hungerWarning

<h3>OverView<h3>
hungerWarning is an application which will provide a place to order a variety of cusines.<br/>
<br/>

<h3>Concepts Used</h3>

- Figma files and assets usage
- Relative path vs Absolute path and their usage
- To improve code readability by givimg meaningful names
- Internal StyleSheets
- ScaledSheets, now these are not used in the project but It can be used to scale the App UIs accross different devices.
- Image containers: faced a scenario in which whenever I was removing the borderWidth of the image, Image was stretchng from the left end. Resolved this by includng it in a View.<br/>
- align-self; justifyContent; flexDirection
- Adding custom fonts: downloaded the respective font family, included in assets.<br/>Created react-native.config.js file to allows us to set up different configuration files for different environments. It advocates for twelve-factor configuration management
- Margins to align elements verticaly and horizontaly.
- Avoid using position: absolute
- TochableOpacity and it's difference with Pressable.
- resize mode
- Image path using source and require

<h3>Errors/Warnings

- Unable to Load Script. Make sure you're either running Metro('run npx react-native start') or that your bundle 'index.android.bundle' is packaged correctly for release

>     Unable to Load Script. Make sure you're either running Metro('run npx react-native start') or that your bundle 'index.android.bundle' is packaged correctly for release

- SyntaxError: /home/saurav/reactNative_Projects/HungerWarning/App.js: Private names are only allowed in property accesses (`obj.#FF4B3A`) or in `in` expressions (`#FF4B3A in obj`).

> Installed the extension color heighlight in VSCode

<h3>Learnings</h3>

- Button is not much customizable so, we use either pressable or touchable
- Avoid using absolute: position - It's rigid and make it difficult to write layouts that respond well to changing content
- One needs to link the assets to the project by running the command: "$ npx react-native-asset"

-
