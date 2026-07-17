export function muci() {
  const muciForm = document.getElementById("muci-form");
  muciForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const muciInput = document.getElementById("muci-input").value;
    const muciDate = document.getElementById("muci-date").value;
    const muciTime = document.getElementById("muci-time").value;

    const muciData = {
      muciInput: muciInput,
      muciDate: muciDate,
      muciTime: muciTime,
    };

    localStorage.setItem("muciData", JSON.stringify(muciData));
    mainContent("muci");
  });
}