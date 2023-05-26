// ДЗ 21. Генерируем вложений лист
// написать функцию generateList(array)
// принимает массив из чисел и массивов чисел, например:
// [1,2, [1.1,1.2,1.3] ,3]
// Нужно сгенерировать список из элементов, а если в массиве 
// встречается массив то делать вложенный список.
// Пример 1
// generateList([1,2,3]) - Должен создать:
// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
// </ul>
// Пример 2
// generateList([1,2, [1.1,1.2,1.3] ,3]) - Должен создать:
// <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>
//         <ul>
//             <li>1.1</li>
//             <li>1.2</li>
//             <li>1.3</li>
//         </ul>
//     </li>
//     <li>3</li>
// </ul>

let array = [1,2, [1.1,1.2,1.3] ,3];

function generateList(array) {
    let fragment = document.createDocumentFragment()
    let ul = document.createElement('ul');
    let li = document.createElement('li');

    array.forEach(function(item) {
        if (Array.isArray(item)) {
            let newUl = document.createElement('ul');
            ul.appendChild(li)

            item.forEach(function(el, i) {
                let newClonLi = li.cloneNode()
                newClonLi.innerText = el
                newUl.appendChild(newClonLi)
            }); 

            li.appendChild(newUl)

        } else {
            let cloneLi = li.cloneNode()
            cloneLi.innerText = item
            ul.appendChild(cloneLi) 
            }
    })

    let body = document.querySelector('body')
    fragment.appendChild(ul)
    console.log(document.documentElement.outerHTML)
    body.appendChild(fragment)
}

generateList(array);
