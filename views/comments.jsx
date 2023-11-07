const React = require('react')
const Def = require('../layouts/default')

function comments () {
    return (
        <Def>
            <h1>Add Comment</h1>
            <form method="POST" action="/places">
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
        </Def>
    )
}


module.exports = comments