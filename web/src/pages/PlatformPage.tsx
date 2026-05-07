import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

export function PlatformPage() {
  const navigate = useNavigate()

  return (
    <div className="no-scrollbar relative h-full overflow-y-auto bg-[#F5F0FF] pb-24 pt-14">
      <div className="flex items-center gap-4 px-6 py-2">
        <button
          type="button"
          onClick={() => navigate('/ar')}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-transform active:scale-95"
        >
          <Icon icon="solar:alt-arrow-left-linear" width={20} />
        </button>
        <h1 className="text-base font-semibold tracking-tight">Plataforma 18</h1>
      </div>

      <div className="mt-4 flex flex-col gap-6 px-6">
        <div className="flex items-center gap-2 self-end rounded-full bg-white/80 px-3 py-1.5 text-xs font-medium shadow-sm backdrop-blur-md">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#10B981]" />{' '}
          Ônibus estacionando
        </div>

        <div className="relative h-44 w-full">
          <div className="absolute inset-0 rounded-3xl border border-gray-200 bg-white shadow-sm" />
          <div className="absolute left-1/2 top-1/2 flex h-20 w-28 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-xl border-2 border-dashed border-[#6B2FBA] bg-[#F5F0FF]">
            <span className="text-xl font-semibold text-[#6B2FBA]">18</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 px-6">
        <div className="mb-6 rounded-3xl border border-gray-50 bg-white p-6 shadow-sm">
          <h3 className="mb-4 text-sm font-semibold tracking-tight">
            Serviços Próximos
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Icon icon="solar:cup-hot-linear" width={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-semibold">Casa do Pão de Queijo</h4>
                <p className="text-[10px] text-gray-500">Aberto • Lotação baixa</p>
              </div>
              <span className="text-xs font-medium text-gray-400">1 min</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-500">
                <Icon icon="solar:men-linear" width={20} />
              </div>
              <div className="flex-1">
                <h4 className="text-xs font-semibold">Banheiros</h4>
                <p className="text-[10px] text-gray-500">Limpeza há 10 min</p>
              </div>
              <span className="text-xs font-medium text-gray-400">2 min</span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/faceid')}
          className="shadow-purple-soft flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#6B2FBA] to-[#3D1A6B] py-4 text-sm font-semibold text-white transition-transform active:scale-95"
        >
          <Icon icon="solar:face-scan-circle-linear" width={24} />
          Embarque Facial
        </button>
        <button
          type="button"
          onClick={() => navigate('/nfc')}
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-white py-4 text-sm font-semibold text-[#1A0B2E] shadow-sm transition-transform active:scale-95"
        >
          <Icon icon="solar:smartphone-linear" width={22} />
          Embarque por NFC
        </button>
        <p className="mt-3 text-center text-[10px] text-gray-500">
          Escolha facial ou NFC para embarcar sem bilhete impresso.
        </p>
      </div>
    </div>
  )
}
