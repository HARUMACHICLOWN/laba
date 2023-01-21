import React, { useState } from 'react';

const Todos = () => {
    const [todos, setTodos] = useState([
        { id: 1, name: "Hello!" },
        { id: 2, name: "Hello!" },
        { id: 3, name: "Hello!" },
        { id: 4, name: "Hello!" },
    ]);

    const [name, setName] = useState("");
    const [editedId, setEditedId] = useState(null);
    const [taskId, setTodoId] = useState(4);

    const removeTodos = (id) => {
        setTodos(todos.filter((todos) => todos.id != id));
    };

    const addTodos = () => {
        setEditedId(null);
        setTodos([
            ...todos,
            {
                id: todos,
                name: name,
            },
        ]);
        setTodoId(todos + 1);
        setName("");
    };

    const editTodos = (todos) => {
        setEditedId(todos.id);
        setName(todos.name);
    }

    const handleChange = (value, set, prop) => {
        set(value);
        if (editedId) {
            setTodos(
                todos.map((prod) =>
                    prod.id === editedId ? { ...prod, [prop]: value } : prod
                )
            );
        }
    };


    return (
        <div className="row">
            <div className="todos__form">
                <input
                    placeholder="Add..."
                    type="text"
                    value={name}
                    className="input"
                    onChange={event =>
                        handleChange(event.target.value, setName, "name")
                    }
                />
                <button onClick={addTodos} className="button">Add</button>
            </div>

            <div>
                {todos.map((todos) => (
                    <div className="todos">
                        <div className="todos">
                            <input
                                type="checkbox"
                            />
                            <p>{todos.name}</p>
                            <button onClick={() => editTodos(todos)} className="todos__edit">
                                Edit
                            </button>
                            <button onClick={() => removeTodos(todos.id)} className="todos__delete">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Todos;
