import { sidebar } from "./components/sidebar.js";
import { topbar } from "./components/topbar.js";
import { mainContent } from "./components/mainContent.js";

export function initRouter() {
  window.addEventListener("hashchange", handleRouting);
  handleRouting();
}

function handleRouting() {
  const hash = window.location.hash.slice(2) || "employee/daily/notice";
  const [role, menuId, actionId] = hash.split("/");
  if (role && menuId && actionId) {
    sidebar(role, menuId);
    topbar(role, menuId, actionId);
    mainContent(actionId);
  }
}
