<script>
  import KanbanColumn from '$lib/components/KanbanColumn.svelte';
  import { onMount } from 'svelte';

  // Initial items and state management
  let items = [
    { id: crypto.randomUUID(), title: 'Task 1', description: 'Description 1', importance: 'Low' },
    { id: crypto.randomUUID(), title: 'Task 2', description: 'Description 2', importance: 'Medium' }
  ];

  let columns = {
    'To Do': [],
    'In Progress': [],
    Completed: []
  };

  // Distribute initial items into the 'To Do' column
  onMount(() => {
    columns['To Do'] = items;
  });

  function handleDropItem(itemId, targetColumn) {
    // Find the item in any column
    let item;
    for (const column in columns) {
      item = columns[column].find((item) => item.id === itemId);
      if (item) {
        // Remove from the old column
        columns[column] = columns[column].filter((item) => item.id !== itemId);
        break;
      }
    }
    // Add to the new column
    if (item) {
      columns[targetColumn] = [...columns[targetColumn], item];
    }
    console.log(columns);
  }
</script>

<div class="flex bg-dg h-full p-2 mb-1 w-full">
  {#each Object.keys(columns) as columnTitle}
    <KanbanColumn
      title={columnTitle}
      items={columns[columnTitle]}
      onDropItem={(itemId) => handleDropItem(itemId, columnTitle)}
    />
  {/each}
</div>
