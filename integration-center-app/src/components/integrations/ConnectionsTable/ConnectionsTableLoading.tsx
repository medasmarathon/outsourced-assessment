import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ConnectionsTableLoading = () => {
  return (
    <div
      className="flex flex-1 items-center justify-center rounded-xl border border-neutral-200 bg-white shadow-sm"
      role="status"
      aria-live="polite"
    >
      <div className="py-12 text-center">
        <FontAwesomeIcon
          icon={faSpinner}
          className="text-brand-primary mb-4 h-8 w-8 animate-spin"
          aria-hidden="true"
        />
        <p className="text-neutral-600">Loading connections...</p>
      </div>
    </div>
  );
};
