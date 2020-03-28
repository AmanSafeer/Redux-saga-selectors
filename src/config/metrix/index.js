import { Dimensions, PixelRatio, Platform } from "react-native"
import { isIphoneX } from "./isIPhoneX";
let { height, width } = Dimensions.get("window")

height -= Platform.OS == "ios" ? isIphoneX() ? 70 : 20 : 24;

const scale = height / 812

const VerticalSize = (size = 812) => (size / 812) * height;
const HorizontalSize = (size = 375) => (size / 375) * width;

const normalize = (size) => {
    const newSize = size * scale
    // if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
    // } else {
    //return Math.round(PixelRatio.roundToNearestPixel(newSize)) -2
    // }
}

const numWithCommas = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

const AccountingFormat = (amount, currency = "") => {
    if (amount < 0)
        return `(${currency}${numWithCommas(Number(amount).toFixed(2).replace("-", ""))})`
    else
        return `${currency}${numWithCommas(Number(amount).toFixed(2).replace("-", ""))}`
}


export default {
    Radius: VerticalSize(10),
    LightRadius: VerticalSize(6),
    ActiveOpacity: 0.5,
    customFontSize: normalize,
    FontRegular: normalize(16),
    FontExtraSmall: normalize(12),
    FontSmall: normalize(14),
    FontMedium: normalize(18),
    FontLarge: normalize(22),
    AccountingFormat,
    VerticalSize,
    HorizontalSize
}