export function topbar(role, currentMenuId, actionId) {
  const container = document.getElementById("topbar");
  let htmlString = "";

  if (role === "employee" && currentMenuId === "daily") {
    htmlString += `
              <a
            class="content-list-group-item start list-group-item-action"
            href="#/employee/daily/notice"
            >公告</a
          >
          <a class="content-list-group-item list-group-item-action" href="#/employee/daily/gtw"
            >上班打卡</a
          >
          <a class="content-list-group-item list-group-item-action" href="#/employee/daily/gow"
            >下班打卡</a
          >
          <a class="content-list-group-item end list-group-item-action" href="#/employee/daily/muci"
            >補打卡申請</a
          >
          `;
  } else if (role === "employee" && currentMenuId === "requests") {
    htmlString += `
              <a
            class="content-list-group-item start list-group-item-action"
            href="#/employee/requests/tal"
            >請假申請</a
          >
          <a class="content-list-group-item list-group-item-action" href="#/employee/requests/overtime"
            >加班申請</a
          >
          <a class="content-list-group-item end list-group-item-action" href="#/employee/requests/fa"
            >假勤明細</a
          >
          `;
  } else if (role === "employee" && currentMenuId === "reviewStatus") {
    htmlString += `
              <a
            class="content-list-group-item start list-group-item-action"
            href="#/employee/reviewStatus/mySchedule"
            >待辦簽核</a
          >
          <a class="content-list-group-item end list-group-item-action" href="#/employee/reviewStatus/psfl"
            >考勤結算</a
          >
          `;
  } else if (role === "manager" && currentMenuId === "tu") {
    htmlString += `
              <a
            class="content-list-group-item start end list-group-item-action" onfocus="this.blur()">今日出勤動態</a>
          `;
  } else if (role === "manager" && currentMenuId === "sign-off") {
    htmlString += `
             <a
            class="content-list-group-item start end list-group-item-action" onfocus="this.blur()">簽核管理</a>
          `;
  } else if (role === "manager" && currentMenuId === "aems") {
    htmlString += `
              <a
            class="content-list-group-item start list-group-item-action" href="#/manager/aems/exceptionHandling">異常處理</a>
             <a
            class="content-list-group-item end list-group-item-action" href="#/manager/aems/attendanceSettlement">考勤結算</a>
          `;
          
  }

  container.innerHTML = htmlString;
}
