import { CustomIntegrationBlock } from "../../integrations";
import { Node, tripetto } from "tripetto";

    const BLOCK_NAME = "circleCi";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAMAAABG8BK2AAAAmVBMVEUAAAAVFBUEAwQVExUAAAAAAAAVFBUWExYVFBUUFBQcHBwVFBUUFBQVExUVERURDxEVExUUExQVFBUUFBQVFBUVFBUUEhQUFBQVExUUFBQVFBUVExUUExQVExUWFhYZGRkVFRUVFBUVFBUVFBUVFBUVFBUUFBQWFBYWFhYTExMUFBQTExMUFBQVFBUVExUVFBUWFRYVFBUVFBX33+L1AAAAMnRSTlMA/QX5AwL7adxiCHqYux8QqUHn4cuOKZ9t79fEr4UiFAy19eyUgHJGLhpLNTPPWlI54+oyz24AAAM7SURBVFjDlJWJduIwDEUly3ZD2MtaylrWlnbaef//cYNLIIntAPNyTuDYyZWebCsUlVHurubdWn3QGDUG9Vq3pX+HDD0s7d44jKeJBZhxvknSGQ8dSD8Omde/4MRyEcOpX289CFJEPx3rwgszcjGLddzOkUg9ADmsABQQZdTpPh3eAylKNy4kI65sbpDe4hii/bOLeFsC7nXJmGpDM2cH9+QCbauMKVJNZsYjYuapIRWlLCZBUW6V6GtJKkbpQfC4BEk74GhaJh7lPmeSkiZP/YByn/MaJNNhwf9KeFSypeipisJnVXFqBY6mIcAxhFicZSVGYsg8L4+h11hhLON0rZNJsob7Z2PlaZK5WqpFLDkjyeZ72Fak2sPvTeKGIpw/V1vLZ3A4j9W+tAofTUBCWz11SaYeJMOWJ103p0zWVN3D+wSWgyrvSFUkw4yGY1BRSpMeBcYYf9NssSH+FMYUPTC0CziCbNH7YC8XN2PiH4wnn2OzvfyJgF8nVdmTZhA/9QNpohmLR1kVT5zRSpc6ZNPjCLuovifG23uOycqckzS1xH/h9QRvMYtYJ/m93hy8UNTFsfvZpuLQliWIS2niFbiX5gboZ/oCYN05Fly1X/x0Pojo/amsFuWLNABwPt+zQpUbkHJxto7uy1x/R8zC587LDdIXTLe86ILOeaOXlJ/Ycd7iOW8thtLytrfoU6h4DRjPaZanpiZs+XimN77DNUi0JSgasJQwL4sbmJGHaVwxOw8jrWpTXurWbe5ongye/6vF2nEQhmFoTRxPsCGBuEAlxJT7H45QF6UiH6d9wUvVJamT+v3+vQzeVHFPsY64/8Kn+oXjvx+FqzUM4iiWOQz5aN6PjOYooFDYSpXD1qsHtgwQZdaHCaI2pDN7E9L3EwyVCSZ2JQW6m6p0FzK684PItyUFuFcKNIRJeMwL27FX5vws+awJk6ZMusx+h0zCRVtTQtKPhJSahLQEbdgAhS1ocXmdvud2SOwrPOPWY7QRwm0ZbhJByyrJssIGmmshx2rnyepH7TweLsQDQKIOsaMOLf8NXsgJEW2HQlwevNgxEOn2WrK8aQzEvXnSaQ2lHBBKZRHZuSMiewPdyr8Dzj/WNwAAAABJRU5ErkJggg==",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "CircleCI";
        }
    })
    export class CircleCI extends CustomIntegrationBlock {
        constructor(pNode: Node) {
            super(pNode);
            this.BLOCK_NAME = BLOCK_NAME;
        }
    }
      
    