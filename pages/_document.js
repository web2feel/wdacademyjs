import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }
  
  render() {
    return (
      <Html>
        <Head>
   
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NC3JMH3')`}}></script>


          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link
            rel='preconnect'
            href='https://fonts.gstatic.com'
            crossOrigin='true'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;900&family=Quicksand:wght@300;400;600;700&display=swap'
            rel='stylesheet'></link>

          <noscript>
            <link
              rel='stylesheet'
              href='https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;700;900&family=Quicksand:wght@300;400;600;700&display=swap'
            />
          </noscript>
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id='video_modal'></div>
        </body>
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NC3JMH3" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
      </Html>
    );
  }
}

export default MyDocument;
