import Head from "next/head";

export default ({ children, title }) => {
    return (
      <div className="antialiased text-gray-900 min-h-screen">
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        { children }
      </div>
    )
  }