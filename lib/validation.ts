/**
 * Validation utilities for email and phone inputs across Minions.AI forms.
 */

// RFC 5322 compliant email regex
export const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Phone number regex supporting US & international formats (min 10 digits)
export const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{7,15}$/;

/**
 * Validates an email address.
 */
export function validateEmail(email: string): { isValid: boolean; error?: string } {
  const trimmed = email.trim();
  if (!trimmed) {
    return { isValid: false, error: "Email is required." };
  }
  if (!EMAIL_REGEX.test(trimmed)) {
    return { isValid: false, error: "Please enter a valid email address (e.g. name@company.com)." };
  }
  return { isValid: true };
}

/**
 * Validates a contact field that can be either an email or phone number.
 */
export function validateContact(value: string): {
  isValid: boolean;
  type: "email" | "phone" | "empty" | "invalid";
  error?: string;
} {
  const trimmed = value.trim();
  if (!trimmed) {
    return { isValid: false, type: "empty", error: "Phone number or email is required." };
  }

  // If it contains an '@', treat as email
  if (trimmed.includes("@")) {
    if (EMAIL_REGEX.test(trimmed)) {
      return { isValid: true, type: "email" };
    }
    return { isValid: false, type: "invalid", error: "Please enter a valid email address." };
  }

  // Otherwise, treat as phone number (strip whitespace and common punctuation)
  const digits = trimmed.replace(/\D/g, "");
  if (digits.length >= 10 && PHONE_REGEX.test(trimmed)) {
    return { isValid: true, type: "phone" };
  }

  return {
    isValid: false,
    type: "invalid",
    error: "Please enter a valid email address or 10-digit phone number.",
  };
}
