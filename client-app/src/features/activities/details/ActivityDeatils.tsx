import React from "react";
import { Button, ButtonGroup, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

export default function ActivityDeatils() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
  } = activityStore;
  if (!activity) return <LoadingComponent/>;
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <ButtonGroup widths="2">
          <Button
            basic
            color="blue"
            content="Edit"
            onClick={() => openForm(activity.id)}
          />
          <Button
            basic
            color="grey"
            content="Cancel"
            onClick={cancelSelectedActivity}
          />
        </ButtonGroup>
      </Card.Content>
    </Card>
  );
}
