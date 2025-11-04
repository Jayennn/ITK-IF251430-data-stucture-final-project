/**
 * Formats a number into Indonesian currency (IDR).
 *
 * @param value - The numeric value to format.
 * @returns A string formatted as Indonesian Rupiah (IDR).
 *
 */
export function formatCurrency(value: number): string {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(value);
}
