<script lang="ts">
    import Modal from "./Modal.svelte";
    import { slide } from "svelte/transition";

    export let visibility: boolean = false;
</script>


{#if visibility}
    <div transition:slide class="main-container">
        <Modal visibility={true}>
            <div slot="content" class="main-content">
                <h2>Add Input</h2>
            </div>
        </Modal>
    </div>
{/if}

<style>
    .main-content {
        margin-top: 3em;
        width: 50em;
        height: 35em;

        background-color: var(--foreground-color);
        border-radius: 1.5em;
    }

    h2 {
        line-height: 2.5em;
        font-size: 1.75em;
        font-weight: 800;
        text-decoration: none;
    }
</style>
