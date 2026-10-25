/** Web3Forms endpoint used by the contact form (same path as the previous site). */
export const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const CONTACT_FORM_SUBJECT =
  "Nouvelle demande bois de chauffage – GB Bois";

export const CONTACT_FORM_FROM_NAME = "GB Bois Website";

/**
 * Access key is injected at build time via NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY.
 * Do not commit the key; keep it in a gitignored `.env.local` (or CI secrets).
 * Web3Forms keys are intended for client-side use with domain allowlisting.
 */
export function getWeb3FormsAccessKey(): string | undefined {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY?.trim();
  return key || undefined;
}
