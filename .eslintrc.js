module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "standard-with-typescript",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "proyect": "./tsconfig.json"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/react-in-jsx-scope": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/semi": "off",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/space-before-blocks": "off",
        "@typescript-eslint/consistent-type-imports": "off",
        "@typescript-eslint/space-before-function-paren": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/strict-boolean-expressions": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "eol-last": 0,
    }
}
