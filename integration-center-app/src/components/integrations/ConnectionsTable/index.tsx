import { useState } from "react";
import {
  faExclamationCircle,
  faTrashCan as faTrashCanSolid,
} from "@fortawesome/free-solid-svg-icons";
import { useDebounce, useModal } from "../../../hooks";
import {
  useConnections,
  useDeleteConnection,
  useUpdateConnection,
} from "../../../hooks/useConnections";
import { type Connection } from "../../../types/integration";
import { PAGINATION, TIMING } from "../../../constants";
import ConfirmationModal from "../../common/ConfirmationModal";
import { ConnectionsTableSearch } from "./ConnectionsTableSearch";
import { ConnectionsTableHeader } from "./ConnectionsTableHeader";
import { ConnectionsTableRow } from "./ConnectionsTableRow";
import { ConnectionsTablePagination } from "./ConnectionsTablePagination";
import { ConnectionsTableLoading } from "./ConnectionsTableLoading";
import { ConnectionsTableError } from "./ConnectionsTableError";

interface ConnectionsTableProps {}

const ConnectionsTable = ({}: ConnectionsTableProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedConnection, setSelectedConnection] =
    useState<Connection | null>(null);

  const deleteModal = useModal();
  const editModal = useModal();

  const debouncedSearch = useDebounce(searchTerm, TIMING.DEBOUNCE_SEARCH);

  const [previousSearch, setPreviousSearch] = useState(debouncedSearch);
  if (previousSearch !== debouncedSearch) {
    setPreviousSearch(debouncedSearch);
    setCurrentPage(1);
  }

  const {
    data: response,
    isLoading,
    isError,
    error,
  } = useConnections({
    page: currentPage,
    pageSize: PAGINATION.ITEMS_PER_PAGE,
    search: debouncedSearch,
  });

  const deleteConnection = useDeleteConnection();
  const updateConnection = useUpdateConnection();

  const connections = response?.data || [];
  const totalPages = response?.totalPages || 0;

  const handleDeleteClick = (connection: Connection) => {
    setSelectedConnection(connection);
    deleteModal.open();
  };

  const handleEditClick = (connection: Connection) => {
    setSelectedConnection(connection);
    editModal.open();
  };

  const handleDeleteConfirm = async () => {
    if (!selectedConnection) return;

    try {
      await deleteConnection.mutateAsync(selectedConnection.id);
      deleteModal.close();
      setSelectedConnection(null);
    } catch (error) {
      console.error("Failed to delete connection:", error);
    }
  };

  const handleEditConfirm = async () => {
    if (!selectedConnection) return;

    try {
      await updateConnection.mutateAsync({
        id: selectedConnection.id,
        updates: {},
      });
      editModal.close();
      setSelectedConnection(null);
    } catch (error) {
      console.error("Failed to update connection:", error);
    }
  };

  const handleModalClose = () => {
    deleteModal.close();
    editModal.close();
    setSelectedConnection(null);
  };

  if (isLoading) {
    return <ConnectionsTableLoading />;
  }

  if (isError) {
    return <ConnectionsTableError message={error?.message} />;
  }

  return (
    <>
      <ConnectionsTableSearch
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <div className="flex flex-1 flex-col overflow-hidden rounded-xl border border-b border-neutral-200 bg-white shadow-sm">
        <div className="flex-1 overflow-auto rounded-md">
          <table className="w-full">
            <ConnectionsTableHeader />
            <tbody className="divide-y divide-neutral-200 bg-white">
              {connections.map((connection) => (
                <ConnectionsTableRow
                  key={connection.id}
                  connection={connection}
                  onEditClick={handleEditClick}
                  onDeleteClick={handleDeleteClick}
                />
              ))}
            </tbody>
          </table>
        </div>

        <ConnectionsTablePagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {selectedConnection && (
        <ConfirmationModal
          isOpen={deleteModal.isOpen}
          onClose={handleModalClose}
          headerIcon={faTrashCanSolid}
          headerIconBgColor="bg-status-delete"
          title={`Remove "${selectedConnection.name}" connection?`}
          description={`Are you sure you want to remove ${selectedConnection.integration} "${selectedConnection.name}" connection?`}
          actions={[
            {
              label: "Undo",
              onClick: handleModalClose,
              variant: "secondary",
              disabled: deleteConnection.isPending,
            },
            {
              label: "Remove",
              onClick: handleDeleteConfirm,
              variant: "danger",
              isLoading: deleteConnection.isPending,
            },
          ]}
        />
      )}

      {selectedConnection && (
        <ConfirmationModal
          isOpen={editModal.isOpen}
          onClose={handleModalClose}
          headerIcon={faExclamationCircle}
          headerIconBgColor="bg-status-warning"
          title="Change to Existing Connection"
          description={`Change may disrupt functionality and impact data flow.\nAre you sure you want to make changes to ${selectedConnection.integration} "${selectedConnection.name}" connection?`}
          actions={[
            {
              label: "Undo",
              onClick: handleModalClose,
              variant: "secondary",
              disabled: updateConnection.isPending,
            },
            {
              label: "Save Changes",
              onClick: handleEditConfirm,
              variant: "primary",
              isLoading: updateConnection.isPending,
            },
          ]}
        />
      )}
    </>
  );
};

export default ConnectionsTable;
