(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-buy-openm]"),
    closeModalBtn: document.querySelector("[data-modal-buy-closem]"),
    modal: document.querySelector("[data-modal-buy]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }

 
})();
