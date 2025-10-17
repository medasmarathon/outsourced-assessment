import type { Service, Connection } from '../types/integration';

export const services: Service[] = [
  {
    id: 'amazon-quicksight',
    name: 'Amazon QuickSight',
    icon: 'chart-line',
    description: 'Amazon BI service to create dashboards and interactive visualisations.',
    iconColor: '#0073BB',
    iconBg: '#E6F3FF'
  },
  {
    id: 'kafka',
    name: 'Kafka',
    icon: 'stream',
    description: 'Real-time data streaming, event-driven architectures and messaging systems.',
    iconColor: '#000000',
    iconBg: '#E6E6E6'
  },
  {
    id: 'power-bi',
    name: 'Power BI',
    icon: 'chart-bar',
    description: 'Microsoft BI service to create dashboards and data visualisations.',
    iconColor: '#F2C811',
    iconBg: '#FFF9E6'
  },
  {
    id: 'zapier',
    name: 'Zapier',
    icon: 'bolt',
    description: 'Automation tool that connects various apps and services to automate workflows.',
    iconColor: '#FF4A00',
    iconBg: '#FFE6DC'
  },
  {
    id: 'tableau',
    name: 'Tableau',
    icon: 'table',
    description: 'BI service that helps seeing and transforming data into actionable insights.',
    iconColor: '#E97627',
    iconBg: '#FFF0E6'
  },
  {
    id: 'measurabl',
    name: 'Measurabl',
    icon: 'chart-pie',
    description: 'Enable the push and pull of data to and from Measurabl via an API.',
    iconColor: '#00C7B7',
    iconBg: '#E6FAF8'
  }
];

export const connections: Connection[] = [
  {
    id: '1',
    integration: 'Amazon QuickSight',
    integrationIcon: 'chart-line',
    name: 'Energy',
    source: 'Carbon',
    entityGroup: 'ABC Group LTD - Energy',
    interval: '-',
    connectorUrl: 'https://example.com/connector'
  },
  {
    id: '2',
    integration: 'Amazon QuickSight',
    integrationIcon: 'chart-line',
    name: 'Logistics',
    source: 'Carbon',
    entityGroup: 'ABC Group LTD - Logistics',
    interval: '-',
    connectorUrl: 'https://example.com/connector'
  },
  {
    id: '3',
    integration: 'Amazon QuickSight',
    integrationIcon: 'chart-line',
    name: 'Operations',
    source: 'Carbon',
    entityGroup: 'ABC Group LTD - Operations',
    interval: '-',
    connectorUrl: 'https://example.com/connector'
  },
  {
    id: '4',
    integration: 'Amazon QuickSight',
    integrationIcon: 'chart-line',
    name: 'Electricity ToU',
    source: 'Utility',
    entityGroup: '135 Albert St - Electricity',
    interval: 'ToU',
    connectorUrl: 'https://example.com/connector'
  },
  {
    id: '5',
    integration: 'Amazon QuickSight',
    integrationIcon: 'chart-line',
    name: 'Water',
    source: 'Utility',
    entityGroup: '135 Albert St - Water',
    interval: 'Monthly',
    connectorUrl: 'https://example.com/connector'
  },
  {
    id: '6',
    integration: 'Kafka',
    integrationIcon: 'stream',
    name: 'ABC Group Ltd',
    source: 'Carbon',
    entityGroup: 'ABC Group LTD',
    interval: '-',
    connectorUrl: 'https://example.com/connector'
  },
  {
    id: '7',
    integration: 'Zapier',
    integrationIcon: 'bolt',
    name: 'ABC Group Ltd',
    source: 'Carbon',
    entityGroup: 'ABC Group LTD',
    interval: '-',
    connectorUrl: 'https://example.com/connector'
  },
  {
    id: '8',
    integration: 'Zapier',
    integrationIcon: 'bolt',
    name: '135 Albert St - Gas',
    source: 'Utility',
    entityGroup: '135 Albert St - Gas',
    interval: 'Yearly',
    connectorUrl: 'https://example.com/connector'
  }
];