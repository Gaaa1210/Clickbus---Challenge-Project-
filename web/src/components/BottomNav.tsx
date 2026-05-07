import { Icon } from '@iconify/react'
import { NavLink } from 'react-router-dom'

type NavItemProps = {
  to: string
  label: string
  iconLinear: string
  iconBold: string
  end?: boolean
}

function NavItem({ to, label, iconLinear, iconBold, end }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `flex flex-col items-center gap-1 ${isActive ? 'text-[#6B2FBA]' : 'text-gray-400'}`
      }
    >
      {({ isActive }) => (
        <>
          <Icon icon={isActive ? iconBold : iconLinear} width={24} />
          <span className="text-[10px] font-medium">{label}</span>
        </>
      )}
    </NavLink>
  )
}

export function BottomNav() {
  return (
    <div className="absolute bottom-0 z-20 flex h-20 w-full items-center justify-between border-t border-gray-100 bg-white/90 px-6 pb-4 pt-2 text-gray-400 backdrop-blur-md">
      <NavItem
        to="/"
        end
        label="Início"
        iconLinear="solar:home-smile-linear"
        iconBold="solar:home-smile-bold"
      />
      <NavItem
        to="/departure"
        label="Jornada"
        iconLinear="solar:map-point-wave-linear"
        iconBold="solar:map-point-wave-bold"
      />
      <button
        type="button"
        className="flex flex-col items-center gap-1 text-gray-400"
      >
        <Icon icon="solar:wallet-linear" width={24} />
        <span className="text-[10px] font-medium">Carteira</span>
      </button>
      <NavItem
        to="/accessibility"
        label="Acesso"
        iconLinear="solar:accessibility-linear"
        iconBold="solar:accessibility-bold"
      />
      <button
        type="button"
        className="flex flex-col items-center gap-1 text-gray-400"
      >
        <Icon icon="solar:user-circle-linear" width={24} />
        <span className="text-[10px] font-medium">Perfil</span>
      </button>
    </div>
  )
}
