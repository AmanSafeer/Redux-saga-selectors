const SlideFromBottom = (index, position, layout) => {
    const { initHeight } = layout;
    const translateY = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [initHeight, 0, 0]
    });

    const opacity = position.interpolate({
        inputRange: [index - 1, index - 0.99, index],
        outputRange: [0, 1, 1]
    });

    return { opacity, transform: [{ translateY }] };
};

export default SlideFromBottom;