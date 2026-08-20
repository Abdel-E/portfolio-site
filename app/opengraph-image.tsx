import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Abdelrahman Elshrief'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#F6F1E8',
          color: '#1C1916',
          padding: '72px 80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: 72,
            height: 40,
            border: '1.5px solid #1F6F6A',
            borderRadius: 999,
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
            letterSpacing: 2,
          }}
        >
          AE
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05 }}>
            Abdelrahman Elshrief
          </div>
          <div style={{ fontSize: 28, color: '#1F6F6A' }}>
            Computer Engineering · Toronto
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
