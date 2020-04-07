# 20-04-07 Node and Express IC

### Set Up
- Create a JS file called `index.js`
- Generate the `package.json` file by running `npm init` in the terminal (accept all defaults)
- Install express by running `npm install express` in the terminal
- You should see `express` added as a dependency in your `package.json` file
- Create a reference to the `express` module using the `require()` method
- Create a server by setting the return value of the `express()` method equal to the variable `app`
- Call the `listen()` method on the server variable `app` you created, pass in two parameters - a port number and a host name

### Exercise 1
- Define a route for the root path that displays the text `Welcome to my node + express server`
- Test the route in postman
- View the route in your browser

### Exercise 2
- Define a route for the path `'/whatILearned'` that displays information that you learned this morning
- Test the route in postman
- View the route in your browser

### Exercise 3
- Define a route for the path `'/questionsIHave'` that displays information that you still have questions about
- Test the route in postman
- View the route in your browser

### Exercise 4
- Define a route for the path `'/seeMyNumber/[NUMBER]'` that uses query params to display any number the user passes into the url
- Test the route in postman
- View the route in your browser

