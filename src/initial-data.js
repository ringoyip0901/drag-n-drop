const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out" },
    "task-2": { id: "task-2", content: "Watch" },
    "task-3": { id: "task-3", content: "Hike" },
    "task-4": { id: "task-4", content: "Eat" },
    "task-5": { id: "task-5", content: "Hike" },
    "task-6": { id: "task-6", content: "Drink" },
    "task-7": { id: "task-7", content: "bike" },
    "task-8": { id: "task-8", content: "Sleep" },
    "task-9": { id: "task-9", content: "Fly" },
    "task-10": { id: "task-10", content: "Buy a house" },
    "task-11": { id: "task-11", content: "Traveling" },
    "task-12": { id: "task-12", content: "Buy games!" }
  },
  columns: {
    "column-0": {
      id: "column-0",
      title: "Goals",
      taskIds: [
        "task-1",
        "task-2",
        "task-3",
        "task-4",
        "task-5",
        "task-6",
        "task-7",
        "task-8",
        "task-9",
        "task-10",
        "task-11",
        "task-12"
      ]
    },
    "column-1": {
      id: "column-1",
      title: "Needs",
      taskIds: []
    },
    "column-2": {
      id: "column-2",
      title: "Wants",
      taskIds: []
    },
    "column-3": {
      id: "column-3",
      title: "Wishes",
      taskIds: []
    }
  },

  columnOrder: ["column-1", "column-2", "column-3"]
};

export default initialData;
