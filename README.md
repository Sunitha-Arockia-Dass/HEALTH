# Ironhack-Project-2-Book My Life : HEALTH

<h1>Links</h1>

<h3>Follow the Trello Board : <a href="https://trello.com/invite/b/EhPvP6Rw/ATTI57e20a1ccba83676966514416cfca6aaCFE5A2A1/ironhack-projet2-bookmylife">Here</a></h3>

<h3>Slides presentation : <a href="https://slides.com/thomaslebas/palette">Here</a></h3>

<h3>Github repository : <a href="https://github.com/Sunitha-Arockia-Dass/HEALTH">Here</a></h3>

<h3>App deployed with Cyclic : <a href="https://kind-pink-iguana-gown.cyclic.app">Here</a></h3>

<h3>JSON server for recipies : <a href="https://crowded-erin-seahorse.cyclic.app/">Here</a></h3>

<h1>Introduction</h1>
<h2>Technical Requirements Your app must:</h2>

Use Express as a foundation.
Use Mongoose for models and database communication.
Have 2 models or more. Having one for users is a no-brainer. The other one(s) should represent the main functionality of your app. Don’t force it if having more than two models doesn’t make sense.
Have validation on the models with feedback for users if their submission is invalid.
Include sign up, log in & log out functionality with encrypted passwords (and/or social logins) and authorization (logged in users can do extra things).
Implement all CRUD actions on models other than users. You should have the Create, Read, Update and Delete features even if they aren’t all for the same model.
Have a repo on GitHub.
Have at least 1 commit per day that you worked on.
Be deployed online using Heroku so that anybody could use your app.
Responsive design is not a requirement, but it’s nice to have.

<h2>Deliverables</h2>
A working full-stack application, built by you that runs on a server.
A working app deployed on Heroku.
The URL of the GitHub repository for your app.
The URL of the live app on the Internet.
The URL of the slides for your app’s presentation.
You must present your app during Project #2 final presentations (last day of Project #2 time).
Presentations

## UX/UI Choices

<h2>Fonts</h2>
  --text: 'PT Sans', sans-serif;
  --title: 'Nunito', sans-serif;

<h2>Color Palette</h2>

The color plum is a symbol of new beginnings, enthusiasm and fresh energy. It is also a color that represents strength, determination and confidence :
--plumd: #CE78CE;
--plumm: #DDA0DD;
--pluml: #EED2EE;
--citrine: #EAD94C;
--plumdark: #963696;
--white: #ffffff;
--grey: #6b5f6b;
--black: #000000;

## CRUD

<h2>User</h2>
User can sign up to create an account, he can acces to his data and update them.

<h2>Members Profile</h2>
User can create members, each members can be updated, deleted and acces to 3 levels : details, agenda, healthify app.

<h2>Agenda</h2>
User can create appointments, each appointment can be updated, deleted or display to see details.

## MONGOOSE MODELS

<ul>
  <li>User.model.js for user account with feedback</li>
  <li>Profile.model.js for members profile with feedback</li>
  <li>Agenda.model.js for appointments with feedback</li>
  <li>Data.model.jsfor BMI calculator with feedback</li> 
</ul>

## Agenda

all members can accès to the same agenda.

## Healthify

this the art of the app that allow you to calculate and follow your BMI, depending on it you will have acces to healthy lifestyle to gain or loss weight depending of the last BMI and adapted to the user diet Paleo, Vegan or Vegetarian.

## app.js

contain the app.use informations

## routes folder

contain all the routes to display all the pages and run the form

## script.js

contain the javascript code for DOM manipulations

## API used

<h2>MongoDB & Mongo Atlas</h2> for the DB.

<h2>Our own API</h2> for the recipies DB using a JSON server deployed on Cyclic.

<h2>Cloudinary</h2> allow members to upload a profile picture.

<h2>Bcrypt</h2> to crypt password and check them.

<h2>Axios</h2> to handle and fetch API.

<h2>ChartJS</h2> to display BMI and nutrition graph.
