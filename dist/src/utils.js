import React from 'react';
import { Text } from 'react-native';
const getItalicName = (isItalic) => {
    if (isItalic) {
        return 'Italic';
    }
    return '';
};
const font_style_generator = (font_family, font_weight, font_style) => {
    let fontFamily = `${font_family}`;
    const isItalic = font_style == 'italic';
    switch (font_weight) {
        case 'normal':
            if (isItalic)
                fontFamily += '-Italic';
            break;
        case 'bold':
            fontFamily += '-Bold' + getItalicName(isItalic);
            break;
        case '100':
        case '200':
            fontFamily += '-Thin' + getItalicName(isItalic);
            break;
        case '300':
            fontFamily += '-Light' + getItalicName(isItalic);
            break;
        case '400':
            fontFamily += isItalic ? '-Italic' : '-Regular';
            break;
        case '500':
        case '600':
            fontFamily += '-Medium' + getItalicName(isItalic);
            break;
        case '700':
        case '800':
            fontFamily += '-Bold' + getItalicName(isItalic);
            break;
        case '900':
            fontFamily += '-Black' + getItalicName(isItalic);
            break;
        case 'bolder':
        case 'lighter':
        default:
            break;
    }
    return { fontFamily: fontFamily, fontWeight: 'normal', fontStyle: 'normal' };
};
const oldRender = Text.render;
export function override(...args) {
    const origin = oldRender.call(this, ...args);
    if (origin.props.style && !Array.isArray(origin.props.style)) {
        const fontWeight = origin.props.style.fontWeight ? origin.props.style.fontWeight : '400';
        const fontStyle = origin.props.style.fontStyle ? origin.props.style.fontStyle : 'normal';
        const fontFamily = origin.props.style.fontFamily ? origin.props.style.fontFamily : 'Roboto';
        return React.cloneElement(origin, {
            style: [{}, origin.props.style, font_style_generator(fontFamily, fontWeight, fontStyle)],
        });
    }
    return origin;
}
