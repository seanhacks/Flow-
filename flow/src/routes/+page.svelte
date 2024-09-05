<script>
  import '../app.css';
  import TodoItem from '../lib/components/TodoItem.svelte';

  function generate_id() {
    return crypto.randomUUID();
  }

  let todo = { id: generate_id(), description: 'test', checked: false };
  let todo2 = { id: generate_id(), description: 'Enter the Task', checked: true };

  let todos_progress = [todo];
  let todos_completed = [todo2];

  function toggleTodoState(todo) {
    if (todo.checked) {
      todos_progress = todos_progress.filter((t) => t !== todo);
      todos_completed = [...todos_completed, { ...todo }];
    } else {
      todos_completed = todos_completed.filter((t) => t !== todo);
      todos_progress = [...todos_progress, { ...todo }];
    }
  }

  function addTodo() {
    todos_progress = [
      ...todos_progress,
      { id: generate_id(), description: 'Enter Your Task', checked: false }
    ];
  }

  function removeTodo(todo) {
    if (todo.checked) {
      todos_completed = todos_completed.filter((t) => t !== todo);
    } else {
      todos_progress = todos_progress.filter((t) => t !== todo);
    }
  }
</script>

<div class="bg-white w-[88%] h-screen p-6 max-h-screen overflow-y-auto">
  <!-- Todo items in progress -->
  {#each todos_progress as todo (todo.id)}
    <TodoItem
      bind:description={todo.description}
      bind:checked={todo.checked}
      on:checked={() => toggleTodoState(todo)}
      on:remove={() => removeTodo(todo)}
    />
  {/each}
  <button on:click={addTodo}> Add new Todo </button>

  <!-- Completed todo items -->
  {#each todos_completed as todo (todo.id)}
    <TodoItem
      bind:description={todo.description}
      bind:checked={todo.checked}
      on:checked={() => toggleTodoState(todo)}
      on:remove={() => removeTodo(todo)}
    />
  {/each}
</div>

