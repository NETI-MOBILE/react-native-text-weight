import { Platform, Text } from 'react-native';
import { override } from './utils';
class FontManager {
    constructor() {
        this.init = async () => {
            if (Platform.OS === 'android') {
                Text.render = override;
            }
        };
    }
}
export default new FontManager();
