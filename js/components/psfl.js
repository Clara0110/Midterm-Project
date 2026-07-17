import { dateUtils } from "../tool/dateUtils.js";
const { today, dd, mm, yyyy, hour, minute, everyDay } = dateUtils();
export function psfl() {
  const tbody = document.getElementById("tbody");
  const dFrag = document.createDocumentFragment();

  for (let i = everyDay - 1; i >= 0; i--) {
    const row = document.createElement("tr");

    for (let y = 0; y < 11; y++) {
      let content = "";

      if (i == 0) {
        switch (y) {
          case 0:
            content = `${yyyy}/${mm}/${dd - i}`;
            break;
          case 1:
            content = "08:00";
            break;
          case 2:
            content = "17:00";
            break;
          case 9:
            content = "8";
            break;
          default:
            content = "";
        }
      } else {
        switch (y) {
          case 0:
            content = `${yyyy}/${mm}/${dd - i}`;
            break;
          case 1:
            content = "09:00";
            break;
          case 2:
            content = "17:00";
            break;
          case 9:
            content = "8";
            break;
          default:
            content = "";
        }
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