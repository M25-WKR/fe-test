import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => (
  <div>
    <Navigation />
    <Outlet />
  </div>
);

export default DefaultLayout;
