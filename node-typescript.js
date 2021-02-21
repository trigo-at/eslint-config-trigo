const nodeConfig = require('./node');

const nodeTypescript = {
    ...nodeConfig,
    settings: {
        ...nodeConfig.settings,
    },
    rules: {
        ...nodeConfig.rules,
        'no-unused-vars': 0,
        'import/named': 0,
        'import/prefer-default-export': 0,
        'import/no-unresolved': 0,
        'default-case': 0,
    },
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:jest/recommended',
                'plugin:node/recommended',
                'plugin:import/typescript',
                'airbnb-base',
            ],
            plugins: ['@typescript-eslint', 'jest', 'filenames', 'node'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2021,
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
                        extensions: [
                            '.js',
                            '.jsx',
                            '.ts',
                            '.tsx',
                            '.json',
                            '.mjs',
                        ],
                    },
                },
                'import/extensions': [
                    '.js',
                    '.jsx',
                    '.ts',
                    '.tsx',
                    '.json',
                    '.mjs',
                ],
            },
        },
    ],
};

module.exports = nodeTypescript;
