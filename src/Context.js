import React from "react";
import { useState,useContext,createContext } from "react";

const stateContext = createContext();

const StateProvider = ({children})=>{

    const[loading,setLoading] = useState(false)

    const[updateloading,setUpdateLoading] = useState(false)

    return(
        <stateContext.Provider value={[loading,setLoading,updateloading,setUpdateLoading]}>
         {children}        
        </stateContext.Provider>
    )
}

const useTheState = ()=> useContext(stateContext)

export{useTheState,StateProvider}
