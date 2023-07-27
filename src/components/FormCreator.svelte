<script lang="ts">
    import AddInputModal from "./AddInputModal.svelte";

    let addModalVisibility: boolean = false;
    let disableAddButton: boolean = false;

    $: {
        if (addModalVisibility === true) {
            disableAddButton = true;
        }
    }

    const handleAddInput = () => {
        addModalVisibility = true;   
    }
</script>

<div class="main-container">
    <button disabled={disableAddButton} on:click={handleAddInput} class="add-input-button">+ Add</button>

    <AddInputModal visibility={addModalVisibility} />
</div>

<style>
    .main-container {
        width: 50em;
        height: auto;
    }
</style>
