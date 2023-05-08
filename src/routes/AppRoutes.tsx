import { useRoutes } from "react-router-dom";

import { Dashboard } from "../components/Dashboard";
import { Contact } from "../components/Contact";
import { FAQ } from "../components/FAQ";
import { Terms } from "../components/Terms";
import { About } from "../components/About";
import { Commissions } from "../components/Commissions";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/commissions",
      element: <Commissions />,
    },
    {
      path: "/terms",
      element: <Terms />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/faq",
      element: <FAQ />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return <>{routes}</>;
};

export default AppRoutes;
