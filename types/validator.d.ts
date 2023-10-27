import { Validator } from "validatorjs";

export interface ISchema {
    rules: Validator.Rules,
    attributes?: Validator.AttributeNames, 
    messages?: any,
}
