export async function POST(req) {
  const data = await req.json()
  console.log('Received update from Telegram:', data)

  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  })
}
