// you can use this file to add your custom webpack plugins, loaders and anything you like.
// This is just the basic way to add addional webpack configurations.
// For more information refer the docs: https://getstorybook.io/docs/configurations/custom-webpack-config

// IMPORTANT
// When you add this file, we won't add the default configurations which is similar
// to "React Create App". This only has babel loader to load JavaScript.

// remove svg from existing rule

const Path = require('path');

const AppSourceDir = Path.join(__dirname, '..', 'src/assets/images/svg/');

module.exports = ({ config }) => {
    // Disable the Storybook internal-`.svg`-rule for components loaded from our app.
    const svgRule = config.module.rules.find((rule) => 'test.svg'.match(rule.test));
    svgRule.exclude = [ AppSourceDir ];

    config.module.rules.push({
        test: /\.svg$/i,
        include: [ AppSourceDir ],
        use: [{
          loader: '@svgr/webpack',
          options: {
            icon: true,
          }
        },
        {
          loader: 'file-loader'
        }
      ]
    });
    config.module.rules.push({
      test: /\.(woff|jpg|gif|png)$/,
      loader: 'url-loader?limit=100000'
    });
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });

    return config;
};
