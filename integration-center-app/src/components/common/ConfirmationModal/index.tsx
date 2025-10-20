import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Modal from "../Modal";

interface ActionButton {
  label: string;
  onClick: () => void;
  variant: "primary" | "secondary" | "danger";
  isLoading?: boolean;
  disabled?: boolean;
}

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  headerIcon: IconDefinition;
  headerIconBgColor?: string;
  title: string;
  description: string;
  actions: ActionButton[];
}

const ConfirmationModal = ({
  isOpen,
  onClose,
  headerIcon,
  headerIconBgColor = "bg-status-delete",
  title,
  description,
  actions,
}: ConfirmationModalProps) => {
  const getButtonStyles = (variant: ActionButton["variant"]) => {
    switch (variant) {
      case "primary":
        return "bg-brand-primary text-white hover:bg-brand-primary-hover border-0";
      case "danger":
        return "bg-status-delete text-white hover:bg-status-delete-hover border-0";
      case "secondary":
        return "bg-white text-black border border-neutral-300 hover:bg-neutral-50";
      default:
        return "";
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="p-6">
        <button
          onClick={onClose}
          className="focus:ring-brand-primary absolute top-4 right-4 text-neutral-500 transition-colors hover:text-neutral-700 focus:ring-2 focus:ring-offset-2 focus:outline-none"
          aria-label="Close modal"
        >
          <FontAwesomeIcon icon={faXmark} className="h-5 w-5" />
        </button>

        <div className="mt-2 mb-4 flex justify-start">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${headerIconBgColor}`}
            aria-hidden="true"
          >
            <FontAwesomeIcon icon={headerIcon} size="lg" color="white" />
          </div>
        </div>

        <h2
          className="mb-3 text-left text-xl font-semibold text-neutral-700"
          id="modal-title"
        >
          {title}
        </h2>

        <p
          className="mb-6 text-left leading-relaxed whitespace-pre-line text-neutral-600"
          id="modal-description"
        >
          {description}
        </p>

        <div className="flex gap-3" role="group" aria-label="Action buttons">
          {actions.map((action, index) => (
            <button
              key={index}
              onClick={action.onClick}
              disabled={action.disabled || action.isLoading}
              className={`flex-1 rounded-md px-6 py-2 font-medium transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 ${getButtonStyles(
                action.variant
              )}`}
              aria-busy={action.isLoading}
            >
              {action.isLoading ? (
                <>
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="mr-2 animate-spin"
                    aria-hidden="true"
                  />
                  Loading...
                </>
              ) : (
                action.label
              )}
            </button>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
