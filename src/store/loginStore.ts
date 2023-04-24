import { create } from 'zustand'

const useLoginStore = create((set) => ({
  login: {},
  setLogin: (loginData: any) => set((state: any) => ({ login : { ...state.login, ...loginData }})),
}))

export default useLoginStore