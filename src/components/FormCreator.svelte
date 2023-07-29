<script lang="ts">
    import AddInputModal from "./AddInputModal.svelte";
    import { InputType } from "../types";
    import type { TextInputParameters, OptionInputParameters, NumberInputParameters } from "../types";
    import { fade, type FadeParams } from "svelte/transition";

    let addModalVisibility: boolean = false;
    let disableAddButton: boolean = false;
    const fadeTransitionParameters: FadeParams = { duration: 250 };

    let formCode: string = "";

    const handleVisibilityChange = () => {
        addModalVisibility = false;
        disableAddButton = false;
    }

    const handleAddInput = () => {
        addModalVisibility = true;   
    }

    const generateTextCode = (parameters: TextInputParameters): string => {
        let code: string = "";
        code += `<label for"${parameters.id}">${parameters.label}</label>`;
        code += '\n';
        code += `<input type="text" id="${parameters.id}" placeholder="${parameters.placeHolder}" />`;

        return code;
    }

    const generateOptionCode = (parameters: OptionInputParameters): string => {
        let code: string = "";
        code += `<label for"${parameters.id}">${parameters.label}</label>`;
        code += '\n';
        code += `<select id="${parameters.id}">`
        code += '\n';
        for (let i = 0; i < parameters.options.length; i++) {
            code += `<option>${parameters.options[i]}</option>`;
            code += '\n';
        }
        code += "</option>";

        return code;
    }

    const generateNumberCode = (parameters: NumberInputParameters): string => {
        let code: string = "";
        code += `<label for"${parameters.id}">${parameters.label}</label>`;
        code += '\n';
        code += `<input type="number" id="${parameters.id}" placeholder="${parameters.placeHolder}" />`;

        return code;
    }


    const handleSubmit = (e: any) => {
        switch (e.detail.type) {
            case InputType.Text:
                formCode += generateTextCode(e.detail.parameters);
                break;

            case InputType.Number:
                formCode += generateNumberCode(e.detail.parameters);
                break;

            case InputType.Option:
                formCode += generateOptionCode(e.detail.parameters);
                break;

            default:
                break;
        }

        addModalVisibility = false;
    }
</script>

<div class="main-container">
    <button disabled={disableAddButton} on:click={handleAddInput} class="add-input-button">+ Add</button>

    {#if addModalVisibility}
        <div transition:fade={fadeTransitionParameters}>
            <AddInputModal on:submit={(e) => handleSubmit(e)} on:visibility-change={handleVisibilityChange}  />
        </div>
    {/if}
</div>

<style>
    .main-container {
        width: 50em;
        height: auto;
    }
</style>
