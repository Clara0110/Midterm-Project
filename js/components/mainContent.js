import psflData from "../data/psflData.js";
import { dateUtils } from "../tool/dateUtils.js";
import { getItem } from "../tool/getItem.js";

import { gtw } from "./gtw.js"; // 拿取上班打卡時間
import { gow } from "./gow.js"; // 拿取下班打卡時間
import { muci } from "./muci.js";
import { initTal } from "./initTal.js"; // 請假申請
import { overtime } from "./overTime.js"; // 加班申請
import { psfl } from "./psfl.js";
import { approvalCenter } from "./approvalCenter.js"


// 設定輸入日期
const { today, dd, mm, yyyy, hour, minute, everyDay } = dateUtils();
const { gtwTime, gowTime, muciData, talData, overtimeData, keyDecisions } =
  getItem();

export function mainContent(actionId) {
  const container = document.getElementById("main-content");
  let htmlString = ``;

  if (actionId === "notice") {
    htmlString += `
    <div class="p-3 mb-4 bg-light border-start border-4 border-secondary rounded shadow-sm">
      <h5 class="fw-bold text-secondary mb-2">公告</h5>
      <p class="mb-0 text-muted">
        <span class="badge bg-secondary me-2">維護</span>
        2026/07/26 上午 08:00 到下午 17:00，將進行系統更新。
      </p>
    </div>
    `;
  } else if (actionId === "gtw") {
    htmlString += `
      <h2>上班打卡</h2>
      <form id="gtw-form" class="d-flex flex-column gap-2">
        <time id="gtw-time" dateTime="${hour}:${minute}">現在時間：${hour}:${minute}</time>
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
    let approvedRecordsHTML = "";

    if (talData.talCategory && keyDecisions["leave_form"] === "agree") {
      approvedRecordsHTML += `
    <div style="margin-bottom: 10px;">
      <strong>請假</strong>-${talData.talCategory} <br>
      時間：${talData.startDay} 到 ${talData.endDay}
    </div>
  `;
    }

    if (muciData.muciInput && keyDecisions["punch_form"] === "agree") {
      approvedRecordsHTML += `
    <div style="margin-bottom: 10px;">
      <strong>補打卡</strong>-原因：${muciData.muciInput} <br>
      時間：${muciData.muciDate} ${muciData.muciTime}
    </div>
  `;
    }

    if (
      overtimeData.overtimeReason &&
      keyDecisions["overtime_form"] === "agree"
    ) {
      approvedRecordsHTML += `
    <div style="margin-bottom: 10px;">
      <strong>加班</strong>-${overtimeData.overtimeReason} <br>
      時間：${overtimeData.overtimeStart} 到 ${overtimeData.overtimeEnd}
    </div>
  `;
    }

    if (approvedRecordsHTML === "") {
      approvedRecordsHTML =
        "<span style='color: gray;'>暫無已核准的假勤紀錄</span>";
    }

    htmlString += `
    <div class="d-flex flex-column gap-2">
      <h2>假勤明細</h2>
      <div class="row">
      <section id="left-section" class="col-6">
        <p>核准紀錄：</p>
        <div id="fa">${approvedRecordsHTML}</div> 
      </section>
      <section id="right-section" class="col-6">
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
    function buildForm(key, title, content) {
      if (keyDecisions[key] == "agree" || keyDecisions[key] == "reject") {
        return ``;
      } else {
        return `
      <form>
        <p style="display:inline-block" data-key=${key} >${title} <br> ${content}</p>
      </form>
      <hr/>
    `;
      }
    }

    if (talData.talCategory && talData.startDay && talData.endDay) {
      htmlString += buildForm(
        "leave_form",
        "請假申請",
        `類別：${talData.talCategory}，${talData.startDay} 到 ${talData.endDay}`,
      );
    }

    if (muciData.muciInput && muciData.muciDate && muciData.muciTime) {
      htmlString += buildForm(
        "punch_form",
        "補打卡申請",
        `原因：${muciData.muciInput}，${muciData.muciDate} 到 ${muciData.muciTime}`,
      );
    }

    if (
      overtimeData.overtimeReason &&
      overtimeData.overtimeStart &&
      overtimeData.overtimeEnd
    ) {
      htmlString += buildForm(
        "overtime_form",
        "加班申請",
        `原因：${overtimeData.overtimeReason}，${overtimeData.overtimeStart} 到 ${overtimeData.overtimeEnd}`,
      );
    }
  } else if (actionId === "psfl") {
    htmlString += `
  <table class="table table-bordered table-striped table-hover text-center align-middle">
    <thead class="table-light">
      <tr>
        <!-- 修正 colspan 為 11 -->
        <th colspan="11" class="fs-5">${yyyy}年${mm}月份 出勤紀錄</th>
      </tr>
      <tr>
        <th rowspan="2">出勤日期</th>
        <th colspan="2">出勤時間</th>
        <th colspan="2">考勤狀況(時)</th>
        <th rowspan="2">請假時數</th>
        <th colspan="3">加班</th>
        <th rowspan="2">實際出勤總時數</th>
        <th rowspan="2">備註</th>
      </tr>
      <tr>
        <th>上班</th>
        <th>下班</th>
        <th>遲到</th>
        <th>早退</th>
        <th>起始時間</th>
        <th>結束時間</th>
        <th>總時數</th>
      </tr>
    </thead>
    <tbody id="tbody">
      <!-- 動態資料將插入於此 -->
    </tbody>
  </table>
`;
  } else if (actionId === "attendanceStatus") {
    if (gtwTime.gtwTimeDateTime || gowTime) {
      console.log(gtwTime);

      htmlString += `
      <div class="attendance-item">
        <span class="employee-name">職員01</span>
        <span class="status-badge is-danger">上班時間：${gtwTime.gtwTimeDateTime || "未記錄"}，下班時間：${gowTime || "未記錄"}</span>
      </div>
      <div class="attendance-item">
        <span class="employee-name">職員02</span>
        <span class="status-badge is-danger">上班時間：09:00，下班時間：未記錄</span>
      </div>
      <div class="attendance-item">
        <span class="employee-name">職員03</span>
        <span class="status-badge is-danger">上班時間：09:00，下班時間：未記錄</span>
      </div>
    `;
    }
  } else if (actionId === "approvalCenter") {
    function buildForm(key, title, content) {
      if (keyDecisions[key] === "agree" || keyDecisions[key] === "reject") {
        return ``;
      } else {
        return `
    <form class="approval-center-form d-flex align-items-center gap-2" data-key="${key}">
      <p class="me-auto mb-0">${title} - 職員 01 <br> ${content}</p>
      <button type="button" class="approval-center-agree btn btn-outline-secondary" data-key="${key}">✓</button>
      <button type="button" class="approval-center-reject btn btn-outline-secondary" data-key="${key}">✘</button>
    </form>
    <hr/>
    `;
      }
    }

    if (talData.talCategory && talData.startDay && talData.endDay) {
      htmlString += buildForm(
        "leave_form",
        "請假申請",
        `類別：${talData.talCategory}，${talData.startDay} 到 ${talData.endDay}`,
      );
    }

    if (muciData.muciInput && muciData.muciDate && muciData.muciTime) {
      htmlString += buildForm(
        "punch_form",
        "補打卡申請",
        `原因：${muciData.muciInput}，${muciData.muciDate} 到 ${muciData.muciTime}`,
      );
    }

    if (
      overtimeData.overtimeReason &&
      overtimeData.overtimeStart &&
      overtimeData.overtimeEnd
    ) {
      htmlString += buildForm(
        "overtime_form",
        "加班申請",
        `原因：${overtimeData.overtimeReason}，${overtimeData.overtimeStart} 到 ${overtimeData.overtimeEnd}`,
      );
    }
  } else if (actionId === "exceptionHandling") {
    let isCheckingIn = !!gtwTime?.gtwTimeDateTime;
    let isSignOut = !!gowTime;

    let isLate = false;
    let leaveEarly = false;

    const hour = today.getHours();
    const minute = today.getMinutes();
    const currentTime = toMinutes(hour, minute);
    const eightClock = toMinutes(8, 0);
    const fivePMClock = toMinutes(17, 0);

    // 遲到
    if (gtwTime?.gtwTimeDateTime) {
      const [hours, minutes] = gtwTime.gtwTimeDateTime.split(":").map(Number);
      const wsxClock = toMinutes(hours, minutes);
      if (wsxClock > eightClock) {
        isLate = true;
      }
    }

    // 早退
    if (gowTime) {
      const [g, s] = gowTime.split(":").map(Number);
      const qazClock = toMinutes(g, s);
      if (qazClock < fivePMClock) {
        leaveEarly = true;
      }
    }

    if (!isCheckingIn && currentTime > eightClock) {
      htmlString += `
      <div class="attendance-item">
        <span class="employee-name">職員01</span>
        <span class="status-badge is-missing">未打卡</span>
      </div>
      `;
    } else if (!isSignOut && currentTime > fivePMClock) {
      htmlString += `
      <div class="attendance-item">
        <span class="employee-name">職員01</span>
        <span class="status-badge is-missing">未簽退</span>
      </div>
      `;
    } else if (isLate) {
      htmlString += `
      <div class="attendance-item">
        <span class="employee-name">職員01</span>
        <span class="status-badge is-danger">遲到</span>
      </div>
      `;
    } else if (leaveEarly) {
      htmlString += `
      <div class="attendance-item">
        <span class="employee-name">職員01</span>
        <span class="status-badge is-missing">早退</span>
      </div>
      `;
    }
  } else if (actionId === "attendanceSettlement") {
    htmlString += `
    <div id="container">
        <div id="top" class="d-flex align-items-center gap-3 mb-3">
            <h2 class="mb-0">結算作業</h2>
            <span>(2026-${mm})</span>
            <span  class="ms-auto text-muted">系統時間:${yyyy}/${mm}/${dd} ${hour}:${minute}</span>
            <span>結算開放日:每月31日</span>
            <button class="btn btn-secondary" disabled>批次結算</button>
        </div>

        <table class="table table-light table-striped">
            <thead>
                <tr>
                    <th>識別碼</th>
                    <th>出勤時數 (實/應)</th>
                    <th>假 / 加 (時數)</th>
                    <th>資料狀態</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input type="checkbox" id="checkbox-1" name="checkbox-1" disabled>
                        <label for="checkbox-1">01</label>
                    </td>
                    <td>160.0 / 120.0 h 80%</td>
                    <td>0.0 | 12.5</td>
                    <td>未確認</td>
                    <td><button class="btn btn-secondary" disabled>編輯</button></td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="checkbox-1" name="checkbox-1" disabled>
                        <label for="checkbox-1">02</label>
                    </td>
                    <td>160.0 / 120.0 h 80%</td>
                    <td>0.0 | 12.5</td>
                    <td>未確認</td>
                    <td><button class="btn btn-secondary" disabled>編輯</button></td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox" id="checkbox-2" name="checkbox-2" disabled>
                        <label for="checkbox-2">03</label>
                    </td>
                    <td>160.0 / 120.0 h 80%</td>
                    <td>0.0 | 12.5</td>
                    <td>未確認</td>
                    <td><button class="btn btn-secondary" disabled>編輯</button></td>
                </tr>
            </tbody>
        </table>
    </div>
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
    //   fa();
    //   break;
    // case mySchedule:
    //   mySchedule();
    //   break;
    case "psfl":
      // 提取考勤資料
      psfl();
      break;
    // case "attendanceStatus":
    case "approvalCenter":
      approvalCenter();
      break;
    // case "exceptionHandling":
    // exceptionHandling();
    // break;
    // case "attendanceSettlement":
  }
}

function calculateLeaveDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffTime = end.getTime() - start.getTime();

  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60));

  return diffDays;
}

function toMinutes(hours, minutes) {
  return hours * 60 + minutes;
}
