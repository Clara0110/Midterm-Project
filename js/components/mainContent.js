export function mainContent(actionId) {
  const container = document.getElementById("main-content");
  let htmlString = ``;

  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  let hour = String(today.getHours()).padStart(2, "0");
  let minute = String(today.getMinutes()).padStart(2, "0");

  if (actionId === "notice") {
    htmlString += `
      <h2>公告</h2>
      <p>這裡是公告內容。</p>
    `;
  } else if (actionId === "gtw") {
    htmlString += `
      <h2>上班打卡</h2>
      <form class="d-flex flex-column gap-2">
        <time id="gow-time" datetime="${hour}:${minute}">現在時間：${hour}:${minute}</time>
        <button class="btn btn-outline-secondary" id="gtw-button">打卡</button>
      </form>
    `;
  } else if (actionId === "gow") {
    htmlString += `
      <h2>下班打卡</h2>
        <form class="d-flex flex-column gap-2">
        <time id="gow-time" datetime="${hour}:${minute}">現在時間：${hour}:${minute}</time>
      <button class="btn btn-outline-secondary" id="gow-button">打卡</button>
      </form>
    `;
  } else if (actionId === "muci") {
    htmlString += `
      <h2>補打卡申請</h2>
      <form class="d-flex flex-column gap-2">
        <label for="muci-form">請輸入補打卡申請原因：</label>
        <input type="text" id="muci-form" name="muci-form" require/>
        <label for="muci-date">日期：</label>
        <input type="date" id="muci-date" name="muci-date" value="${yyyy}-${mm}-${dd}" />
        <label for="muci-time">時間：</label>
        <input type="time" id="muci-time" name="muci-time" value="${hour}:${minute}" />
        <button class="btn btn-outline-secondary" type="submit">提交</button>
      </form>
    `;
  } else if (actionId === "tal") {
    htmlString += `
      <h2>請假申請</h2>
      <form class="d-flex flex-column gap-2">
        <label for="tal-category">請假類別：</label>
          <select name="tal-category" id="tal-category">
            <option value="" disabled selected>請選擇請假類別</option>
            <option value="personal">事假</option>
            <option value="sick">病假</option>
            <option value="marriage">婚假</option>
            <option value="funeral">喪假</option>
            <option value="maternity">產假</option>
            <option value="paternity">陪產假</option>
            <option value="pregnancy-rest">安胎休養假</option>
            <option value="family-care">家庭照顧假</option>
            <option value="parental-leave">育嬰留職停薪假</option>
            <option value="official">公假</option>
            <option value="annual-leave">特別休假</option>
          </select>
        <label for="tal-date">日期：</label>
        <input type="date" id="tal-date" name="tal-date" value="${yyyy}-${mm}-${dd}" />
        <label for="muci-time">時間：</label>
        <input type="time" id="muci-time" name="muci-time" value="${hour}:${minute}" />
        <button class="btn btn-outline-secondary" type="submit">提交</button>
      </form>
    `;
  } else if (actionId === "overtime") {
    htmlString += `
      <h2>加班申請</h2>
      <form class="d-flex flex-column gap-2">
        <label for="overtime-reason">請輸入加班事由：</label>
        <input type="text" id="overtime-reason" name="overtime-reason" require/>
        <label for="overtime-date">日期：</label>
        <input type="date" id="overtime-date" name="overtime-date" value="${yyyy}-${mm}-${dd}" />
        <label for="overtime-time">時間：</label>
        <input type="time" id="overtime-time" name="overtime-time" value="${hour}:${minute}" />
        <button class="btn btn-outline-secondary" type="submit">提交</button>
      </form>
    `;
  } else if (actionId === "fa") {
    htmlString += `
    <div class="d-flex flex-column gap-2">
      <h2>假勤明細</h2>
      <div class="row">
      <section id="left-section" class="col-6">
      <p>請假紀錄：</p>
      </section>
      <section id="right-section "class="col-6">
      <p>可用假別：</p>
      <ul>
        <li>事假：每年最多 14 天（無薪）</li>
        <li>病假：普通傷病每年最多 30 天（折半薪）；住院最多 1 年</li>
        <li>婚假：8 天（全薪）</li>
        <li>喪假：3–8 天（依親屬等級，全薪）</li>
        <li>公假：依法或因公務需要，全薪</li>
        <li>生理假：每月 1 天，全年最多 3 天（折半薪）</li>
        <li>產假：分娩 8 週；流產 5 日至 4 週（全薪）</li>
        <li>安胎休養假：依醫師診斷需要</li>
        <li>產檢假：7 天（全薪）</li>
        <li>陪產假：7 天（全薪，逾 5 日政府補助）</li>
        <li>家庭照顧假：每年最多 7 天（併入事假，無薪）</li>
        <li>育嬰留職停薪假：最長 2 年（無薪，保障復職）</li>
        <li>特別休假（年假）：年資滿 1 年有 3 天</li>
      </ul>
      </section>
    </div>
    </div>
    `;
  }
  container.innerHTML = htmlString;
}
