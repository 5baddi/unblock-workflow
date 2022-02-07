import { inject } from "inversify";
import Symbols from "../../symbols";
import { IDefinitionService } from "../../interfaces/services";
import { IEntity } from "../../interfaces/entity";
import { IDefinitionController } from "../../interfaces/controllers";

export class DefinitionController implements IDefinitionController
{
    private readonly definitionService: IDefinitionService;

    constructor(
        @inject(Symbols.DefinitionService) definitionService: IDefinitionService
    ) {
        this.definitionService = definitionService;
    }

    async save(request, response)
    {
        console.log(request.body);
        let definition = request.body.definition;
        if (! definition) {
            return response.status(401).json({
                success: false,
                message: "Definition is required!",
            })
        }

        return await this.definitionService
            .saveDefinition(definition)
            .then((entity: IEntity | undefined) => {
                if (! entity) {
                    throw new Error("Definition not saved!");
                }

                return response.status(201).json({
                    success: true,
                    id: entity._id,
                    message: "Definition saved!",
                });
            })
            .catch(error => {
                return response.status(400).json({
                    error,
                    message: "Definition not saved!",
                });
            });
    }
}