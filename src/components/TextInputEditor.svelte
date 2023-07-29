<script lang="ts">
    export let placeholderText: string = "";
    export let id: string = "";
    export let label: string = "";
</script>

<div>
    <label for="idInput">ID for Input: </label>
    <input bind:value={id} type="text" id="idInput" />

    <label for="labelInput">Label: </label>
    <input bind:value={label} type="text" id="labelInput" />

    <label for="placeholderInput">Placeholder Text: </label>
    <input bind:value={placeholderText} type="text" id="placeholderInput" />
</div>
