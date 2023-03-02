import { Html, Head, Main, NextScript } from "next/document";
import Icon from "public/icon.png";
export default function Document() {
  return (
    <Html lang="pt-br">
      <Head />
      <link rel="shortcut icon" href="/icon.png" />
      <title>Netflix</title>
      <body className="bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
