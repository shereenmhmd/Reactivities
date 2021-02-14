import React, { ChangeEvent, useState } from "react";
import { Button, Form, FormInput, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
}: Props) {
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
    createOrEdit(activity);
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
        <Button floated="right" positive type="Submit" content="Submit" />
        <Button
          floated="right"
          type="button"
          content="Cancel"
          onClick={closeForm}
        />
      </Form>
    </Segment>
  );
}
