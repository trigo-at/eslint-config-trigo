const nodeConfig = require('./node');

const nodeTypescript = {
    ...nodeConfig,
    settings: {
        ...nodeConfig.settings,
    },
    rules: {
        ...nodeConfig.rules,
        'react/prop-types': 0,
        'no-unused-vars': 0,
        'import/named': 0,
        'import/prefer-default-export': 0,
        'import/no-unresolved': 0,
        'default-case': 0,
    },
    extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 12,
                sourceType: 'module',
            },
            plugins: ['@typescript-eslint'],
            rules: {
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/member-delimiter-style': 'error',
                '@typescript-eslint/member-ordering': 'error',
                '@typescript-eslint/type-annotation-spacing': 'error',
                '@typescript-eslint/explicit-function-return-type': 0,
                '@typescript-eslint/prefer-interface': 0,
                '@typescript-eslint/ban-ts-ignore': 0,
                '@typescript-eslint/no-var-requires': 0,
            },
        },
    ],
};

module.exports = nodeTypescript;
