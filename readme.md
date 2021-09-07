Guys just to let you know I made the joke-api somewhat work now with the mvc architecture,
it's on my github. The user can retrieve a random joke and a joke based on a given rating - 
this is done by telling the controller (jokes.js) which route the user has selected. Based on this route the
controller (jokes.js) then goes into the joke class and calls the required method in the joke class model. 
For a rated joke for example the class method to filter is called and it returns a joke of that rating. 
If you would like to discuss it to better our understanding I would be happy to do a zoom call together at some point today.  