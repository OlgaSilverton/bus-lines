import { getLongestLines } from './getLongestLines';
import {
    MOCK_JOURNEYS,
    MOCK_LINE_DATA_WITH_STOP_NAMES,
    MOCK_LINE_DATA_WITH_STOP_NUMBERS,
    MOCK_STOPS,
} from './test-mocks';

describe('getLongestLines', () => {
    it('should work as intended', () => {
        const lineData = getLongestLines({
            stops: MOCK_STOPS,
            journeys: MOCK_JOURNEYS,
        });
        expect(lineData).toEqual(MOCK_LINE_DATA_WITH_STOP_NAMES);
    });

    it('should respect the linesToDisplay prop', () => {
        const lineData = getLongestLines({
            stops: MOCK_STOPS,
            journeys: MOCK_JOURNEYS,
            linesToDisplay: 2,
        });
        expect(lineData).toHaveLength(2);
    });

    it('should show stop numbers if no stop names data is available', () => {
        const lineData = getLongestLines({
            stops: [],
            journeys: MOCK_JOURNEYS,
        });
        expect(lineData).toEqual(MOCK_LINE_DATA_WITH_STOP_NUMBERS);
    });

    it('should return empty array if no journey data is available', () => {
        const lineData = getLongestLines({ stops: MOCK_STOPS, journeys: [] });
        expect(lineData).toEqual([]);
    });
});
