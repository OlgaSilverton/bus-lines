import { LineData } from './getLongestLines';

export const MOCK_JOURNEYS = [
    {
        LineNumber: '1',
        JourneyPatternPointNumber: '10008',
    },
    {
        LineNumber: '1',
        JourneyPatternPointNumber: '10012',
    },
    {
        LineNumber: '2',
        JourneyPatternPointNumber: '10014',
    },
    {
        LineNumber: '2',
        JourneyPatternPointNumber: '10016',
    },
    {
        LineNumber: '2',
        JourneyPatternPointNumber: '10024',
    },
    {
        LineNumber: '3',
        JourneyPatternPointNumber: '10034',
    },
    {
        LineNumber: '4',
        JourneyPatternPointNumber: '10038',
    },
    {
        LineNumber: '4',
        JourneyPatternPointNumber: '10042',
    },
    {
        LineNumber: '4',
        JourneyPatternPointNumber: '10044',
    },
    {
        LineNumber: '4',
        JourneyPatternPointNumber: '10053',
    },
    {
        LineNumber: '5',
        JourneyPatternPointNumber: '10055',
    },
] as Api.Journey[];

export const MOCK_STOPS = [
    {
        StopPointNumber: '10008',
        StopPointName: 'S:t Eriksgatan',
    },
    {
        StopPointNumber: '10012',
        StopPointName: 'Celsiusgatan',
    },
    {
        StopPointNumber: '10014',
        StopPointName: 'Scheelegatan',
    },
    {
        StopPointNumber: '10016',
        StopPointName: 'Kungsbroplan',
    },
    {
        StopPointNumber: '10024',
        StopPointName: 'Hötorget',
    },
    {
        StopPointNumber: '10034',
        StopPointName: 'Humlegården',
    },
    {
        StopPointNumber: '10038',
        StopPointName: 'Nybrogatan',
    },
    {
        StopPointNumber: '10042',
        StopPointName: 'Jungfrugatan',
    },
    {
        StopPointNumber: '10044',
        StopPointName: 'Värtavägen',
    },
    {
        StopPointNumber: '10053',
        StopPointName: 'Frihamnsporten',
    },
    {
        StopPointNumber: '10055',
        StopPointName: 'Sehlstedtsgatan',
    },
] as Api.Stop[];

export const MOCK_LINE_DATA: Record<string, string[]> = {
    '1': ['10008', '10012'],
    '2': ['10014', '10016', '10024'],
    '3': ['10034'],
    '4': ['10038', '10042', '10044', '10053'],
    '5': ['10055'],
};

export const MOCK_SORTED_LINE_DATA: string[] = ['4', '2', '1', '3', '5'];

export const MOCK_LINE_DATA_WITH_STOP_NAMES: LineData[] = [
    {
        lineNumber: '4',
        stopsCount: 4,
        stops: ['Nybrogatan', 'Jungfrugatan', 'Värtavägen', 'Frihamnsporten'],
    },
    {
        lineNumber: '2',
        stopsCount: 3,
        stops: ['Scheelegatan', 'Kungsbroplan', 'Hötorget'],
    },
    {
        lineNumber: '1',
        stopsCount: 2,
        stops: ['S:t Eriksgatan', 'Celsiusgatan'],
    },
    {
        lineNumber: '3',
        stopsCount: 1,
        stops: ['Humlegården'],
    },
    {
        lineNumber: '5',
        stopsCount: 1,
        stops: ['Sehlstedtsgatan'],
    },
];

export const MOCK_LINE_DATA_WITH_STOP_NUMBERS: LineData[] = [
    {
        lineNumber: '4',
        stopsCount: 4,
        stops: ['10038', '10042', '10044', '10053'],
    },
    {
        lineNumber: '2',
        stopsCount: 3,
        stops: ['10014', '10016', '10024'],
    },
    {
        lineNumber: '1',
        stopsCount: 2,
        stops: ['10008', '10012'],
    },
    {
        lineNumber: '3',
        stopsCount: 1,
        stops: ['10034'],
    },
    {
        lineNumber: '5',
        stopsCount: 1,
        stops: ['10055'],
    },
];
