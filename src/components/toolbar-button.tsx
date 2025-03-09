import type { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

type ToolbarButtonProps = React.ComponentProps<'button'> & {
  isActive?: boolean;
  icon: LucideIcon;
};

export default function ToolbarButton({
  icon: Icon,
  isActive = false,
  ...rest
}: ToolbarButtonProps) {
  return (
    <button
      type="button"
      className={cn(
        'flex h-7 min-w-7 cursor-pointer items-center justify-center rounded-sm text-sm hover:bg-neutral-200/80',
        isActive && 'bg-neutral-200/80',
      )}
      {...rest}
    >
      <Icon className="size-4" />
    </button>
  );
}
