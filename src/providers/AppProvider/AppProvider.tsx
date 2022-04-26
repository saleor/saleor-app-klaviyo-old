import { createApp, App } from "@saleor/app-bridge";
import { createContext, useMemo } from "react";

interface IAppContext {
  app?: App;
}

export const AppContext = createContext<IAppContext>({ app: undefined });

const AppProvider: React.FC = (props) => {
  const app = useMemo(() => {
    if (typeof window !== "undefined") {
      try {
        return createApp();
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  return <AppContext.Provider value={{ app }} {...props} />;
};
export default AppProvider;
