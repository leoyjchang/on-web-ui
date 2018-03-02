/*
 This defines the data model of Node's workflow.
*/
import { Task } from './task';

export class Workflow {
    node: string;
    status: string;
    context: {};
    definition: string;
    domain: string;
    id: string;
    injectableName: string;
    instanceId: string;
    logContext: {};
    name: string;
    serviceGraph: string;
    tasks: Array<Task>;
}
