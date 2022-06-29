

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
    const mainSidebar = document.querySelector('.main-sidebar')
    mainSidebar.addEventListener('click', function(event) {
      let elTarget = event.target
      let modal 
      if(elTarget.closest('.menu-item_register')) {
        modal = App.getModal('register')
        modal.open()
      } else if(elTarget.closest('.menu-item_login')) {
        modal = App.getModal('login')
        modal.open()
      } else if(elTarget.closest('.menu-item_logout')) {
        User.logout(function(error, response) {
          if (response.success) {
            App.setState('init');
          }
        })
      }
    }
    )

    
  }
}