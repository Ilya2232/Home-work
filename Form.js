export class Form {
  constructor(id) {
    this.formElement = document.getElementById(id);
  }

  getAllValues() {
    const registerFormData = new FormData(this.formElement);
    return Object.fromEntries(registerFormData.entries());
  }

  isValid() {
    return this.formElement.checkValidity();
  }

  resetValues() {
    this.formElement.reset();
  }
}
