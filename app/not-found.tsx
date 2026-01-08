import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px', color: '#1a1a1a' }}>404</h2>
        <p style={{ fontSize: '20px', color: '#666666', marginBottom: '24px' }}>Página no encontrada</p>
        <Link href="/" style={{
          display: 'inline-block',
          padding: '12px 24px',
          backgroundColor: '#0066cc',
          color: 'white',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold'
        }}>
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}
