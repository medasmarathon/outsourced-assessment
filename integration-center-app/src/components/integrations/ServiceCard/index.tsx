import type { Service } from "../../../types/integration";

interface ServiceCardProps {
  service: Service;
  onAddConnection?: () => void;
}

interface CardHeaderProps {
  logo: string;
  title: string;
}

interface CardContentProps {
  description: string;
}

interface CardActionProps {
  onAddConnection?: () => void;
}

const CardHeader = ({ logo, title }: CardHeaderProps) => (
  <header className="flex items-center space-x-3 px-3 pt-3">
    <div
      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded"
      aria-hidden="true"
    >
      <img
        src={logo}
        alt={`${title} logo`}
        className="h-full w-full object-contain p-0"
      />
    </div>
    <h3 className="text-xl font-semibold text-neutral-700">{title}</h3>
  </header>
);

const CardContent = ({ description }: CardContentProps) => (
  <div className="px-3 py-2">
    <p className="text-sm text-neutral-600">{description}</p>
  </div>
);

const CardAction = ({ onAddConnection }: CardActionProps) => (
  <footer className="flex justify-start rounded-b-[5px] px-3 pt-1 pb-3">
    <button
      onClick={onAddConnection}
      className="bg-brand-primary hover:bg-brand-primary-hover focus:ring-brand-primary cursor-pointer rounded px-3 py-1 text-sm font-medium text-white transition-colors focus:ring-2 focus:ring-offset-2 focus:outline-none"
      aria-label="Add connection"
    >
      Add Connection
    </button>
  </footer>
);

const ServiceCard = ({ service, onAddConnection }: ServiceCardProps) => {
  return (
    <article
      className="flex h-full flex-col overflow-hidden rounded-xl border border-neutral-300 bg-neutral-200 transition-shadow hover:shadow-lg"
      aria-labelledby={`service-card-${service.id}`}
    >
      <CardHeader logo={service.logo} title={service.name} />
      <div className="flex flex-1 flex-col">
        <CardContent description={service.description} />
        <div className="flex-1" aria-hidden="true" />
      </div>
      <CardAction onAddConnection={onAddConnection} />
    </article>
  );
};

export default ServiceCard;
