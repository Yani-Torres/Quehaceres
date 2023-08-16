import React, { useState } from 'react';
import './App.css';

function App() {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregaTarea = () => {
        if (nuevaTarea.length > 0) {
            setTareas([...tareas, { text: nuevaTarea, completed: false }]);
            setNuevaTarea('');
        }
    };
    const cambiarTarea = (index) => {
      const actualizaTarea = [...tareas];
      actualizaTarea[index].completed = !actualizaTarea[index].completed;
      setTareas(actualizaTarea);
  };

  const eliminaTarea = (index) => {
      const actualizaTarea = tareas.filter((_, i) => i !== index);
      setTareas(actualizaTarea);
  };
  return (
    <div className="App">
        <h1>Lista de quehaceres</h1>
        <div className="tarea-input">
            <input type="text" placeholder="Tarea por hacer" value={nuevaTarea} onChange={(e) => setNuevaTarea(e.target.value)} />
            <button onClick={agregaTarea}>Agregar</button>
        </div>
        <ul>
          {tareas.map((task, index) => (
          <li key={index}>
          <span onClick={() => cambiarTarea(index)} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
          <button onClick={() => eliminaTarea(index)}>Eliminar</button>
          </li>
          ))}
            </ul>
        </div>
    );
}

export default App;
