<script>
  import KanbanColumn from '../../lib/components/KanbanColumn.svelte';

  let item1 = {
    id: crypto.randomUUID(),
    title: 'Title',
    description: 'description here',
    importance: 'Low'
  };

  let todo = [item1];
  let in_progress = [{ ...item1, importance: 'Medium' }];
  let completed = [{ ...item1, importance: 'High' }];
</script>

<div class="flex w-full h-full items-start mb-2 p-4 bg-lg">
  <KanbanColumn items={todo} />
  <KanbanColumn items={in_progress} />
  <KanbanColumn items={completed} />
</div>
