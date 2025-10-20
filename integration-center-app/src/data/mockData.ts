import type { Service, Connection, Tenant } from "../types/integration";

export const services: Service[] = [
  {
    id: "amazon-quicksight",
    name: "Amazon QuickSight",
    description:
      "Amazon BI service to create dashboards and interactive visualisations.",
    logo: "/assets/AmazonQuicksight.png",
  },
  {
    id: "kafka",
    name: "Kafka",
    description:
      "Real-time data streaming, event-driven architectures and messaging systems.",
    logo: "/assets/Kafka.png",
  },
  {
    id: "power-bi",
    name: "Power BI",
    description:
      "Microsoft BI service to create dashboards and data visualisations.",
    logo: "/assets/PowerBI.png",
  },
  {
    id: "zapier",
    name: "Zapier",
    description:
      "Automation tool that connects various apps and services to automate workflows.",
    logo: "/assets/Zapier.png",
  },
  {
    id: "tableau",
    name: "Tableau",
    description:
      "BI service that helps seeing and transforming data into actionable insights.",
    logo: "/assets/Tableau.png",
  },
  {
    id: "measurabl",
    name: "Measurabl",
    description:
      "Enable the push and pull of data to and from Measurabl via an API.",
    logo: "/assets/Measurabl.png",
  },
];

const baseConnections: Connection[] = [
  {
    id: "1",
    integration: "Amazon QuickSight",
    integrationIcon: "chart-line",
    name: "Energy",
    source: "Carbon",
    entityGroup: "ABC Group LTD - Energy",
    interval: "-",
    connectorUrl: "https://example.com/connector",
  },
  {
    id: "2",
    integration: "Amazon QuickSight",
    integrationIcon: "chart-line",
    name: "Logistics",
    source: "Carbon",
    entityGroup: "ABC Group LTD - Logistics",
    interval: "-",
    connectorUrl: "https://example.com/connector",
  },
  {
    id: "3",
    integration: "Amazon QuickSight",
    integrationIcon: "chart-line",
    name: "Operations",
    source: "Carbon",
    entityGroup: "ABC Group LTD - Operations",
    interval: "-",
    connectorUrl: "https://example.com/connector",
  },
  {
    id: "4",
    integration: "Amazon QuickSight",
    integrationIcon: "chart-line",
    name: "Electricity ToU",
    source: "Utility",
    entityGroup: "135 Albert St - Electricity",
    interval: "ToU",
    connectorUrl: "https://example.com/connector",
  },
  {
    id: "5",
    integration: "Amazon QuickSight",
    integrationIcon: "chart-line",
    name: "Water",
    source: "Utility",
    entityGroup: "135 Albert St - Water",
    interval: "Monthly",
    connectorUrl: "https://example.com/connector",
  },
  {
    id: "6",
    integration: "Kafka",
    integrationIcon: "stream",
    name: "ABC Group Ltd",
    source: "Carbon",
    entityGroup: "ABC Group LTD",
    interval: "-",
    connectorUrl: "https://example.com/connector",
  },
  {
    id: "7",
    integration: "Zapier",
    integrationIcon: "bolt",
    name: "ABC Group Ltd",
    source: "Carbon",
    entityGroup: "ABC Group LTD",
    interval: "-",
    connectorUrl: "https://example.com/connector",
  },
  {
    id: "8",
    integration: "Zapier",
    integrationIcon: "bolt",
    name: "135 Albert St - Gas",
    source: "Utility",
    entityGroup: "135 Albert St - Gas",
    interval: "Yearly",
    connectorUrl: "https://example.com/connector",
  },
];

const generateRandomConnections = (count: number): Connection[] => {
  const connectionNames = [
    "Energy",
    "Logistics",
    "Operations",
    "Finance",
    "Marketing",
    "Sales",
    "HR",
    "IT",
    "Production",
    "Maintenance",
    "Quality",
    "R&D",
    "Customer Service",
    "Supply Chain",
    "Procurement",
    "Warehouse",
    "Electricity",
    "Water",
    "Gas",
    "Solar",
    "Wind",
    "Steam",
  ];

  const entityGroups = [
    "ABC Group LTD",
    "XYZ Corporation",
    "Tech Solutions Inc",
    "Global Industries",
    "Innovative Systems",
    "Prime Enterprises",
    "Summit Holdings",
    "Velocity Partners",
    "135 Albert St",
    "200 Main St",
    "350 Park Ave",
    "450 Market St",
  ];

  const sources = ["Carbon", "Utility"];
  const intervals = [
    "-",
    "Hourly",
    "Daily",
    "Weekly",
    "Monthly",
    "Quarterly",
    "Yearly",
    "ToU",
  ];
  const icons = ["chart-line", "stream", "bolt", "database", "server"];

  const generatedConnections: Connection[] = [];

  for (let i = 0; i < count; i++) {
    const service = services[Math.floor(Math.random() * services.length)];
    const source = sources[Math.floor(Math.random() * sources.length)];
    const entityGroup =
      entityGroups[Math.floor(Math.random() * entityGroups.length)];
    const connectionName =
      connectionNames[Math.floor(Math.random() * connectionNames.length)];
    const interval =
      source === "Carbon"
        ? "-"
        : intervals[Math.floor(Math.random() * intervals.length)];

    generatedConnections.push({
      id: `gen-${i + 1}`,
      integration: service.name,
      integrationIcon: icons[Math.floor(Math.random() * icons.length)],
      name: `${connectionName} ${i + 1}`,
      source,
      entityGroup: `${entityGroup} - ${connectionName}`,
      interval,
      connectorUrl: `https://example.com/connector/${i + 1}`,
    });
  }

  return generatedConnections;
};

export const connections: Connection[] = [
  ...baseConnections,
  ...generateRandomConnections(100),
];

export const tenants: Tenant[] = [
  {
    id: "1",
    name: "ABC Group Ltd",
  },
  {
    id: "2",
    name: "XYZ Corporation",
  },
  {
    id: "3",
    name: "Tech Solutions Inc",
  },
  {
    id: "4",
    name: "Global Industries",
  },
  {
    id: "5",
    name: "Innovative Systems",
  },
  {
    id: "6",
    name: "Prime Enterprises",
  },
  {
    id: "7",
    name: "Summit Holdings",
  },
  {
    id: "8",
    name: "Velocity Partners",
  },
];
