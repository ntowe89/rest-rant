# Project REST-Rant

REST-Rant is an app where users can review restaurants.


|  Method |           Path           |                     Purpose                      |
|---------|--------------------------|--------------------------------------------------|
|  GET    |   /                      | Home page                                        |
|  GET    | /places                  | Places index page                                |
|  POST   | /places                  | Create new place                                 |
|  GET    | /places/new              | Form page for creating a new place               |
|  GET    | /places/:id              | Details about a particular place                 | 
|  PUT    | /places/:id              | Update a particular place                        |
|  GET    | /places/:id/edit         | Form page for editing an existing place          |
|  DELETE | /places/:id              | Delete a particular place                        |
|  POST   | /places/:id/rant         | Create a rant (comment) about a particular place |
|  DELETE | /places/:id/rant/:rantId | Delete a rant (comment) about a particular place |
|  GET    | *                        | 404 page (matches any route not defined above)   |

1. Texas Roadhouse, Asheville, NC, Texan and Southwestern, https://wobx.com/wp-content/uploads/2023/01/Texas-Roadhouse.jpg
2. Mellow Mushroom, Asheville, NC, pizza, https://images.happycow.net/venues/1024/58/17/hcmp5817_1047423.jpeg
3. Red Lobster, Asheville, NC, seafood, https://media-cdn.tripadvisor.com/media/photo-s/09/fa/25/20/photo0jpg.jpg
4. Olive Garden, Asheville, NC, Italian-American, https://s3-media0.fl.yelpcdn.com/bphoto/glJQBKWOM-HvideFWGUE2w/258s.jpg
5. Sunny Point Cafe, Asheville, NC, American,  https://wheninavl.com/wp-content/uploads/sunny-point-exterior-west-asheville.jpg