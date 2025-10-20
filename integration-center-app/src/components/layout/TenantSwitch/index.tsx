import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  faArrowAltCircleDown,
  faArrowAltCircleUp,
} from "@fortawesome/free-regular-svg-icons";
import type { Tenant } from "../../../types/integration";
import { useClickOutside } from "../../../hooks";
import { getTenantAbbreviation } from "../../../utils";
import { useTenant } from "../../../contexts";

const TenantSwitch = () => {
  const { selectedTenant, tenants, selectTenant } = useTenant();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredTenants = tenants.filter((tenant) =>
    tenant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useClickOutside(
    dropdownRef,
    () => {
      setIsOpen(false);
      setSearchQuery("");
    },
    isOpen
  );

  const handleTenantSelect = (tenant: Tenant) => {
    selectTenant(tenant);
    setIsOpen(false);
    setSearchQuery("");
  };

  const infoItems = [
    { label: "Help & Guides", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex cursor-pointer items-center space-x-2 rounded-md border px-2 py-1 transition-colors ${
          isOpen
            ? "border-nav-item-active bg-nav-item-active text-white"
            : "border-neutral-300 text-neutral-700"
        }`}
      >
        <span className="min-w-48 px-2 font-medium">
          {selectedTenant?.name || "Select Tenant"}
        </span>
        <FontAwesomeIcon
          icon={isOpen ? faArrowAltCircleUp : faArrowAltCircleDown}
          className="h-5 w-5"
        />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 z-50 mt-2 w-80 rounded-md border border-neutral-300 bg-white shadow-lg">
          <div className="py-2">
            {infoItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-neutral-700 transition-colors hover:bg-neutral-100"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="border-t border-neutral-300"></div>

          <div className="bg-neutral-50 p-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Type to filter..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="focus:ring-nav-item-active w-full rounded-md border border-neutral-300 bg-white px-3 py-2 pr-10 text-neutral-700 placeholder-neutral-400 focus:border-transparent focus:ring-2 focus:outline-none"
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-neutral-400"
              />
            </div>
          </div>

          <div className="border-t border-neutral-300"></div>

          <div className="max-h-64 overflow-y-auto">
            {filteredTenants.length > 0 ? (
              filteredTenants.map((tenant) => (
                <button
                  key={tenant.id}
                  onClick={() => handleTenantSelect(tenant)}
                  className={`flex w-full items-center space-x-3 px-4 py-3 transition-colors ${
                    selectedTenant?.id === tenant.id
                      ? "bg-nav-item-active text-white"
                      : "text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-md text-sm font-semibold ${
                      selectedTenant?.id === tenant.id
                        ? "text-nav-item-active bg-white"
                        : "bg-avatar-bg text-white"
                    }`}
                  >
                    {getTenantAbbreviation(tenant.name)}
                  </div>
                  <span className="font-medium">{tenant.name}</span>
                </button>
              ))
            ) : (
              <div className="px-4 py-3 text-center text-neutral-400">
                No tenants found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TenantSwitch;
