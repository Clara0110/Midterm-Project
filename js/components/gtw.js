export function gtw() {
  const gtwForm = document.getElementById("gtw-form");
  gtwForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const gtwTime = document.getElementById("gtw-time").dateTime;
    localStorage.setItem("gtwTime", JSON.stringify(gtwTime));
    mainContent("gtw");
  });
}