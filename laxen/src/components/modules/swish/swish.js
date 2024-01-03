import React, {useState, useEffect} from "react";
import { Linking } from "react-native";

// THIS IS HOW THE JSON FOR A PAYMENT HAS TO LOOK

// const data = {
//     version: 1,
//     payee: {
//         value: "+46701111111"
//     },
//     amount: {
//         value: 200
//     },
//     message: {
//         value: "Hälsningar Bo Ek",
//         editable: true
//     }
// };

async function openSwish(data) {
    const encodedPayload = encodeURIComponent(JSON.stringify(data));
    const callbackURL = "laxen://";
    const encodedCallbackURL = encodeURIComponent(callbackURL);
    const link = 'swish://payment?data=' + encodedPayload + '&callbackurl=' + encodedCallbackURL;
    Linking.openURL(link);
}

export default openSwish;