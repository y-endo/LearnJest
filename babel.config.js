module.exports = {
  presets: [
    [
      'env',
      {
        'targets:': { node: '6' } // change this to your node version
      }
    ]
  ],
  env: {
    test: {
      presets: [
        [
          'env',
          {
            targets: { node: 'current' }
          }
        ]
      ]
    }
  }
};
