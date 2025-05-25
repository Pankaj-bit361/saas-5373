import React, { useState } from 'react';
import { FiPlus, FiMoreHorizontal, FiCheckCircle, FiClock, FiAlertCircle } from 'react-icons/fi';

type Task = {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
};

const KanbanBoard = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Implement authentication',
      description: 'Set up login and signup pages',
      status: 'done',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Create dashboard layout',
      description: 'Design main dashboard with projects overview',
      status: 'in-progress',
      priority: 'medium'
    },
    {
      id: '3',
      title: 'Add dark mode support',
      description: 'Implement theme switcher and dark styles',
      status: 'todo',
      priority: 'low'
    }
  ]);

  const addTask = (status: Task['status']) => {
    const newTask: Task = {
      id: Date.now().toString(),
      title: 'New Task',
      description: 'Task description',
      status,
      priority: 'medium'
    };
    setTasks([...tasks, newTask]);
  };

  const moveTask = (id: string, newStatus: Task['status']) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, status: newStatus } : task
    ));
  };

  const getPriorityColor = (priority: Task['priority']) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: Task['status']) => {
    switch (status) {
      case 'todo': return <FiAlertCircle className="text-gray-500" />;
      case 'in-progress': return <FiClock className="text-blue-500" />;
      case 'done': return <FiCheckCircle className="text-green-500" />;
      default: return null;
    }
  };

  const statuses: Task['status'][] = ['todo', 'in-progress', 'done'];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Project Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {statuses.map(status => (
          <div key={status} className="bg-white rounded-lg shadow-sm">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="font-medium text-gray-700 capitalize">{status.replace('-', ' ')}</h2>
              <button 
                onClick={() => addTask(status)}
                className="p-1 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700"
              >
                <FiPlus size={18} />
              </button>
            </div>
            
            <div className="p-4 space-y-4">
              {tasks
                .filter(task => task.status === status)
                .map(task => (
                  <div 
                    key={task.id}
                    className="p-4 bg-white border border-gray-200 rounded-lg shadow-xs hover:shadow-sm transition-shadow"
                    draggable
                    onDragStart={e => e.dataTransfer.setData('taskId', task.id)}
                    onDragOver={e => e.preventDefault()}
                    onDrop={e => {
                      e.preventDefault();
                      const draggedTaskId = e.dataTransfer.getData('taskId');
                      moveTask(draggedTaskId, status);
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium text-gray-800">{task.title}</h3>
                      <button className="text-gray-400 hover:text-gray-600">
                        <FiMoreHorizontal size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">{task.description}</p>
                    <div className="flex items-center mt-3 space-x-2">
                      <span className={`text-xs px-2 py-1 rounded-full ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                      <span className="text-gray-400">
                        {getStatusIcon(task.status)}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;