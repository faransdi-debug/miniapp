export default function HomePage() {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>سلام! این مینی اپ تلگرام است</h1>
      <button
        onClick={() => alert('سلام! مینی اپ  کار می کند')}
        style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer' }}
      >
        تست مینی اپ
      </button>
    </div>
  )
}
