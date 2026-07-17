"use client";
import { useEffect } from "react";
import { CookieHub, CookieHubScript } from "react-cookiehub";

export function Analytics() {
  useEffect(() => {
    CookieHub.initialize("4721330f", {
      debug: process.env.NODE_ENV === "development",
    });
  }, []);

  return (
    <>
      <CookieHubScript
        src="https://www.googletagmanager.com/gtag/js?id=G-Z7S16CMH3G"
        category="analytics"
      />
      <CookieHubScript
        id="gtag-init"
        category="analytics"
        innerHTML={`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Z7S16CMH3G', { anonymize_ip: true });
        `}
      />
      <CookieHubScript
        id="segment"
        category="analytics"
        src="/js/segment.js"
      />
      <CookieHubScript
        id="apollo"
        category="analytics"
        src="/js/apollo.js"
      />
      <CookieHubScript
        id="commonroom"
        category="marketing"
        src="/js/commonroom.js"
      />
    </>
  );
}
