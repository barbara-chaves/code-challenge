import { createContext } from "react";
import charts from "./pages/charts.json";

const PagesTexts = {
  pages: {
    charts
  },
};

const PageTextContext = createContext(PagesTexts);

const PageTextContextProvider: React.FC = ({ children }) => {
  return (
    <PageTextContext.Provider value={PagesTexts}>
      {children}
    </PageTextContext.Provider>
  );
};

export { PageTextContext, PageTextContextProvider };
