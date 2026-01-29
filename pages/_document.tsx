import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    const isProd = process.env.NODE_ENV === "production";
    const repo = process.env.NEXT_PUBLIC_REPO_NAME ?? "";
    const basePath = isProd && repo ? `/${repo}` : "";

    return (
      <Html lang="en">
        <Head>
          {/* Favicon desde /public/favicon.ico (con basePath para GitHub Pages) */}
          <link rel="icon" href={`${basePath}/favicon.ico`} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
