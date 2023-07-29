<script lang="ts">
    import Modal from "./Modal.svelte";
    import InputTypeForm from "./InputTypeForm.svelte";"./InputTypeForm.svelte";
    import { InputType } from "../types";
    import TextInputEditor from "./TextInputEditor.svelte";
    import { createEventDispatcher } from "svelte";
    import OptionInputEditor from "./OptionInputEditor.svelte";
    import NumberInputEditor from "./NumberInputEditor.svelte";

    let inputType: InputType = InputType.Text; 
    let optionEditorInstance: any;
    let textEditorInstance: any;
    let numberEditorInstance: any;

    const handleSubmit = () => {
        switch (inputType) {
            case InputType.Text:
                dispatchSubmit('submit', { type: inputType, parameters: textEditorInstance.GetParameters() });
                break;

            case InputType.Option:
                dispatchSubmit('submit', { type: inputType, parameters: optionEditorInstance.GetParameters() });
                break;

            case InputType.Number:
                dispatchSubmit('submit', { type: inputType, parameters: numberEditorInstance.GetParameters() });

            default:
                break;
        }
    }

    const handleInputTypeChange = (e: any) => {
        inputType = e.detail.newInputType;
    }

    const dispatchSubmit = createEventDispatcher();
</script>

<Modal on:visibility-change visibility={true}>
    <div slot="content" class="main-content">
        <h2>Add Input</h2>
        <InputTypeForm on:input-type-change={handleInputTypeChange} />
        <button class="submit-button" on:click={handleSubmit}>Add</button>
        
        <hr>

        {#if inputType == InputType.Text}
            <TextInputEditor bind:this={textEditorInstance} />

            {:else if inputType == InputType.Option}
                <OptionInputEditor bind:this={optionEditorInstance} />

            {:else if inputType == InputType.Number}
                <NumberInputEditor />
        {/if}
    </div>
</Modal>

<style>
    .main-content {
        position: relative;
        margin-top: 3em;
        width: 50em;
        height: 35em;

        background-color: var(--foreground-color);
        border-radius: 1.5em;
    }

    hr {
        margin: 2em;
    }

    h2 {
        line-height: 2.5em;
        font-size: 1.75em;
        font-weight: 800;
        text-decoration: none;
    }

    .submit-button {
        position: absolute;
        bottom: 1em;
        top: auto;
    }
</style>
