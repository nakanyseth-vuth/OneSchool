export const state = {
  isAuthenticated: false,
  loading: true,
  postLoading: true,
  profileLoading: true,
  chatLoading: true,
  conversationLoading: true,
  posting: false,
  commenting: false,
  user: null,
  targetUser: null,
  selectedUser: null,
  newChatUser: null,
  userPosts: [],
  allPosts: [],
  users: [],
  token: localStorage.getItem("token"),
  isEdit: false,
  openMenu: false,
  openSearch: false,
  errorMsg: null,
  currentChatUser: null,
  conversations: [],
  currentMessages: [],
  //test
  alerts: [
    {
      type: "UNFOLLOW",
      isShown: false,
      unfollow: false,
      text: "Do you want to unfollow this user?",
    },
    {
      type: "REMOVE_USER",
      isShown: false,
      unfollow: false,
      text: "Remove this user from followers?",
    },
  ],
};
