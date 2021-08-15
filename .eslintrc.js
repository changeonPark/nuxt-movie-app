module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'cypress/globals': true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    'plugin:vue/strongly-recommended',
    'eslint:recommended'
  ],
  plugins: [
    'cypress'
  ],
  rules: {
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never'
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always'
      },
      svg: 'always',
      math: 'always'
    }]
  },
  // add your custom rules here
}

