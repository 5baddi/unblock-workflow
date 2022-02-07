import express from "express";

export interface IAPIController
{
    save(request: express.Request, response: express.Response): express.Response;
}