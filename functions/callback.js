export async function onRequest(context) {
  const url = new URL(context.request.url);
  const code = url.searchParams.get('code');

  if (!code) {
    return new Response('Missing Epic authorization code', { status: 400 });
  }

  const tokenResponse = await fetch('https://account-public-service-prod.ol.epicgames.com/account/api/oauth/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + btoa(`${context.env.EPIC_CLIENT_ID}:${context.env.EPIC_CLIENT_SECRET}`)
    },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code
    })
  });

  if (!tokenResponse.ok) {
    return new Response('Epic token exchange failed', { status: 500 });
  }

  const token = await tokenResponse.json();

  // Store token securely using Cloudflare KV/D1 in production.
  // Never expose access tokens to the browser.

  return Response.redirect(new URL('/', context.request.url), 302);
}
