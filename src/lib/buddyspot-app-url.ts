function normalizeBase(url: string) {
  return url.replace(/\/$/, "");
}

const fromEnv = process.env.NEXT_PUBLIC_BUDDYSPOT_APP_URL?.trim();

function defaultAppUrl() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }
  return "https://buddyspot.app";
}

export const BUDDYSPOT_APP_URL = normalizeBase(
  fromEnv && fromEnv.length > 0 ? fromEnv : defaultAppUrl()
);

/** Same tab for local dev so marketing → app feels like one flow; new tab in production. */
export function buddyspotAppLinkTarget(): "_blank" | "_self" {
  try {
    const u = new URL(BUDDYSPOT_APP_URL);
    if (u.hostname === "localhost" || u.hostname === "127.0.0.1") {
      return "_self";
    }
  } catch {
    /* ignore */
  }
  return "_blank";
}

export function buddyspotAppLinkRel(): string | undefined {
  return buddyspotAppLinkTarget() === "_blank" ? "noopener noreferrer" : undefined;
}
