import { createWebHistory, createRouter } from "vue-router";
import NotFound from "../components/NotFound";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import HomePage from "../components/pages/HomePage";
import Profile from "../components/pages/Profile";
import Search from "../components/pages/Search";
import Chat from "../components/pages/Chat";

import Posts from "../components/Profile/Posts";
import Followers from "../components/Profile/Followers";
import Followings from "../components/Profile/Followings";

import Conversation from "../components/Chat/Conversation";

import store from "../store/store";

// const fetchPosts = () => {
//   store.dispatch("getAllPosts");
// };

const routes = [
  {
    name: "Login",
    path: "/",
    component: Login,
  },

  {
    name: "Register",
    path: "/register",
    component: Register,
  },
  {
    name: "Homepage",
    path: "/homepage",
    component: HomePage,
    meta: {
      requireAuth: true,
    },
    // beforeEnter: [fetchPosts],
  },
  {
    name: "Search",
    path: "/search",
    component: Search,
    meta: {
      requireAuth: true,
    },
    // beforeEnter: [checkAuth],
  },
  {
    name: "Profile",
    path: "/profile/:username",
    component: Profile,
    meta: {
      requireAuth: true,
    },
    children: [
      {
        name: "Posts",
        path: "posts",
        component: Posts,
      },
      {
        name: "Followers",
        path: "followers",
        component: Followers,
      },
      {
        name: "Followings",
        path: "followings",
        component: Followings,
      },
    ],
  },
  {
    name: "Chat",
    path: "/chat",
    component: Chat,
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: ":conversationId",
        component: Conversation,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    component: NotFound,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
router.beforeEach(async (to, from) => {
  const requiresAuth = to.matched.some((record) => record.meta.requireAuth);
  const canAccess = await store.dispatch("canAccess");

  if (requiresAuth && !canAccess) {
    return `${from.path}`;
  }
  if ((to.name === "Login" || to.name === "Register") && canAccess) {
    return `/homepage`;
  }
});

export default router;
