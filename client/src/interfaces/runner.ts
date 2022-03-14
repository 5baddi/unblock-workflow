import { IDefinition } from "tripetto-runner-foundation";
import { ICluster, IBuilder } from '@tripetto/map';

export interface RunnerIDefinition extends IDefinition {
    clusters: ICluster[],
    builder: IBuilder
}