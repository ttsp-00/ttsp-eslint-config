# TTSP ESLint Config

Shared ESLint configuration for TTSP packages with TypeScript and Bun support.

## Features

- **Latest ESLint 9.x** with TypeScript 8.x support
- **Soft rules** for better developer experience
- **Bun runtime** optimizations
- **Test files** support with relaxed rules
- **Modern ES2024** features enabled
- **No Prettier dependencies** - pure ESLint configuration

## Installation

```bash
bun add -D ttsp-eslint-config
```

## Usage

### Basic Setup

Create `eslint.config.js` in your project:

```javascript
import config from 'ttsp-eslint-config'

export default config
```

### With Custom Rules

```javascript
import config from 'ttsp-eslint-config'

export default [
	...config,
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

### Code Style Rules
- Single quotes preferred
- No semicolons required
- camelCase for variables and functions
- PascalCase for classes and interfaces

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
