/**
 * Test file for ESLint configuration
 * This file is used to verify that our ESLint config works correctly
 */

import { test, expect } from 'bun:test'

// Test variables with different naming conventions
const testVariable = 'hello world'
const _unusedVariable = 'this should be ignored'
let mutableVar = 'can be changed'

// Test function with TypeScript
function testFunction(param: string): string {
	return param.toUpperCase()
}

// Test arrow function
const arrowFunction = (value: number): number => {
	return value * 2
}

// Test class
class TestClass {
	private _privateProperty: string

	constructor(value: string) {
		this._privateProperty = value
	}

	public getValue(): string {
		return this._privateProperty
	}
}

// Test interface
interface TestInterface {
	name: string
	age: number
}

// Test object with different quote styles
const testObject = {
	name: 'John',
	age: 30,
	'complex-key': 'value',
}

// Test array
const testArray = ['item1', 'item2', 'item3']

// Test conditional
if (testVariable === 'hello world') {
	console.log('Condition met')
}

// Test loop
for (const item of testArray) {
	console.log(item)
}

// Test async function
async function asyncTest(): Promise<void> {
	await new Promise(resolve => setTimeout(resolve, 100))
}

// Test with any type (should show warning)
const anyValue: any = 'this should warn'

// Test with non-null assertion (should show warning)
const nonNullValue = testVariable!

// Export for testing
export {
	testFunction,
	arrowFunction,
	TestClass,
	testObject,
	testArray,
	asyncTest,
}

export type { TestInterface } 