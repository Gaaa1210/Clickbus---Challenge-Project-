import { Icon } from '@iconify/react'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'

export function FaceIdPage() {
  const navigate = useNavigate()
  const [borderGreen, setBorderGreen] = useState(false)
  const [scanMessage, setScanMessage] = useState('Analisando biometria...')
  const [messagePulse, setMessagePulse] = useState(true)
  const [showSuccessOverlay, setShowSuccessOverlay] = useState(false)
  const [successVisible, setSuccessVisible] = useState(false)

  const timeoutsRef = useRef<Array<ReturnType<typeof setTimeout>>>([])

  useEffect(() => {
    function queue(fn: () => void, ms: number) {
      const id = setTimeout(fn, ms)
      timeoutsRef.current.push(id)
      return id
    }

    queue(() => {
      setMessagePulse(false)
      setBorderGreen(true)
      setScanMessage('Reconhecimento concluído!')
    }, 2500)

    queue(() => {
      setShowSuccessOverlay(true)
      queue(() => setSuccessVisible(true), 50)
    }, 3300)

    return () => {
      timeoutsRef.current.forEach(clearTimeout)
      timeoutsRef.current = []
    }
  }, [])

  const activeBorder = borderGreen ? 'border-[#10B981]' : 'border-[#6B2FBA]'

  return (
    <div className="absolute inset-0 flex flex-col overflow-hidden bg-black">
      <div className="absolute z-10 flex w-full items-center justify-between px-6 pb-4 pt-14">
        <button
          type="button"
          onClick={() => navigate('/platform')}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md active:scale-95"
        >
          <Icon icon="solar:close-circle-linear" width={24} />
        </button>
        <span className="text-sm font-medium text-white">Embarque</span>
        <div className="w-10" />
      </div>

      <div className="relative flex flex-1 items-center justify-center" id="scan-area">
        <div className="absolute inset-0 bg-[#3D1A6B] opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            icon="solar:user-circle-linear"
            className="text-white/20"
            width={200}
          />
        </div>

        <div className="relative z-10 h-80 w-64" id="scan-frame">
          <div
            className={`absolute left-0 top-0 h-8 w-8 rounded-tl-2xl border-l-4 border-t-4 transition-colors duration-300 ${activeBorder}`}
          />
          <div
            className={`absolute right-0 top-0 h-8 w-8 rounded-tr-2xl border-r-4 border-t-4 transition-colors duration-300 ${activeBorder}`}
          />
          <div
            className={`absolute bottom-0 left-0 h-8 w-8 rounded-bl-2xl border-b-4 border-l-4 transition-colors duration-300 ${activeBorder}`}
          />
          <div
            className={`absolute bottom-0 right-0 h-8 w-8 rounded-br-2xl border-b-4 border-r-4 transition-colors duration-300 ${activeBorder}`}
          />

          <div className="scanner-line" />

          <p
            className={`absolute -bottom-12 w-full text-center text-xs font-medium ${
              borderGreen ? 'text-[#10B981]' : 'text-white'
            } ${messagePulse ? 'animate-pulse' : ''}`}
          >
            {scanMessage}
          </p>
        </div>
      </div>

      {showSuccessOverlay ? (
      <div
        className={`absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#10B981] text-white transition-opacity duration-500 ${
          successVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div
          className={`mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-white/20 transition-transform duration-500 delay-200 ${
            successVisible ? 'scale-100' : 'scale-0'
          }`}
        >
          <Icon icon="solar:check-circle-bold" width={60} className="text-white" />
        </div>
        <h2
          className={`mb-2 text-2xl font-semibold tracking-tight transition-opacity duration-500 delay-300 ${
            successVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Bem-vindo a bordo!
        </h2>
        <p
          className={`mb-10 text-sm opacity-80 transition-opacity duration-500 delay-400 ${
            successVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Lucas Silva • Poltrona 12A
        </p>

        <div
          className={`relative flex h-16 w-48 items-center overflow-hidden rounded-lg border border-white/30 bg-white/10 px-4 transition-opacity duration-500 delay-500 ${
            successVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Icon icon="solar:ticket-linear" width={24} className="mr-3" />
          <span className="text-xs font-medium">Ticket Digital Usado</span>
        </div>

        <button
          type="button"
          onClick={() => navigate('/post-trip')}
          className={`mt-12 rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#10B981] transition-opacity duration-500 delay-700 ${
            successVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Ver Resumo
        </button>
      </div>
      ) : null}
    </div>
  )
}
