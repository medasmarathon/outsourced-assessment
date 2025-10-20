import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ConnectionsTableSearchProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

export const ConnectionsTableSearch = ({
  searchTerm,
  onSearchChange,
}: ConnectionsTableSearchProps) => {
  return (
    <div className="border-b border-neutral-200 py-4">
      <div className="relative" style={{ maxWidth: "300px" }}>
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 transform text-neutral-400"
        />
        <input
          type="search"
          placeholder="Integration or Name"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="focus:ring-brand-primary ml-[2px] w-full rounded-md border border-neutral-300 bg-white py-2 pr-4 pl-10 focus:ring-2 focus:outline-none"
          aria-label="Search integrations"
        />
      </div>
    </div>
  );
};
