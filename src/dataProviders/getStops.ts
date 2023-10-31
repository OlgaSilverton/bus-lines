import stopDataMock from '../mocks/bus-stop.json';

/* Here should be an actual fetch, proper types for the response and an actual error handling (try/catch, retries, throwing different errors based on the error code) */
export function getStops(): Api.Response<Api.Stop[]> {
    return {
        isLoading: false,
        // @ts-ignore
        data: stopDataMock.ResponseData.Result,
        error: undefined,
    };
}
