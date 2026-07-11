export async function onRequest() {
  // This endpoint will return authorized Epic sprite data after OAuth token storage is connected.
  return Response.json({
    connected: false,
    sprites: []
  });
}
