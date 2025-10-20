import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ConnectionsTableHeader = () => {
  return (
    <thead className="sticky top-0 rounded-md border-b border-neutral-200 bg-white">
      <tr>
        <th
          className="px-2 py-4 text-left text-neutral-600"
          style={{ width: "30px", maxWidth: "30px" }}
          aria-label="Service Logo"
        ></th>
        <th className="px-4 py-4 text-left font-normal text-neutral-600">
          <button
            className="flex items-center space-x-1 hover:text-neutral-700"
            aria-label="Sort by integration"
          >
            <span>Integration</span>
            <FontAwesomeIcon icon={faArrowDown} className="h-2 w-2 p-1" />
          </button>
        </th>
        <th className="px-4 py-4 text-left font-normal text-neutral-600">
          Name
        </th>
        <th className="px-4 py-4 text-left font-normal text-neutral-600">
          Source
        </th>
        <th className="px-4 py-4 text-left font-normal text-neutral-600">
          Entity/Group
        </th>
        <th className="px-4 py-4 text-left font-normal text-neutral-600">
          Interval
        </th>
        <th className="px-4 py-4 text-left font-normal text-neutral-600">
          Connector URL
        </th>
        <th
          className="px-4 py-4 text-left font-normal text-neutral-600"
          style={{ minWidth: "200px" }}
        >
          Instructions
        </th>
      </tr>
    </thead>
  );
};
