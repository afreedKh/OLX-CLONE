import { createContext, useContext, useState, type ReactNode } from "react";

type LoginContextTypes = {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  toggleModal: () => void;
};

type ChildrenProps = {
  children: ReactNode;
};
const LoginContext = createContext<LoginContextTypes | undefined>(undefined);

const useLoginModal = () => {
  const context = useContext(LoginContext);
  if (!context) {
    throw new Error("useLoginModal must be used within a LoginProvider");
  }
  return context;
};

const LoginProvider = ({ children }: ChildrenProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const toggleModal = () => setOpenModal(!openModal);

  return (
    <LoginContext.Provider value={{ openModal, setOpenModal, toggleModal }}>
      {children}
    </LoginContext.Provider>
  );
};

export { LoginProvider, useLoginModal };
