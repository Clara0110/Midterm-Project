export function gtw() {
  const gtwForm = document.getElementById("gtw-form");
  gtwForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let d = new Date();
    d.setHours(8, 0, 0, 0);

    const gtwTime = document.getElementById("gtw-time").dateTime;
    const [hour, minute] = gtwTime.split(":").map(Number);

    let qweTime = new Date();
    qweTime.setHours(hour, minute, 0, 0);

    const diffHours = (qweTime - d) / (1000 * 60 * 60);

    console.log("遲到:", diffHours);

    const gtwData = { gtwTime: gtwTime, late: diffHours };
    localStorage.setItem("gtwTime", JSON.stringify(gtwData));

    location.reload();
  });
}
