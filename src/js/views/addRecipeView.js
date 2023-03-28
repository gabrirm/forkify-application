import icons from 'url:../../img/icons.svg';
import View from './View.js';
import previewView from './previewView.js';

class AddRecipeView extends View {
  _parentElement = document.querySelector('.upload');
  _messageOK = 'Recipe successfully uploaded!'
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  //constructor to call the handler once the object is created. The controller doesnt have to interfere on this method
  constructor(){
    super()
    this._addHandlerShowWindow()
    this._addHandlerHideWindow()
    this.addHandlerUpload()
  }
  _errorMessage = 'No bookmarks yet, find a nice recipe and bookmark it! :)';
  _generateMarkup() {}
    
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this))
    
  }
  toggleWindow(){
    this._overlay.classList.toggle('hidden')
    this._window.classList.toggle('hidden')
  }
  _addHandlerHideWindow(){
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this))
    this._overlay.addEventListener('click', this.toggleWindow.bind(this))
  }
  addHandlerUpload(handler){
    this._parentElement.addEventListener('submit', function(e){
      e.preventDefault()
      const dataArr = [...new FormData(this)]
      const data = Object.fromEntries(dataArr)
      handler(data)
    })
  }
}

export default new AddRecipeView();
