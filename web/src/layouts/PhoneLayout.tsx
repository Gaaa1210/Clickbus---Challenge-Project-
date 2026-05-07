import { Outlet, useLocation } from 'react-router-dom'
import { BottomNav } from '../components/BottomNav'
import { FloatingChatButton } from '../components/FloatingChatButton'
import { StatusBar } from '../components/StatusBar'

const HIDE_BOTTOM_NAV_PREFIXES = ['/ar', '/faceid']

export function PhoneLayout() {
  const { pathname } = useLocation()
  const hideBottomNav = HIDE_BOTTOM_NAV_PREFIXES.some((p) =>
    pathname.endsWith(p),
  )
  const isDarkStatus =
    pathname.includes('/ar') || pathname.includes('/faceid')
  const hideFab = pathname.endsWith('/chat')

  return (
    <div className="phone-frame flex flex-col text-[#1A0B2E]">
      <StatusBar dark={isDarkStatus} />
      <div className="relative min-h-0 flex-1 basis-0 overflow-hidden">
        <Outlet />
      </div>
      {!hideFab && <FloatingChatButton />}
      {!hideBottomNav && <BottomNav />}
    </div>
  )
}
