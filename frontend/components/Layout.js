import Head from "next/head";

export default ({ children, title, description, coverImage }) => {
  return (
    <div className="antialiased text-gray-900 min-h-screen">
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div
        className="w-full m-0 p-0 bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${coverImage})`,
          height: "60vh",
          maxHeight: "460px",
        }}
      >
        <div className="container max-w-4xl mx-auto pt-16 md:pt-32 text-center break-normal">
          <div className="text-white font-extrabold text-3xl md:text-5xl">
            {title}
          </div>
          <div className="text-xl md:text-2xl text-gray-500">{description}</div>
        </div>
      </div>
      <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
        {children}
      </div>
    </div>
  );
};
