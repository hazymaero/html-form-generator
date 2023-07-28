<script lang="ts">
    export let placeholderText: string = "";
</script>

<div>
    <label for="placeholderInput">Placeholder Text: </label>
    <input bind:value={placeholderText} type="text" id="placeholderInput" />
</div>
