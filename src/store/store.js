import { create } from 'zustand'

export const useStore = create((set) => ({
    /* Var */

    topics: ['For you', 'Relevant', 'Latest', 'Top'],
    activeTopic: 'For you',
    updateActiveTopic: (topic) => set(() => ({ activeTopic: topic })),
}))

export const useUser = create((set) => ({
    user: {
        auth: false,
        email: null,
        id: null,
        token: null,
    },
    setUser: (data) =>
        set(() => ({
            user: {
                email: data.email,
                id: data.uid,
                token: data.token,
            },
        })),
    removeUser: () =>
        set((state) => {
            state.user = { auth: false, email: null, id: null, token: null }
        }),
}))
