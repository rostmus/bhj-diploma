

/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
   onSubmit(data) {
    let modal;
    let form;
 
    Account.create(data, function(error, response) {
     if (response.success) {
      modal = App.getModal('createAccount');
      form = App.getForm('createAccount');
 
      modal.close();
      form.element.reset();
      
      App.update();
     }
    })
   }
}