"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { business, priceFor, type LengthOption } from "./business";

type OrderContextValue = {
  lengthId: string;
  length: LengthOption;
  qty: number;
  nearDepot: boolean;
  unitPrice: number;
  total: number;
  setLengthId: (id: string) => void;
  setQty: (n: number) => void;
  setNearDepot: (v: boolean) => void;
  inc: () => void;
  dec: () => void;
  formatEuro: (n: number) => string;
  m3Approx: number;
};

const OrderContext = createContext<OrderContextValue | null>(null);

export function OrderProvider({ children }: { children: ReactNode }) {
  const defaultId =
    business.lengths.find((l) => l.popular)?.id ?? business.lengths[0].id;
  const [lengthId, setLengthId] = useState(defaultId);
  const [qty, setQtyState] = useState<number>(business.minOrderSteres);
  const [nearDepot, setNearDepot] = useState(false);

  const length =
    business.lengths.find((l) => l.id === lengthId) ?? business.lengths[0];

  const setQty = useCallback((n: number) => {
    setQtyState(
      Math.min(
        business.maxOrderSteres,
        Math.max(business.minOrderSteres, Math.round(n))
      )
    );
  }, []);

  const inc = useCallback(() => setQty(qty + 1), [qty, setQty]);
  const dec = useCallback(() => setQty(qty - 1), [qty, setQty]);

  const unitPrice = priceFor(length, nearDepot);
  const total = unitPrice * qty;
  const m3Approx = Number((qty * length.m3PerStere).toFixed(2));

  const formatEuro = useCallback(
    (n: number) =>
      new Intl.NumberFormat("fr-FR", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }).format(n),
    []
  );

  const value = useMemo(
    () => ({
      lengthId,
      length,
      qty,
      nearDepot,
      unitPrice,
      total,
      setLengthId,
      setQty,
      setNearDepot,
      inc,
      dec,
      formatEuro,
      m3Approx,
    }),
    [
      lengthId,
      length,
      qty,
      nearDepot,
      unitPrice,
      total,
      setQty,
      inc,
      dec,
      formatEuro,
      m3Approx,
    ]
  );

  return (
    <OrderContext.Provider value={value}>{children}</OrderContext.Provider>
  );
}

export function useOrder() {
  const ctx = useContext(OrderContext);
  if (!ctx) throw new Error("useOrder must be used within OrderProvider");
  return ctx;
}
