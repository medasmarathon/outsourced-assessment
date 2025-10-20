import { useState, useRef } from "react";
import { useClickOutside } from "../../../hooks";

const AccountMenu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  useClickOutside(
    profileDropdownRef,
    () => setIsProfileOpen(false),
    isProfileOpen
  );

  return (
    <div className="relative" ref={profileDropdownRef}>
      <button
        onClick={() => setIsProfileOpen(!isProfileOpen)}
        className="bg-avatar-bg flex items-center justify-center rounded-md p-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
      >
        JA
      </button>

      {isProfileOpen && (
        <div className="absolute top-full right-0 z-50 mt-2 w-48 rounded-md border border-neutral-200 bg-white shadow-lg">
          <button
            onClick={() => setIsProfileOpen(false)}
            className="w-full px-4 py-3 text-left text-neutral-700 transition-colors hover:bg-neutral-50"
          >
            Account Settings
          </button>

          <div className="border-t border-neutral-200"></div>

          <button
            onClick={() => setIsProfileOpen(false)}
            className="w-full px-4 py-3 text-left text-neutral-700 transition-colors hover:bg-neutral-50"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default AccountMenu;
