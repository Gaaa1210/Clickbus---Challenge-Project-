import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'

export function ChatPage() {
  const navigate = useNavigate()

  return (
    <div className="relative z-[30] flex h-full flex-col bg-[#F5F0FF]">
      <div className="relative z-10 flex items-center gap-4 border-b border-gray-100 bg-white/80 px-6 pb-4 pt-14 shadow-sm backdrop-blur-md">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 active:bg-gray-100"
        >
          <Icon icon="solar:alt-arrow-down-linear" />
        </button>
        <div className="flex flex-1 items-center gap-2">
          <div className="rounded-full bg-gradient-to-tr from-[#6B2FBA] to-[#FFD60A] p-[2px]">
            <div className="flex h-full w-full items-center justify-center rounded-full bg-white text-[#6B2FBA]">
              <Icon icon="solar:magic-stick-3-linear" />
            </div>
          </div>
          <div>
            <h1 className="text-sm font-semibold tracking-tight">Concierge IA</h1>
            <p className="flex items-center gap-1 text-[10px] font-medium text-[#10B981]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#10B981]" /> Online
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col space-y-4 overflow-y-auto p-6 no-scrollbar">
        <div className="flex max-w-[85%] gap-3">
          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#6B2FBA] shadow-sm">
            <Icon icon="solar:magic-stick-3-linear" width={14} />
          </div>
          <div className="rounded-2xl rounded-tl-none bg-white p-3 text-sm text-gray-700 shadow-sm">
            Olá Lucas! Vejo que você está no Terminal Tietê. Como posso ajudar
            com seu embarque para o Rio?
          </div>
        </div>

        <div className="flex max-w-[85%] flex-row-reverse gap-3 self-end">
          <div className="rounded-2xl rounded-tr-none bg-[#6B2FBA] p-3 text-sm text-white shadow-sm">
            Onde tem um café bom por aqui?
          </div>
        </div>

        <div className="flex max-w-[85%] gap-3">
          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white text-[#6B2FBA] shadow-sm">
            <Icon icon="solar:magic-stick-3-linear" width={14} />
          </div>
          <div className="rounded-2xl rounded-tl-none bg-white p-3 text-sm text-gray-700 shadow-sm">
            Tem a Casa do Pão de Queijo a 1 minuto da sua plataforma atual. Quer
            que eu trace a rota em AR?
          </div>
        </div>
      </div>

      <div className="border-t border-gray-100 bg-white p-4">
        <div className="no-scrollbar mb-3 flex gap-2 overflow-x-auto pb-1">
          <button
            type="button"
            className="flex-shrink-0 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-600"
          >
            Banheiro perto?
          </button>
          <button
            type="button"
            className="flex-shrink-0 rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-600"
          >
            Atraso no ônibus?
          </button>
        </div>
        <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 px-4 py-2">
          <Icon icon="solar:smile-circle-linear" className="text-gray-400" width={20} />
          <input
            type="text"
            placeholder="Pergunte algo..."
            className="flex-1 bg-transparent text-sm text-[#1A0B2E] outline-none placeholder:text-gray-400"
          />
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6B2FBA] text-white"
          >
            <Icon icon="solar:microphone-linear" width={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
