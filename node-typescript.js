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
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended', 'airbnb-base'],
            plugins: ['@typescript-eslint', 'jest', 'filenames'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2021,
                sourceType: 'module',
            },
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
            settings: {
                'import/resolver': {
                    node: {
                        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs'],
                    },
                },
                'import/extensions': ['.js', '.jsx', '.ts', '.tsx', '.json', '.mjs'],
            },
        },
    ],
};

module.exports = nodeTypescript;
