import { useTranslations } from "next-intl";
import Link from 'next/link';
import LocalSwitcher from "./local-switcher";
import { useLocale } from 'next-intl';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale(); // Get the current locale dynamically

  return (
    <header>
      <nav className="flex items-center justify-between">
        <div className="flex space-x-4">
          {/* Home Link with locale */}
          <Link href={`/${locale}/`}>{t('home')}</Link>

          {/* About Link with locale */}
          <Link href={`/${locale}/about`}>{t('about')}</Link>
        </div>
        
        {/* Language Switcher */}
        <LocalSwitcher />
      </nav>
    </header>
  );
}
