<script lang="ts">
	import { sineIn } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	export let text: string;
	export let success: boolean;

	const transition = { duration: 350, easing: sineIn };
</script>

<article
	class="py-4 px-6 rounded-md mt-8 first:mt-0"
	class:bg-green-700={success}
	class:bg-rose-700={!success}
	transition:slide={transition}
>
	<p>{text}</p>
</article>
