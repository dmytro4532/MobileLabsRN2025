import React, { createContext, useContext, useState } from 'react';

type Task = {
  id: string;
  title: string;
  completed: boolean;
  score: number;
};

type TaskContextType = {
  tasks: Task[];
  score: number;
  completeTask: (id: string) => void;
  forceCompleteTask: (id: string) => void;
  checkTaskCompletion: (score: number) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const initialTasks: Task[] = [
  { id: '1', title: 'Зробити 10 кліків', completed: false, score: 10 },
  { id: '2', title: 'Зробити подвійний клік 5 разів', completed: false, score: 20 },
  { id: '3', title: 'Утримувати об\'єкт 3 секунди', completed: false, score: 15 },
  { id: '4', title: 'Перетягнути об\'єкт', completed: false, score: 5 },
  { id: '5', title: 'Зробити свайп вправо', completed: false, score: 10 },
  { id: '6', title: 'Зробити свайп вліво', completed: false, score: 10 },
  { id: '7', title: 'Змінити розмір об\'єкта', completed: false, score: 25 },
  { id: '8', title: 'Отримати 100 очок', completed: false, score: 50 },
];

type Props = {
  children: React.ReactNode;
};

export const TaskProvider = ({ children }: Props) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [score, setScore] = useState(0);

  const updateScore = (points: number) => {
    setScore((prevScore) => prevScore + points);
  };

  const completeTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id && !task.completed) {
          updateScore(task.score); // Automatically update the score when completing a task
          return { ...task, completed: true };
        }
        return task;
      })
    );
  };

  const forceCompleteTask = (id: string) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      )
    );
  };

  const checkTaskCompletion = (currentScore: number) => {
    tasks.forEach((task) => {
      if (!task.completed && currentScore >= task.score) {
        completeTask(task.id);
      }
    });
  };

  return (
    <TaskContext.Provider
      value={{ tasks, score, completeTask, forceCompleteTask, checkTaskCompletion }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};