export function mainContent(actionId) {
  const container = document.getElementById("main-content");
  let htmlString = ``;

  if (actionId === "notice") {
    htmlString += `
      <h2>公告</h2>
      <p>這裡是公告內容。</p>
    `;
  } else if (actionId === "gtw") {
    htmlString += `
      <h2>上班打卡</h2>
      <p>這裡是上班打卡內容。</p>
    `;
  } else if (actionId === "gow") {
    htmlString += `
      <h2>下班打卡</h2>
      <p>這裡是下班打卡內容。</p>
    `;
  } else if (actionId === "muci") {
    htmlString += `
      <h2>補打卡申請</h2>
      <p>這裡是補打卡申請內容。</p>
    `;
  } else if (actionId === "tal") {
    htmlString += `
      <h2>請假申請</h2>
      <p>這裡是請假申請內容。</p>
    `;
  } else if (actionId === "overtime") {
    htmlString += `
      <h2>加班申請</h2>
      <p>這裡是加班申請內容。</p>
    `;
  } else if (actionId === "fa") {
    htmlString += `
      <h2>假勤明細</h2>
      <p>這裡是假勤明細內容。</p>
    `;
  }
  container.innerHTML = htmlString;
}
