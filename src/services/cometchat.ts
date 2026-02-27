import { CometChat } from "@cometchat/chat-sdk-react-native";

const appID = "1675910bdfe86633c";
const region = "us";

const appSetting = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion(region)
  .autoEstablishSocketConnection(true)
  .build();

export const initCometChat = async () => {
  await CometChat.init(appID, appSetting);
};

export const createCometChatUser = async (uid: string, name: string) => {
  const user = new CometChat.User(uid);
  user.setName(name);
  await CometChat.createUser(user, "0af7b341b2ec809a7a5051455e9314e1a7615f80");
};

export const loginCometChat = async (uid: string) => {
  await CometChat.login(uid, "0af7b341b2ec809a7a5051455e9314e1a7615f80");
};

export const logoutCometChat = async () => {
  await CometChat.logout();
};