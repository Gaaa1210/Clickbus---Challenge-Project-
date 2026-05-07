import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function DeparturePage() {
  const navigate = useNavigate()
  const [checkInOpen, setCheckInOpen] = useState(false)
  const [overlayVisible, setOverlayVisible] = useState(false)

  useEffect(() => {
    if (!checkInOpen) return
    const id = requestAnimationFrame(() => setOverlayVisible(true))
    return () => cancelAnimationFrame(id)
  }, [checkInOpen])

  function openCheckIn() {
    setCheckInOpen(true)
    setOverlayVisible(false)
  }

  function closeCheckIn() {
    setOverlayVisible(false)
    setTimeout(() => setCheckInOpen(false), 300)
  }

  function openArFromCheckIn() {
    closeCheckIn()
    setTimeout(() => navigate('/ar'), 300)
  }

  return (
    <div className="relative h-full overflow-y-auto bg-white pb-24 pt-14 no-scrollbar">
      <div className="flex items-center gap-4 px-6 py-2">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 active:bg-gray-100"
        >
          <Icon icon="solar:alt-arrow-left-linear" width={20} />
        </button>
        <h1 className="text-base font-semibold tracking-tight">Saída Inteligente</h1>
      </div>

      <div className="relative mt-4 h-48 w-full bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600&h=300"
          alt=""
          className="h-full w-full object-cover opacity-50 mix-blend-multiply grayscale"
        />
        <svg
          className="pointer-events-none absolute left-0 top-0 h-full w-full"
          viewBox="0 0 390 200"
          aria-hidden
        >
          <title>Rota</title>
          <path
            d="M50,150 Q150,100 200,80 T350,50"
            fill="none"
            stroke="#6B2FBA"
            strokeWidth="4"
            strokeDasharray="8 4"
            className="animate-pulse"
          />
          <circle cx="50" cy="150" r="6" fill="#1A0B2E" />
          <circle cx="350" cy="50" r="8" fill="#6B2FBA" />
        </svg>
        <div className="animate-slide-up absolute left-4 right-4 top-4 flex items-center gap-3 rounded-2xl bg-[#1A0B2E] p-3 text-white shadow-lg">
          <Icon icon="solar:bell-bing-linear" className="text-[#FFD60A]" width={20} />
          <p className="text-xs font-medium">
            Trânsito leve. Saia em 5 min para chegar com folga.
          </p>
        </div>
      </div>

      <div className="relative z-10 -mt-6 px-6">
        <div className="shadow-purple-soft rounded-3xl border border-gray-50 bg-white p-6 text-center">
          <p className="mb-1 text-xs font-medium text-gray-500">
            Hora ideal para sair
          </p>
          <h2 className="text-4xl font-semibold tracking-tight text-[#6B2FBA]">
            13:15
          </h2>

          <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-6">
            <div className="text-left">
              <p className="text-xs text-gray-500">Trajeto (Carro)</p>
              <p className="text-sm font-semibold">45 min</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-500">Fila Terminal</p>
              <p className="text-sm font-semibold text-[#F59E0B]">Alta (12m)</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Margem Seg.</p>
              <p className="text-sm font-semibold text-[#10B981]">+ 15 min</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 px-6">
        <h3 className="mb-4 text-sm font-semibold tracking-tight">
          Como deseja ir?
        </h3>
        <div className="flex gap-4">
          <button
            type="button"
            className="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl bg-black py-3 text-white transition-transform active:scale-95"
          >
            <span className="text-sm font-semibold">Uber</span>
            <span className="text-xs opacity-70">~ R$ 42,00</span>
          </button>
          <button
            type="button"
            className="flex flex-1 flex-col items-center justify-center gap-1 rounded-2xl bg-[#FFD60A] py-3 text-black transition-transform active:scale-95"
          >
            <span className="text-sm font-semibold">99 Pop</span>
            <span className="text-xs opacity-70">~ R$ 38,50</span>
          </button>
        </div>
        <button
          type="button"
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-2xl border border-gray-200 bg-gray-50 py-3 text-[#1A0B2E] transition-colors active:bg-gray-100"
        >
          <Icon icon="solar:bus-linear" />
          <span className="text-xs font-semibold">Transporte Público (Metrô)</span>
        </button>
      </div>

      <div className="mt-10 px-6">
        <button
          type="button"
          onClick={openCheckIn}
          className="w-full rounded-2xl border-2 border-dashed border-[#6B2FBA] py-3 text-xs font-medium text-[#6B2FBA] transition-colors hover:bg-[#F5F0FF]"
        >
          [Simular Chegada ao Terminal]
        </button>
      </div>

      {checkInOpen ? (
        <div
          className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#1A0B2E]/80 px-6 backdrop-blur-sm transition-opacity duration-300 ${
            overlayVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className={`w-full transform rounded-[32px] bg-white p-8 text-center transition-transform duration-500 ${
              overlayVisible ? 'scale-100' : 'scale-95'
            }`}
          >
            <div className="animate-pulse-ring relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#F5F0FF] text-[#6B2FBA]">
              <Icon icon="solar:map-point-wave-linear" width={40} />
            </div>
            <h2 className="mb-2 text-xl font-semibold tracking-tight">
              Bem-vindo ao Terminal Tietê!
            </h2>
            <p className="mb-8 text-sm text-gray-500">
              Fizemos seu check-in automático. Seu ônibus está a caminho da
              plataforma.
            </p>

            <div className="mb-8 flex items-center justify-between rounded-2xl bg-gray-50 p-4 text-left">
              <div>
                <p className="mb-1 text-xs text-gray-500">Plataforma Confirmada</p>
                <p className="text-2xl font-semibold text-[#6B2FBA]">18</p>
              </div>
              <div className="text-right">
                <p className="mb-1 text-xs text-gray-500">Status</p>
                <p className="flex items-center justify-end gap-1 text-xs font-semibold text-[#10B981]">
                  <Icon icon="solar:check-circle-linear" /> No horário
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={openArFromCheckIn}
              className="shadow-purple-soft flex w-full items-center justify-center gap-2 rounded-2xl bg-[#6B2FBA] py-4 text-sm font-semibold text-white transition-transform active:scale-95"
            >
              <Icon icon="solar:augmented-reality-linear" width={20} />
              Abrir Navegação AR
            </button>
            <button
              type="button"
              onClick={closeCheckIn}
              className="mt-4 p-2 text-xs font-medium text-gray-400"
            >
              Fechar
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
