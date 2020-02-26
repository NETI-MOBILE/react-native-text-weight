# Installing package

`yarn add react-native-text-weight`

## React Native CLI (not Expo)
Download Roboto font: https://fonts.google.com/?selection.family=Roboto

Install it using the following guide: https://medium.com/react-native-training/react-native-custom-fonts-ccc9aacf9e5e

# Usage

Insert the following code into the starting point of the application (usually App.js) 

## Expo
```js
import FontManager from 'react-native-text-weight';

const [loaded, setLoaded] = useState(false); // its necessary for font loading async and update ui

useEffect(() => {
    FontManager.init().then(() => setLoaded(true));
}, []);

return loaded ? (
    <Content />
) : (
    <ActivityIndicator />
);
```
## React Native CLI
```js
import FontManager from 'react-native-text-weight';

useEffect(() => {
	FontManager.init(false); //set isExpo prop to false
}, []);
```

## Issues
- Custom fonts are not well-tested
