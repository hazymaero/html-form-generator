<script lang="ts">
    import type { TextInputParameters } from "../types";

    let parameters: TextInputParameters = {} as TextInputParameters;
    export const GetParameters = (): TextInputParameters => { return parameters; }
</script>

<div class="main-content">
    <label for="idInput">ID for Input: </label>
    <input placeholder="Type ID" bind:value={parameters.id} type="text" id="idInput" />

    <br>

    <label for="labelInput">Label: </label>
    <input placeholder="Type label" bind:value={parameters.label} type="text" id="labelInput" />

    <br>

    <label for="placeholderInput">Placeholder Text: </label>
    <input placeholder="Type placeholder text" bind:value={parameters.placeHolder} type="text" id="placeholderInput" />
</div>

<style>
    .main-content {
        text-align: center;
    }

    #labelInput {
        margin-left: 7.5em;
    }

    #placeholderInput {
        margin-left: 0.75em;
    }

    input {
        margin-left: 4.25em;
        margin-top: 1em;
    }
</style>
