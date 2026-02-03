const StyleDictionary = require('style-dictionary');

// Register a custom parser for DTCG format
// Also transforms Tokens Studio relative references to full paths for Style Dictionary
StyleDictionary.registerParser({
  pattern: /\.json$/,
  parse: ({ contents }) => {
    const tokens = JSON.parse(contents);

    // Transform reference from Tokens Studio format to Style Dictionary format
    // e.g., {primary.700} -> {colors.primary.700} when inside colors object
    function transformReference(value, currentPath) {
      if (typeof value !== 'string') return value;

      // Match references like {something.something}
      return value.replace(/\{([^}]+)\}/g, (match, ref) => {
        // If it already has the full path (colors., typography., etc.), leave it
        if (ref.startsWith('colors.') ||
            ref.startsWith('typography.') ||
            ref.startsWith('spacing.') ||
            ref.startsWith('borderRadius.') ||
            ref.startsWith('shadows.') ||
            ref.startsWith('transitions.')) {
          return match;
        }

        // If we're inside the colors object, add colors. prefix
        // This handles both primitive refs like {primary.700} and
        // semantic refs like {semantic.brand.primary}
        if (currentPath[0] === 'colors') {
          return `{colors.${ref}}`;
        }

        return match;
      });
    }

    function transformTokens(obj, path = []) {
      const result = {};

      for (const [key, value] of Object.entries(obj)) {
        // Skip metadata keys
        if (key.startsWith('$')) continue;

        if (value && typeof value === 'object') {
          // Check if this is a token (has $value)
          if (value.$value !== undefined) {
            result[key] = {
              value: transformReference(value.$value, [...path, key]),
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
