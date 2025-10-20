export interface Service {
  id: string;
  name: string;
  description: string;
  logo: string;
}

export interface Connection {
  id: string;
  integration: string;
  integrationIcon: string;
  name: string;
  source: string;
  entityGroup: string;
  interval: string;
  connectorUrl: string;
}

export interface Badge {
  label: string;
  color: "orange" | "green" | "gray";
}

export interface Tenant {
  id: string;
  name: string;
}
