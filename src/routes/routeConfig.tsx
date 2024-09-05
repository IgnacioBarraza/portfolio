import { About } from "../pages/about";
import { Contact } from "../pages/contact";
import { Layout } from "../pages/layout";
import { Projects } from "../pages/projects";
import { Skills } from "../pages/skills";
import { Workexperience } from "../pages/workexperience";
import { RouteInterface } from "../utils/interfaces";

export const Routes: RouteInterface[] = [
  {
    path: '/',
    component: <Layout />,
    routes: [
      {
        path: '/',
        component: <About />
      },
      {
        path: 'projects',
        component: <Projects />
      },
      {
        path: 'skills',
        component: <Skills />
      },
      {
        path: 'workexperience',
        component: <Workexperience />
      },
      {
        path: 'contact',
        component: <Contact />
      }
    ]
  }
]