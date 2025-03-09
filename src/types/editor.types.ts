import type { LucideIcon } from 'lucide-react';

export type ToolbarItem = {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
};
