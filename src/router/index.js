import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage/HomePage.vue';

const AboutPage = () => import("../pages/AboutPage/AboutPage.vue");
const ServicesPage = () => import("../pages/ServicesPage/ServicesPage.vue");
const UniversityPage = () => import("../pages/UniversityPage/UniversityPage.vue");
const StudentsPage = () => import("../pages/StudentsPage/StudentsPage.vue");
const ContactsPage = () => import("../pages/ContactsPage/ContactsPage.vue");
const NewsPage = () => import("../pages/NewsPage/NewsPage.vue");
const NewPage = () => import("../pages/NewPage/NewPage.vue");

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/about",
      name: "about",
      component: AboutPage,
    },
    {
      path: "/services",
      name: "services",
      component: ServicesPage,
    },
    {
      path: "/universities",
      name: "universities",
      component: UniversityPage,
    },
    {
      path: "/students",
      name: "students",
      component: StudentsPage,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: ContactsPage  ,
    },
    {
      path: "/news",
      name: "news",
      component: NewsPage  ,
    },
    {
      path: "/news/:id",
      name: "new",
      component: NewPage  ,
    },
  ],
});

export default router;
