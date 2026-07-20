import { dateUtils } from "../tool/dateUtils.js"

const { today } = dateUtils();

export function gtw() {
  const gtwForm = document.getElementById("gtw-form");
  gtwForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let d = new Date();
    d.setHours(8, 0, 0, 0);

    const gtwTimeDateTime = document.getElementById("gtw-time").dateTime;
    const [hour, minute] = gtwTimeDateTime.split(":").map(Number);


    let qweTime = new Date();
    qweTime.setHours(hour, minute, 0, 0);

    const diffHours = (qweTime - d) / (1000 * 60 * 60);

    const gtwTime = { gtwTimeDateTime: gtwTimeDateTime, late: diffHours };
    localStorage.setItem("gtwTime",JSON.stringify(gtwTime));
    location.reload();
  });
}
