import ServiceCard from "../../components/integrations/ServiceCard";
import ConnectionsTable from "../../components/integrations/ConnectionsTable";
import { services } from "../../data/mockData";
import ErrorBoundary from "../../components/common/ErrorBoundary";

const Integrations = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="mr-12 p-4">
        <section>
          <h1 className="mb-2 text-2xl font-bold text-neutral-700">
            Choose a Service to Connect
          </h1>
          <p className="text-md mb-6 text-neutral-500">
            Connect BraveGen to other tools you use.
          </p>

          <ErrorBoundary fallback={<p>Failed to load services.</p>}>
            <div className="grid auto-rows-max grid-cols-3 gap-6">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </ErrorBoundary>
        </section>
      </div>
      <hr className="my-2 mr-16 ml-4 border-neutral-200" />

      <div className="flex flex-1 flex-col overflow-hidden p-4">
        <h2 className="mb-2 text-2xl font-bold text-neutral-700">
          Existing Connections
        </h2>
        <ErrorBoundary fallback={<p>Failed to load connections.</p>}>
          <ConnectionsTable />
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default Integrations;
