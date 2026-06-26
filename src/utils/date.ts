export function formatDate(dateString: string, locale: string | undefined = undefined): string {
  return new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(dateString));
}
