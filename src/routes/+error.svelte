<script lang="ts">
	import { page } from '$app/stores';
</script>

<section class="section-spacing container grid-content">
	<p>{$page.status}</p>
	<h1>{$page.error?.message}</h1>
	<a
		href="/"
		aria-label="neue link chürze"
		title="neue link chürze"
		class="max-w-max bg-red-700 text-white px-8 rounded-md py-2 hover:bg-red-600 transition mt-8 inline-block"
		>Probiers nomal neu</a
	>
</section>
