const { response } = require("express");

/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const role = document.querySelector('.sidebar-toggle')
    const sidebarMini = document.querySelector('.sidebar-mini')
    role.onclick = () => {
      if (sidebarMini.classList.contains('sidebar-open')) {
        sidebarMini.classList.remove('sidebar-open')
        sidebarMini.classList.remove('sidebar-collapse')
        return false
      }
      sidebarMini.classList.add('sidebar-open')
      sidebarMini.classList.add('sidebar-collapse')
    }
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const registerButton = document.getElementById('modal-register')
    registerButton.onclick = register

    function register() {
      this.Modal.open(App.getModal)
    }
    const enterButton = document.getElementById('modal-login')
    enterButton.onclick = enter

    function enter() {
      this.Modal.open(App.getModal)
    }


    const logoutButton = documetn.querySelector('.menu-item_logout')
    logoutButton.onclick = logout
    function logout() {
      User.logout()
      if(response.success == 'true') {
        App.setState('init')
      }
    }

  }
}