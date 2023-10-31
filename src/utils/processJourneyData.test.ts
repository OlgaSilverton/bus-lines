import { processJourneyData } from './processJourneyData';
import { MOCK_JOURNEYS, MOCK_LINE_DATA } from './test-mocks';

describe('processJourneyData', () => {
    it('should work as intended', () => {
        const lineData = processJourneyData(MOCK_JOURNEYS);
        expect(lineData).toEqual(MOCK_LINE_DATA);
    });

    it('should return empty object for empty input', () => {
        const lineData = processJourneyData([]);
        expect(lineData).toEqual({});
    });
});
