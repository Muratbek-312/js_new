import React, {useState} from 'react';



const AddTodo = (props) => {

    const [task, setTask] = useState('');

    const handInput = (e) => {
        setTask(e.target.value)
    }

    const handleAdd = () => {
        const newTask = {
            task,
            status: false,
            id: Date.now()
        }
        props.handleTask(newTask)
        setTask('')
    }

    return (
        <>
        <input value={task} onChange={handInput} type="text" />
        <button onClick={handleAdd}>Add</button>
        </>
    );
};

export default AddTodo;
