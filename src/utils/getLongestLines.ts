import { processJourneyData } from './processJourneyData';
import { sortByLength } from './sortByLength';

const LINES_TO_DISPLAY = 10;

type GetLongestLinesProps = {
    stops: Api.Stop[];
    journeys: Api.Journey[];
    linesToDisplay?: number;
};

export type LineData = {
    lineNumber: string;
    stopsCount: number;
    stops: string[];
};

/* Probably should separate api types and component types here and not use api types as is as component shouldn't be dependent on the api,
 * but this function here is more like a normalizer/post-processing function over the raw data */
/* Weather to do it on the screen level or data provider level depends on the further data usage in the app, in this particular case it doesn't matter */
/* In general I prefer to make minimal changes to the data structure if possible between the api and actual consumer, imo it is easier to debug later on */
export function getLongestLines(props: GetLongestLinesProps): LineData[] {
    const { journeys, stops, linesToDisplay = LINES_TO_DISPLAY } = props;

    // Convert the journeys array into the { [lineNumber]: stopNumber[] } structure
    const linesWithStops = processJourneyData(journeys);

    // sort lines by the stops count, longest first
    const sortedLineNumbers = sortByLength(linesWithStops);

    /* Depending on the other app needs it might be better to prepare full data set here and take the first 10 on the component level, for example if we have the "show more" button */
    /* Ideally there should be pagination on the backend side, so I would make our own simple backend over the public Traficlab api to handle all the data transformations and have more control over it */

    // take first 10
    const longestLinesToDisplay = sortedLineNumbers.slice(0, linesToDisplay);

    // change stop numbers to stop names
    const preparedLineData = longestLinesToDisplay.map((item) => ({
        lineNumber: item,
        stopsCount: linesWithStops[item].length,
        stops: linesWithStops[item].map(
            (stopNumber) =>
                stops.find((stop) => stop.StopPointNumber === stopNumber)
                    ?.StopPointName || stopNumber
        ),
    }));

    return preparedLineData;
}
