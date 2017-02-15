let app = document.getElementById('app')
let xhr = new XMLHttpRequest()

xhr.open('GET', 'http://localhost:9200/api/bookmarks', false)
xhr.send()

/*console.log(xhr.status)
console.log(xhr.statusText)
console.log(xhr.responseText)
*/
var datos = JSON.parse(xhr.responseText)

borrar = (id) => {
    let xhr = new XMLHttpRequest()
    xhr.open('DELETE', 'http://localhost:9200/api/bookmark/' + id, false)
    xhr.send()
}

actualizar = (id) => {

}

insertar = () => {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://localhost:9200/api/bookmark/', false)
    xhr.send()
}

listar = () => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', 'http://localhost:9200/api/bookmarks/', false)
    xhr.send()
}

for (var i = 0; i < datos.bookmarks.length; i++) {

    let dateAdded = datos.bookmarks[i].dateAdded
    let title = datos.bookmarks[i].title
    let id = datos.bookmarks[i]._id
    let category = datos.bookmarks[i].category
    let bmURL = datos.bookmarks[i].url
    let tags = datos.bookmarks[i].tags

    document.write(title)
    document.write(`<a href="" onclick="borrar('${id}')">Borrar</a><br>`)

}