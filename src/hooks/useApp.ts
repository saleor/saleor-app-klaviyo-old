import { useContext } from "react";
import { AppContext } from "../providers/AppProvider";

export const useApp = () => {
  const { app } = useContext(AppContext);

  return app;
};
