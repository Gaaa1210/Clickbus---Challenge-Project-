import { Navigate, Route, Routes } from 'react-router-dom'
import { PhoneLayout } from './layouts/PhoneLayout'
import { AccessibilityPage } from './pages/AccessibilityPage'
import { ArPage } from './pages/ArPage'
import { ChatPage } from './pages/ChatPage'
import { DeparturePage } from './pages/DeparturePage'
import { FaceIdPage } from './pages/FaceIdPage'
import { HomePage } from './pages/HomePage'
import { NfcPage } from './pages/NfcPage'
import { PlatformPage } from './pages/PlatformPage'
import { PostTripPage } from './pages/PostTripPage'

export default function App() {
  return (
    <Routes>
      <Route element={<PhoneLayout />}>
        <Route index element={<HomePage />} />
        <Route path="departure" element={<DeparturePage />} />
        <Route path="ar" element={<ArPage />} />
        <Route path="platform" element={<PlatformPage />} />
        <Route path="nfc" element={<NfcPage />} />
        <Route path="faceid" element={<FaceIdPage />} />
        <Route path="accessibility" element={<AccessibilityPage />} />
        <Route path="chat" element={<ChatPage />} />
        <Route path="post-trip" element={<PostTripPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
