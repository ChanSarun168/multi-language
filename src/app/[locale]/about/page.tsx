import { useTranslations } from 'next-intl'
import React from 'react'

const Page = () => {
    const t = useTranslations('about')
  return (
    <div>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>
    </div>
  )
}

export default Page
