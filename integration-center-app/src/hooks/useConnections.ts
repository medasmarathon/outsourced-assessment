import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { Connection } from "../types/integration";
import {
  api,
  type PaginatedResponse,
  type FetchConnectionsParams,
} from "../services/api";

export const QUERY_KEYS = {
  connections: {
    list: "CONNECTION_LIST",
    detail: "CONNECTION_DETAIL",
  },
};

export const connectionsKeys = {
  list: (params: FetchConnectionsParams) =>
    [QUERY_KEYS.connections.list, params] as const,
  detail: (id: string) => [QUERY_KEYS.connections.detail, id] as const,
};

export const useConnections = (params: FetchConnectionsParams = {}) => {
  return useQuery<PaginatedResponse<Connection>, Error>({
    queryKey: connectionsKeys.list(params),
    queryFn: () => api.fetchConnections(params),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};

export const useDeleteConnection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => api.deleteConnection(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.connections.list],
      });
    },
  });
};

export const useUpdateConnection = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      id,
      updates,
    }: {
      id: string;
      updates: Partial<Connection>;
    }) => api.updateConnection(id, updates),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QUERY_KEYS.connections.list],
      });
    },
  });
};
