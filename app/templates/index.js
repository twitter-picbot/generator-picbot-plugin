'use strict';

module.exports = {
  /**
   * Gets source of an image related to the query.
   * @param {string} query - topic of the image.
   * @return {Promise} promise handler.
   */
  getSource: function(query) {
    return new Promise((resolve, reject) => {
      // resolve({
      //   url: 'string', downloadable image
      //   source: 'string', image source from <%= name %>
      // });
    });
  }
};
