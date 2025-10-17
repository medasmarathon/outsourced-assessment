import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faStream,
  faChartBar,
  faBolt,
  faTable,
  faChartPie
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import type { Service } from '../../types/integration';

interface ServiceCardProps {
  service: Service;
}

const iconMap: Record<string, IconDefinition> = {
  'chart-line': faChartLine,
  'stream': faStream,
  'chart-bar': faChartBar,
  'bolt': faBolt,
  'table': faTable,
  'chart-pie': faChartPie
};

const ServiceCard = ({ service }: ServiceCardProps) => {
  const icon = iconMap[service.icon] || faChartLine;

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start space-x-4">
        {/* Icon */}
        <div
          className="w-12 h-12 rounded flex items-center justify-center flex-shrink-0"
          style={{ backgroundColor: service.iconBg }}
        >
          <FontAwesomeIcon
            icon={icon}
            className="w-6 h-6"
            style={{ color: service.iconColor }}
          />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {service.name}
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            {service.description}
          </p>
          <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors">
            Add Connection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;