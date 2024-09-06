export function load() {
  return {
    todos_progress: [
      { id: crypto.randomUUID(), description: 'In Progress 1', checked: false },
      { id: crypto.randomUUID(), description: 'In Progress 2', checked: false }
    ],
    todos_completed: [
      { id: crypto.randomUUID(), description: 'Completed 1', checked: true },
      { id: crypto.randomUUID(), description: 'Completed 2', checked: true }
    ]
  };
}
