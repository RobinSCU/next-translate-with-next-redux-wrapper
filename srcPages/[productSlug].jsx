import React from 'react';
import useTranslation from 'next-translate/useTranslation'

const ProductPage = () =>{
    const { t, lang } = useTranslation();
    return <div>{t('common:product')}</div>
}

export default ProductPage
