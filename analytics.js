(function initializePortfolioAnalytics() {
  const config = window.PORTFOLIO_ANALYTICS;

  if (!config || config.provider !== "ga4" || config.enabled !== true) {
    return;
  }

  const measurementId = (config.measurementId || "").trim();
  const isValidMeasurementId = /^G-[A-Z0-9]+$/.test(measurementId);

  if (!isValidMeasurementId || measurementId === "G-XXXXXXXXXX") {
    console.warn(
      "Analytics is enabled, but the GA4 Measurement ID is missing or invalid."
    );
    return;
  }

  const googleTagScript = document.createElement("script");
  googleTagScript.async = true;
  googleTagScript.src =
    "https://www.googletagmanager.com/gtag/js?id=" +
    encodeURIComponent(measurementId);
  document.head.appendChild(googleTagScript);

  window.dataLayer = window.dataLayer || [];

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", measurementId, {
    send_page_view: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
})();
