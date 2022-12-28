import { useApiGetClimate } from "services/useApiGetCityWeather";

const makeSut = () => ({
  sut: useApiGetClimate,
});

const MOCK = {
    "status": "success",
    "fetchStatus": "idle",
    "isLoading": false,
    "isSuccess": true,
    "isError": false,
    "isInitialLoading": false,
    "data": {
        "data": {
            "coord": {
                "lon": -0.1257,
                "lat": 51.5085
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10n"
                }
            ],
            "base": "stations",
            "main": {
                "temp": 8.36,
                "feels_like": 5.1,
                "temp_min": 7.64,
                "temp_max": 9.33,
                "pressure": 1013,
                "humidity": 90
            },
            "visibility": 10000,
            "wind": {
                "speed": 6.17,
                "deg": 210
            },
            "rain": {
                "1h": 0.17
            },
            "clouds": {
                "all": 75
            },
            "dt": 1672171318,
            "sys": {
                "type": 2,
                "id": 2075535,
                "country": "GB",
                "sunrise": 1672128354,
                "sunset": 1672156610
            },
            "timezone": 0,
            "id": 2643743,
            "name": "London",
            "cod": 200
        },
        "status": 200,
        "statusText": "OK",
        "headers": {
            "content-length": "478",
            "content-type": "application/json; charset=utf-8"
        },
        "config": {
            "transitional": {
                "silentJSONParsing": true,
                "forcedJSONParsing": true,
                "clarifyTimeoutError": false
            },
            "adapter": [
                "xhr",
                "http"
            ],
            "transformRequest": [
                null
            ],
            "transformResponse": [
                null
            ],
            "timeout": 0,
            "xsrfCookieName": "XSRF-TOKEN",
            "xsrfHeaderName": "X-XSRF-TOKEN",
            "maxContentLength": -1,
            "maxBodyLength": -1,
            "env": {},
            "headers": {
                "Accept": "application/json, text/plain, */*"
            },
            "method": "get",
            "url": "https://api.openweathermap.org/data/2.5/weather?q=Londres&appid=2a70c4d623654daecbe0ab9704c390ad&units=metric"
        },
        "request": {}
    },
    "dataUpdatedAt": 1672171540735,
    "error": null,
    "errorUpdatedAt": 0,
    "failureCount": 0,
    "failureReason": null,
    "errorUpdateCount": 0,
    "isFetched": true,
    "isFetchedAfterMount": true,
    "isFetching": false,
    "isRefetching": false,
    "isLoadingError": false,
    "isPaused": false,
    "isPlaceholderData": false,
    "isPreviousData": false,
    "isRefetchError": false,
    "isStale": false
}
const MOCK_DATA = {
    "coord": {
        "lon": -0.1257,
        "lat": 51.5085
    },
    "weather": [
        {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 8.36,
        "feels_like": 5.1,
        "temp_min": 7.64,
        "temp_max": 9.33,
        "pressure": 1013,
        "humidity": 90
    },
    "visibility": 10000,
    "wind": {
        "speed": 6.17,
        "deg": 210
    },
    "rain": {
        "1h": 0.17
    },
    "clouds": {
        "all": 75
    },
    "dt": 1672171318,
    "sys": {
        "type": 2,
        "id": 2075535,
        "country": "GB",
        "sunrise": 1672128354,
        "sunset": 1672156610
    },
    "timezone": 0,
    "id": 2643743,
    "name": "London",
    "cod": 200
}

describe(useApiGetClimate.name, () => {
  test("shloud be return data when value is London", () => {
    // const { sut } = makeSut();
    // const result = sut("London");
    // expect(result).toBe(MOCK);
  });
});
