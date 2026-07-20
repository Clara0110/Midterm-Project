export function approvalCenter() {
  const approvalForms = document.querySelectorAll(".approval-center-form");

  approvalForms.forEach((form) => {
    const approvalCenterAgree = form.querySelector(".approval-center-agree");
    const approvalCenterReject = form.querySelector(".approval-center-reject");

    if (!approvalCenterAgree || !approvalCenterReject) return;

    approvalCenterAgree.addEventListener("click", (event) => {
      event.preventDefault();
      const key = approvalCenterAgree.dataset.key;

      const currentDecisions = JSON.parse(
        localStorage.getItem("KeyDecisions") ?? "{}",
      );
      currentDecisions[key] = "agree";

      localStorage.setItem("KeyDecisions", JSON.stringify(currentDecisions));
      location.reload();
    });

    approvalCenterReject.addEventListener("click", (event) => {
      event.preventDefault();
      const key = approvalCenterReject.dataset.key;

      const currentDecisions = JSON.parse(
        localStorage.getItem("KeyDecisions") ?? "{}",
      );
      currentDecisions[key] = "reject";

      localStorage.setItem("KeyDecisions", JSON.stringify(currentDecisions));
      location.reload();
    });
  });
}
