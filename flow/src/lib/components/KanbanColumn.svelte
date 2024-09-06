<script>
  import KanbanItem from './KanbanItem.svelte';

  export let items = [];
  console.log(items);
</script>

<div class="w-2/6 h-full m-1 p-2 rounded bg-lg border-2 border-white">
  {#each items as i}
    <KanbanItem title={i.title} description={i.description} importance={i.importance} />
  {/each}
</div>
