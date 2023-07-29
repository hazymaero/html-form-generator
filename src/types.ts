export enum InputType {
    Text = "Text",
    Number = "Number",
    Option = "Option",
}

export interface TextInputParameters {
    label: string,
    placeHolder: string,
    id: string,
}

export interface OptionInputParameters {
    options: string[],
    label: string,
    id: string,
}

export interface NumberInputParameters {
    label: string,
    id: string,
    placeHolder: string,
}
