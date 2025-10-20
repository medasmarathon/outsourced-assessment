import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faLightbulb,
  faClipboard,
  faThumbsUp,
} from "@fortawesome/free-regular-svg-icons";
import {
  faLayerGroup,
  faTv,
  faBolt,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

interface SideNavIcon {
  icon: IconDefinition;
  label: string;
}

const Sidebar = () => {
  const sideNavIcons: SideNavIcon[] = [
    { icon: faLightbulb, label: "Insights" },
    { icon: faClipboard, label: "Collect" },
    { icon: faThumbsUp, label: "Reviews" },
    { icon: faLayerGroup, label: "Carbon" },
    { icon: faBolt, label: "Utilities" },
    { icon: faTv, label: "Reports" },
    { icon: faClipboard, label: "Actions" },
  ];

  return (
    <aside
      className="border-nav-bg bg-nav-bg flex min-h-screen flex-col items-center border-r"
      style={{ maxWidth: "60px", width: "60px" }}
    >
      <div className="flex w-full items-center justify-center p-2">
        <img
          src="/assets/Logo.png"
          alt="Logo"
          className="h-10 w-10 object-contain"
        />
      </div>

      <section className="flex flex-1 flex-col items-center justify-center gap-4 py-4">
        {sideNavIcons.map((navIcon, index) => (
          <div
            key={index}
            className="hover:text-nav-item-inactive flex cursor-pointer flex-col items-center justify-center text-neutral-50 transition-colors"
          >
            <FontAwesomeIcon icon={navIcon.icon} size="xl" />
            <span className="mt-1 text-center text-xs">{navIcon.label}</span>
          </div>
        ))}
      </section>

      <div className="flex w-full items-center justify-center p-2 pb-4">
        <div className="text-nav-item-active hover:text-nav-item-inactive flex cursor-pointer flex-col items-center justify-center transition-colors">
          <FontAwesomeIcon icon={faGear} size="xl" />
          <span className="mt-1 text-center text-xs">Settings</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
