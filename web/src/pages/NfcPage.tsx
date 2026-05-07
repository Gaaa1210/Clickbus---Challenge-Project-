import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'

export function NfcPage() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  )

  function simulateNFC() {
    if (loading) return
    setLoading(true)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      navigate('/post-trip')
      setLoading(false)
    }, 1800)
  }

  return (
    <div className="no-scrollbar relative h-full overflow-y-auto bg-[#F5F0FF] pb-24 pt-14">
      <div className="flex items-center gap-4 px-6 py-2">
        <button
          type="button"
          onClick={() => navigate('/platform')}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm transition-transform active:scale-95"
        >
          <Icon icon="solar:alt-arrow-left-linear" width={20} />
        </button>
        <h1 className="text-base font-semibold tracking-tight">
          Embarque por NFC
        </h1>
      </div>

      <div className="mt-6 px-6">
        <div className="rounded-3xl border border-gray-100 bg-white p-6 text-center shadow-sm">
          <div className="animate-pulse-ring relative mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#F5F0FF] text-[#6B2FBA]">
            <Icon icon="solar:smartphone-linear" width={44} />
          </div>
          <h2 className="mt-5 text-lg font-semibold tracking-tight">
            Aproxime o celular do totem
          </h2>
          <p className="mt-2 text-xs text-gray-500">
            Mantenha o NFC ativo e encoste o topo do aparelho no leitor
            indicado.
          </p>

          <div className="mt-6 rounded-2xl bg-gray-50 p-4 text-left">
            <h3 className="mb-3 text-xs font-semibold">
              Siga estas instruções no totem:
            </h3>
            <ol className="list-decimal space-y-2 pl-4 text-xs text-gray-600">
              <li>Confirme seu nome e destino na tela.</li>
              <li>Valide a viagem com um toque em &quot;Autorizar&quot;.</li>
              <li>Aguarde o sinal verde para liberar a catraca.</li>
            </ol>
          </div>

          <button
            type="button"
            disabled={loading}
            onClick={simulateNFC}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-[#6B2FBA] py-3.5 text-sm font-semibold text-white transition-transform active:scale-95 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Icon icon="solar:refresh-linear" className="animate-spin" width={18} />
                Validando no totem...
              </>
            ) : (
              <>
                Simular leitura NFC no totem
                <Icon icon="solar:check-read-linear" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
