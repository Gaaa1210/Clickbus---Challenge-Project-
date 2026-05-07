import { Icon } from '@iconify/react'

type StatusBarProps = {
  dark: boolean
}

export function StatusBar({ dark }: StatusBarProps) {
  return (
    <div
      className={`absolute left-0 top-0 z-50 flex h-12 w-full items-center justify-between px-6 pb-1 pt-2 ${
        dark ? 'text-white' : 'text-[#1A0B2E]'
      }`}
    >
      <span className="text-xs font-medium tracking-tight">9:41</span>
      <div className="flex items-center gap-1">
        <Icon icon="solar:cellular-linear" width={16} />
        <Icon icon="solar:wi-fi-linear" width={16} />
        <Icon icon="solar:battery-charge-linear" width={16} />
      </div>
    </div>
  )
}
