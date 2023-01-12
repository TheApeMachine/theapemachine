export default async function (_:any) {
  return new Response(
    JSON.stringify({ name: 'John Doe' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}
