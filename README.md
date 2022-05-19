# Books of Alexandria
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description
An interactive website that allows customers to view and purchase books. The website allows customers to easily find books they are looking for with robust filter and sort functions and easily displays the book name, author, genre, price, and number of stock. Additionally the website allows employees to log in and modify the book data, to add, delete, and modify existing books.

## Built With
* MySQL
* JavaScript
* Node.js
* Express.js
* Sequelize
* dotenv
* Handlebars.js
* Darkmode.js

## Installation
If the application is going to be installed locally, MySQL must be installed and setup. With all the files downloaded, run 'npm install' to install all the required packages. In MySQL terminal, run 'source db/schema.sql' to setup the database, and optionally run 'npm run seed' in the bash terminal to populate sample seed data.
If the application is going to be accessed via Heroku, no installation is necessary.

## Usage
If the application is hosted locally, it can be started with 'npm start' and accessed on a web browser at http://localhost:3001/.
If the application is going to be accessed on Heroku, use the below link to access the website.

![Application Screenshot](./assets/images/application-screenshot.jpg?raw=tru "Application Screenshot")

Heroku Link:

## Tests
There are no tests for this application.

## Credits
Made by Jonathan Kim, Stefan Oddson, Steffen Gonzalez, and Jake Lauterstein.

## License
Copyright &copy; 2022

Licensed under the Apache License, Version 2.0 (the "License"). You may obtain a copy of the License at

https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.