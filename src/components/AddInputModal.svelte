<script lang="ts">
    import Modal from "./Modal.svelte";
    import InputTypeForm from "./InputTypeForm.svelte";"./InputTypeForm.svelte";
    import { InputType } from "../types";
    import TextInputEditor from "./TextInputEditor.svelte";
    import { createEventDispatcher } from "svelte";

    let inputType: InputType = InputType.Text; 
    let textEditorInstance: any;

    const handleSubmit = () => {
        switch (inputType) {
            case InputType.Text:
                dispatchSubmit('submit', { type: inputType, parameters: textEditorInstance.parameters });
                break;

            default:
                break;
        }
    }

    const handleInputTypeChange = (e) => {
        inputType = e.detail.newInputType;
    }

    const dispatchSubmit = createEventDispatcher();
</script>

<Modal on:visibility-change visibility={true}>
    <div slot="content" class="main-content">
        <h2>Add Input</h2>
        <InputTypeForm on:input-type-change={handleInputTypeChange} />
        <button class="submit-button" on:click={(e) => handleInputTypeChange(e)}>Add</button>
        
        <hr>

        {#if inputType == InputType.Text}
            <TextInputEditor bind:this={textEditorInstance} />
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
