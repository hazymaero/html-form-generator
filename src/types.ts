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

export const isEmptyTextParameters = (param: TextInputParameters): boolean => {
    return (param.label == undefined || param.id == undefined || param.placeHolder == undefined);
}

export const isEmptyNumberParameters = (param: NumberInputParameters): boolean => {
    return (param.label == undefined || param.id == undefined || param.placeHolder == undefined);
}

export const isEmptyOptionParameters = (param: OptionInputParameters): boolean => {
    return (param.label == undefined || param.id == undefined || param.options.length == 0);
}
