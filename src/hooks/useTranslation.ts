import { useTranslation as translate } from '../../i18n';

/*
    ===== Example usage =====
    const { t } = useTranslation('common');

    ex1: use with string (lookup in locales folder)
    --> t('greeting') 

    ex2: use with object that has for example 
    const obj = { nameEN: 'Cat', nameTH: 'แมว' }
    --> t(obj, 'name')
*/

export const useTranslation = (namespace) => {
    const translation = translate(namespace);

    const trans = (data, option?) => {
        if (!data)
            return '';

        if (typeof data === 'string')
            return translation.t(data, option);

        const locale = translation.i18n.language || 'en';

        if (!option) {
            if (locale == 'en')
                return data['en'] || '';
            else
                return data['th'] || '';
        }

        if (locale === 'en') {
            return data[option + 'EN'] || '';
        } else {
            return data[option + 'TH'] || '';
        }

    }

    return {
        ...translation,
        t: trans,
    }
}