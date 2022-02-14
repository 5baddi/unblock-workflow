import { NodeBlock, tripetto } from "tripetto";

    const BLOCK_NAME = "hunter";
    const BLOCK_VERSION = "0.0.1";
    
    @tripetto({
        type: "node",
        identifier: BLOCK_NAME,
        icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAw1BMVEUAAAD/Qhz/VxX/RQD/RQD/RAD/PQH/SAD/RQD/OwH/RgD/OQD/SAD/SAD/RgD/QQD/RgD/RAD/QQD/OgD/SgD/SgD/SAD/RAD/QgD/QgD/SAD/SgD/SQD/SAD/SAD/RgD/SAD/SgD/SQD/RAD/RQD/QwD/QgD/PAD/SAD/RAD/SAD/RgD/RgD/RAD/RQD/QgD/QwD/QgD/SwD/TQD/SAD/RwD/QwD/QwD/QgD/PgD/RAD/RQD/SQD/TQD/TAD/TgD/VQBe3z92AAAAO3RSTlMABAL6/fwG/PcKZw7XyJYuYVQbF/nxwoBLMvTt59zPzbyxkoR7OikS4qiejId4c1BGQfTitaZbPSclIH7mBkUAAAKqSURBVEjHxZbXdqMwEIYHVCg27r3bcUlPNj1hJPL+T7WSkiCzwWBf7dg+HMx8558iaYD/Z457KuGqryGPRh2oD8E11NFEEx/udHCNVcWA5URrgjhrAwzE5+VRCIdrSYhsQrAQPm7KGRVPECEjSQ3+oCIvwCktVgBrSWKG09aTZDSefJTJOBwGHUrjOKZVdVHoDfBCCfX0rotMExRjZUxG3HELe/5e85DGxr4uXmcAvACoXJ8LqjWs6TockHFVYcKpQJ/GGWN0XAcnl3ChvhDI9iQoo6lM/jps+JJkFAh6xGSDr/kyfREbBysiJ57QfzGstsD9LbJOCMsS3u128yyYKXRvl+rYpZsJShmRN0Zb6oSI6LVU2dx9jd05skxxmTfaQhBwuEqIUiSyutEbjvPvvnI4E75K1jLKCa8qoK2GJjbsXL/ZbjhQmSMm3RFmcsHorNEc3J0hNbI0Ob/s34YvrwpQnz/dZB4O6z1kmWwS7Dx00OomQkhvvGzpuNY01FGEgmX6TgillO3dK/PY56WjGv9SN6s+lBnELOeYZu612Kz9s14cWCmVUiNiGRjA/OZ4BOKLhm3nsBvTciJZ8G/CNIcUu1NKfDF9B+dHZDcrjoupcqGo2s3DoYGHRajyRyG68749PV03eDoYF1X+iXxc9u8D5bmX/NhjBxRigdVVs679eUroRYMezVWIxej5fuemo8Mim5FCcgg5rn1oh9Tfbpl2lJc+kb2hemrdMzI3if+bEFcO6PjzDyW+SBlLrJVCwSBqVwX5h1AnmCKKmCihZI/AqKI1Chm+8qTP0r3hNYGXDkkY9ASSL4hhVDT+7XiphNUEzWnMxC04R41WaDdmKJARSrbHTX6dL7+/mAhMptwi5RC0wovHpXvK64Wm3rZwkjlcUaeaW9D3v/GpwMArl9LJAAAAAElFTkSuQmCC",
        alias: BLOCK_NAME,
        version: BLOCK_VERSION,
        kind: "headless",
        get label() {
            // TODO: use translation
            return "Hunter";
        }
    })
    export class Hunter extends NodeBlock
    {
    
    }