import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faStream,
  faBolt,
  faSearch,
  faArrowDown,
  faPencil,
  faTrash,
  faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { Connection } from '../../types/integration';

interface ConnectionsTableProps {
  connections: Connection[];
}

const iconMap: Record<string, IconDefinition> = {
  'chart-line': faChartLine,
  'stream': faStream,
  'bolt': faBolt
};

const getBadgeColor = (source: string) => {
  switch (source.toLowerCase()) {
    case 'carbon':
      return 'bg-orange-100 text-orange-700';
    case 'utility':
      return 'bg-green-100 text-green-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

const ConnectionsTable = ({ connections }: ConnectionsTableProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredConnections = connections.filter(
    (conn) =>
      conn.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      conn.integration.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredConnections.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedConnections = filteredConnections.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      {/* Search Bar */}
      <div className="p-4 border-b border-gray-200">
        <div className="relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4"
          />
          <input
            type="text"
            placeholder="Integration or Name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <button className="flex items-center space-x-1 hover:text-gray-700">
                  <span>Integration</span>
                  <FontAwesomeIcon icon={faArrowDown} className="w-3 h-3" />
                </button>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Source
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Entity/Group
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Interval
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Connector URL
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Instructions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedConnections.map((connection) => {
              const icon = iconMap[connection.integrationIcon] || faChartLine;
              return (
                <tr key={connection.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-3">
                      <FontAwesomeIcon
                        icon={icon}
                        className="w-5 h-5 text-blue-500"
                      />
                      <span className="text-sm text-gray-900">
                        {connection.integration}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-blue-600 font-medium">
                      {connection.name}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-2 py-1 text-xs font-semibold rounded ${getBadgeColor(
                        connection.source
                      )}`}
                    >
                      {connection.source}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {connection.entityGroup}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {connection.interval}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-sm text-blue-600 hover:text-blue-800">
                      Copy to Clipboard
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-800">
                        <FontAwesomeIcon icon={faExternalLinkAlt} className="w-4 h-4" />
                        <span className="ml-1 text-sm">View</span>
                      </button>
                      <button className="p-2 text-gray-400 hover:text-gray-600">
                        <FontAwesomeIcon icon={faPencil} className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-red-400 hover:text-red-600">
                        <FontAwesomeIcon icon={faTrash} className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="text-sm text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          ← Previous
        </button>
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1)
            .filter((page) => {
              // Show first page, last page, current page, and pages around current
              return (
                page === 1 ||
                page === totalPages ||
                Math.abs(page - currentPage) <= 1
              );
            })
            .map((page, index, array) => {
              // Add ellipsis if there's a gap
              const prevPage = array[index - 1];
              const showEllipsis = prevPage && page - prevPage > 1;

              return (
                <div key={page} className="flex items-center">
                  {showEllipsis && (
                    <span className="px-2 text-gray-400">...</span>
                  )}
                  <button
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded text-sm ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                </div>
              );
            })}
        </div>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="text-sm text-gray-600 hover:text-gray-900 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default ConnectionsTable;