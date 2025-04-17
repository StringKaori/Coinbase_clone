module.exports = function (api) {
    api.cache(true);
    return {
      presets: ['babel-preset-expo'],
      plugins: [
        [
          'module-resolver',
          {
            root: ['./app'],
            alias: {
              '@assets': './app/assets',
              '@common' : './app/common',
              '@modules': './app/modules',
              '@routes': './app/routes',
              '@themes': './app/theme'
            },
          },
        ]
      ],
    };
  };
  