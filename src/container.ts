import { Container as DependencyContainer } from "inversify";
import "reflect-metadata";
import Symbols  from "./symbols";
import { Logger } from "./logger";
import { MongoDBProvider } from "./providers/mongodb";
import { MongoDBService } from "./services/mongodb";
import { DefinitionService } from "./services/definition";
import { DefinitionController } from "./api/controllers/definition";

let container = new DependencyContainer();
container.bind<Logger>(Symbols.Logger).to(Logger).inSingletonScope();
container.bind<MongoDBProvider>(Symbols.MongoDBProvider).to(MongoDBProvider).inSingletonScope();

container.bind<MongoDBService>(Symbols.MongoDBService).to(MongoDBService);
container.bind<DefinitionService>(Symbols.DefinitionService).to(DefinitionService);

container.bind<DefinitionController>(Symbols.DefinitionController).to(DefinitionController);

export { container as Container };