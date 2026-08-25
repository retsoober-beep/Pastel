import { useTodosStore } from "../store/useTodoStore";

export default function ItemTodo({ todo }) {
    const changeTodo = useTodosStore((state) => state.changeTodo)
    const deleteTodo = useTodosStore((state) => state.deleteTodo)  
}