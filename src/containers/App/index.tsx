import React from "react";
import { Switch, Route } from "react-router-dom";
import { GlobalStyle } from "styles/global";
import { Routes } from "enums/Routes";
// import FullPageLoader from 'components/Loaders/FullPageLoader';
import Home from "pages/Home";
import styled from "styled-components";
/* DON'T REMOVE THIS LINE - CODE-GENERATOR: PAGES IMPORT */

const AppContainer = styled.div`
  margin-top: 68px;
  padding-left: 60px;
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <Switch>
        <Route exact path={Routes.HOME}>
          <Home />
        </Route>
        {/* DON'T REMOVE THIS LINE - CODE-GENERATOR: ROUTE */}
      </Switch>
      <GlobalStyle />
    </AppContainer>
  );
};

export default App;
