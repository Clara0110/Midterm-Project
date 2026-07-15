import { leaveAndOvertimeRequests } from "./leaveAndOvertimeRequests.js";
import psflData from "../data/psflData.js";
import { dateUtils } from "../tool/dateUtils.js";

// 設定輸入日期
const { today, dd, mm, yyyy, hour, minute, everyDay } = dateUtils();

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
      <form id="gtw-form" class="d-flex flex-column gap-2">
        <time id="gtw-time" datetime="${hour}:${minute}">現在時間：${hour}:${minute}</time>
        <button class="btn btn-outline-secondary" id="gtw-button" >打卡</button>
      </form>
    `;
  } else if (actionId === "gow") {
    htmlString += `
      <h2>下班打卡</h2>
      <form id="gow-form" class="d-flex flex-column gap-2">
        <time id="gow-time" dateTime="${hour}:${minute}">現在時間：${hour}:${minute}</time>
        <button class="btn btn-outline-secondary" id="gow-button">打卡</button>
      </form>
    `;
  } else if (actionId === "muci") {
    htmlString += `
      <h2>補打卡申請</h2>
      <form id="muci-form"class="d-flex flex-column gap-2">
        <label for="muci-input">請輸入補打卡申請原因：</label>
        <input type="text" id="muci-input" name="muci-form" require/>
        <label for="muci-date">日期：</label>
        <input type="date" id="muci-date" name="muci-date" value="${yyyy}-${mm}-${dd}" require/>
        <label for="muci-time">時間：</label>
        <input type="time" id="muci-time" name="muci-time" value="${hour}:${minute}" require/>
        <button class="btn btn-outline-secondary" type="submit">提交</button>
      </form>
    `;
  } else if (actionId === "tal") {
    htmlString += `
      <h2>請假申請</h2>
      <form id="tal-form" class="d-flex flex-column gap-2">
        <label for="tal-category">請假類別：</label>
          <select name="tal-category" id="tal-category">
            <option value="" disabled selected>請選擇請假類別</option>
            <option value="事假">事假</option>
            <option value="病假">病假</option>
            <option value="婚假">婚假</option>
            <option value="喪假">喪假</option>
            <option value="產假">產假</option>
            <option value="陪產假">陪產假</option>
            <option value="安胎休養假">安胎休養假</option>
            <option value="家庭照顧假">家庭照顧假</option>
            <option value="育嬰留職停薪假">育嬰留職停薪假</option>
            <option value="公假">公假</option>
            <option value="特別休假">特別休假</option>
          </select>
        <label for="tal-start-date">日期：</label>
        <input type="date" id="tal-start-date" onfocus="this.blur()" min="${yyyy}-${mm}-${dd}" name="tal-start-date" required/>
        <label for="tal-start-time">時間：</label>
        <input type="time" id="tal-start-time" min="08:00" max="17:00" name="tal-start-time" required/>
        <p>到</p>
        <label for="tal-end-date">日期：</label>
        <input type="date" id="tal-end-date" onfocus="this.blur()" min="${yyyy}-${mm}-${dd}" name="tal-end-date" required/>
        <label for="tal-end-time">時間：</label>
        <input type="time" id="tal-end-time" min="08:00" max="17:00" name="tal-end-time" required/>
        <button id="tal-btn" class="btn btn-outline-secondary" type="submit">提交</button>
      </form>
    `;
  } else if (actionId === "overtime") {
    htmlString += `
      <h2>加班申請</h2>
      <form id="overtime-form" class="d-flex flex-column gap-2">
        <label for="overtime-reason">請輸入加班事由：</label>
        <input type="text" id="overtime-reason" name="overtime-reason" require/>
        <label for="overtime-start">時間：</label>
        <input type="time" id="overtime-start" name="overtime-start" value="${hour}:${minute}" require/>
        <p>到</p>
        <label for="overtime-end">時間：</label>
        <input type="time" id="overtime-end" name="overtime-end" value="${hour}:${minute}" require/>
        <button class="btn btn-outline-secondary" type="submit">提交</button>
      </form>
    `;
  } else if (actionId === "fa") {
    // 待改:主管簽核後才顯示請假紀錄
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
  } else if (actionId === "mySchedule") {
    const faData = JSON.parse(localStorage.getItem("talData") ?? '""');
    const leaveTalCategory = faData.talCategory;
    const leaveStartDay = faData.startDay;
    const leaveEndDay = faData.endDay;
    htmlString += `
    <h2>代辦簽核</h2>
    <p>${leaveTalCategory}：${leaveStartDay} 到 ${leaveEndDay}</p>
    `;
  } else if (actionId === "psfl") {
    htmlString += `
    <table>
      <thead>
        <tr>
        <th colspan="13">${yyyy}年${mm}月份 出勤紀錄</th>
        </tr>
        <tr>
          <th rowspan="2">出勤日期</th>
          <th colspan="2">出勤時間</th>
          <th colspan="2">考勤狀況(分)</th>
          <th rowspan="2">請假時數</th>
          <th colspan="3">加班</th>
          <th rowspan="2">實際出勤總時數</th>
          <th rowspan="2">備註</th>
        </tr>

        <tr>
          <th >上班</th>
          <th >下班</th>
          <th>遲到</th>
          <th>早退</th>
          <th>起始時間</th>
          <th>結束時間</th>
          <th>總時數</th>
        </tr>
      </thead>
      <tbody id="tbody">
      </tbody>
    </table>
    `;
  }
  container.innerHTML = htmlString;

  switch (actionId) {
    case "gtw":
      gtw();
      break;
    case "gow":
      gow();
      break;
    case "muci":
      muci();
      break;
    case "tal":
      initTal();
      break;
    case "overtime":
      overtime();
      break;
    // case fa:
    // case mySchedule:
    case "psfl":
      // 提取考勤資料
      psfl();
      break;
  }
}
// 拿取上班打卡時間
function gtw() {
  const gtwForm = document.getElementById("gtw-form");
  gtwForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const gtwTime = document.getElementById("gtw-time").dateTime;
    localStorage.setItem("gtwTime", JSON.stringify(gtwTime));
    location.reload();
  });
}

// 拿取下班打卡時間
function gow() {
  const gowForm = document.getElementById("gow-form");
  gowForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const gowTime = document.getElementById("gow-time").dateTime;
    localStorage.setItem("gowTime", JSON.stringify(gowTime));
    location.reload();
  });
}

function muci() {
  const muciForm = document.getElementById("muci-form");
  muciForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const muciInput = document.getElementById("muci-input").value;
    const muciDate = document.getElementById("muci-date").value;
    const muciTime = document.getElementById("muci-time").value;

    const muciData = {
      input: muciInput,
      date: muciDate,
      time: muciTime,
    };

    localStorage.setItem("muciData", JSON.stringify(muciData));
  });
}

// 請假申請
function initTal() {
  const talForm = document.getElementById("tal-form");

  talForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!talForm.checkValidity()) {
      talForm.reportValidity();
      return;
    }

    const talCategory = document.getElementById("tal-category").value;
    const talStartDate = document.getElementById("tal-start-date").value;
    const talStartTime = document.getElementById("tal-start-time").value;
    const talEndDate = document.getElementById("tal-end-date").value;
    const talEndTime = document.getElementById("tal-end-time").value;

    if (!talCategory) {
      alert("請選擇請假類別！");
      return;
    }

    // 選單禁止輸入假日
    const ddstartDay = new Date(talStartDate);
    const ddEndDay = new Date(talEndDate);
    if (
      ddstartDay.getDay() === 6 ||
      ddstartDay.getDay() === 0 ||
      ddEndDay.getDay() === 6 ||
      ddEndDay.getDay() === 0
    ) {
      alert("請選擇工作日！");
      return;
    }

    const startDay = `${talStartDate}T${talStartTime}`;
    const endDay = `${talEndDate}T${talEndTime}`;
    // 待改(小時)
    // const hours = calculateLeaveDays(startDay, endDay);
    const talData = {
      talCategory: talCategory,
      startDay: startDay,
      endDay: endDay,
    };

    localStorage.setItem("talData", JSON.stringify(talData));
  });
}
// 加班申請
function overtime() {
  const overtimeForm = document.getElementById("overtime-form");
  overtimeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const overtimeReason = document.getElementById("overtime-reason").value;
    const overtimeStart = document.getElementById("overtime-start").value;
    const overtimeEnd = document.getElementById("overtime-end").value;

    const overtimeData = {
      input: overtimeReason,
      date: overtimeStart,
      time: overtimeEnd,
    };

    localStorage.setItem("overtimeData", JSON.stringify(overtimeData));
  });
}

function psfl() {
  const tbody = document.getElementById("tbody");
  const dFrag = document.createDocumentFragment();

  // console.log(values);

  for (let i = everyDay - 1; i >= 0; i--) {
    const row = document.createElement("tr");
    for (let y = 0; y < 11; y++) {
      const cell = document.createElement("td");
      const zxc = document.getElementsByTagName("td");
      

      if(zxc[y] == zxc[0]){
      const p = document.createElement("p");
      p.textContent = `${yyyy}/${mm}/${dd-i}`;
      cell.appendChild(p);
      }
    
      row.appendChild(cell);
    }
    tbody.appendChild(row);
  }

  // Object.values(psflData).forEach((term) => {
  //   const row = document.createElement("tr");
  //   Object.values(term).forEach((jia) => {
  //     const cell = document.createElement("td");
  //     cell.textContent = jia;
  //     row.appendChild(cell);
  //   });
  //   dFrag.appendChild(row);
  // });
  // tbody.appendChild(dFrag);

  // for (let i = 0; i < 3; i++) {
  //   const row = document.createElement("tr");
  //   for (let y = 0; y < values.length; y++) {
  //     const cell = document.createElement("td");
  //     const redfd = data.A.上班;
  //     console.log(redfd);

  //     cell.textContent = values[y];
  //     row.appendChild(cell);
  //   }
  //   tbody.appendChild(row);
  // }
}

function calculateLeaveDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffTime = end.getTime() - start.getTime();

  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60));

  return diffDays;
}
