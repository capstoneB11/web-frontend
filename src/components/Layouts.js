import { Outlet } from "react-router-dom";
import PublicHeader from "./public/PublicHeader";

const Layouts = () => {
  return (
    <div className="bg-gradient-to-b from-gradient-1 to-gradient-2">
      {/* Sticky Header */}
      <PublicHeader />
      <Outlet />
    </div>
  );
};

export default Layouts;
