import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlug } from "@fortawesome/free-solid-svg-icons";
import { faBell, faQuestionCircle } from "@fortawesome/free-regular-svg-icons";
import TenantSwitch from "../TenantSwitch";
import AccountMenu from "../AccountMenu";
import { getPageTitle } from "../../../constants";

const Header = () => {
  const location = useLocation();

  return (
    <header className="flex items-center justify-between border-b border-neutral-200 bg-white px-6 py-3">
      <div className="flex items-center space-x-4">
        <TenantSwitch />
        <div className="flex items-center space-x-2 px-4 text-neutral-700">
          <FontAwesomeIcon icon={faPlug} size="lg" />
          <span className="text-xl font-medium">
            {getPageTitle(location.pathname)}
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="rounded-full bg-neutral-200 p-2 hover:text-neutral-700">
          <FontAwesomeIcon icon={faSearch} size="lg" />
        </button>

        <button className="relative rounded-full bg-neutral-200 p-2 hover:text-neutral-700">
          <FontAwesomeIcon icon={faBell} size="lg" />
          <span className="bg-status-delete absolute top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-xs text-white">
            3
          </span>
        </button>

        <button className="rounded-full bg-neutral-200 p-2 hover:text-neutral-700">
          <FontAwesomeIcon icon={faQuestionCircle} size="lg" />
        </button>

        <AccountMenu />
      </div>
    </header>
  );
};

export default Header;
