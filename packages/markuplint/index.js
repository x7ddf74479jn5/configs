'use strict';

module.exports = {
  extends: ['markuplint:recommended-react'],
  parser: {
    '.[jt]sx$': '@markuplint/jsx-parser',
  },
  specs: {
    '.[jt]sx$': '@markuplint/react-spec',
  },
};
