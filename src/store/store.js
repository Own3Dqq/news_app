import { create } from 'zustand'

export const useStore = create((set) => ({
    /* Var */
    topics: ['For you', 'Relevant', 'Latest', 'Top'],
    activeTopic: 'For you',
    updateActiveTopic: (topic) => set(() => ({ activeTopic: topic })),
}))
