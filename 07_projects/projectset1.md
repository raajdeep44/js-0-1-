# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js)

# Solution Code
## project 1 

```javascript
   console.log("hi")
   const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')


buttons.forEach(function(button){
 
   button.addEventListener('click', function (e){
        
        if (e.target.id == 'red'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'green'){
            body.style.backgroundColor = e.target.id
        }
        if (e.target.id == 'yellow'){
            body.style.backgroundColor = e.target.id
        }
   }) 
})
```