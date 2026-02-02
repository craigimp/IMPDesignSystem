const StyleDictionary = require('style-dictionary');

// Register a custom parser for DTCG format
StyleDictionary.registerParser({
  pattern: /\.json$/,
  parse: ({ contents }) => {
    const tokens = JSON.parse(contents);

    function transformTokens(obj, path = []) {
      const result = {};

      for (const [key, value] of Object.entries(obj)) {
        // Skip metadata keys
        if (key.startsWith('$')) continue;

        if (value && typeof value === 'object') {
          // Check if this is a token (has $value)
          if (value.$value !== undefined) {
            result[key] = {
              value: value.$value,
              type: value.$type,
              description: value.$description
            };
          } else {
            // It's a group, recurse
            result[key] = transformTokens(value, [...path, key]);
          }
        }
      }

      return result;
    }

    return transformTokens(tokens);
  }
});

module.exports = {
  source: ['tokens/**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
          options: {
            outputReferences: true
          }
        }
      ]
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6'
        }
      ]
    },
    json: {
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          destination: 'tokens.flat.json',
          format: 'json/flat'
        }
      ]
    }
  }
};
