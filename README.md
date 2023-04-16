# CS-465-Full-Stack-Development

# Architecture

# Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
During the the full stack project development, there were a few different types of front end code that were used in different parts of the application. The customer facing site was developed originally in Express HTML and then converted over to a .hbs view to help with rendering speeds by not having to fully load every component of the site at each refresh. HTML is static and client facing, which means it can't interact with backend databases to dynamically update information. Javascript is a frontend and backend coding language that is used to add dynamic elements to the webpage. This was used to pull trip information from the MongoDB database so that the page can change dynamically based on user interaction. A single-page application is a website that doesn't fully refresh the page based on user interactions like an HTML page would. This is particularlly useful in giving the website a local/native application feel when interacting with the applicaiton itself.

# Why did the backend use a NoSQL MongoDB database?
The backend used a NoSQL MongoDB database because of its ease of modifying schema based on scaling and functionality changes, as well as the ability to rapidly scale horizontally because of its non-relational nature of the database.

# Functionality
#How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
JSON is a standardized way to format object data that can be easily read by Javascript to form it into a literal Javascript object. This makes it easy for Javascript to take the data and form it into a object in the Javascript language. This ties frontend and backend development together by creating a way for data/ Javascript objects to be stored on the backend and used in different situations based on what the frontend is requesting the data for. This also means that the data just has to be stored once but can be pulled and used in a variety of ways.

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.
An instance that code was refactored to improve functionality and efficiency is that including of the delete function was not included as part of the instructions but rather an add on by our professor, It adds a crucial feature to the overall page and layout as it gives an easy way to remove unwanted trips while editing and modifying, the benifits from reuseable components is also showcased in how we modified the add-trip component in order to create the edit-trip component, this allows for the inclusion of other features later on using that code as a quick base.

# Testing
We could test routes using tools like Postman in which we would send HTTP requests and process HTTP responses to aid in our testing, for example to test DELETE we would hit Get /api/trips endpoints this would give us a list of the trips in our database, we could then use the trip codes returned in a request in order to DELETE them, and we could expect codes like  “200 Ok response”, we could also test using tools like chrome developer tools, and we could check when testing in order to receive the right functionality as most of the errors would be network errors, request errors, and if a trip can’t be found we have error codes to signal like the “404 NOT FOUND” ERROR.
# Explain your understanding of methods, endpoints, and security in a full stack application.
In a full stack application, the methods of the website is what drives the functionality and dynamics of a webpage. Methods like GET, POST, PUT, and DELETE are http requests that can be used to retrieve or modify the database so that the functionality can be implemented. These are driven on the backend by using the functions of the database (.create, .findOne) to modify the database depending on the clients needs. Endpoints are the results of the methods as seen by the admin or the client side of the application. Endpoints should be tested so that they function how they should and display data properly or throw errors if an actual error occurs. Security is another layer of code that is added to prevent unauthorized or unauthenticated users from accessing or modifying te database. An example of this would be to add or edit a trip in the database. These API endpoints need to be protected so that unauthorized users cant tamper with the database.
