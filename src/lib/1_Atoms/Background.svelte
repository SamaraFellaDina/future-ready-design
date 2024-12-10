<script>
    export let name = '';
</script>

{#if name == 'moon'}
<img class="background" src="/assets/images/moon.gif" alt="">


{:else if name == "art"}
<img class="background" src="/assets/images/art.gif" alt="">

{:else if name == "risograph"}
<img class="background" src="/assets/images/risograph.jpg" alt="">

{/if}

<style>
    .background{
        border-radius: var(--section-border-radius);
        opacity: 1;
        position: absolute; 
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        object-fit: cover; 
    }
</style>