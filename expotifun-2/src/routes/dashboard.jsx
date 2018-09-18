import Dashboard from "../views/Dashboard/Dashboard";
import UserProfile from "../views/UserProfile/UserProfile";
import TableList from "../views/TableList/TableList";
import Typography from "../views/Typography/Typography";
import Icons from "../views/Icons/Icons";
import Maps from "../views/Maps/Maps";
import Notifications from "../views/Notifications/Notifications";
import Upgrade from "../views/Upgrade/Upgrade";
import ExpotifunDashboard from "../views/ExpotifunDashboard/ExpotifunDashboardView";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Inicio",
    icon: "pe-7s-graph",
    component: ExpotifunDashboard
  },
  {
    path: "/old-dashboard",
    name: "OLD Inicio",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/user",
    name: "Explorar",
    icon: "pe-7s-user",
    component: UserProfile
  },
  {
    path: "/table",
    name: "Recomendaciones",
    icon: "pe-7s-note2",
    component: TableList
  },
  {
    path: "/typography",
    name: "Mis favoritas",
    icon: "pe-7s-news-paper",
    component: Typography
  },
  { path: "/icons", name: "Playlist", icon: "pe-7s-science", component: Icons },
  { path: "/maps", name: "Álbumes", icon: "pe-7s-map-marker", component: Maps },
  {
    path: "/notifications",
    name: "Aplicaciones",
    icon: "pe-7s-bell",
    component: Notifications
  },
  {
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: Upgrade
  },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
