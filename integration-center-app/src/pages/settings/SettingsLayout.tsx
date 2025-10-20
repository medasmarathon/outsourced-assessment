import { Outlet } from "react-router-dom";
import SideMenu from "../../components/layout/SideMenu";

const SettingsLayout = () => {
  return (
    <div className="flex h-full max-h-full flex-1 overflow-hidden">
      <div className="overflow-y-auto">
        <SideMenu />
      </div>

      <div className="flex-1 overflow-hidden">
        <Outlet />
      </div>
    </div>
  );
};

export default SettingsLayout;
