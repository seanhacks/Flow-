<script>
  import '../app.css';
</script>

<div class="flex h-screen bg-lg">
  <div class="w-[12%] h-screen p-6 text-tcd">
    <div>
      Flow~
      <button class="bg-lg w-full text-left hover:bg-dg rounded"> Todolist </button>
      <button class="bg-lg w-full text-left hover:bg-dg rounded"> Habits </button>
      <button class="bg-lg w-full text-left hover:bg-dg rounded"> Projects </button>
      <button class="bg-lg w-full text-left hover:bg-dg rounded"> Pomodoro </button>
    </div>
  </div>
  <slot />
</div>
