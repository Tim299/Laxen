import React from "react";
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

const openSwish = (data) => {
    const encodedPayload = encodeURIComponent(JSON.stringify(data));
    const link = 'swish://payment?data=' + encodedPayload;
    Linking.openURL(link);
}

export default openSwish;