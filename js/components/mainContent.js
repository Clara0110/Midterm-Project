import { leaveAndOvertimeRequests } from "./leaveAndOvertimeRequests.js";
import psflData from "../data/psflData.js";
import { dateUtils } from "../tool/dateUtils.js";

import { gtw } from "./gtw.js"; // 拿取上班打卡時間
import { gow } from "./gow.js"; // 拿取下班打卡時間
import { muci } from "./muci.js";
import { initTal } from "./initTal.js"; // 請假申請
import { overtime } from "./overTime.js"; // 加班申請
import { psfl } from "./psfl.js";

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
    const talData = JSON.parse(localStorage.getItem("talData") ?? '""'); // talCategory、startDay、endDay
    const muciData = JSON.parse(localStorage.getItem("muciData") ?? '""'); // muciInput、muciDate、muciTime
    const overtimeData = JSON.parse(
      localStorage.getItem("overtimeData") ?? '""',
    ); // overtimeReason、overtimeStart、overtimeEnd

    function buildForm(title, content) {
      return `
    <form>
      <p style="display:inline-block" >${title} <br> ${content}</p>
    </form>
    <hr/>
  `;
    }

    if (talData.talCategory && talData.startDay && talData.endDay) {
      htmlString += buildForm(
        "請假申請",
        `類別：${talData.talCategory}，${talData.startDay} 到 ${talData.endDay}`,
      );
    }

    if (muciData.muciInput && muciData.muciDate && muciData.muciTime) {
      htmlString += buildForm(
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
        "加班申請",
        `原因：${overtimeData.overtimeReason}，${overtimeData.overtimeStart} 到 ${overtimeData.overtimeEnd}`,
      );
    }
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
  } else if (actionId === "attendanceStatus") {
    const gtwTime = JSON.parse(localStorage.getItem("gtwTime") ?? '""');
    const gowTime = JSON.parse(localStorage.getItem("gowTime") ?? '""');
    if (gtwTime || gowTime) {
      htmlString += `
    <p> 職員 01 :上班時間：${gtwTime}，下班時間：${gowTime}</p>
    `;
    }
  } else if (actionId === "approvalCenter") {
    const talData = JSON.parse(localStorage.getItem("talData") ?? '""'); // talCategory、startDay、endDay
    const muciData = JSON.parse(localStorage.getItem("muciData") ?? '""'); // muciInput、muciDate、muciTime
    const overtimeData = JSON.parse(
      localStorage.getItem("overtimeData") ?? '""',
    ); // overtimeReason、overtimeStart、overtimeEnd
    const KeyDecision = JSON.parse(localStorage.getItem("KeyDecision")) ?? '""';

    function buildForm(key, title, content) {
      if (KeyDecision.decision == "agree" || KeyDecision.decision == "reject") {
        return ``;
      } else {
        return `
        <form class="approval-center-form" data-key="${key}">
          <p style="display:inline-block">${title} - 職員 01 <br> ${content}</p>
          <button type="button" class="approval-center-agree btn btn-outline-secondary" style="margin:1px" data-key="${key}">✓</button>
          <button type="button" class="approval-center-reject btn btn-outline-secondary" style="margin:1px" data-key="${key}">✘</button>
        </form>
        <hr/>
      `;
      }
    }

    if (talData.talCategory && talData.startDay && talData.endDay) {
      htmlString += buildForm(
        Math.random().toString(36).substring(2, 10),
        "請假申請",
        `類別：${talData.talCategory}，${talData.startDay} 到 ${talData.endDay}`,
      );
    }

    if (muciData.muciInput && muciData.muciDate && muciData.muciTime) {
      htmlString += buildForm(
        Math.random().toString(36).substring(2, 10),
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
        Math.random().toString(36).substring(2, 10),
        "加班申請",
        `原因：${overtimeData.overtimeReason}，${overtimeData.overtimeStart} 到 ${overtimeData.overtimeEnd}`,
      );
    }
  } else if (actionId === "exceptionHandling") {
    htmlString += `123`;
  } else if (actionId === "attendanceSettlement") {
  } else if (actionId === "elai") {
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
    // case "attendanceStatus":
    case "approvalCenter":
      approvalCenter();
      break;
    // case "exceptionHandling":
    // case "attendanceSettlement":
    // case "elai":
  }
}

function approvalCenter() {
  let decision = null;

  const approvalForms = document.querySelectorAll(".approval-center-form");

  approvalForms.forEach((form) => {
    const approvalCenterAgree = form.querySelector(".approval-center-agree");
    const approvalCenterReject = form.querySelector(".approval-center-reject");

    if (!approvalCenterAgree || !approvalCenterReject) {
      return;
    }

    approvalCenterAgree.addEventListener("click", (event) => {
      event.preventDefault();
      const key = approvalCenterAgree.dataset.key;
      decision = "agree";
      const KeyDecision = { key: key, decision: decision };
      localStorage.setItem("KeyDecision", JSON.stringify(KeyDecision));
      mainContent("approvalCenter");
    });

    approvalCenterReject.addEventListener("click", (event) => {
      event.preventDefault();
      const key = approvalCenterReject.dataset.key;
      decision = "reject";
      const KeyDecision = { key: key, decision: decision };
      localStorage.setItem("KeyDecision", JSON.stringify(KeyDecision));
      mainContent("approvalCenter");
    });
  });
}

function calculateLeaveDays(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffTime = end.getTime() - start.getTime();

  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60));

  return diffDays;
}
