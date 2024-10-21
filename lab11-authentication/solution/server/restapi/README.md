# REST API Documentation

This project is divided into three main parts:

1. **index.mjs**: This file contains the different routes for the API. Each route is instantiated with methods like GET, POST, etc. Some routes require authentication, which is handled by the `loggedin` middleware.

2. **Controller**: The controller receives the requests from the routes and forwards them to the service layer. It acts as an intermediary between the routes and the service.

3. **Service**: The service layer performs the database operations. It contains the business logic and interacts with the database to fetch or update data as required.

## Testing

To test the API, Postman was used. Here are the steps to test the authenticated routes:

1. **Authenticate**: First, send a POST request to the authentication endpoint to log in. This will set a cookie in the response.
    - [http://localhost:8080/api/users/authenticator?type=login](http://localhost:8080/api/users/authenticator?type=login) with the following body:
    ```json
    {
        "email": "user.dsp@polito.it",
        "password": "password"
    }
    ```
2. **Send API Requests**: Use the cookie from the authentication response in another Postman window to send requests to the authenticated routes.

Make sure to include the cookie in the headers of your subsequent requests to maintain the authenticated session.
