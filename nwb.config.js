module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'reactMountable',
      externals: {
        react: 'React'
      }
    }
  }
}
