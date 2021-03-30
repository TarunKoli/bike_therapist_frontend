import { useState, createContext } from "react";

export const SideContext = createContext();

export const SideProvider = (props) => {
  const [hide, setHide] = useState(false);

  return (
    <SideContext.Provider value={[hide, setHide]}>
      {props.children}
    </SideContext.Provider>
  );
};
