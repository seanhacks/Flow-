<script>
  import { Badge } from 'flowbite-svelte';

  // What is seen on the actual board
  export let title;
  // description that is seen when we expand the item
  export let description;
  // The level of importance this task is: Low, Medium, High
  export let importance;
  // an array of tags that the user added.
  // export let tags;

  $: importance_colour =
    importance == 'Low' ? 'bg-green-400' : importance == 'Medium' ? 'bg-yellow-400' : 'bg-red-500';
</script>

<div class="flex flex-col items-start rounded mb-2 p-4 bg-lg">
  <Badge rounded border class={importance_colour}>{importance}</Badge>
  <span class="text-tcl p-2 mb-1 text-sm">{title}</span>
  <span class="text-tcd p-2 mb-1 text-xs">{description}</span>
</div>
