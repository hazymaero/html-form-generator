<script lang="ts">
    export let visibility: boolean = false;
</script>

<div class="main-container">
    <div class="slot-wrapper">
        <slot name="content"></slot>
    </div>
</div>

<style>
    .main-container {
        position: relative;
    }

    .slot-wrapper {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.25);
    }
</style>
