<script lang="ts">
    import Modal from "./Modal.svelte";
    import InputTypeForm from "./InputTypeForm.svelte";"./InputTypeForm.svelte";
    import { slide } from "svelte/transition";

    export let visibility: boolean = false;

    const handleSubmit = () => {
        console.log("submit");
    }
</script>


{#if visibility}
    <div transition:slide class="main-container">
        <Modal visibility={true}>
            <div slot="content" class="main-content">
                <h2>Add Input</h2>
                <InputTypeForm />
                <button class="submit-button" on:click={handleSubmit}>Add</button>
            </div>
        </Modal>
    </div>
{/if}

<style>
    .main-content {
        position: relative;
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

    .submit-button {
        position: absolute;
        bottom: 1em;
        top: auto;
        /* bottom: 0%; */
    }
</style>
