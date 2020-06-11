const got = require('got');
const pulley = require('pulley-core');

const { Source } = pulley;
const Vinyl = pulley.reexports.vinyl;
const vinylFs = pulley.reexports.vinylFs;
const httpVinyl = require('./httpVinylAdapter.js');
const rules = pulley.rules;

const { promisify } = require('util');

/**
 * Pulley source that retrieves files from online sources via HTTP and HTTPS.
 */
class HttpSource extends Source {

  /**
   *
   */
  getOptionRules() {
    return [
      [rules.objects.objectExists, this.options, 'options'],
      [rules.keys.hasKeys, this.options, ['url']],
      [rules.keys.hasOnlyKeys, this.options, ['url', 'filename']],
    ];
  }

  /**
   *
   */
  async fetch() {
    return httpVinyl.src(this.options.url, this.options);
  }

};

module.exports = HttpSource;
