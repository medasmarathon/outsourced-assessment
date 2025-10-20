import type { Connection } from "../types/integration";
import { connections } from "../data/mockData";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface PaginatedResponse<T> {
  data: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export interface FetchConnectionsParams {
  page?: number;
  pageSize?: number;
  search?: string;
}

export const api = {
  async fetchConnections(
    params: FetchConnectionsParams = {}
  ): Promise<PaginatedResponse<Connection>> {
    const { page = 1, pageSize = 8, search = "" } = params;

    await delay(500);

    let filteredConnections = [...connections];
    if (search.trim()) {
      const searchLower = search.toLowerCase().trim();
      filteredConnections = filteredConnections.filter(
        (conn) =>
          conn.name.toLowerCase().includes(searchLower) ||
          conn.integration.toLowerCase().includes(searchLower)
      );
    }

    const totalCount = filteredConnections.length;
    const totalPages = Math.ceil(totalCount / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = filteredConnections.slice(startIndex, endIndex);

    return {
      data: paginatedData,
      totalCount,
      page,
      pageSize,
      totalPages,
    };
  },

  async deleteConnection(id: string): Promise<void> {
    await delay(500);

    const index = connections.findIndex((conn) => conn.id === id);
    if (index === -1) {
      throw new Error("Connection not found");
    }

    connections.splice(index, 1);
  },

  async updateConnection(
    id: string,
    updates: Partial<Connection>
  ): Promise<Connection> {
    await delay(500);

    const connection = connections.find((conn) => conn.id === id);
    if (!connection) {
      throw new Error("Connection not found");
    }

    Object.assign(connection, updates);
    return { ...connection };
  },
};
