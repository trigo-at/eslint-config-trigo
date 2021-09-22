const nodeTypescript = {
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:jest/recommended',
        'airbnb-base',
    ],
    env: {
        node: true,
        jest: true,
        es2021: true,
    },
    plugins: ['@typescript-eslint', 'jest', 'filenames'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    rules: {
        strict: [0, 'global'],
        indent: [1, 4, {SwitchCase: 1, VariableDeclarator: 1}],
        'no-tabs': 0,
        'no-console': [1, {allow: ['warn']}],
        'max-len': [
            2,
            120,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
            },
        ],
        'no-underscore-dangle': [
            'error',
            {
                allow: [
                    '_id',
                    '_index',
                    '_score',
                    '_shards',
                    '_source',
                    '_type',
                    '_state',
                    '_embedded',
                ],
            },
        ],
        'no-restricted-syntax': [
            'error',
            'ForInStatement',
            'LabeledStatement',
            'WithStatement',
        ],
        'no-await-in-loop': 0,
        'no-param-reassign': ['error', {props: false}],
        'prefer-destructuring': 0,
        'default-case': 0,
        'no-use-before-define': 0,
        'filenames/match-regex': [2, '^[a-z0-9-.]+$', true],
        'filenames/match-exported': [2, 'kebab'],
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
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
    },
    settings: {
        'import/parsers': {
            espree: ['.js', '.jsx', '.ts', '.tsx'],
        },
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
    },
};

module.exports = nodeTypescript;
