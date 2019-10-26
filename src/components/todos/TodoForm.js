import React from 'react';
import useForm from "react-hook-form";

const TodoForm = (props) => {
    const { handleSubmit, errors, register } = useForm({
        defaultValues: {
            content: props.todo.content,
            category: props.todo.category,
        }
    });
    const onSubmit = values => {
        if(props.todo.id != null){
            values.id = props.todo.id;
            props.editTodo(values);
        } else{
            props.addTodo(values);
        }
    };

    return (
        <div className="todo-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h4>Add new todo</h4>
                <div className="todo-form__element">
                    <textarea
                        name="content"
                        placeholder="Todo content"
                        ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                </div>
                <div className="todo-form__element">
                    <input
                        type="text"
                        name="category"
                        placeholder="Todo category"
                        ref={register({ required: true })} />
                </div>
                <div className="todo-form__element todo-form__element--submit">
                    <button type="submit">Zapisz</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;