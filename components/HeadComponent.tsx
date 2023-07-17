import Head from "next/head";

const HeadComponent = () => {
  const metaContent =
      "hi i'm carlos xavier gomez barriento and i'm web developer",
    titulo = "xakxa";

  return (
    <Head>
      <title>{titulo}</title>
      <meta
        name="description"
        content={metaContent}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link
        rel="shortcut icon"
        href="./favicon.ico"
        type="image/x-icon"
      />
    </Head>
  );
};

export default HeadComponent;
