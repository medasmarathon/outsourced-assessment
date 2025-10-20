import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ConnectionsTableErrorProps {
  message?: string;
}

export const ConnectionsTableError = ({
  message,
}: ConnectionsTableErrorProps) => {
  return (
    <div
      className="flex flex-1 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm"
      role="alert"
      aria-live="assertive"
    >
      <div className="py-12 text-center">
        <FontAwesomeIcon
          icon={faExclamationCircle}
          className="text-status-delete mb-4 h-12 w-12"
          aria-hidden="true"
        />
        <p className="mb-2 font-semibold text-neutral-700">
          Failed to load connections
        </p>
        <p className="text-sm text-neutral-500">
          {message || "An unexpected error occurred"}
        </p>
      </div>
    </div>
  );
};
