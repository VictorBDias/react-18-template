import { Outlet } from "react-router-dom";
import { useSessionsNavigation } from "../routes/auth.navigations";

export const Session  = () => {
  const { navigateToTest, navigateToCreate } = useSessionsNavigation()
  return <>
    <h1>Session</h1>
    <button onClick={navigateToTest}>Navigation button</button>
    <button onClick={navigateToCreate}>Open nested component</button>
    <Outlet/>
  </>;
}

