import icons from 'url:../../img/icons.svg';
import View from './View.js';
import previewView from './previewView.js';

class BookmarksView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet, find a nice recipe and bookmark it! :)'
  _generateMarkup() {
    console.log(this._data);
    return this._data.map(bookmark => previewView.render(bookmark, false)).join('');
    
  }
  addHandlerRenderBookmarks(handler){
    window.addEventListener('load', handler)
  }
  
}

export default new BookmarksView();
