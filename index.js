/**
 * Shared ESLint configuration for TTSP packages
 * Optimized for TypeScript projects with Bun runtime
 */

import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'

const config = [
	js.configs.recommended,
	{
		files: ['**/*.ts', '**/*.js'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: {
			'@typescript-eslint': tseslint,
		},
		rules: {
			// TypeScript specific rules (soft)
			'@typescript-eslint/no-unused-vars': ['warn', {
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			}],
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-non-null-assertion': 'warn',
			'@typescript-eslint/no-var-requires': 'off',

			// General rules (soft)
			'no-console': 'off',
			'no-debugger': 'warn',
			'no-unused-vars': 'off',
			'prefer-const': 'warn',
			'no-var': 'warn',
			'no-undef': 'off',

			// Bun-specific optimizations
			'no-process-exit': 'off',
			'no-buffer-constructor': 'off',

			// Code style (soft)
			'camelcase': ['warn', { properties: 'never' }],
			'eqeqeq': ['warn', 'always'],
			'curly': ['warn', 'all'],
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'no-new-func': 'error',
			'quotes': ['warn', 'single', { avoidEscape: true }],
			'jsx-quotes': ['warn', 'prefer-single'],
			'semi': ['warn', 'never'],
		},
	},
	{
		// Test files
		files: ['**/*.test.ts', '**/*.spec.ts', '**/__tests__/**/*.ts'],
		languageOptions: {
			globals: {
				jest: 'readonly',
			},
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
			'no-console': 'off',
		},
	},
	{
		// Configuration files
		files: ['*.config.js', '*.config.ts', 'bunfig.toml'],
		rules: {
			'@typescript-eslint/no-var-requires': 'off',
			'no-undef': 'off',
		},
	},
	{
		ignores: [
			'node_modules/',
			'dist/',
			'build/',
			'*.min.js',
			'coverage/',
			'.bun/',
			'*.toml',
			'bunfig.toml',
		],
	},
]

export default config
export { config } 