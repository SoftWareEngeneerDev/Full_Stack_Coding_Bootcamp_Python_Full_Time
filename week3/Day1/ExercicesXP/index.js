const allbooks = []

// titre
// auteur
// image: une url,
//     alreadyRead: qui est un booléen(vrai ou faux).
// 
const book1 = {
    title: "le monde s'éffondre",
    auther: "Chinua Achebe",
    image: "https://picsum.photos/seed/picsum/200/300",
    alreadyRead: false
}

const book2 = {
    title: "ebintho",
    auther: "Amadou Kone",
    image: "https://picsum.photos/seed/picsum/200/300",
    alreadyRead: true
}
allbooks.push(book1, book2)
console.log('allbooks:', allbooks)
const table = document.createElement("table")
table.innerHTML = `
<thead>
<tr>
    <th colspan="3">My Book listStyle: </th>
</tr>
</thead>
<tbody>
<tr class="${book1.alreadyRead  ? 'is-red' : ''}">
    <td>${book1.title} written by ${book1.auther}</td>
    <td>
    <img src="${book1.image}" alt="">
    </td>
    <td>Already read: ${book1.alreadyRead}</td>
</tr>
<tr class="${book2.alreadyRead  ? 'is-red' : ''}">
    <td class="is-red">${book2.title} written by ${book2.auther}</td>
    <td>
    <img src="${book2.image}" alt="">
    </td>
    <td>Already read: ${book2.alreadyRead}</td>
</tr>
</tbody>
`
const bookListDiv = document.querySelector('.list-Books')

console.log('bookListDiv: ', bookListDiv)

bookListDiv.appendChild(table)