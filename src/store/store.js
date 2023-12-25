import { create } from 'zustand'

const useStore = create((set) => ({
    login : {
        userName : "",
        password : ""
    },
    handleName : (e) => set((state)=>(
       { login: {...state.login , userName : e.target.value} }
    )),
    handlePassword : (e) => set((state)=>(
       { login: {...state.login , password : e.target.value} }
    )),

    posts:[],
    setPosts : (datas)=> set((state)=>(
        { posts : [...datas] }
    )) 
}))

export default useStore
