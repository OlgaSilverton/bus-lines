import { sortByLength } from './sortByLength';
import { MOCK_LINE_DATA, MOCK_SORTED_LINE_DATA } from './test-mocks';

describe('sortByLength', () => {
    it('should work as intended', () => {
        const sorted = sortByLength(MOCK_LINE_DATA);
        expect(sorted).toEqual(MOCK_SORTED_LINE_DATA);
    });
});
