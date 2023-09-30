import React, { createContext, useContext } from 'react'

const MyContext = createContext();

export function useMyContext(){
    return useContext(MyContext)
}

export function MyContextProvider({children}){

    const genericFunction = () => {
        //insert your code here
    };

    return(
        <MyContext.Provider value={{genericFunction}}>
            {children}
        </MyContext.Provider>
    );

}
