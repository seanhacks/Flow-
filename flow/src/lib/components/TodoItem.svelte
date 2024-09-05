<script>
  import { createEventDispatcher } from 'svelte';

  export let checked = false;
  export let description = '';

  const dispatch = createEventDispatcher();

  function handleChange() {
    checked = !checked;
    dispatch('checked');
  }

  function handleRemove() {
    // remove the item code
    dispatch('remove');
  }

  $: line_through = checked ? 'line-through' : '';
  $: text_colour = checked ? 'text-tcd' : 'text-tcl';
</script>

<div class="flex items-center rounded mb-2 p-2 bg-lg">
  <input
    class="mx-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-gray-300"
    type="checkbox"
    {checked}
    on:change={handleChange}
  />

  <input
    class="flex-grow p-2 mx-2 bg-lg {text_colour} {line_through}"
    type="text"
    bind:value={description}
  />

  <button class="rounded bg-lg hover:bg-dg" on:click={handleRemove}>
    <img src="close-svgrepo-com.svg" alt="remove todo item" class="flex-none h-8 w-8" />
  </button>
</div>
