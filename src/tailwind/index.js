const plugin = require('tailwindcss/plugin');
const { getTypography } = require('./typography');

const typographyPlugin = plugin(({ addComponents }) => {
  const components = {
    ...getTypography()
  };

  addComponents(components, {
    variants: ['responsive']
  });
});

module.exports = { typographyPlugin };
