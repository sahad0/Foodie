import PushNotification, { Importance } from "react-native-push-notification";
import PushNotificationIOS from "@react-native-community/push-notification-ios";

PushNotification.configure({
    onRegister: function (token) {
      // console.log("TOKEN:", token);
    },

    onNotification: function (notification) {
      // console.log("NOTIFICATION:", notification);
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    // onAction: function (notification) {
    //   console.log("ACTION:", notification.action);
    //   console.log("NOTIFICATION:", notification);

    // },

    // onRegistrationError: function(err) {
    //   console.error(err.message, err);
    // },

    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },
    popInitialNotification: true,
    requestPermissions: true,
  });


  PushNotification.createChannel(
    {
      channelId: 'channel-id', // (required)
      channelName: 'Cart', // (required)
      channelDescription: 'Added to Cart Notifier', // (optional) default: undefined.
      playSound: true, // (optional) default: true
      soundName: 'notification.mp3', // (optional) See `soundName` parameter of `localNotification` function
      importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.
    },
    (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
 



  export const LocalPushNotification = ({title,message})=>{
    PushNotification.localNotification({
      channelId: "channel-id", // (required)
      autoCancel:true,
      channelName: "My channel", // (required)
      channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
      title:title,
      message:message,
      playSound: false, // (optional) default: true
      soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
      importance: Importance.HIGH, // (optional) default: Importance.HIGH. Int value of the Android notification importance
      vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.\
      vibration:1000,
      largeIcon: "ic_launcher", // (optional) default: "ic_launcher". Use "" for no large icon.
      largeIconUrl: "https://res.cloudinary.com/dstpcwzms/image/upload/v1665983402/tick_dl9uoj.png", // (optional) default: undefined
      smallIcon: "ic_notification",

    })
  }
