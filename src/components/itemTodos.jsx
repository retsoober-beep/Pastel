import { useTodosStore } from "../store/useTodoStore";

export default function ItemTodo({ todo }) {
    const changeTodo = useTodosStore((state) => state.changeTodo)
    const deleteTodo = useTodosStore((state) => state.deleteTodo)
}

return (
    <li className={`item-todos ${todo.done ? 'item-todo--done' : ''}`}>
        <button
            type="button"
            className="item-todo-checkbox"
            aria-label={todo.done ? "Marcar como dependente" : "Marcar como concluído"}
            onClick={() => changeTodo(todo.id, todo.done)}>{todo.done ? '✔' : ''}
        </button>

        <span className="item-todo__title" >{todo.title}</span>

        <button
            type="button"
            className="item-todo_remove"
            aria-label="remove todo">
            Remover
        </button>
    </li>
)