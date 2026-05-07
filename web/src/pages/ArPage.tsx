import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

export function ArPage() {
  const navigate = useNavigate()

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      <img
        src="https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80&w=800&h=1200"
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />

      <div className="absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black via-black/60 to-transparent" />
      <div className="absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-black/80 to-transparent" />

      <div className="ar-perspective pointer-events-none absolute inset-0 flex items-end justify-center pb-40">
        <div className="animate-float flex flex-col items-center gap-12">
          <Icon
            icon="solar:alt-arrow-up-linear"
            className="ar-arrow text-[#6B2FBA] opacity-40"
            width={80}
          />
          <Icon
            icon="solar:alt-arrow-up-linear"
            className="ar-arrow text-[#6B2FBA] opacity-70"
            width={100}
          />
          <Icon
            icon="solar:alt-arrow-up-linear"
            className="ar-arrow text-[#FFD60A]"
            width={120}
          />
        </div>
      </div>

      <div className="absolute left-[20%] top-[40%] flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
        <Icon icon="solar:cup-hot-linear" /> Café (20m)
      </div>

      <div className="absolute top-0 z-10 flex w-full items-start justify-between px-6 pb-4 pt-12">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md active:scale-95"
        >
          <Icon icon="solar:close-circle-linear" width={24} />
        </button>
        <div className="shadow-purple-soft flex flex-col items-center rounded-full bg-[#6B2FBA] px-5 py-2.5 text-white">
          <span className="text-[10px] font-medium uppercase tracking-wider opacity-80">
            Siga em frente
          </span>
          <span className="text-base font-semibold tracking-tight">
            42m até Plat. 18
          </span>
        </div>
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md active:scale-95"
        >
          <Icon icon="solar:volume-loud-linear" width={20} />
        </button>
      </div>

      <div className="absolute bottom-6 z-10 flex w-full items-end gap-4 px-6">
        <div className="relative h-32 w-24 overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-20 w-1 rounded-full bg-gray-500" />
            <div className="absolute bottom-6 h-10 w-1 rounded-full bg-[#6B2FBA]" />
            <div className="absolute bottom-[40px] h-3 w-3 rounded-full bg-[#FFD60A] shadow-[0_0_10px_#FFD60A]" />
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/platform')}
          className="flex flex-1 items-center justify-center gap-2 rounded-2xl bg-white py-4 text-sm font-semibold text-[#1A0B2E] shadow-lg transition-transform active:scale-95"
        >
          Cheguei na Plataforma
          <Icon icon="solar:check-read-linear" />
        </button>
      </div>
    </div>
  )
}
