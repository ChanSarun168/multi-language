import { useTranslations } from 'next-intl'
import React from 'react'

const Footer = () => {
    const t = useTranslations('Footer')
  return (
    <footer>
        <p>{t('copyright')}</p>
    </footer>
  )
}

export default Footer
