<script lang="ts">
	import { page } from '$app/stores';
	import CopyUrl from '$lib/components/copyUrl.svelte';
	import FormMessage from '$lib/components/formMessage.svelte';
	import Seo from '$lib/components/seo.svelte';
	import SuperDebug, { superForm } from 'sveltekit-superforms';

	export let data;
	export let form;

	// Client API:
	const { form: urlForm, enhance, errors, message, constraints, posted } = superForm(data.form);

	$: if ($message) {
		setTimeout(() => {
			$message = '';
		}, 3000);
	}

	$: console.log(form);
</script>

<Seo />
<section class="container section-spacing grid-content">
	<h1>Linkli: Din URL-Chürzer 🇨🇭</h1>

	<form method="POST" use:enhance action="?/create">
		<label for="url" hidden>URL</label>
		<input
			type="text"
			name="url"
			placeholder="Url"
			bind:value={$urlForm.url}
			aria-invalid={$errors.url ? 'true' : undefined}
			{...$constraints.url}
		/>

		<button
			class="bg-red-700 text-white px-8 rounded-md py-2 hover:bg-red-600 transition mt-8 inline-block"
			>Chürz mich!</button
		>
	</form>
	{#if $message}
		<FormMessage text={$message} success={$page.status < 400} />
	{/if}
	{#if $posted && $page.status < 400 && form?.shortenedUrl}
		<FormMessage text="Woop. Kopier din kürzti Link" success={$page.status < 400} />
		<CopyUrl url={form.shortenedUrl} />
	{/if}
</section>
