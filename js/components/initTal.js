export function initTal() {
  const talForm = document.getElementById("tal-form");

  talForm.addEventListener("submit", (event) => {
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
    location.reload();
  });
}