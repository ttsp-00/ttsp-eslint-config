# TTSP ESLint Config

Shared ESLint configuration for TTSP packages with TypeScript and Bun support.

## Features

- **Latest ESLint 9.x** with TypeScript 8.x support
- **Soft rules** for better developer experience
- **Bun runtime** optimizations
- **Prettier integration** for consistent formatting
- **Test files** support with relaxed rules
- **Modern ES2024** features enabled

## Installation

```bash
bun add -D ttsp-eslint-config
```

## Usage

### Basic Setup

Create `.eslintrc.js` in your project:

```javascript
module.exports = {
	extends: ['ttsp-eslint-config'],
};
```

### With Custom Rules

```javascript
module.exports = {
	extends: ['ttsp-eslint-config'],
	rules: {
		// Your custom rules here
		'no-console': 'error',
	},
};
```

### Package.json Scripts

```json
{
	"scripts": {
		"lint": "eslint . --ext .ts,.js",
		"lint:fix": "eslint . --ext .ts,.js --fix",
		"format": "prettier --write ."
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
- Prettier 3.x

## License

MIT
