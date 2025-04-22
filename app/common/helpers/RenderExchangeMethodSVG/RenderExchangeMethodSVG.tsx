import { StyleProp, ViewStyle } from 'react-native';
import { imageMock } from './ImageMock';

const RenderExchangeMethodSVG = (name: string, style?: StyleProp<ViewStyle>) => {
    const SvgComponent = imageMock[name];
    return SvgComponent ? <SvgComponent style={style}/> : null;
};

export { RenderExchangeMethodSVG };