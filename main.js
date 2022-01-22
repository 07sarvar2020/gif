// let wrapper = document.querySelector('.wrapper'),
//     btn = document.querySelector('.btn'),
//     body = document.querySelector('body');

// // wrapper.style = 'color:yellow; font-size: 25px; font-family: sans-serif;'

// // btn.addEventListener('click', function () {
// //     if (wrapper.classList.contains('active')) {
// //         wrapper.classList.remove('active')
// //     }else{
// //         wrapper.classList.add('active')
// //     }
// // })
// let inner = document.querySelectorAll('.inner')
// btn.addEventListener('click', function () {
//     for (const iterator of inner) {
//         iterator.style.background = randColor()
//     }
// })
// function randColor() { 
//     let r = Math.floor(Math.random() * 255 + 1)
//     let g = Math.floor(Math.random() * 255 + 1)
//     let b = Math.floor(Math.random() * 255 + 1)
//     return `rgb(${r}, ${g}, ${b})`
//  }
 
//  for (const iterator of inner) {
//     iterator.addEventListener('mouseenter', function (e) {
//         let attr = this.getAttribute('style')
//         body.setAttribute('style', attr)
//     })
// }

// function myRandom() {
    
//     return Math.floor(Math.random() * (10 + 1 - 5) + 5)
// }
// console.log(myRandom());

let wrapper = document.querySelector('body');
    let inner = document.querySelectorAll('.inner');
    
    for (const iterator of inner) {
      iterator.addEventListener('click', function (e) {
          let attr = this.getAttribute('src')
          wrapper.style.background = `url(${attr})`   
          console.log(inner);    
      })
    }
    
    // inner.forEach(el => {
    //     el.addEventListener('click', function (e) {
    //               let attr = this.getAttribute('src')
    //               wrapper.style.background = `url(${attr})`   
    //               console.log(inner);    
    //           })
    // })