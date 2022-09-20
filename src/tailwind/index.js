const plugin = require('tailwindcss/plugin');
const { getTypography } = require('./typography');
const { getScreens } = require('./screens');
const { getColors } = require('./colors');

const typographyPlugin = plugin(({ addComponents }) => {
  const components = {
    ...getTypography()
  };

  addComponents(components, {
    variants: ['responsive']
  });
});

module.exports = { typographyPlugin, getScreens, getColors };
