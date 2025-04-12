import { redirect } from "next/navigation";
import { headers } from "next/headers";

export default async function Home() {
  const supportedLangs = ["en", "mn", "kr", "jp", "cn"];

  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language");

  let preferredLang = "en";
  if (acceptLanguage) {
    const languages = acceptLanguage.split(",").map((lang) => {
      const [code] = lang.split(";");
      return code.trim().substring(0, 2).toLowerCase();
    });

    preferredLang =
      languages.find((lang) => supportedLangs.includes(lang)) || "en";
  }

  redirect(`/${preferredLang}`);
}
