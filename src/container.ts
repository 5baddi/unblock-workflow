import { Container as DependencyContainer } from "inversify";
import "reflect-metadata";
import Symbols  from "./symbols";
import { Logger } from "./logger";
import { MongoDBProvider } from "./providers/mongodb";
import { MongoDBService } from "./services/mongodb";
import { DefinitionService } from "./services/definition";

let container = new DependencyContainer();
container.bind<Logger>(Symbols.Logger).to(Logger).inSingletonScope();
container.bind<MongoDBProvider>(Symbols.MongoDBProvider).to(MongoDBProvider).inSingletonScope();

container.bind<MongoDBService>(Symbols.MongoDBService).to(MongoDBService);
container.bind<DefinitionService>(Symbols.DefinitionService).to(DefinitionService);

export { container as Container };