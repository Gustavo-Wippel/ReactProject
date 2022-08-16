import React from 'react';
import Button from '../button-page'

class FormTasks extends React.Component {
    render() {
        return(
            <form action="">
                <div>
                    <label htmlFor="taskName">Nova Tarefa</label>
                    <input type="text" name="taskName" 
                           id="input-task" 
                           placeholder='Insira uma tarefa' 
                           required/>
                </div>
                <div>
                    <label htmlFor="input-time">Duração da Tarefa</label>
                    <input type="time" name="input-time" step={1} min="00:00:00" max={"01:30:00"} required/>
                </div>
                <Button></Button>
            </form>
        )
    }
}

export default FormTasks;