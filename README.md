# Installing package

`yarn add react-native-text-weight`

## React Native CLI (not Expo)
Edit `android/app/build.gradle` and add the following:

```gradle
apply from: "../../node_modules/react-native-text-weight/fonts.gradle"
```

# Usage

Insert the following code into the starting point of the application (usually App.js) 

## Expo
```js
import FontManager from 'react-native-text-weight/expo';

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

## Issues
- Custom fonts are not well-tested

## TO DO
- make all synchronous
