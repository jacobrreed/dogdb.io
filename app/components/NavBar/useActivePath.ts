import { usePathname } from "next/navigation";

export function useActivePath(): (path: string) => boolean {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    return path === pathname;
  };

  return isActivePath;
}
