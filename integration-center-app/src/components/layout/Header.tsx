import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faSearch, faBell, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
      {/* Left Section - Company and Integrations */}
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700 font-medium">ABC Group Ltd</span>
          <FontAwesomeIcon icon={faCircleInfo} className="text-gray-400 w-4 h-4" />
        </div>
        <div className="flex items-center space-x-2 text-gray-700">
          <FontAwesomeIcon icon={faPlug} className="w-4 h-4" />
          <span className="font-semibold">Integrations</span>
        </div>
      </div>

      {/* Right Section - Search, Notifications, Help, Profile */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <button className="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faSearch} className="w-5 h-5" />
        </button>

        {/* Notifications */}
        <button className="relative text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faBell} className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
            3
          </span>
        </button>

        {/* Help */}
        <button className="text-gray-500 hover:text-gray-700">
          <FontAwesomeIcon icon={faQuestionCircle} className="w-5 h-5" />
        </button>

        {/* User Profile */}
        <button className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold hover:bg-blue-700">
          JA
        </button>
      </div>
    </header>
  );
};

const faPlug = {
  prefix: 'fas' as const,
  iconName: 'plug' as const,
  icon: [640, 512, [], "f1e6", "M96 0C113.7 0 128 14.33 128 32V128H64V32C64 14.33 78.33 0 96 0zM288 0C305.7 0 320 14.33 320 32V128H256V32C256 14.33 270.3 0 288 0zM352 160C369.7 160 384 174.3 384 192C384 209.7 369.7 224 352 224V256C352 333.4 297 397.1 224 412.8V512H160V412.8C86.97 397.1 32 333.4 32 256V224C14.33 224 0 209.7 0 192C0 174.3 14.33 160 32 160H352zM224 0C241.7 0 256 14.33 256 32V128H192V32C192 14.33 206.3 0 224 0z"]
};

export default Header;