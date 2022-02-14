
import { NodeBlock, tripetto } from "tripetto";

const BLOCK_NAME = "aws-dynamodb";
const BLOCK_VERSION = "0.0.1";

@tripetto({
    type: "node",
    identifier: BLOCK_NAME,
    icon: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+Cjxzdmcgdmlld0JveD0iLTQwIC0zNSAzNDAgMzQwIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHByZXNlcnZlQXNwZWN0UmF0aW89InhNaWRZTWlkIj4KCTxnPgoJCTxwYXRoIGQ9Ik0xNjUuMjU4LDI4OC41MDEgTDE2OC43NjYsMjg4LjUwMSBMMjI2LjAyNywyNTkuODY3IEwyMjYuOTgsMjU4LjUyIEwyMjYuOTgsMjkuOTY0IEwyMjYuMDI3LDI4LjYxIEwxNjguNzY2LDAgTDE2NS4yMTUsMCBMMTY1LjI1OCwyODguNTAxIiBmaWxsPSIjNTI5NENGIi8+CgkJPHBhdGggZD0iTTkwLjc0MSwyODguNTAxIEw4Ny4xODQsMjg4LjUwMSBMMjkuOTcyLDI1OS44NjcgTDI4LjgxMSwyNTcuODcgTDI4LjIyMiwzMS4xMjggTDI5Ljk3MiwyOC42MSBMODcuMTg0LDAgTDkwLjc4NSwwIEw5MC43NDEsMjg4LjUwMSIgZmlsbD0iIzFGNUI5OCIvPgoJCTxwYXRoIGQ9Ik04Ny4yODUsMCBMMTY4LjcxMSwwIEwxNjguNzExLDI4OC41MDEgTDg3LjI4NSwyODguNTAxIEw4Ny4yODUsMCBaIiBmaWxsPSIjMkQ3MkI4Ii8+CgkJPHBhdGggZD0iTTI1NiwxMzcuNzY5IEwyNTQuMDY1LDEzNy4zNCBMMjI2LjQzNywxMzQuNzY0IEwyMjYuMDI3LDEzNC45NjggTDE2OC43MTUsMTMyLjY3NiBMODcuMjg1LDEzMi42NzYgTDI5Ljk3MiwxMzQuOTY4IEwyOS45NzIsOTEuMjY0IEwyOS45MTIsOTEuMjk2IEwyOS45NzIsOTEuMTY4IEw4Ny4yODUsNzcuODg4IEwxNjguNzE1LDc3Ljg4OCBMMjI2LjAyNyw5MS4xNjggTDI0Ny4wOTYsMTAyLjM2NyBMMjQ3LjA5Niw5NS4xNjcgTDI1Niw5NC4xOTMgTDI1NS4wNzgsOTIuMzk1IEwyMjYuODg2LDcyLjIzNiBMMjI2LjAyNyw3Mi41MTUgTDE2OC43MTUsNTQuNzU2IEw4Ny4yODUsNTQuNzU2IEwyOS45NzIsNzIuNTE1IEwyOS45NzIsMjguNjEgTDAsNjMuNzIzIEwwLDk0LjM4OSBMMC4yMzIsOTQuMjIxIEw4LjkwNCw5NS4xNjcgTDguOTA0LDEwMi41MTUgTDAsMTA3LjI4IEwwLDEzNy43OTMgTDAuMjMyLDEzNy43NjkgTDguOTA0LDEzNy44OTcgTDguOTA0LDE1MC43MDQgTDEuNDIyLDE1MC44MTYgTDAsMTUwLjY4IEwwLDE4MS4yMDUgTDguOTA0LDE4NS45OTMgTDguOTA0LDE5My40MjYgTDAuMzczLDE5NC4zNjggTDAsMTk0LjA4OCBMMCwyMjQuNzQ5IEwyOS45NzIsMjU5Ljg2NyBMMjkuOTcyLDIxNS45NjYgTDg3LjI4NSwyMzMuNzI1IEwxNjguNzE1LDIzMy43MjUgTDIyNi4xOTYsMjE1LjkxNCBMMjI2Ljk2LDIxNi4yNDkgTDI1NC43ODEsMTk2LjM4NyBMMjU2LDE5NC40MDggTDI0Ny4wOTYsMTkzLjQyNiBMMjQ3LjA5NiwxODYuMTQyIEwyNDUuOTI5LDE4NS42NzYgTDIyNi44ODYsMTk1Ljk0MSBMMjI2LjE5NiwxOTcuMzgxIEwxNjguNzE1LDIxMC41ODQgTDE2OC43MTUsMjEwLjYgTDg3LjI4NSwyMTAuNiBMODcuMjg1LDIxMC41ODQgTDI5Ljk3MiwxOTcuMzI1IEwyOS45NzIsMTUzLjQ2MSBMODcuMjg1LDE1NS43NDUgTDg3LjI4NSwxNTUuODAxIEwxNjguNzE1LDE1NS44MDEgTDIyNi4wMjcsMTUzLjQ2MSBMMjI3LjMzMiwxNTQuMDYxIEwyNTQuMTExLDE1MS43NTUgTDI1NiwxNTAuODMyIEwyNDcuMDk2LDE1MC43MDQgTDI0Ny4wOTYsMTM3Ljg5NyBMMjU2LDEzNy43NjkiIGZpbGw9IiMxQTQ3NkYiLz4KCQk8cGF0aCBkPSJNMjI2LjAyNywyMTUuOTY2IEwyMjYuMDI3LDI1OS44NjcgTDI1NiwyMjQuNzQ5IEwyNTYsMTk0LjI4OCBMMjI2LjIsMjE1LjkxNCBMMjI2LjAyNywyMTUuOTY2IiBmaWxsPSIjMkQ3MkI4Ii8+CgkJPHBhdGggZD0iTTIyNi4wMjcsMTk3LjQyMSBMMjI2LjIsMTk3LjM4MSBMMjU2LDE4MS4zNTMgTDI1NiwxNTAuNzA0IEwyMjYuMDI3LDE1My40NjEgTDIyNi4wMjcsMTk3LjQyMSIgZmlsbD0iIzJENzJCOCIvPgoJCTxwYXRoIGQ9Ik0yMjYuMiw5MS4yMDggTDIyNi4wMjcsOTEuMTY4IEwyMjYuMDI3LDEzNC45NjggTDI1NiwxMzcuNzY5IEwyNTYsMTA3LjEzNSBMMjI2LjIsOTEuMjA4IiBmaWxsPSIjMkQ3MkI4Ii8+CgkJPHBhdGggZD0iTTIyNi4yLDcyLjY4NyBMMjU2LDk0LjE5MyBMMjU2LDYzLjczMSBMMjI2LjAyNywyOC42MSBMMjI2LjAyNyw3Mi41MTUgTDIyNi4yLDcyLjU3NSBMMjI2LjIsNzIuNjg3IiBmaWxsPSIjMkQ3MkI4Ii8+Cgk8L2c+Cjwvc3ZnPgo=",
    alias: BLOCK_NAME,
    version: BLOCK_VERSION,
    kind: "headless",
    get label() {
        // TODO: use translation
        return "AWS DynamoDB";
    }
})
export class AWSDynamoDB extends NodeBlock
{

}