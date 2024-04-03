const aboutBtnList = document.querySelector(".about-list-btn-js");
const modalDevelopment = document.querySelector(".modal-development-js");
const modalWork = document.querySelector(".modal-work-js");
const modalHobbies = document.querySelector(".modal-hobbies-js");
const modalBackdrop = document.querySelector(".modal-backdrop");
const closeModalBtn = document.querySelector(".close-modal-js");

aboutBtnList.addEventListener("click", onBtnClick);

function onBtnClick(e) {
  const category = e.target.dataset.category;
  if (!category) {
    return;
  }

  switch (category) {
    case "development":
      openModal(modalDevelopment);
      break;
    case "hobbies":
      openModal(modalHobbies);
      break;
    case "work":
      openModal(modalWork);
      break;
    default:
      break;
  }
}

function openModal(modal) {
  modal.classList.add("active");
  modalBackdrop.classList.add("open");

  const onEsc = (e) => {
    if (e.key === "Escape") {
      closeModal(modal, onEsc, onBackdrop, onClose);
    }
  };

  const onBackdrop = (e) => {
    if (e.target === modalBackdrop) {
      closeModal(modal, onEsc, onBackdrop, onClose);
    }
  };

  const onClose = () => {
    closeModal(modal, onEsc, onBackdrop, onClose);
  };

  closeModalBtn.addEventListener("click", onClose);
  window.addEventListener("keydown", onEsc);
  window.addEventListener("click", onBackdrop);
}

function closeModal(modal, onEsc, onBackdrop, onClose) {
  modalBackdrop.classList.remove("open");

  setTimeout(() => {
    modal.classList.remove("active");
  }, 800);

  closeModalBtn.removeEventListener("click", onClose);
  window.removeEventListener("keydown", onEsc);
  window.removeEventListener("click", onBackdrop);
}
