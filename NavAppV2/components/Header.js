header: ({scene, previous, navigation}) => {
  const {options} = scene.descriptor;
  const title =
    options.headerTitle !== undefined
      ? options.headerTitle
      : options.title !== undefined
      ? options.title
      : scene.route.name;
      const progress = Animated.add(scene.progress.current, scene.progress.next || 0);

      const opacity = progress.interpolate({
        inputRange: [0, 1, 2],
        outputRange: [0, 1, 0],
      });
      
      return (
        <Animated.View style={{ opacity }}>{/* Header content */}</Animated.View>
      );
  // return (
  //   <MyHeader
  //     title={title}
  //     leftButton={
  //       previous ? <MyBackButton onPress={navigation.goBack} /> : undefined
  //     }
  //     style={options.headerStyle}
  //   />
  // );
};
headerStyle: {
  height: 80, // Specify the height of your custom header
};