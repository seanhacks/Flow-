<script>
  import KanbanItem from './KanbanItem.svelte';

  export let items = [];
  export let onDropItem;
  export let title;

  function handleDrop(event) {
    event.preventDefault();
    const itemId = event.dataTransfer.getData('text/plain');

    if (onDropItem) onDropItem(itemId);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }
</script>

<div
  class="w-2/6 h-full m-1 p-2 rounded bg-dg border-2 border-white"
  on:drop={handleDrop}
  on:dragover={handleDragOver}
  role="list"
>
  <div class="w-full p-2 rounded text-tcl">{title}</div>
  {#each items as i}
    <KanbanItem id={i.id} title={i.title} description={i.description} importance={i.importance} />
  {/each}
</div>
