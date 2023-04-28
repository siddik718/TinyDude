# TinyDude URL Shortener

This project is a web application that allows users to shorten URLs. It is built using Django for the backend and React for the frontend, with PostgreSQL as the database.
Check out the live version [TinyDude](https://frontend--lustrous-figolla-6e637e.netlify.app/).



## Table of Contents
-   [Technologies Used](#technologies-used)
-   [Features](#features)
-   [Run Locally](#run-locally)
-   [API Reference](#api-reference)
-   [React Components](#react-components)
-   [Project Structure and Code Ownership](#project-structure-and-code-ownership)
-   [Screenshots](#screenshots)
-   [Deployment](#deployment)


## Technologies Used
-----------------

-   Django
-   React
-   PostgreSQL
-   HTML/CSS

Despite having some past knowledge of programming and web development, I had to learn each of these tools from scratch for this project.
I had a good understanding of Django and React throughout the development process and was able to add a number of features.


## Features
-   Unique Shorten URLs
-   View click statistics for short URLs


## Run Locally

Clone the project

```bash
  git clone https://github.com/siddik718/TinyDude.git
```

Go to the project directory

```bash
  cd TinyDude
```
Install dependencies

```bash
  pip install -r requirements.txt
```

Start the server

```bash
  python manage.py runserver
```

Now Go To `frontend` branch

***Keep In Mind You Have to Change Some Environment Variable***

```bash
  git checkout frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## API Reference

`shorten_url(request)`
----------------------

### Function description:

This view function handles the POST request to shorten the long URL. It takes in the long URL as input, generates a unique shortcode of length 5, creates a new URL object with the long URL and shortcode, and saves it to the database. Finally, it returns the shortcode as a HTTP response with status code 201 Created.

### Parameters:

-   `request`: The HTTP request object, which includes the data to be validated and processed.

### Returns:

A dictionary containing the shortcode of the shortened URL, returned as a HTTP response with status code 201 Created, or the errors as a HTTP response with status code 400 Bad Request if the serializer is not valid.

`redirect_url(request, shortcode)`
----------------------------------

### Function description:

This view function handles the GET request to redirect to the long URL corresponding to the given shortcode. It retrieves the URL object from the database based on the given shortcode, increments the visited count of the URL object, and redirects to the long URL using Django's redirect function.

### Parameters:

-   `request`: The HTTP request object, which includes the shortcode to be retrieved.
-   `shortcode`: A string representing the shortcode of the shortened URL.

### Returns:

The long URL corresponding to the given shortcode, returned as a HTTP redirect response, or an error message as a HTTP response with status code 404 Not Found if the URL object does not exist.

`get_statistics(request)`
-------------------------

### Function description:

This view function handles the GET request to retrieve the statistics of all the URLs. It retrieves all the URL objects from the database in descending order of visited count, serializes them using URLSerializer, and returns the serialized data as a HTTP response.

### Parameters:

-   `request`: The HTTP request object, which includes the data to be retrieved.

### Returns:

A serialized list of URL objects, returned as a HTTP response.
## React Components
## Home.js
It uses several hooks to manage the component state and interactions with the server. The component renders a form with an input field where the user can enter a long URL to be shortened. Upon submitting the form, the component sends a ***POST request to a server-side API using the Axios library***. The server ***generates a short URL***, which is then displayed on the screen along with a message. The component also includes a button to ***navigate to a statistics page***.The component uses the useState hook to manage the state of the input field, the short URL, and the message displayed on the screen. It also uses the useEffect hook to set the message when the short URL state variable changes. Additionally, it uses the useNavigate hook from React Router to handle navigation to the statistics page.
## Stats.js
This is a React component which ***displays the statistics of the URLs*** that have been shortened using a URL shortening service. The component imports the ***axios*** library for making HTTP requests and the useEffect and useState hooks from React.

The component defines ***two state variables using the useState hook: data and error***. Data is initialized as an empty array and error is initialized as null. The useEffect hook is used to fetch data from an API endpoint when the component mounts. The API endpoint is located at [TinyDude](https://tinydude-production.up.railway.app/get_statistics/).

If the request to the API endpoint is successful, the response data is set to the data state variable using the setdata function. If the request is unsuccessful, the error object is set to the error state variable using the setError function. ***If there is an error, an error message is displayed. Otherwise, a table is rendered with the data retrieved from the API.***

The table has three columns: Long URL, Short URL, and Visited. The map function is used to iterate over the data array and generate a row for each item in the array. The longurl, shortcode, and visited properties of each item in the data array are displayed in the table. ***The longurl property is truncated to a maximum length of 50 characters using the substring method to ensure the table is easy to read.***
## Project Structure and Code Ownership
As the project was created using a Django, which includes pre-built files and code. However, the following files were written by me from scratch and reflect my understanding and implementation of the project requirements:

- api/admin.py
- api/models.py
- api/serializers.py
- api/urls.py
- api/views.py

These files include my custom implementation for various features. Additionally, I have modified some of the generated files to fit the needs of this project, such as 

- In url_shortner/urls.py included the `api.urls`
- In settings.py 
    - Added `rest_framework` , `corsheaders` and `api.apps.ApiConfig` in `INSTALLED_APPS`
    - Added `corsheaders.middleware.CorsMiddleware` in `MIDDLEWARE`
    - Added `CORS_ALLOW_ALL_ORIGINS = True` at end the settings.py file.

I also used react framework which includes pre-built files and code. However, the following files were written by me from scratch and reflect my understanding and implementation of the project requirements:

- TinyDude/src/components/Home.js
- TinyDude/src/components/Stats.js

These files include my custom implementation for various features. Additionally, I have modified some of the generated files to fit the needs of this project, such as

- in TinyDude/src/App.js I used react-router to route the pages.
## Screenshots

![HomePage](https://github.com/siddik718/TinyDude/blob/master/ScreenShot/homepage.png)

![StatisticPage](https://github.com/siddik718/TinyDude/blob/master/ScreenShot/statspage.png)


## Deployment

This app was deployed separately Django backend was deployed on [Railway](https://railway.app/) and React was deployed on [Netlify](https://www.netlify.com/).
You can follow this post [Akinwande Tomisin](https://dev.to/tomjames156/how-to-host-a-django-project-on-railway-3f09) to deploy your Django backend for react you can simply go to their website it's so easy [Netlify](https://www.netlify.com/).