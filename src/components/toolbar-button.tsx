import ButtonWithTooltip from '@/components/button-with-tooltip';
import { cn } from '@/lib/utils';
import type { ToolbarItem } from '@/types/editor.types';

type ToolbarButtonProps = React.ComponentProps<'button'> & ToolbarItem;

export default function ToolbarButton({
  icon: Icon,
  isActive = false,
  label,
  ...rest
}: ToolbarButtonProps) {
  return (
    <ButtonWithTooltip
      type="button"
      className={cn(
        'flex h-7 min-w-7 cursor-pointer items-center justify-center rounded-sm text-sm hover:bg-neutral-200/80',
        isActive && 'bg-neutral-200/80',
      )}
      tooltip={label}
      {...rest}
    >
      <Icon className="size-4" />
    </ButtonWithTooltip>
  );
}
