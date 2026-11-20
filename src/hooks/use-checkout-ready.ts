"use client";
import { useEffect, useSyncExternalStore } from "react";
import { useCheckoutStore } from "@/store/useCheckoutStore";
const subscribe = (notify: () => void) => {
  const persist = useCheckoutStore.persist;
  if (!persist) return () => {};
  const start = persist.onHydrate(notify);
  const end = persist.onFinishHydration(notify);
  return () => {
    start();
    end();
  };
};
const getSnapshot = () => useCheckoutStore.persist?.hasHydrated() ?? true;
export function useCheckoutReady() {
  const ready = useSyncExternalStore(subscribe, getSnapshot, () => false);
  useEffect(() => {
    const persist = useCheckoutStore.persist;
    if (persist && !persist.hasHydrated()) void persist.rehydrate();
  }, []);
  return ready;
}
