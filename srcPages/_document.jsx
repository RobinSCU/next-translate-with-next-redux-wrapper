import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class SpikeAppDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="shortcut icon" href="/static/icons/favicon.ico" />
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default SpikeAppDocument;
