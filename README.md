# native-modal

# Install
Connect .js file to your html file or copy function to your main js file

# Description
Function receive 3 required arguments and 2 optional arguments, that have default values.
```js
function modal(btnOpenSelector, btnCloseSelector, popupSelector, btnOpenActiveClass='opened', enableScroll=true) {..}
```    
**`btnOpenSelector`** **(string)** - querySelector on button that opens popup    
**`btnCloseSelector`** **(string)** - querySelector on button that closes popup    
**`popupSelector`** **(string)** - querySelector on popup    
 
`btnOpenActiveClass` **(string)** - class for active open button    
`enableScroll` **(boolean)** - enabling scrolling page while popup is opened    

# Usage
```js
modal('.popup-open', '.popup-close', '.overlay')
```
of for add optional args:
```js
modal('.popup-open', '.popup-close', '.overlay', 'myOpenClass', false)
```
# Structure of HTML
```html
<button class="popup-open"></button>
...
<div class="overlay" style="display: none;">
    <div class="popup">
        <button class="popup-close"></button>
    </div>
</div>
```
Buttons tag and popup class just for example
