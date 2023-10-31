export function processJourneyData(
    journeys: Api.Journey[]
): Record<string, string[]> {
    const linesWithStops: Record<string, string[]> = {};

    journeys.forEach((item) => {
        const lineNumber = item.LineNumber;
        const stopNumber = item.JourneyPatternPointNumber;

        if (!linesWithStops[lineNumber]) {
            linesWithStops[lineNumber] = [stopNumber];
        } else {
            linesWithStops[lineNumber].push(stopNumber);
        }
    });

    return linesWithStops;
}
