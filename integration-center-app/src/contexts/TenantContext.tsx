import {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { Tenant } from "../types/integration";
import { tenants } from "../data/mockData";

export interface TenantContextValue {
  selectedTenant: Tenant | null;
  tenants: Tenant[];
  selectTenant: (tenant: Tenant) => void;
  isLoading: boolean;
}

const TenantContext = createContext<TenantContextValue | undefined>(undefined);

interface TenantProviderProps {
  children: ReactNode;
}

export const TenantProvider = ({ children }: TenantProviderProps) => {
  const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(
    tenants[0] || null
  );
  const [isLoading] = useState(false);

  const selectTenant = useCallback((tenant: Tenant) => {
    setSelectedTenant(tenant);
  }, []);

  const value: TenantContextValue = {
    selectedTenant,
    tenants,
    selectTenant,
    isLoading,
  };

  return (
    <TenantContext.Provider value={value}>{children}</TenantContext.Provider>
  );
};

export const useTenant = (): TenantContextValue => {
  const context = useContext(TenantContext);

  if (context === undefined) {
    throw new Error("useTenant must be used within a TenantProvider");
  }

  return context;
};
