import { create } from 'zustand'

const useLoginStore = create((set) => ({
  login: {},
  setLogin: () => set((state: any) => {}),
}))

export default useLoginStore;