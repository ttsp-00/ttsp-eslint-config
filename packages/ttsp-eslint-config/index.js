/**
 * Shared ESLint configuration for TTSP packages
 * Optimized for TypeScript projects with Bun runtime
 */

module.exports = {
	env: {
		es2024: true,
		node: true,
		browser: true,
	},
	extends: [
		'eslint:recommended',
		'@typescript-eslint/recommended',
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: [
		'@typescript-eslint',
		'prettier',
	],
	rules: {
		// Prettier integration
		'prettier/prettier': 'warn',

		// TypeScript specific rules (soft)
		'@typescript-eslint/no-unused-vars': ['warn', {
			argsIgnorePattern: '^_',
			varsIgnorePattern: '^_',
		}],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-non-null-assertion': 'warn',
		'@typescript-eslint/prefer-const': 'warn',
		'@typescript-eslint/no-var-requires': 'off',

		// General rules (soft)
		'no-console': 'off',
		'no-debugger': 'warn',
		'no-unused-vars': 'off', // Use TypeScript version instead
		'prefer-const': 'warn',
		'no-var': 'warn',
		'no-undef': 'off', // TypeScript handles this

		// Bun-specific optimizations
		'no-process-exit': 'off', // Bun uses process.exit
		'no-buffer-constructor': 'off', // Bun has different Buffer implementation

		// Code style (soft)
		'camelcase': ['warn', { properties: 'never' }],
		'eqeqeq': ['warn', 'always'],
		'curly': ['warn', 'all'],
		'no-eval': 'error',
		'no-implied-eval': 'error',
		'no-new-func': 'error',
		'quotes': ['warn', 'single', { avoidEscape: true }],
		'jsx-quotes': ['warn', 'prefer-single'],

		// Import/Export rules
		'import/no-unresolved': 'off', // TypeScript handles this
		'import/extensions': 'off',
	},
	overrides: [
		{
			// Test files
			files: ['**/*.test.ts', '**/*.spec.ts', '**/__tests__/**/*.ts'],
			env: {
				jest: true,
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
	],
	ignorePatterns: [
		'node_modules/',
		'dist/',
		'build/',
		'*.min.js',
		'coverage/',
		'.bun/',
	],
} 