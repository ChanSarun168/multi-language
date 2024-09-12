import { useTranslations } from "next-intl";
import Link from 'next/link';
import LocalSwitcher from "./local-switcher";
import { useLocale } from 'next-intl';

export default function Header() {
  const t = useTranslations('Navigation');
  const locale = useLocale(); // Get the current locale dynamically

  return (
    <header>
      <nav className="w-screen bg-purple-500 flex justify-center h-[100px]">
        <div className="w-[1024px] flex justify-between items-center">
          <img src="https://via.placeholder.com/80" alt="logo" className="rounded-full"></img>
          <div className="flex space-x-10">
            {/* Home Link with locale */}
            <Link href={`/${locale}/`}>{t('home')}</Link>
            <Link href={`/${locale}/about`}>{t('about')}</Link>
            <Link href={`/${locale}/ourteam`}>{t('our team')}</Link>
            <Link href={`/${locale}/expertise`}>{t('expertise')}</Link>
          </div>  
          {/* Language Switcher */}
          <LocalSwitcher />
        </div>
      </nav>
    </header>
  );
}
