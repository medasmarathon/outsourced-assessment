import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faUser,
  faCamera,
  faBuilding,
} from "@fortawesome/free-regular-svg-icons";
import {
  faTag,
  faPlug,
  faGear,
  faSitemap,
  faCloudBolt,
  faLayerGroup,
  faTv,
} from "@fortawesome/free-solid-svg-icons";

interface MenuItem {
  icon: IconDefinition;
  label: string;
  path?: string;
  disabled?: boolean;
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
}

const SideMenu = () => {
  const menuSections: MenuSection[] = [
    {
      title: "Organisation",
      items: [
        { icon: faHome, label: "Manage", path: "/settings/manage" },
        { icon: faUser, label: "Users", path: "/settings/users" },
        { icon: faTag, label: "Tags", path: "/settings/tags" },
        { icon: faPlug, label: "Integrations", path: "/settings/integrations" },
      ],
    },
    {
      title: "Utilities",
      items: [
        { icon: faGear, label: "Configuration" },
        { icon: faSitemap, label: "Hierarchy" },
        { icon: faBuilding, label: "Assets" },
      ],
    },
    {
      title: "Carbon",
      items: [
        { icon: faGear, label: "Configuration" },
        { icon: faSitemap, label: "Hierarchy" },
        { icon: faLayerGroup, label: "Inventory Items" },
        { icon: faCloudBolt, label: "Emission Factors" },
        { icon: faCamera, label: "Snapshots", disabled: true },
      ],
    },
    {
      title: "Displays",
      items: [{ icon: faTv, label: "Manage" }],
    },
  ];

  return (
    <aside className="text-nav-item-inactive flex h-full w-64 flex-col bg-transparent pr-2 pl-6">
      <nav className="flex-1 overflow-y-auto py-4">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            {section.title && (
              <h3 className="text-nav-heading mb-2 px-3 text-xs font-semibold tracking-wider">
                {section.title}
              </h3>
            )}
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  {item.path ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex w-full items-center rounded-md px-[10px] py-[10px] text-sm font-semibold transition-colors ${
                          item.disabled
                            ? "text-neutral-400"
                            : isActive
                              ? "bg-nav-item-active text-nav-item-active-text"
                              : "hover:bg-nav-bg hover:text-nav-item-inactive text-neutral-700"
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <FontAwesomeIcon
                            icon={item.icon}
                            size="xl"
                            className={`mr-3 ${
                              item.disabled
                                ? "text-neutral-400"
                                : isActive
                                  ? "text-nav-item-active-text"
                                  : "text-nav-item-inactive-icon"
                            }`}
                          />
                          <span>{item.label}</span>
                        </>
                      )}
                    </NavLink>
                  ) : (
                    <button
                      disabled={item.disabled}
                      className={`flex w-full items-center rounded-md px-[10px] py-[10px] text-sm font-semibold transition-colors ${
                        item.disabled
                          ? "cursor-not-allowed text-neutral-400"
                          : "hover:bg-nav-bg hover:text-nav-item-inactive text-neutral-700"
                      }`}
                    >
                      <FontAwesomeIcon
                        icon={item.icon}
                        size="xl"
                        className={`mr-3 ${item.disabled ? "text-neutral-400" : "text-nav-item-inactive-icon"}`}
                      />
                      <span>{item.label}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default SideMenu;
