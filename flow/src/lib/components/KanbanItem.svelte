<script>
  import { Badge, Button } from 'flowbite-svelte';

  // What is seen on the actual board
  export let title;
  // description that is seen when we expand the item
  export let description;
  // The level of importance this task is: Low, Medium, High
  export let importance;
  // an array of tags that the user added.
  // export let tags;
  export let id;

  function handleDragStart(event) {
    event.dataTransfer.setData('text/plain', id);
    event.target.setAttribute('aria-grabbed', 'true');
  }

  function handleDragEnd(event) {
    event.target.setAttribute('aria-grabbed', 'false');
  }

  $: importance_colour =
    importance == 'Low' ? 'bg-green-400' : importance == 'Medium' ? 'bg-yellow-400' : 'bg-red-500';
</script>

<div
  on:dragstart={handleDragStart}
  draggable="true"
  on:dragend={handleDragEnd}
  aria-grabbed="false"
  role="listitem"
  class="flex flex-col items-start rounded mb-2 p-2 bg-lg"
>
  <div>
    <Badge rounded border class={importance_colour}>{importance}</Badge>
    <Button class="">Delete</Button>
  </div>
  <span class="text-tcl p-2 mb-1 text-sm">{title}</span>
  <span class="text-tcd p-2 mb-1 text-xs">{description}</span>
</div>
