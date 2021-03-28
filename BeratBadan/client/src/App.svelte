<script>
	import Nested from './Nested.svelte';

	let count = 0;

	function handleClick() {
		count += 1
	}
</script>

<style>
	p {
		color: purple;
		font-family: 'Comic Sans MS', cursive;
		font-size: 2em;
	}
</style>

<p>Berat Badan </p>
<button on:click={handleClick}> 	
	Clicked {count} {count === 0 ? 'time' : 'times'}
</button>
<Nested/>