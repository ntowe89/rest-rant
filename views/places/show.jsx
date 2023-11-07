const React = require('react')
const Def = require('../layouts/default')

function show (data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'} </h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
          <main>
            <div className="row">
                <div className="col-sm-6">
                    <img src={data.place.pic} alt={data.place.name} />
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                </div>
                <div className="col-sm-6">
                    <h1>{ data.place.name}</h1>
                    <h3>Rating</h3>
                    <h3>Not Rated</h3>
                    <h2>
                        Description
                    </h2>
                    <h3>
                        {data.place.showEstablished()}
                    </h3>
                    <h4>
                        Serving {data.place.cuisines}
                    </h4>

                    <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
                        Edit
                    </a> 
                    <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                        <button type="submit" className="btn btn-danger">
                            Delete
                        </button>
                    </form> 
                </div>
            </div>
            <div>
                <h3>Comments</h3>
                {comments}
                <form method="POST" action={`/places/${data.id}/comment`}>
                    <div className="form-group">
                        <label htmlFor="author">Author</label>
                        <input className="form-control" id="author" name="author" required />
                    </div>
                    <div className="form-group">
                        <textarea id="comment" rows="4" cols="50" name="comment">Add comment</textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="stars">Rating</label>
                        <input className="form-control" id="stars" name="stars" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="rant">Rant</label>
                        <input type="checkbox" id="rant" name="rant" />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add Comment" />
                </form>
            </div>
          </main>
        </Def>
    )
}

module.exports = show
