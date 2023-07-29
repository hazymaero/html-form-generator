<script lang="ts">
    import type { OptionInputParameters } from "../types";

    let parameters: OptionInputParameters = {} as OptionInputParameters;
    let unformattedOptions: string = "";

    export const GetParameters = (): OptionInputParameters => { return parameters; }

    const handleFormatOptions = () => {
        let words: string[] = unformattedOptions.trim().split(' ');
        parameters.options = words;
    }
</script>

<div class="main-content">
    <label for="idInput">ID for Input: </label>
    <input placeholder="Type ID" bind:value={parameters.id} type="text" id="idInput" />

    <br>

    <label for="labelInput">Label: </label>
    <input placeholder="Type label" bind:value={parameters.label} type="text" id="labelInput" />

    <br>

    <label for="optionsInput">Options: </label>
    <input placeholder="List your options" on:change={handleFormatOptions} bind:value={unformattedOptions} type="text" id="optionsInput" />

</div>

<style>
    .main-content {
        text-align: center;
        --base-margin: 6em;
    }

    label {
        font-family: "Poppins";
    }

    #labelInput {
        margin-left: calc(var(--base-margin) + 3.25em);
    }

    #idInput {
        margin-left: calc(var(--base-margin) - 0.25em);
    }

    #optionsInput {
        margin-left: calc(var(--base-margin) + 1.25em);
    }

    input {
        margin-left: var(--base-margin);
        margin-top: 1em;
    }
</style>
