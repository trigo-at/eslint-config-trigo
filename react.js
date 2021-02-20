module.exports = {
    parser: '@babel/eslint-parser',
    plugins: ['@babel', 'react', 'jest', 'filenames'],
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:jest/recommended', 'airbnb', 'airbnb/hooks'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2021,
        sourceType: 'module',
    },
    settings: {
        'import/parsers': {
            espree: ['.js', '.jsx', '.ts', '.tsx'],
        },
        react: {
            version: 'detect',
        },
    },

    env: {
        node: true,
        jest: true,
        es2021: true,
        browser: true,
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
                allow: ['_id', '_index', '_score', '_shards', '_source', '_type', '_state', '_embedded'],
            },
        ],
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-await-in-loop': 0,
        'no-param-reassign': ['error', {props: false}],
        'prefer-destructuring': 0,
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/valid-expect': 'error',
        'react/no-unused-state': 'error',
        'react/jsx-handler-names': 'error',
        'react/jsx-props-no-spreading': 0,
        'react/forbid-prop-types': 0,
        'filenames/match-regex': [2, '^[a-z0-9-.]+$', true],
        'filenames/match-exported': [2, 'kebab'],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        'import/no-namespace': 'error',
    },
};
