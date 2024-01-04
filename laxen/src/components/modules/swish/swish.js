import React, {useState, useEffect} from 'react';
import {Linking} from 'react-native';

async function openSwish(data) {
  const encodedPayload = encodeURIComponent(JSON.stringify(data));
  const callbackURL = 'laxen://';
  const encodedCallbackURL = encodeURIComponent(callbackURL);
  const link =
    'swish://payment?data=' +
    encodedPayload +
    '&callbackurl=' +
    encodedCallbackURL;
  Linking.openURL(link);
}

export default openSwish;
