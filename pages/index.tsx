import { Button } from 'antd';
import styled from 'styled-components';

const StyledButton = styled(Button)`
    color: red;
`

export default props => {
    return (
        <div>
            <Button>Normal</Button>
            <StyledButton>Styled Button</StyledButton>
        </div>
    );
}