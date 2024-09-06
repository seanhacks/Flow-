<script>
  import '../app.css';
</script>

<div class="flex h-screen">
  <div class="w-[12%] h-screen p-6 text-tcd bg-dg">
    <div>
      <span class="bg-dg">Flow~</span>
      <button class="bg-dg w-full text-left hover:bg-lg rounded"> Todolist </button>
      <button class="bg-dg w-full text-left hover:bg-lg rounded"> Habits </button>
      <button class="bg-dg w-full text-left hover:bg-lg rounded"> Projects </button>
      <button class="bg-dg w-full text-left hover:bg-lg rounded"> Pomodoro </button>
    </div>
  </div>
  <slot />
</div>
