<script lang="ts">
    import Modal from "./Modal.svelte";
    import InputTypeForm from "./InputTypeForm.svelte";"./InputTypeForm.svelte";
    import { InputType } from "../types";
    import TextInputEditor from "./TextInputEditor.svelte";

    let inputType: InputType = InputType.Text; 

    const handleSubmit = () => {
        console.log("submit");
    }

</script>


<Modal on:visibility-change visibility={true}>
    <div slot="content" class="main-content">
        <h2>Add Input</h2>
        <InputTypeForm on:input-type-change={(e) => inputType = e.detail.newInputType} />
        <button class="submit-button" on:click={handleSubmit}>Add</button>
    </div>

    {#if inputType === InputType.Text}
        <TextInputEditor />
    {/if}
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
