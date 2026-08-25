import { collection, query, serverTimestamp, updateDoc } from "firebase/firestore"
import { create } from "zustand"
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
},
    cancelSubmitTodos: () => {
        const { cancelSubmit } = get()
        if (cancelSubmit) cancelSubmit()
    },

    addTodo: async (title) => {
        const titleClean = title.trim()
        if (!titleClean) return

        try {
            await addDoc(referrenceCollectionTodos, {
                title: titleClean,
                done: false,
                createdIn: serverTimestamp(),
            })
        } catch (error) {
            console.error('Erro ao adicionar tarefa:', error)
            set({ error:"Não foi possível adicionar tarefa."})
        }
    },
    changeTodo: async (id, done) => {
        try {
            const referrenceCollectionTodos = doc(dataBase, 'todos', id)
            await updateDoc(referrenceCollectionTodos, { done: !done })
        } catch (error) {
            console.error('Erro ao atualizar tarefa:', error)
            set({ error:"Não foi possível atualizar tarefa."})
        }
    },
    deleteTodo: async (id) => {
        try {
            const referrenceCollectionTodos = doc(dataBase, 'todos', id)
            await deleteDoc(referrenceCollectionTodos)
        } catch (error) {
            console.error('Erro ao remover tarefa:', error)
            set({ error:"Não foi possível remover tarefa."})
        }
    },

    clearError: () => set({ error: null })
}))


