// 'use client';

// import { useLocale } from 'next-intl';
// import { useRouter, usePathname } from 'next/navigation';
// import { ChangeEvent, useTransition } from 'react';

// export default function LocalSwitcher() {
//   const [isPending, startTransition] = useTransition();
//   const router = useRouter();
//   const localActive = useLocale();
//   const pathname = usePathname(); // Get the current path without the query

//   const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const nextLocale = e.target.value;

//     // Replace the current locale in the pathname with the next locale
//     const newPath = pathname.replace(`/${localActive}`, `/${nextLocale}`);

//     startTransition(() => {
//       router.replace(newPath); // Replace the current path with the new locale
//     });
//   };

//   return (
//     <label className='border-2 rounded'>
//       <p className='sr-only'>Change language</p>
//       <select
//         defaultValue={localActive}
//         className='bg-transparent py-2'
//         onChange={onSelectChange}
//         disabled={isPending}
//       >
//         <option value='en'>English</option>
//         <option value='kh'>Khmer</option>
//       </select>
//     </label>
//   );
// }



// For flag

'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useTransition } from 'react';

export default function LocaleSwitcher() {
  const [, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const localeActive = useLocale();
  const pathname = usePathname();

  const onSelectLocale = (nextLocale: string) => {
    const newPath = pathname.replace(`/${localeActive}`, `/${nextLocale}`);
    startTransition(() => {
      router.replace(newPath);
    });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center rounded py-2 px-3"
      >
        {localeActive === 'en' ? (
          <img src="eng.png" alt="English" className="w-8 h-8 rounded-full object-cover" />
        ) : (
          <img src="kh.png" alt="Khmer" className="w-8 h-8 rounded-full object-cover" />
        )}
      </button>

      {isOpen && (
        <ul className="absolute ml-[5px] border-2 bg-white rounded shadow-lg">
          <li
            className="flex items-center cursor-pointer hover:bg-gray-200 py-2 w-12 justify-center"
            onClick={() => onSelectLocale('en')}
          >
            <img src="eng.png" alt="English" className="w-8 h-8 rounded-full object-cover" />
          </li>
          <li 
            className="flex items-center cursor-pointer hover:bg-gray-200 py-2 w-12 justify-center"
            onClick={() => onSelectLocale('kh')}
          >
            <img src="kh.png" alt="Khmer" className="w-8 h-8 rounded-full object-cover" />
          </li>
        </ul>
      )}
    </div>
  );
}


