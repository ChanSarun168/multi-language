import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

// Specify the type of locales as a string array
const locales: string[] = ['en', 'kh'];

export default getRequestConfig(async ({ locale }: { locale: string }) => {
  // Directly check if locale is included in the list without casting to 'any'
  if (!locales.includes(locale)) notFound();

  // Dynamically import locale-specific messages
  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
