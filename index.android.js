import React from 'react-native';

const ImageResizerAndroid = React.NativeModules.ImageResizerAndroid;

export default {
    createResizedImage: (imagePath, newWidth, newHeight, compressFormat, quality, rotation = 0, outputPath) => {
        return new Promise((resolve, reject) => {
            ImageResizerAndroid.createResizedImage(imagePath, newWidth, newHeight,
                compressFormat, quality, rotation, outputPath, resolve, reject);
        });
    },
    createSmallerImage: (imagePath, minWidth, minHeight, maxWidth, maxHeight, compressFormat, quality, rotation = 0, outputPath) => {
        return new Promise((resolve, reject) => {
            ImageResizerAndroid.createSmallerImage(imagePath, minWidth, minHeight, maxWidth, maxHeight,
                compressFormat, quality, rotation, outputPath, resolve, reject);
        });
  },
};
