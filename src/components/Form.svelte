<script lang="ts">
    import { InputType } from "../types";

    let inputType: InputType;

    const handleSubmit = () => {

    }
</script>

<div class="form-container">
    <label for="inputTypeSelect">Input Type: </label>
    <select bind:value={inputType} id="inputTypeSelect">
        <option>Text</option>
        <option>Number</option>
        <option>Options</option>
    </select>

    <center>
        <button class="submit-button" on:click={handleSubmit}>Add</button>
    </center>
</div>

<style>
    .submit-button {
        position: absolute;
        bottom: 9em;
    }

    select {
        outline: none;
        padding: 0.5em;
        color: var(--text-color);
        background-color: rgb(30, 30, 30);
        border-radius: 0.4em;
        margin-left: 0.5em;
        font-family: "Poppins";
        border-color: transparent;

        transition: all 0.1s ease-in;
    }

    select:hover {
        filter: brightness(140%);
    }
</style>
