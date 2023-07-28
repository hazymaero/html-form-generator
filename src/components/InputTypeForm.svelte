<script lang="ts">
    import { InputType } from "../types";

    export let inputType: InputType = InputType.Text;
</script>

<div class="form-container">
    <label for="inputTypeSelect">Input Type: </label>
    <select bind:value={inputType} id="inputTypeSelect">
        <option>Text</option>
        <option>Number</option>
        <option>Options</option>
    </select>
</div>
