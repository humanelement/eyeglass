"use strict";

module.exports = function(eyeglass, sass) {
  return {
    "eyeglass-asset-uri($registered-assets, $relative-path)":
      function(registeredAssetsMap, relativePathString, done) {
        eyeglass.assets.resolveAsset(registeredAssetsMap, relativePathString,
          function(error, assetUri, assetPath) {
            if (error) {
              if (error.constructor === sass.types.Error) {
                done(error);
              } else {
                done(sass.types.Error(error.message));
              }
            } else {
              done(sass.types.String(assetUri));
            }
          });
      }
  };
};
