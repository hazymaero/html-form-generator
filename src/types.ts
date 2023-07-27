export enum InputType {
    Text = "text",
    Number = "number",
    Option = "option",
}

export interface NewInputParamaters {
    inputType: InputType,
    placeHolderText?: string,
    options?: string[],
}
