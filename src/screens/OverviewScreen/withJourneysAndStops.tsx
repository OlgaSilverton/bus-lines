import * as React from 'react';

import { getJourneys } from '../../dataProviders/getJourneys';
import { getStops } from '../../dataProviders/getStops';

export interface WithJourneysAndStopsProps {
    journeys: Api.Journey[];
    stops: Api.Stop[];
}

/* Actually it is better to separate journeys and stops data handling
 * because user may never even open the full stops list, and the failure with the stops data shoildn't be blocking the whole screen */
export function withJourneysAndStops<
    T extends WithJourneysAndStopsProps = WithJourneysAndStopsProps,
>(Component: React.ComponentType<T>) {
    function HOC(hocProps: Omit<T, keyof WithJourneysAndStopsProps>) {
        const {
            isLoading: journeysLoading,
            data: journeyData,
            error: journeyError,
        } = getJourneys();
        const {
            isLoading: stopsLoading,
            data: stopData,
            error: stopsError,
        } = getStops();

        /* Nice spinner here, and might be better to handle all the loading states on the app level */
        if (journeysLoading || stopsLoading) {
            return <div>Loading...</div>;
        }

        /* Errors also better be hadled on the app level, and with respect of error codes */
        /* Add retries on data provider level also for certain cases */
        if (journeyError || stopsError) {
            return <div>An error occured</div>;
        }

        if (!journeyData.length || !stopData.length) {
            return <div>Nothing found</div>;
        }

        return (
            <Component
                {...(hocProps as T)}
                journeys={journeyData}
                stops={stopData}
            />
        );
    }

    HOC.displayName = `withJourneysAndStops(${
        Component.displayName || Component.name
    })`;

    return HOC;
}
