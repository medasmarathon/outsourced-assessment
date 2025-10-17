import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faHouse,
  faUsers,
  faTag,
  faPlug,
  faGear,
  faSitemap,
  faBoxArchive,
  faLightbulb,
  faCloudBolt,
  faThumbsUp,
  faLayerGroup,
  faTv,
  faFolderOpen,
  faClipboard,
  faBolt
} from '@fortawesome/free-solid-svg-icons';

interface MenuItem {
  icon: IconDefinition;
  label: string;
  isActive?: boolean;
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
}

const Sidebar = () => {
  const menuSections: MenuSection[] = [
    {
      title: 'Organisation',
      items: [
        { icon: faHouse, label: 'Manage' },
        { icon: faUsers, label: 'Users' },
        { icon: faTag, label: 'Tags' },
        { icon: faPlug, label: 'Integrations', isActive: true }
      ]
    },
    {
      title: 'Utilities',
      items: [
        { icon: faGear, label: 'Configuration' },
        { icon: faSitemap, label: 'Hierarchy' },
        { icon: faBoxArchive, label: 'Assets' }
      ]
    },
    {
      title: 'Carbon',
      items: [
        { icon: faGear, label: 'Configuration' },
        { icon: faSitemap, label: 'Hierarchy' },
        { icon: faLayerGroup, label: 'Inventory Items' },
        { icon: faCloudBolt, label: 'Emission Factors' },
        { icon: faFolderOpen, label: 'Snapshots' }
      ]
    },
    {
      title: 'Displays',
      items: [
        { icon: faTv, label: 'Manage' }
      ]
    }
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen flex flex-col">
      {/* Logo */}
      <div className="p-4 flex items-center justify-center border-b border-gray-800">
        <div className="w-10 h-10 bg-white rounded flex items-center justify-center">
          <span className="text-gray-900 font-bold text-xl">🦁</span>
        </div>
      </div>

      {/* Menu Sections */}
      <nav className="flex-1 overflow-y-auto py-4">
        {menuSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-6">
            {section.title && (
              <h3 className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                {section.title}
              </h3>
            )}
            <ul className="space-y-1">
              {section.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <button
                    className={`w-full flex items-center px-4 py-2 text-sm transition-colors ${
                      item.isActive
                        ? 'bg-green-600 text-white'
                        : 'text-gray-300 hover:bg-gray-800'
                    }`}
                  >
                    <FontAwesomeIcon icon={item.icon} className="w-4 h-4 mr-3" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {/* Bottom Icons */}
      <div className="border-t border-gray-800 p-4 space-y-4">
        <button className="flex items-center text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faLightbulb} className="w-5 h-5" />
          <span className="ml-3 text-sm">Insights</span>
        </button>
        <button className="flex items-center text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faClipboard} className="w-5 h-5" />
          <span className="ml-3 text-sm">Collect</span>
        </button>
        <button className="flex items-center text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faThumbsUp} className="w-5 h-5" />
          <span className="ml-3 text-sm">Reviews</span>
        </button>
        <button className="flex items-center text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faLayerGroup} className="w-5 h-5" />
          <span className="ml-3 text-sm">Carbon</span>
        </button>
        <button className="flex items-center text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faBolt} className="w-5 h-5" />
          <span className="ml-3 text-sm">Utilities</span>
        </button>
        <button className="flex items-center text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faTv} className="w-5 h-5" />
          <span className="ml-3 text-sm">Reports</span>
        </button>
        <button className="flex items-center text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faClipboard} className="w-5 h-5" />
          <span className="ml-3 text-sm">Actions</span>
        </button>
        <button className="flex items-center text-gray-400 hover:text-white transition-colors">
          <FontAwesomeIcon icon={faGear} className="w-5 h-5" />
          <span className="ml-3 text-sm">Settings</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;