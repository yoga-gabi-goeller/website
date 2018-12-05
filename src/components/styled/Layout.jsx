import styled from 'styled-components';
import { breakpoint } from './Mixins';

export const FluidContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const Container = styled.div`
  ${breakpoint('md')} {
    max-width: ${props => props.theme.containerWidths.md}px;
  }

  ${breakpoint('lg-up')} {
    max-width: ${props => props.theme.containerWidths.lg}px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${props => (props.horizontalAlign ? props.horizontalAlign : 'flex-start')};
  align-items: ${props => (props.verticalAlign ? props.verticalAlign : 'flex-start')};
`;

export const StretchContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled(FluidContainer)`
  max-width: 1000px;
`;

export const FixedContainer = styled(ContentContainer)`
  position: fixed;
  top: ${props => (!!props.top ? props.top : 0)};
`;
