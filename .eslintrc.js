module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "comma-dangle": ["error", "never"],
        "no-param-reassign": ["error", { props: false }],
        // eslint-disable-next-line comma-dangle
        quotes: ["error", "double"],
    }
};
