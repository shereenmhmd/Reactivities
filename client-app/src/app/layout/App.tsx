import React from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";

import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router-dom";
import HamePage from "../../features/home/HamePage";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDeatils from "../../features/activities/details/ActivityDeatils";
function App() {
  const location = useLocation();
  return (
    <>
      <Route exact path="/" component={HamePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route exact path="/activities" component={ActivityDashboard} />
              <Route path="/activities/:id" component={ActivityDeatils} />
              <Route
                path={["/createActivity", "/manage/:id"]}
                component={ActivityForm}
                key={location.key}
              />
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
