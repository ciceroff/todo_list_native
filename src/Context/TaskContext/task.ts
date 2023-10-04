import {create} from 'zustand';

type Task = {
  id: string;
  checked: boolean;
  description: string;
  remove_at?: Date;
};

type State = {
  tasks: Task[];
  addTask: (task: Task) => void;
  created: number;
  checked: number;
  removeTask: (taskId: string) => void;
  checkTask: (taskId: string) => void;
  removeCheck: () => void;
};

export const useTaskStore = create<State>(set => ({
  tasks: [],
  created: 0,
  checked: 0,
  addTask: (task: Task) => {
    set(state => ({tasks: [...state.tasks, task], created: state.created + 1}));
  },
  removeTask: (taskId: string) => {
    set(state => ({
      tasks: state.tasks.filter(task => taskId !== task.id),
      created: state.created - 1,
    }));
  },
  checkTask: (taskId: string) => {
    set(state => ({
      checked: state.checked + 1,
      tasks: state.tasks.map(task => {
        if (task.id === taskId) {
          task.checked = true;
        }
        return task;
      }),
    }));
  },
  removeCheck: () => {
    set(state => ({checked: state.checked - 1}));
  },
}));
