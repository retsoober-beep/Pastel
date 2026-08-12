import { collection, query } from "firebase/firestore"
import { create } from zustand
import { dataBase } from "../db/firebase.js"


const referrenceCollectionTodos = collection(dataBase, 'todos')

export const useTodosStore = create((set) => ({
    todos: [],
    loading: true,
    error: null,
    cancelSubmit: null,

submitTodo: () => {
    set({ loading: true, error: null})

    const searchTodos = query(referrenceCollectionTodos)

    const cancelSubmit = onSnapshot(
        searchTodos,
        (returnSearch) => {
            const todo = returnSearch.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }))
            set({ todos, loading: false})
            },
            (error) => {
                console.error("Erro ao escutar tarefas:", error)
                set({
                    error: "Não foi possível carregar tarefas. Verifique sua conexão e as credenciais no .env",
                    
                    loading: false
                })
            }
        )

    set({ cancelSubmit })
}

}))


