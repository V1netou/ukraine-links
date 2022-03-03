import React, {Fragment} from 'react';
import LinkBtn from './components/LinkBtn.jsx';
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { fabriefcase } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import { faBed } from '@fortawesome/free-solid-svg-icons'
import GlobalStyle from './theme/globalStyle';
import styled from 'styled-components';
import Container from './components/Container';


function App() {
  return (
    <Fragment>
      <GlobalStyle/>
      <Container>
        <LinkBtn text="Проживання - Ubytovanie" link="https://forms.office.com/r/UDAvkvqMcv" icon={faBed}></LinkBtn>
        <LinkBtn text="Проживання - Ubytovanie" link="https://forms.office.com/r/48SQSTx00S " icon={fabriefcase}></LinkBtn>
      </Container>
    </Fragment>
  );
}

export default App;
