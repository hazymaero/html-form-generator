<script lang="ts">
    import type { TextInputParameters } from "../types";

    let placeholderText: string = "";
    let id: string = "";
    let label: string = "";

    export let parameters: TextInputParameters = { 
        placeholderText: placeholderText,
        id: id,
        label: label
    } as TextInputParameters;

    $: {
        parameters = { 
            placeholderText: placeholderText,
            id: id,
            label: label
        } as TextInputParameters;
        console.log(parameters);
    }
</script>

<div class="main-content">
    <label for="idInput">ID for Input: </label>
    <input bind:value={id} type="text" id="idInput" />

    <br>

    <label for="labelInput">Label: </label>
    <input bind:value={label} type="text" id="labelInput" />

    <br>

    <label for="placeholderInput">Placeholder Text: </label>
    <input bind:value={placeholderText} type="text" id="placeholderInput" />
</div>

<style>
    .main-content {
        text-align: center;
    }

    #labelInput {
        margin-left: 7.25em;
    }

    #placeholderInput {
        margin-left: 0.75em;
    }

    input {
        margin-left: 4.25em;
        margin-top: 1em;
    }
</style>
