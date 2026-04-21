import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import prettier from 'eslint-config-prettier';

export default defineConfig([
    js.configs.recommended,
    prettier,
    {
        files: ['**/*.js'],
        languageOptions: {
            globals: globals.node,
        },
        rules: {
            'no-console': 'off',
        },
    },
]);
