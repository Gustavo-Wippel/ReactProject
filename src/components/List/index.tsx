import React from 'react';


export default function Lista() {
    const tarefas = [{
        tarefa: "Estudar React",
        tempo: "02:00:00"
    }, {
        tarefa: "Aprender mais Javascript",
        tempo: "01:00:00"
    }]

    return(
        <aside>
            <h2>Tarefas Diárias</h2>
            <ul>
                {tarefas.map((task, index) => (
                    <li key={index}>
                        <h3>{task.tarefa}</h3>
                        <span>{task.tempo}</span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}