import { services } from "../data/mockData";

export const getServiceLogo = (integrationName: string): string => {
  const service = services.find((s) => s.name === integrationName);
  return service?.logo || "/assets/default-logo.png";
};

export const getTenantAbbreviation = (name: string): string => {
  const words = name.split(" ");
  if (words.length === 1) {
    return name.substring(0, 2).toUpperCase();
  }
  return (words[0][0] + words[1][0]).toUpperCase();
};
