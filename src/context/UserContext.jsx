import { createContext } from "react";

export const DataContext = createContext();
const userContext = ({children}) => {
    const userName = "ZUhaib"
  return <div>
    <DataContext.Provider value={userName}>
        {children}
    </DataContext.Provider>
  </div>;
};

export default userContext;
