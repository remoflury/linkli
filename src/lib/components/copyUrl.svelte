<script lang="ts">
	import { sineIn } from 'svelte/easing';
	import { slide } from 'svelte/transition';
	import CopyIcon from './assets/copyIcon.svelte';

	export let url: string;
	let clicked = false;

	const copyToClipBoard = () => {
		navigator.clipboard.writeText(url);
		clicked = true;
		setTimeout(() => {
			clicked = false;
		}, 125);
	};

	const transition = { duration: 350, easing: sineIn };
</script>

<div
	transition:slide={transition}
	class="flex gap-x-6 justify-between items-center max-w-max mt-12 first:mt-0"
>
	<p class="transition" class:text-green-300={clicked}>{url}</p>
	<button
		class="w-[1.25em] cursor-pointer"
		class:[&_path]:fill-green-300={clicked}
		aria-label="kopier mich"
		on:click={copyToClipBoard}
	>
		<CopyIcon />
	</button>
</div>
