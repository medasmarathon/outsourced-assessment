import ServiceCard from '../components/integrations/ServiceCard';
import ConnectionsTable from '../components/integrations/ConnectionsTable';
import { services, connections } from '../data/mockData';

const IntegrationCenter = () => {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      {/* Choose a Service Section */}
      <section className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Choose a Service to Connect
        </h1>
        <p className="text-gray-600 mb-6">
          Connect BraveGen to other tools you use.
        </p>
        
        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Existing Connections Section */}
      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Existing Connections
        </h2>
        <ConnectionsTable connections={connections} />
      </section>
    </div>
  );
};

export default IntegrationCenter;