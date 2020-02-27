import { Platform, Text } from 'react-native';
import { override } from './utils';
const oldRender = Text.render;
class FontManagerExpo {
    constructor() {
        this.init = async () => {
            if (Platform.OS === 'android') {
                const Font = require('expo-font');
                await Font.loadAsync({
                    'Roboto-Black': require('../Fonts/Roboto-Black.ttf'),
                    'Roboto-BlackItalic': require('../Fonts/Roboto-BlackItalic.ttf'),
                    'Roboto-Medium': require('../Fonts/Roboto-Medium.ttf'),
                    'Roboto-MediumItalic': require('../Fonts/Roboto-MediumItalic.ttf'),
                    'Roboto-Regular': require('../Fonts/Roboto-Regular.ttf'),
                    'Roboto-Thin': require('../Fonts/Roboto-Thin.ttf'),
                    'Roboto-ThinItalic': require('../Fonts/Roboto-ThinItalic.ttf'),
                    'Roboto-Bold': require('../Fonts/Roboto-Bold.ttf'),
                    'Roboto-BoldItalic': require('../Fonts/Roboto-BoldItalic.ttf'),
                    'Roboto-Light': require('../Fonts/Roboto-Light.ttf'),
                    'Roboto-LightItalic': require('../Fonts/Roboto-LightItalic.ttf'),
                    'Roboto-Italic': require('../Fonts/Roboto-Italic.ttf'),
                });
                Text.render = override;
            }
        };
    }
}
export default new FontManagerExpo();
