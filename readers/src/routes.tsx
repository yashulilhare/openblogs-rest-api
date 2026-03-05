import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";

import { MainLayout } from "@/layouts/MainLayout";
import { Homepage } from "@/pages/Homepage";
import { Posts } from "@/pages/Posts";
import { LogIn } from "@/features/auth/components/LogIn";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <Homepage />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "login",
        element: <LogIn />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
