# TTSP ESLint Config

Shared ESLint configuration for TTSP packages with TypeScript and Bun support.

## Features

- **Latest ESLint 9.x** with TypeScript 8.x support
- **Soft rules** for better developer experience
- **Bun runtime** optimizations
- **Test files** support with relaxed rules
- **Modern ES2024** features enabled

## Installation

```bash
bun add -D ttsp-eslint-config
```

## Usage

### Basic Setup

Create `eslint.config.js` in your project:

```javascript
import js from '@eslint/js'
import tseslint from '@typescript-eslint/eslint-plugin'
import tsparser from '@typescript-eslint/parser'

export default [
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
]
```

### With Custom Rules

```javascript
export default [
	// ... base config
	{
		rules: {
			// Your custom rules here
			'no-console': 'error',
		},
	},
]
```

### Package.json Scripts

```json
{
	"scripts": {
		"lint": "eslint . --ext .ts,.js",
		"lint:fix": "eslint . --ext .ts,.js --fix"
	}
}
```

## Configuration Details

### TypeScript Rules (Soft)
- Unused variables: warning (ignores `_` prefixed)
- `any` types: warning
- Explicit return types: optional
- Non-null assertions: warning

### Bun Optimizations
- `process.exit` allowed
- Buffer constructor warnings disabled
- Modern ES features enabled

### Test Files
- Jest environment enabled
- Relaxed rules for test files
- Console logging allowed

## Dependencies

This config requires:
- ESLint 9.x
- TypeScript 5.x

## License

MIT
