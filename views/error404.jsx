const React = require('react')
const Def = require('./layouts/default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
                <div>
                    <img src="/images/cat.bmp" alt="Funny picture of a cat"/>
                    <div>
                    Photo by <a href="https://www.istockphoto.com/portfolio/NilsJacobi?mediatype=photography">Nils Jacobi</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
                
            </main>
        </Def>
    )
}

module.exports = error404