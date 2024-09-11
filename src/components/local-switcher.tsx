'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname(); // Get the current path without the query

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;

    // Replace the current locale in the pathname with the next locale
    const newPath = pathname.replace(`/${localActive}`, `/${nextLocale}`);

    startTransition(() => {
      router.replace(newPath); // Replace the current path with the new locale
    });
  };

  return (
    <label className='border-2 rounded'>
      <p className='sr-only'>Change language</p>
      <select
        defaultValue={localActive}
        className='bg-transparent py-2'
        onChange={onSelectChange}
        disabled={isPending}
      >
        <option value='en'>English</option>
        <option value='kh'>Khmer</option>
      </select>
    </label>
  );
}
