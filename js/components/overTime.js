export function overtime() {
  const overtimeForm = document.getElementById("overtime-form");
  overtimeForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const overtimeReason = document.getElementById("overtime-reason").value;
    const overtimeStart = document.getElementById("overtime-start").value;
    const overtimeEnd = document.getElementById("overtime-end").value;

    const overtimeData = {
      overtimeReason: overtimeReason,
      overtimeStart: overtimeStart,
      overtimeEnd: overtimeEnd,
    };

    localStorage.setItem("overtimeData", JSON.stringify(overtimeData));
    mainContent(overtime);
  });
}