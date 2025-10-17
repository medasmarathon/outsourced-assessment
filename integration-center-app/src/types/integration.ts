export interface Service {
  id: string;
  name: string;
  icon: string;
  description: string;
  iconColor: string;
  iconBg: string;
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
  color: 'orange' | 'green' | 'gray';
}