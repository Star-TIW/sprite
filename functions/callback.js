export async function onRequest(context) {
  const url = new URL(context.request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response('Missing Epic authorization code', { status: 400 });
  }

  // Token exchange requires EPIC_CLIENT_ID and EPIC_CLIENT_SECRET secrets in Cloudflare.
  // The token should be stored in KV/D1 for production sessions.

  return Response.redirect(new URL('/', context.request.url), 302);
}
