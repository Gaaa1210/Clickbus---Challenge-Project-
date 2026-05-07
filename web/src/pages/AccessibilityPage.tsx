import { Icon } from '@iconify/react'

export function AccessibilityPage() {
  return (
    <div className="no-scrollbar relative h-full overflow-y-auto bg-white pb-24 pt-14">
      <div className="flex items-center border-b border-gray-100 px-6 py-2 pb-4">
        <h1 className="flex-1 text-lg font-semibold tracking-tight">
          Acessibilidade
        </h1>
      </div>

      <div className="space-y-6 p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold">Alto Contraste</h3>
            <p className="mt-1 text-xs text-gray-500">Cores mais fortes para leitura</p>
          </div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" className="peer sr-only" />
            <div className="peer h-6 w-12 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:bg-[#6B2FBA] peer-checked:after:translate-x-6 peer-checked:after:border-white" />
          </label>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold">Rota para Cadeirantes</h3>
            <p className="mt-1 text-xs text-gray-500">
              Prioriza rampas e elevadores
            </p>
          </div>
          <label className="relative inline-flex cursor-pointer items-center">
            <input type="checkbox" defaultChecked className="peer sr-only" />
            <div className="peer h-6 w-12 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all peer-checked:bg-[#6B2FBA] peer-checked:after:translate-x-6 peer-checked:after:border-white" />
          </label>
        </div>

        <div className="rounded-2xl border border-[#6B2FBA]/20 bg-[#F5F0FF] p-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6B2FBA] text-white">
              <Icon icon="solar:volume-loud-linear" />
            </div>
            <h3 className="text-sm font-semibold">Audiodescrição Ativa</h3>
          </div>
          <div className="relative mb-2 h-1 w-full rounded-full bg-[#3D1A6B]/20">
            <div className="absolute left-0 h-full w-1/3 rounded-full bg-[#6B2FBA]" />
          </div>
          <p className="text-[10px] text-gray-500">
            &quot;Siga reto por 10 metros, o banheiro estará à sua direita.&quot;
          </p>
        </div>

        <div className="border-t border-gray-100 pt-4">
          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-2xl border border-red-100 bg-red-50 py-4 text-sm font-semibold text-red-600 transition-transform active:scale-95"
          >
            <Icon icon="solar:danger-triangle-linear" width={20} />
            Pedir Ajuda no Terminal (SOS)
          </button>
        </div>
      </div>
    </div>
  )
}
