import { observer } from "mobx-react-lite";
import React, { ChangeEvent, useState } from "react";
import { Button, Form, FormInput, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityForm() {
  const { activityStore } = useStore();
  const {
    selectedActivity,
    closeForm,
    createActivity,
    updateActivity,
    loading,
  } = activityStore;
  const intialState = selectedActivity ?? {
    id: "",
    title: "",
    description: "",
    date: "",
    category: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(intialState);

  function handleSubmit() {
    activity.id ? updateActivity(activity) : createActivity(activity);
  }
  function handleInputChane(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormInput
          placeholder="Title"
          name="title"
          value={activity.title}
          onChange={handleInputChane}
        />
        <Form.TextArea
          placeholder="Description"
          name="description"
          value={activity.description}
          onChange={handleInputChane}
        />
        <FormInput
          placeholder="Category"
          name="category"
          value={activity.category}
          onChange={handleInputChane}
        />
        <FormInput
          placeholder="Date"
          name="date"
          type="date"
          value={activity.date}
          onChange={handleInputChane}
        />
        <FormInput
          placeholder="City"
          name="city"
          value={activity.city}
          onChange={handleInputChane}
        />
        <FormInput
          placeholder="Venu"
          name="venue"
          value={activity.venue}
          onChange={handleInputChane}
        />
        <Button
          loading={loading}
          floated="right"
          positive
          type="Submit"
          content="Submit"
        />
        <Button
          floated="right"
          type="button"
          content="Cancel"
          onClick={closeForm}
        />
      </Form>
    </Segment>
  );
});
