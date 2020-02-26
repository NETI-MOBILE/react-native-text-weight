import { Platform, Text } from 'react-native';
import { override } from './utils';
const oldRender = Text.render;
class FontManagerExpo {
    constructor() {
        this.init = async () => {
            if (Platform.OS === 'android') {
                const Font = require('expo-font');
                await Font.loadAsync({
                    'Roboto-Black': require('./fonts/Roboto-Black.ttf'),
                    'Roboto-BlackItalic': require('./fonts/Roboto-BlackItalic.ttf'),
                    'Roboto-Medium': require('./fonts/Roboto-Medium.ttf'),
                    'Roboto-MediumItalic': require('./fonts/Roboto-MediumItalic.ttf'),
                    'Roboto-Regular': require('./fonts/Roboto-Regular.ttf'),
                    'Roboto-Thin': require('./fonts/Roboto-Thin.ttf'),
                    'Roboto-ThinItalic': require('./fonts/Roboto-ThinItalic.ttf'),
                    'Roboto-Bold': require('./fonts/Roboto-Bold.ttf'),
                    'Roboto-BoldItalic': require('./fonts/Roboto-BoldItalic.ttf'),
                    'Roboto-Light': require('./fonts/Roboto-Light.ttf'),
                    'Roboto-LightItalic': require('./fonts/Roboto-LightItalic.ttf'),
                    'Roboto-Italic': require('./fonts/Roboto-Italic.ttf'),
                });
                Text.render = override;
            }
        };
    }
}
export default new FontManagerExpo();
