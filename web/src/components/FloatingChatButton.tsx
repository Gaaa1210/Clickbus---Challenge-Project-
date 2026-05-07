import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

export function FloatingChatButton() {
  const navigate = useNavigate()

  return (
    <button
      type="button"
      onClick={() => navigate('/chat')}
      className="group absolute bottom-24 right-6 z-[25] flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#1A0B2E] bg-[#1A0B2E] text-white shadow-lg transition-transform hover:scale-105 active:scale-95"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#6B2FBA] to-[#FFD60A] opacity-0 transition-opacity group-hover:opacity-100" />
      <Icon
        icon="solar:magic-stick-3-linear"
        width={24}
        className="relative z-10"
      />
    </button>
  )
}
