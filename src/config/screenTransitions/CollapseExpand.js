const CollapseExpand = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: [0, 1, 1]
    });

    const scaleY = position.interpolate({
        inputRange,
        outputRange: [0, 1, 1]
    });

    return {
        opacity,
        transform: [{ scaleY }]
    };
};

export default CollapseExpand;