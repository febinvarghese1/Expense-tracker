import { useReducer, createContext } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
  ],
};

export const GlobalState = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const deleteTransactions = (id) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
  };

  const addTransactions = (transactions) => {
    dispatch({
      type: "ADD",
      payload: transactions,
    });
  };

  return (
    <GlobalState.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
