export enum InputType {
    Text = "Text",
    Number = "Number",
    Option = "Option",
}

export interface NewInputParamaters {
    inputType: InputType,
    placeHolderText?: string,
    options?: string[],
}

export interface TextInputParameters {
    label: string,
    placeHolderText: string,
    id: string,
}

export interface OptionInputParameters {
    options: string[],
    label: string,
    id: string,
}
