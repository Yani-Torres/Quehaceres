import React, { useState } from 'react';
import './App.css';

function App() {
    //usar hook useState//
    //tareas es donde se almacenan las tareas//
    //setTareas actualiza//
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState('');

    const agregaTarea = () => {
        //agarra valor de nuevaTarea y confirma si no esta vacio//
        //agrega nueva tarea a la lista//
        if (nuevaTarea.length > 0) {
          setTareas([tareas, { text: nuevaTarea, completed: false }]);
          setNuevaTarea('');
        }
      };
      const cambiarTarea = (index) => {
        const actualizaTarea = [...tasks];
        actualizaTarea[index].completed = !actualizaTarea[index].completed;
        setTasks(actualizaTarea);
      };
      const eliminaTarea = (index) => {
        const actualizaTarea = tasks.filter((_, i) => i !== index);
        setTareas(actualizaTarea);
      };
      return (
        <div className="App">
          <h1>Lista quehaceres</h1>
          <div className="tarea-input">
            <input type="text" placeholder="Tarea por hacer" value={NuevaTarea}onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button onClick={agregaTarea}>Agregar</button>
         </div>
         <ul>
            {tareas.map((tareas, index) => (
            <li
            key={index}
    >
        <span onClick={() => cambiarTarea(index)}>{tareas.text}</span>
        <button onClick={() => eliminaTarea(index)}>Eliminar</button>
    </li>
    ))}
    </ul>
  </div>
);
}
export default App;
    