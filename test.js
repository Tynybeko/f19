let my_block = document.querySelector('.block')
let a = document.createElement('div')
a.innerText = 'HELLO NEW BLOCK'
// my_block.replaceWith(a)

// my_block.insertAdjacentElement('afterend', a)
// my_block.insertAdjacentHTML('beforebegin', '<!--asdsadajsd-->')
// my_block.insertAdjacentText('afterbegin', '<h1>asdsa</h1>')


// my_block.remove()

// let fragment = new DocumentFragment()
// for (let i = 0; i < 5; i++) {
//     let newBlock = my_block.cloneNode(true)
//     newBlock.querySelector('strong').innerText += ` ${i + 2}`
//     fragment.append(newBlock)
// }
// console.log(fragment);

// my_block.after(fragment)



// my_block.classList.add('blue', 'qwe')

// my_block.classList.remove('red',)

// let check = my_block.classList.contains('red')
// console.log(check);


// my_block.classList.replace('red', 'blue')

// my_block.classList.toggle('red')
// my_block.classList.toggle('red')


setInterval(() => {
    my_block.firstElementChild.classList.toggle('blue')
    my_block.firstElementChild.classList.toggle('red')
    my_block.lastElementChild.classList.toggle('blue')
    my_block.lastElementChild.classList.toggle('red')
}, 500);