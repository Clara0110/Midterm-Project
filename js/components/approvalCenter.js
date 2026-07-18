export function approvalCenter() {
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
      location.reload();
    });

    approvalCenterReject.addEventListener("click", (event) => {
      event.preventDefault();
      const key = approvalCenterReject.dataset.key;
      decision = "reject";
      const KeyDecision = { key: key, decision: decision };
      localStorage.setItem("KeyDecision", JSON.stringify(KeyDecision));
      location.reload();
    });
  });
}
