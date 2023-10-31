namespace Api {
    export type Journey = {
        /** number */
        LineNumber: string;
        /** number, same as LineNumber */
        DirectionCode: string;
        /** number, corresponds to StopPointNumber */
        JourneyPatternPointNumber: string;
        /** ISO date */
        LastModifiedUtcDateTime: string;
        /** ISO date */
        ExistsFromDate: string;
    };

    export type Stop = {
        /** number */
        StopPointNumber: string;
        StopPointName: string;
        /** number */
        StopAreaNumber: string;
        /** float number */
        LocationNorthingCoordinate: string;
        /** float number */
        LocationEastingCoordinate: string;
        ZoneShortName: string;
        StopAreaTypeCode: string;
        /** ISO date */
        LastModifiedUtcDateTime: string;
        /** ISO date */
        ExistsFromDate: string;
    };

    export interface Response<T> {
        isLoading: boolean;
        data: T;
        error?: Error;
    }
}
