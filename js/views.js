export function adView(ad) {
    return `<a href="/detail.html?id=${ad.id}">
    <div class="post">
        <h3 class="name">${ad.name} - ${ad.price} € (${ad.status})</h3>
        <strong class="author">${ad.author}</strong> - 
        <time datetime="${ad.date}">${ad.date}</time>
    </div>
    <hr>
</a>`
}

export function menuView() {

    return `<ul>
        <li><a href="/new.html">
                <h2>Crea tu anuncio</h2>
            </a>
        </li>
    </ul>`

}


export function errorView(message) {
    return `<div class="error">
        ${message}
        <button>Cerrar</button>
    </div>`
}


export function successView(message) {
    return `<div class="success">
        ${message}
        <button>Cerrar</button>
    </div>`
}


export function loaderView() {
    return '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>'
}


export function AdDetailView(ad) {
    if (ad === null) {
        return '<h1>Este anuncio no existe</h1>'
    }
    let button = ''
    if (ad.canBeDeleted) {
        button = '<button class="delete">Borrar</button>'
    }
    return `
        <h1>${ad.name} - ${ad.price} €</h1>
        <h2>(${ad.status})</h2>
        <p>Creado por <strong class="author">${ad.author}</strong> - <time datetime="${ad.date}">${ad.date}</time></p>
        ${button}
    `
}
