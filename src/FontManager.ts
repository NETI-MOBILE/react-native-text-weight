import { Platform, Text } from 'react-native';
import { override } from './utils';

class FontManager {
  init = async () => {
    if (Platform.OS === 'android') {
      (Text as any).render = override;
    }
  };
}
export default new FontManager();
