import { inject, injectable } from "inversify";
import Symbols from "../../symbols";
import { IDefinitionService } from "../../interfaces/services";
import { IEntity } from "../../interfaces/entity";
import { IAPIController } from "../../interfaces/controllers";
import express  from "express";

@injectable()
export class DefinitionController implements IAPIController
{
    // private readonly definitionService: IDefinitionService;
    //
    // constructor(
    //     @inject(Symbols.DefinitionService) definitionService: IDefinitionService
    // ) {
    //     this.definitionService = definitionService;
    // }

    async save(request: express.Request, response: express.Response): express.Response
    {
        console.log(request.body);
        // let definition = request.body.definition;
        // if (! definition) {
        //     return response.status(401).json({
        //         success: false,
        //         message: "Definition is required!",
        //     })
        // }
        //
        // return await this.definitionService
        //     .saveDefinition(definition)
        //     .then((entity: IEntity | undefined) => {
        //         if (! entity) {
        //             throw new Error("Definition not saved!");
        //         }
        //
        //         return response.status(201).json({
        //             success: true,
        //             id: entity._id,
        //             message: "Definition saved!",
        //         });
        //     })
        //     .catch(error => {
        //         return response.status(400).json({
        //             error,
        //             message: "Definition not saved!",
        //         });
        //     });
    }
}