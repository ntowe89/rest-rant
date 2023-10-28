const React = require('react')
const Def = require('./layouts/default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/pizza.bmp" alt="pizza"/>
                    <div>
                        Photo by <a href="https://www.istockphoto.com/portfolio/ma-no?mediatype=photography">Ma-no</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home