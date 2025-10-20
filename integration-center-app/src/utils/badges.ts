export const getBadgeColor = (source: string): string => {
  switch (source.toLowerCase()) {
    case "carbon":
      return "bg-status-carbon-bg text-status-carbon-text border-status-carbon-border border-2 rounded-md";
    case "utility":
      return "bg-status-utility-bg text-status-utility-text border-status-utility-border border-2 rounded-md";
    default:
      return "bg-neutral-100 text-neutral-700";
  }
};
