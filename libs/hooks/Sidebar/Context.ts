import { createContext } from 'react';


export const Context = createContext<ContextProps | undefined>(undefined);
type ContextProps = {
    sidebar: boolean, 
    setSidebar: (b: boolean) => void; 

}
export default Context;