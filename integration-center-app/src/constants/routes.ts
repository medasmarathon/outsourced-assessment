export const ROUTES = {
  HOME: "/",
  SETTINGS: "/settings",
  SETTINGS_MANAGE: "/settings/manage",
  SETTINGS_USERS: "/settings/users",
  SETTINGS_TAGS: "/settings/tags",
  SETTINGS_INTEGRATIONS: "/settings/integrations",
} as const;

export const ROUTE_TITLES: Record<string, string> = {
  [ROUTES.SETTINGS_MANAGE]: "Manage",
  [ROUTES.SETTINGS_USERS]: "Users",
  [ROUTES.SETTINGS_TAGS]: "Tags",
  [ROUTES.SETTINGS_INTEGRATIONS]: "Integrations",
  [ROUTES.SETTINGS]: "Settings",
};

export const getPageTitle = (pathname: string): string => {
  if (ROUTE_TITLES[pathname]) {
    return ROUTE_TITLES[pathname];
  }

  const matchingRoute = Object.keys(ROUTE_TITLES).find((route) =>
    pathname.includes(route)
  );

  return matchingRoute ? ROUTE_TITLES[matchingRoute] : "Settings";
};
