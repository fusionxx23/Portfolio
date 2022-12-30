import { useContext } from "react";
import Context from './Context'; 

export default function useSidebarProvider() {
    const context = useContext(Context); 
    if(!context) throw new Error("Status Context is undefined"); 
    return context; 
}