import { dateUtils } from "../tool/dateUtils.js";

const { yyyy, mm, everyDay } = dateUtils();

export function psfl() {
  const tbody = document.getElementById("tbody");
  if (!tbody) return;

  const dFrag = document.createDocumentFragment();

  const gowTime = JSON.parse(localStorage.getItem("gowTime") || "");
  const gtwTime = JSON.parse(localStorage.getItem("gtwTime") || "");

  for (let i = everyDay - 1; i >= 0; i--) {
    const row = document.createElement("tr");

    const currentDay = String(everyDay - i).padStart(2, "0");
    const formattedDate = `${yyyy}/${mm}/${currentDay}`;

    for (let y = 0; y < 11; y++) {
      let content = "";

      switch (y) {
        case 0:
          content = formattedDate;
          break;

        case 1:
          content = i === 0 ? gowTime : "09:00";
          break;

        case 2:
          content = i === 0 ? gtwTime : "17:00";
          break;

        case 9:
          if (i === 0 && (gowTime || gtwTime)) {
            content = "";
          } else {
            content = "8";
          }
          break;

        default:
          content = "";
      }
      row.appendChild(createCell(content));
    }
    dFrag.appendChild(row);
  }
  tbody.appendChild(dFrag);
}

function createCell(content) {
  const cell = document.createElement("td");
  const p = document.createElement("p");
  p.textContent = content;
  cell.appendChild(p);
  return cell;
}
