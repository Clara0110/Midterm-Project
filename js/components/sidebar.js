export function sidebar(role, currentMenuId) {
  const container = document.getElementById("list-example");
  let htmlString = "";

  if (role === "employee") {
    htmlString += `
      <a class="list-group-item list-group-item-action" href="#/employee/daily/notice"
            >日常考勤</a
          >
          <a class="list-group-item list-group-item-action" href="#/employee/requests/tal"
            >假勤與加班申請</a
          >
          <a class="list-group-item list-group-item-action" href="#/employee/reviewStatus/mySchedule"
            >主管審核狀態</a
          >
    `;
  } else if (role === "manager") {
    htmlString += `
      <a class="list-group-item list-group-item-action" href="#/manager/tu/attendanceStatus"
            >團隊即時動態</a
          >
          <a class="list-group-item list-group-item-action" href="#/manager/sign-off/approvalCenter"
            >簽核管理</a
          >
          <a class="list-group-item list-group-item-action" href="#/manager/aems/exceptionHandling"
            >考勤管理</a
          >
          <a class="list-group-item list-group-item-action" href="#/manager/eRightsOverview/elai"
            >員工權益總覽</a
          >
    `;
  }

  container.innerHTML = htmlString;
}
