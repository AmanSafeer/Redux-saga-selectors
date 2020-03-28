import { Animated, Easing } from "react-native";
import CollapseExpand from "./CollapseExpand";
import SlideFromRight from "./SlideFromRight";
import SlideFromLeft from "./SlideFromLeft";
import SlideFromBottom from "./SlideFromBottom";
import SlideFromTop from "./SlideFromTop";
import Constants from "./constants"

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 600,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps;
            const width = layout.initWidth;
            const { index, route } = scene;
            const params = route.params || {};
            const transition = params.transition || Constants.Default;
            return {
                default: CollapseExpand(index, position),
                SlideFromRight: SlideFromRight(index, position, width),
                SlideFromLeft: SlideFromLeft(index, position, -width),
                SlideFromBottom: SlideFromBottom(index, position, layout, scene),
                SlideFromTop: SlideFromTop(index, position, layout, scene)
            }[transition];
        }
    };
}

export default transitionConfig;