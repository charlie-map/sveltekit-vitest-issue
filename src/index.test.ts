import { describe, it, expect } from 'vitest';
import { functionToTest } from '$lib';

describe('test functionToTest', () => {
	it('should return This ran!', () => {
		expect(functionToTest()).toBe('This ran!');
	});
});
