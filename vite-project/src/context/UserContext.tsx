import React, { createContext, useEffect, useState, type ReactNode } from 'react'


export type Mode = 1 | 0
export type UserContextType ={
    name?: string,
    mod?: Mode //dark=0, light=1
    setMode?: (mode:Mode) => void;
}

export const UserContext = createContext<UserContextType>({});


export default function UserProvider({children}:{children:ReactNode}) {

    const [mode, setMode] = useState<Mode>(0);
    
    useEffect(()=>{
        const mode:string | null = localStorage.getItem('themeMode');
        if(mode){
            setMode(parseInt(mode) as Mode);
        }else{
            setMode(1);
        }
    },[])

    const saveChange = (mode:Mode) =>{
        localStorage.setItem('themeMode', mode.toString())
        setMode(mode);
    }
  return (
    <UserContext.Provider value={{name:"Kishan Dervaliya", mod:mode, setMode:saveChange}}>
        <>
        {children}
        </>
    </UserContext.Provider>
  )
}
