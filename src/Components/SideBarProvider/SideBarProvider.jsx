import React, { useContext, useState } from "react";
const SideBarContext=React.createContext()
const SideBarProvider = ({children}) => {
    const [sideBar,setSideBar]=useState(null)
    const [active, setActive] = useState("nav");
    
    return ( 
        <SideBarContext.Provider value={{sideBar,setSideBar,active,setActive}}>
          {children}
        </SideBarContext.Provider>
     );
}
export const useSideBar = () => useContext(SideBarContext);
export default SideBarProvider ;