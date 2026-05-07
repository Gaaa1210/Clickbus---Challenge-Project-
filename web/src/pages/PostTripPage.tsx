import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

export function PostTripPage() {
  const navigate = useNavigate()

  return (
    <div className="no-scrollbar relative h-full overflow-y-auto bg-white pb-24 pt-14">
      <div className="flex flex-col items-center px-6 py-10 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5F0FF] text-[#6B2FBA]">
          <Icon icon="solar:medal-star-linear" width={32} />
        </div>
        <h1 className="mb-2 text-2xl font-semibold tracking-tight">
          Jornada Concluída!
        </h1>
        <p className="mb-8 text-sm text-gray-500">
          Como foi sua experiência no terminal?
        </p>

        <div className="mb-10 flex gap-2">
          <Icon icon="solar:star-bold" className="text-[#FFD60A]" width={36} />
          <Icon icon="solar:star-bold" className="text-[#FFD60A]" width={36} />
          <Icon icon="solar:star-bold" className="text-[#FFD60A]" width={36} />
          <Icon icon="solar:star-bold" className="text-[#FFD60A]" width={36} />
          <Icon icon="solar:star-linear" className="text-gray-300" width={36} />
        </div>

        <div className="w-full rounded-3xl border border-[#6B2FBA]/10 bg-[#F5F0FF] p-6 text-left">
          <h3 className="mb-4 text-sm font-semibold">Seu impacto de tempo</h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <Icon icon="solar:clock-circle-linear" className="mb-1 text-[#10B981]" />
              <p className="text-xl font-semibold">12 min</p>
              <p className="text-[10px] text-gray-500">Economizados em filas</p>
            </div>
            <div className="rounded-2xl bg-white p-3 shadow-sm">
              <Icon icon="solar:routing-linear" className="mb-1 text-[#6B2FBA]" />
              <p className="text-xl font-semibold">150m</p>
              <p className="text-[10px] text-gray-500">Caminhados sem erro</p>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between rounded-2xl bg-gradient-to-r from-[#6B2FBA] to-[#3D1A6B] p-4 text-white">
            <div>
              <p className="text-xs opacity-80">ClickPoints ganhos</p>
              <p className="flex items-center gap-1 text-lg font-semibold">
                +50{' '}
                <Icon icon="solar:star-fall-linear" className="text-[#FFD60A]" width={16} />
              </p>
            </div>
            <div className="text-right">
              <p className="text-[10px] opacity-80">Saldo Total</p>
              <p className="text-sm font-semibold">2.530</p>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/')}
          className="mt-8 text-sm font-medium text-[#6B2FBA]"
        >
          Voltar ao Início
        </button>
      </div>
    </div>
  )
}
