import React, { useState } from "react";
import { Alert, Button, Icon, Tag } from "rsuite";
import { auth } from "../../misc/firebase";
import firebase from "firebase";

const ProviderBlock = () => {
  const [isConnected, setIsConnected] = useState({
    "google.com": auth.currentUser.providerData.some(
      (data) => data.providerId === "google.com"
    ),
    "facebook.com": auth.currentUser.providerData.some(
      (data) => data.providerId === "facebook.com"
    ),
  });

  const upDateIsConnected = (providerId, value) => {
    setIsConnected((p) => {
      return {
        ...p,
        [providerId]: value,
      };
    });
  };

  const unLink = async (providerId) => {
    try {
      if (auth.currentUser.providerData.length === 1) {
        throw new Error(`You can not disconnect from ${providerId}`);
      }
      await auth.currentUser.unlink(providerId);

      upDateIsConnected(providerId);

      Alert.info(`Disconnected from ${providerId}`, 4000);
    } catch (error) {
      Alert.error(error.message, 4000);
    }
  };

  const unLinkFacebook = () => {
    unLink("facebook.com");
  };
  const unLinkGoogle = () => {
    unLink("googe.com");
  };

  const link = async (provider) => {
    try {
      await auth.currentUser.linkWithPopup(provider);
      Alert.info(`Linked to ${provider.providerId}`, 4000);

      upDateIsConnected(provider.providerId, true);
    } catch (error) {
      Alert.error(error.message);
    }
  };

  const linkFacebook = () => {
    link(new firebase.auth.FacebookAuthProvider());
  };
  const linkGoogle = () => {
    link(new firebase.auth.GoogleAuthProvider());
  };

  return (
    <div>
      {isConnected["google.com"] && (
        <Tag closable color="green" onClose={unLinkGoogle}>
          <Icon icon="google" /> Connected
        </Tag>
      )}
      {isConnected["facebook.com"] && (
        <Tag closable color="blue" onClose={unLinkFacebook}>
          <Icon icon="facebook" /> Connected
        </Tag>
      )}

      <div className="mt-2">
        {!isConnected["google.com"] && (
          <Button block color="green" onClick={linkGoogle}>
            <Icon icon="google" /> Link To Google
          </Button>
        )}
        {!isConnected["facebook.com"] && (
          <Button block color="blue" onClick={linkFacebook}>
            <Icon icon="facebook" /> Link To Facebook
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProviderBlock;
