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
        width: 50em;
        height: 35em;

    }

    h2 {
        margin-top: 1.35em;
        font-size: 1.75em;
        font-weight: 800;
        text-decoration: none;
    }
</style>
