import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import { Guid } from "guid-typescript";

interface Person {
    id: string,
    email: string;
    partitionKey: string;
    firstName: string;
    lastName: string;
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    let p: Person = {
        id: Guid.create().toString(),
        email: req.body.email,
        partitionKey: req.body.firstName[0],
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    };

    context.bindings.personOut = p;

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: p
    };
};

export default httpTrigger;
