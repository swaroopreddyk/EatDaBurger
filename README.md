#Eat Da Burger

Live version: https://eatdaburger-54978.herokuapp.com/
<hr>

**Author:** Swaroop Kondreddy

Feel free to use some or all of this code if you're trying to complete a similar project.
<hr>
#### Project Overview
Eat Da Burger is a full stack application that utilizes MySQL, Node, Express, Handlebars and an ORM. Node and MySQL query and route data in the app, and Handlebars generates the HTML. The whole app was built using MVC pattern.
<hr>
#### How it works
The user may enter any burger name to add it to the menu. This adds the new burger entry into the MySQL database. The initial burger entry is added as available on the menu and placed on the left side of the screen. The user may then eat any burger by clicking on it, which moves it into the adjacent column and updates its status accordingly in the database. They may delete the burger to clear it from the screen, too.
<hr>

#### Technologies Used

[Node.js](https://nodejs.org/en/)

[Express](https://www.npmjs.com/package/express)

[Express Handlebars](https://www.npmjs.com/package/express-handlebars)

[MySQL2](https://www.npmjs.com/package/mysql2)

[Path](https://www.npmjs.com/package/path)

[dotenv](https://www.npmjs.com/package/dotenv)

<hr>

#### Directory structure

```
.
├── config
│   ├── connection.js -> Establish DB Connection
│   └── orm.js -> object for all of our SQL statement functions (CRUD)
│ 
├── controllers
│   └── burgers_controller.js -> Routing for our app that uses the model to decide which action to take
│
├── db
│   ├── schema.sql -> DB Table definition
│   └── seeds.sql -> Initial data for the table
│
├── models
│   └── burger.js -> Model that calls ORM (to perform CRUD) and receives input from controller
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css -> CSS Style Sheet
│       └── img
│           └── burger.jpg -> Background image
│       └── js
│           └── app.js -> JS to perform button operations
│
├── server.js -> Configuration for server and application
│
└── views -> Handlebars Functionality
    ├── index.handlebars
    └── layouts
        └── main.handlebars
    └── partials
        └── foods
            └── burger-block.handlebars
```