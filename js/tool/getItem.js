export function getItem() {
  const gtwTime = JSON.parse(localStorage.getItem("gtwTime") ?? "{}"); // gtwTime、late
  const gowTime = localStorage.getItem("gowTime") ?? ""; // gowTime
  const muciData = JSON.parse(localStorage.getItem("muciData") ?? "{}"); // muciInput、muciDate、muciTime
  const talData = JSON.parse(localStorage.getItem("talData") ?? "{}"); // talCategory、startDay、endDay
  const overtimeData = JSON.parse(localStorage.getItem("overtimeData") ?? "{}"); // overtimeReason、overtimeStart、overtimeEnd
  const keyDecisions = JSON.parse(localStorage.getItem("KeyDecisions") ?? "{}");
  return { gtwTime, gowTime, muciData, talData, overtimeData, keyDecisions };
}
