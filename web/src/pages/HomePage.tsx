import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

export function HomePage() {
  const navigate = useNavigate()

  return (
    <div className="no-scrollbar relative h-full overflow-y-auto bg-[#F5F0FF] pb-24 pt-14">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3D1A6B] text-sm font-medium text-white">
            LS
          </div>
          <div>
            <p className="text-xs text-gray-500">Bom dia,</p>
            <h1 className="text-lg font-semibold tracking-tight">Lucas Silva</h1>
          </div>
        </div>
        <div className="flex items-center gap-1 rounded-full bg-white px-3 py-1.5 shadow-sm">
          <Icon icon="solar:star-fall-linear" className="text-[#FFD60A]" />
          <span className="text-xs font-semibold text-[#6B2FBA]">2.480 pts</span>
        </div>
      </div>

      <div className="mt-2 px-6">
        <div className="shadow-purple-soft relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#6B2FBA] to-[#3D1A6B] p-6 text-white">
          <div className="absolute -right-10 -top-10 opacity-10">
            <Icon icon="solar:bus-linear" width={120} />
          </div>

          <div className="relative z-10 mb-6 flex items-start justify-between">
            <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md">
              Hoje, 14:30
            </span>
            <span className="text-xs font-medium opacity-80">Viação Cometa</span>
          </div>

          <div className="relative z-10 mb-8 flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-2xl font-semibold tracking-tight">SPO</span>
              <span className="text-xs opacity-70">Tietê</span>
            </div>
            <div className="flex flex-1 items-center gap-2">
              <div className="h-[1px] flex-1 bg-white/30" />
              <Icon
                icon="solar:routing-linear"
                className="text-[#FFD60A]"
                width={20}
              />
              <div className="h-[1px] flex-1 bg-white/30" />
            </div>
            <div className="flex flex-col text-right">
              <span className="text-2xl font-semibold tracking-tight">RIO</span>
              <span className="text-xs opacity-70">Novo Rio</span>
            </div>
          </div>

          <button
            type="button"
            onClick={() => navigate('/departure')}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#FFD60A] py-3.5 text-sm font-semibold text-[#1A0B2E] transition-transform active:scale-95"
          >
            Iniciar Jornada Inteligente
            <Icon icon="solar:arrow-right-linear" />
          </button>
        </div>
      </div>

      <div className="mt-8 px-6">
        <h2 className="mb-4 text-sm font-semibold tracking-tight">
          Acesso Rápido
        </h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm active:bg-gray-50">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F0FF] text-[#6B2FBA]">
              <Icon icon="solar:ticket-linear" width={20} />
            </div>
            <span className="text-center text-xs font-medium">
              Comprar
              <br />
              Passagem
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm active:bg-gray-50">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F0FF] text-[#6B2FBA]">
              <Icon icon="solar:bus-linear" width={20} />
            </div>
            <span className="text-center text-xs font-medium">
              Minhas
              <br />
              Viagens
            </span>
          </div>
          <div className="flex flex-col items-center gap-2 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm active:bg-gray-50">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F0FF] text-[#6B2FBA]">
              <Icon icon="solar:chat-round-line-linear" width={20} />
            </div>
            <span className="text-center text-xs font-medium">
              Ajuda &
              <br />
              Suporte
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 px-6">
        <h2 className="mb-4 text-sm font-semibold tracking-tight">
          Para sua viagem
        </h2>
        <div className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-4 shadow-sm">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
            <Icon icon="solar:shield-warning-linear" width={24} />
          </div>
          <div className="flex-1">
            <h3 className="text-xs font-semibold">Seguro Viagem</h3>
            <p className="mt-0.5 text-xs text-gray-500">
              Adicione proteção extra à sua jornada.
            </p>
          </div>
          <Icon icon="solar:alt-arrow-right-linear" className="text-gray-400" />
        </div>
      </div>
    </div>
  )
}
