import React from 'react';
import useTranslation from 'next-translate/useTranslation'

const Index = () => {
    const { t, lang } = useTranslation();
    return <div>{t('common:main')}</div>
}

export default Index
