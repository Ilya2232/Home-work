export class Modal {
  constructor(id) {
    this.modalElement = document.getElementById(id);
    const closeModalBtn = document.querySelector('#js-close-button');
    closeModalBtn.addEventListener('click', () => {
      this.closeModal();
    });
  }

  openModal() {
    this.modalElement.classList.add('modal-showed');
  }

  closeModal() {
    this.modalElement.classList.remove('modal-showed');
    document.querySelector('#js-overlay').classList.remove('overlay-showed');
  }

  isModalOpen() {
    return this.modalElement.classList.contains('modal-showed');
  }
}