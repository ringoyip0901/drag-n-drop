const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Take out'},
    'task-2': {id: 'task-2', content: 'Watch'},
    'task-3': {id: 'task-3', content: 'Hike'},
    'task-4': {id: 'task-4', content: 'Eat'},
    'task-5': {id: 'task-5', content: 'Hike'},
    'task-6': {id: 'task-6', content: 'Drink'},
    'task-7': {id: 'task-7', content: 'bike'},
    'task-8': {id: 'task-8', content: 'Sleep'},
    'task-9': {id: 'task-9', content: 'Fly'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'todo',
      taskIds: ['task-1', 'task-2', 'task-3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'in progress',
      taskIds: ['task-4', 'task-5', 'task-6'],
    },
    'column-3': {
      id: 'column-3',
      title: 'done!',
      taskIds: ['task-7', 'task-8', 'task-9'],
    },
  },

  columnOrder: ['column-1', 'column-2', 'column-3'],
};

export default initialData;
