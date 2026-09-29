import { siteConfig } from "@/data/siteData";

export function getWhatsAppUrl(message?: string) {
  const text = encodeURIComponent(message || siteConfig.whatsappDefaultMessage);
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined") {
    // Standard dataLayer push for Google Tag Manager / Analytics / Meta Pixel
    const windowWithDataLayer = window as unknown as { dataLayer?: Record<string, unknown>[] };
    windowWithDataLayer.dataLayer = windowWithDataLayer.dataLayer || [];
    windowWithDataLayer.dataLayer.push({
      event: eventName,
      ...params,
      timestamp: new Date().toISOString(),
    });
    console.log(`[NELBANZ Tracking] Event: ${eventName}`, params || {});
  }
}
