# apod-api-react

## Descripcion
La API APOD (Astronomy Picture of the Day) es una de las mas consultadas de la NASA. La API provee de imagenes astronimicas diarias.

## HTTP Request
`GET https://api.nasa.gov/planetary/apod`

## Query Parameters
Los query params utilizados fueron los siguientes...
| Parameter | Type       | Default  | Description                            |
|-----------|------------|----------|----------------------------------------|
| date      | YYYY-MM-DD | today    | The date of the APOD image to retrieve |
| api_key   | string     | DEMO_KEY | api.nasa.gov key for expanded usage    |