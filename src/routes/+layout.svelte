<script>
	import Mountains from '$lib/components/assets/mountains.svelte';
	import '../css/main.css';
</script>

<main class="min-h-dvh relative">
	<slot />

	<figure class="absolute bottom-0 left-0 right-0" role="presentation">
		<Mountains />
	</figure>
</main>
