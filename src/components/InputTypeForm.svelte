<script lang="ts">
    import { InputType } from "../types";
    import { createEventDispatcher } from "svelte";

    export let inputType: InputType = InputType.Text;

    $: dispathInputTypeChange('input-type-change', { newInputType: inputType });
    
    const dispathInputTypeChange = createEventDispatcher();
</script>

<div class="form-container">
    <label for="inputTypeSelect">Input Type: </label>
    <select bind:value={inputType} id="inputTypeSelect">
        <option>Text</option>
        <option>Number</option>
        <option>Options</option>
    </select>
</div>
