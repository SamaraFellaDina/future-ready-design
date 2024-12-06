<script>
	import ScrollyVideo from 'scrolly-video/dist/ScrollyVideo.svelte';
</script>

<div class="psychedelic">
	<ScrollyVideo 
		src="/assets/video/neon.mov"
		muted
	/>
</div>

<style>
	.psychedelic {
    height: 300vh;
    display: block;
    position: sticky;
    top: 0;
  }
</style>
