import { Button } from 'antd';
import styled from 'styled-components';
import { useTranslation } from '../src/hooks/useTranslation';

const StyledButton = styled(Button)`
    color: red;
`

export default props => {

    const { t, i18n } = useTranslation('common');

    return (
        <div>
            <p>{t('home')}</p>
            <Button onClick={() => i18n.changeLanguage('en')}>English</Button>
            <StyledButton onClick={() => i18n.changeLanguage('th')}>Thai</StyledButton>
        </div>
    );
}