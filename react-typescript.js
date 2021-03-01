const reactConfig = require('./react');

const reactTypescript = {
    ...reactConfig,
    overrides: [
        {
            files: ['**/*.ts', '**/*.tsx'],
            parser: '@typescript-eslint/parser',
            plugins: ['@typescript-eslint', 'react', 'jest', 'filenames'],
            extends: [
                'eslint:recommended',
                'plugin:@typescript-eslint/recommended',
                'plugin:jest/recommended',
                'plugin:react/recommended',
                'plugin:import/typescript',
                'airbnb',
                'airbnb/hooks',
            ],
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                ecmaVersion: 2021,
                sourceType: 'module',
            },
            rules: {
                'react/jsx-filename-extension': [
                    1,
                    {extensions: ['.tsx', '.jsx']},
                ],
                'react/prop-types': 0,
                'no-unused-vars': 0,
                'import/named': 0,
                'import/prefer-default-export': 0,
                'import/no-unresolved': 0,
                'import/extensions': 0,
                'default-case': 0,
                'no-use-before-define': 0,
                '@typescript-eslint/no-unused-vars': 'error',
                '@typescript-eslint/member-delimiter-style': 'error',
                '@typescript-eslint/member-ordering': 'error',
                '@typescript-eslint/type-annotation-spacing': 'error',
                '@typescript-eslint/explicit-function-return-type': 0,
                '@typescript-eslint/prefer-interface': 0,
                '@typescript-eslint/no-namespace': 'error',
                '@typescript-eslint/ban-ts-ignore': 0,
                '@typescript-eslint/ban-ts-comment': 0,
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
                            '.d.ts',
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
                    '.d.ts',
                    '.json',
                    '.mjs',
                ],
                react: {
                    version: 'detect',
                },
            },
        },
    ],
};

module.exports = reactTypescript;
