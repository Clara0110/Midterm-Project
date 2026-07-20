export function gow() {
  const gowForm = document.getElementById("gow-form");
  gowForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const gowTime = document.getElementById("gow-time").dateTime;
    localStorage.setItem("gowTime", gowTime);
    location.reload();
  });
}
