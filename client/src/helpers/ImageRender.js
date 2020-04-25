import {Image} from 'react-native';
import React from 'react';
const width = 100;
const height = 100;
export const renderImage = imageBase64String => {
  return (
    <Image
      style={{width: width, height: height}}
      source={{uri: `data:image/png;base64,${imageBase64String}`}}
    />
  );
};
