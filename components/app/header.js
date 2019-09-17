import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

export class Header extends Component {
  render() {
    return (
      <Helmet>
        <meta charset="utf-8" />
        <title>Airpods Landing Page</title>

        {/* <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" /> */}

        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        <meta name="description" content="Airpods Landing Page Template" />

        <link rel="apple-touch-icon" href="logo192.png" />
        {/* <link rel="manifest" href="%PUBLIC_URL%/manifest.json" /> */}

        {/* iOS meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Airpods Landing Page" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Airpods Landing Page" />
        <meta property="og:site_name" content="Airpods: Landing Page" />
        <meta name="og:description" content="Landing Page" />
        <meta property="og:url" content="" />
        <meta name="og:locale" content="en_EN" />
      </Helmet>
    );
  }
}

