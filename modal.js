document.addEventListener("DOMContentLoaded", function () {
  const cancelButton = document.querySelector("button");
  let modal;

  cancelButton.addEventListener("click", function () {
    if (!modal) {
      modal = createModal();
      document.body.appendChild(modal);
    }
    showModal(modal);
  });

  cancelButton.addEventListener("mouseover", function () {
    cancelButton.style.cursor = "pointer";
  });

  function createModal() {
    const modalElement = document.createElement("div");
    modalElement.classList.add("modal");
    modalElement.innerHTML = `
        <div class="modal-content">
          <p>Are you sure you want to cancel your subscription?</p>
          <button id="noButton">No</button>
          <button id="yesButton">Yes - Cancel</button>
        </div>
      `;

    const noButton = modalElement.querySelector("#noButton");
    const yesButton = modalElement.querySelector("#yesButton");

    noButton.addEventListener("click", function () {
      hideModal(modal);
    });

    yesButton.addEventListener("click", function () {
      updateModalContent(modal, "Subscription successfully cancelled!");
      setTimeout(() => {
        hideModal(modal);
        updateCancelButton();
      }, 2000);
    });

    return modalElement;
  }

  function showModal(modal) {
    modal.style.display = "block";
  }

  function hideModal(modal) {
    modal.style.display = "none";
  }

  function updateModalContent(modal, text) {
    const modalContent = modal.querySelector(".modal-content");
    modalContent.innerHTML = `<p>${text}</p>`;
  }

  function updateCancelButton() {
    cancelButton.innerHTML = "Cancelled";
    cancelButton.disabled = true;
    cancelButton.style.cursor = "not-allowed";
  }
});
