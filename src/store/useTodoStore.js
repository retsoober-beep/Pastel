import { create } from zustand

export const useTodosStore = create((set) => ({
    todos: [],
    loading: true,
    error: null

    
}))
