import { Button } from 'antd';
import styled from 'styled-components';
import { useTranslation } from '../src/hooks/useTranslation';
import { connect } from 'react-redux';
import { AuthActions } from '../src/redux/auth/actions';

const StyledButton = styled(Button)`
    color: red;
`

const HomePage = props => {

    const { t, i18n } = useTranslation('common');

    return (
        <div>
            <p>{t('home')}</p>
            <Button onClick={() => i18n.changeLanguage('en')}>English</Button>
            <StyledButton onClick={() => i18n.changeLanguage('th')}>Thai</StyledButton>
            {props.user && <h4>User: {props.user.name}</h4>}
            {
                !props.user ? (
                    <Button type='primary' onClick={props.login}>{t('login')}</Button>
                ) : (
                        <Button type='danger' onClick={props.logout}>{t('logout')}</Button>
                    )
            }
        </div>
    );
}

HomePage.getInitialProps = async () => ({
    namespacesRequired: ['common']
})

export default connect(state => state.Auth, AuthActions)(HomePage)