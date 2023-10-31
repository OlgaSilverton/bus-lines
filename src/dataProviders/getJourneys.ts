import journeyDataMock from '../mocks/bus-jour.json';

/* Here should be an actual fetch, proper types for the response and an actual error handling (try/catch, retries, throwing different errors based on the error code) */
export function getJourneys(): Api.Response<Api.Journey[]> {
    return {
        isLoading: false,
        // @ts-ignore
        data: journeyDataMock.ResponseData.Result,
        error: undefined,
    };
}
