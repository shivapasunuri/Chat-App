import React from "react";
import { Alert, Button, Divider, Drawer } from "rsuite";
import { useProfile } from "../../context/profile.context";
import { database } from "../../misc/firebase";
import { getUserUpdates } from "../../misc/helpers";
import AvatarUploadBtn from "./AvatarUploadBtn";
import EditableInput from "./EditableInput";
import ProviderBlock from "./ProviderBlock";

const Dashboard = ({ onSignOut }) => {
  const { profile } = useProfile();

  const onSave = async (newdata) => {
    try {
      const updates = await getUserUpdates(
        profile.uid,
        "name",
        newdata,
        database
      );

      await database.ref().update(updates);

      Alert.success("Nickname Updated", 4000);
    } catch (err) {
      Alert.error(err.message);
    }
  };

  return (
    <>
      <Drawer.Header>
        <Drawer.Title>Dashboard</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <h3>Hey, {profile.name}</h3>
        <ProviderBlock />
        <Divider />
        <EditableInput
          name="nickname"
          initialValue={profile.name}
          onSave={onSave}
          label={<h6 className="mb-2">Nickname</h6>}
        />
        <AvatarUploadBtn />
      </Drawer.Body>
      <Drawer.Footer>
        <Button block color="red" onClick={onSignOut}>
          Signout
        </Button>
      </Drawer.Footer>
    </>
  );
};

export default Dashboard;
