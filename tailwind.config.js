module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      // Specify the files that should be checked for used classes.
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
    ],
  },
  // Other configuration...
}


