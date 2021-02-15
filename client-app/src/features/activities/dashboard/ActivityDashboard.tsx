import { observer } from "mobx-react-lite";
import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";

import { useStore } from "../../../app/stores/store";
import ActivityDeatils from "../details/ActivityDeatils";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";
export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;
  return (
    <Grid>
      <GridColumn width="10">
        <ActivityList />
      </GridColumn>
      <GridColumn width="6">
        {selectedActivity && !editMode && <ActivityDeatils />}
        {editMode && <ActivityForm />}
      </GridColumn>
    </Grid>
  );
});
