/**
 * @file HTTP file download adapter for Vinyl.
 */

const got = require('got');
const { Readable } = require('stream');
const URL = require('url');
const through = require('through2');
const pulley = require('pulley-core');

const Vinyl = pulley.reexports.vinyl;

/**
 * Vinyl adapter to retrieve Vinyl objects via HTTP with Got.
 *
 * No `dest` function is defined because there is no need to output Vinyl
 * files via HTTP for Pulley.
 */
const httpVinylAdapter = {

  src: function (url, options = {}) {
    const stream = new Readable({ objectMode: true });
    const filename = (() => {
      if (options.filename) {
        return options.filename;
      }
      return url.substring(url.lastIndexOf('/') + 1);
    })();

    stream._read = function() {
      this.push(new Vinyl({
        contents: got.stream(url),
        cwd: '/',
        base: '/',
        path: `/${filename}`,
      }));

      this.push(null);
    };

    return stream;
  },

};

module.exports = httpVinylAdapter;
