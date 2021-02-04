import { numberChecker } from '../src/numberChecker'

describe('Checking for low numbers', () => {
    it('should return low when less than 6', () => {
        expect(numberChecker(5)).toEqual('low')
    });
});