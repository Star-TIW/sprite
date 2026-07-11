export async function onRequest() {
  const clientId = EPIC_CLIENT_ID;
  const redirect = `${new URL('/callback', 'https://' + 'YOUR_DOMAIN').href}`;

  const url = new URL('https://www.epicgames.com/id/authorize');
  url.searchParams.set('client_id', clientId);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('redirect_uri', redirect);
  url.searchParams.set('scope', 'basic_profile');

  return Response.redirect(url.toString(), 302);
}
