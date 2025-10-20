import {
  faExternalLinkAlt,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { type Connection } from "../../../types/integration";
import { getBadgeColor, getServiceLogo } from "../../../utils";

interface ConnectionsTableRowProps {
  connection: Connection;
  onEditClick: (connection: Connection) => void;
  onDeleteClick: (connection: Connection) => void;
}

export const ConnectionsTableRow = ({
  connection,
  onEditClick,
  onDeleteClick,
}: ConnectionsTableRowProps) => {
  const serviceLogo = getServiceLogo(connection.integration);

  return (
    <tr className="hover:bg-neutral-50">
      <td className="px-2 py-2" style={{ width: "30px", maxWidth: "30px" }}>
        <div className="flex h-6 w-6 items-center justify-center rounded bg-neutral-100">
          <img
            src={serviceLogo}
            alt={`${connection.integration} logo`}
            className="h-full w-full object-contain p-0.5"
          />
        </div>
      </td>
      <td className="max-w-[200px] px-4 py-2">
        <div className="flex items-center space-x-3">
          <span className="truncate text-neutral-700">
            {connection.integration}
          </span>
        </div>
      </td>
      <td className="max-w-[150px] px-4 py-2">
        <span className="text-link-text block truncate">{connection.name}</span>
      </td>
      <td className="px-4 py-3 whitespace-nowrap">
        <span
          className={`inline-flex rounded px-2 py-0.5 ${getBadgeColor(
            connection.source
          )}`}
        >
          {connection.source}
        </span>
      </td>
      <td className="max-w-[200px] px-4 py-2">
        <span className="block truncate text-neutral-700">
          {connection.entityGroup}
        </span>
      </td>
      <td className="px-4 py-2 whitespace-nowrap text-neutral-700">
        {connection.interval}
      </td>
      <td className="px-4 py-2 whitespace-nowrap">
        <button
          className="border-link-underline text-link-text cursor-pointer truncate border-b-2"
          aria-label="Copy connector URL to clipboard"
        >
          Copy to Clipboard
        </button>
      </td>
      <td className="px-4 py-2 whitespace-nowrap" style={{ minWidth: "200px" }}>
        <div className="flex items-center justify-between">
          <div>
            <button
              className="border-link-underline text-link-text cursor-pointer border-b-2"
              aria-label="View instructions"
            >
              <FontAwesomeIcon icon={faExternalLinkAlt} className="h-4 w-4" />
              <span className="ml-1">View</span>
            </button>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={() => onEditClick(connection)}
              className="rounded border border-neutral-300 bg-white p-1 text-neutral-700 hover:bg-neutral-50"
              aria-label="Edit connection"
            >
              <FontAwesomeIcon icon={faPenToSquare} className="h-3 w-3" />
            </button>
            <button
              onClick={() => onDeleteClick(connection)}
              className="border-status-delete bg-status-delete hover:bg-status-delete-hover rounded border p-1 text-white"
              aria-label="Delete connection"
            >
              <FontAwesomeIcon icon={faTrashCan} className="h-3 w-3" />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
};
