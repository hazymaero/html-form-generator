<script lang="ts">
    import AddInputModal from "./AddInputModal.svelte";
    import { fade, type FadeParams } from "svelte/transition";

    let addModalVisibility: boolean = false;
    let disableAddButton: boolean = false;
    const fadeTransitionParameters: FadeParams = { duration: 250 };

    const handleVisibilityChange = () => {
        addModalVisibility = false;
        disableAddButton = false;
    }

    const handleAddInput = () => {
        addModalVisibility = true;   
    }
</script>

<div class="main-container">
    <button disabled={disableAddButton} on:click={handleAddInput} class="add-input-button">+ Add</button>

    {#if addModalVisibility}
        <div transition:fade={fadeTransitionParameters}>
            <AddInputModal on:visibility-change={handleVisibilityChange}  />
        </div>
    {/if}
</div>

<style>
    .main-container {
        width: 50em;
        height: auto;
    }
</style>
