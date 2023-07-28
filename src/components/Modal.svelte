<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let visibility: boolean = false;

    const handleClickSelf = () => {
        dispatchVisibilityChange('visibility-change', { newVisibility: visibility });
    }
    const dispatchVisibilityChange = createEventDispatcher();
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if visibility}
    <div  class="backdrop" on:click|self={handleClickSelf}>
        <slot name="content"></slot>
    </div>
{/if}
<style>
    .backdrop {
        background-color: rgba(0, 0, 0, 0.25);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 100%;
        height: 100%;
}
</style>
