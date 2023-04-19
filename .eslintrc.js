module.exports = {
    env: {
        browser: true,
        es2021: true,
    },

    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    overrides: [],
    parser: '@babel/eslint-parser',
    parserOptions: {
        requireConfigFile: false,
        ecmaVersion: 'latest',
        sourceType: 'module',
        babelOptions: {
            presets: ['@babel/preset-react'],
        },
    },

    plugins: ['prettier', 'react', 'react-hooks'],
    rules: {
      'prettier/prettier': 'error',
      'react/jsx-filename-extension': 0,
      'import/prefer-default-export': 0,
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react/react-in-jsx-scope': 0,
    },
}
