# SoftUni JS Back-End Exam Preparation Cheat Shteet

## Create Skeleton Project

### 1. Initialize Project
 - [X] Initialize npm project `npm init --y`
 - [X] Change module system
 - [X] Add start file `src/index.js`
 - [X] Add dev script
 - [X] Condig debugger
 - [X] Add resources

### 2.Express
 - [X] Install express `npm i express`
 - [X] Init express server
 - [X] Setup static middleware `app.use(express.static('src/public'))`
 - [X] Add body parser `app.use(express.urlencoded({extended:false}))`
 - [X] Add home controller
 - [X] Add route file
 - [X] Add error controller

### 3. Handlebars
 - [X] Install handlebars `npm i express-handlebars` 
 - [X] Config handlebars 
 - [X] Config handlebars file extension
 - [X] Set views folder
 - [X] Add home view and render it
 - [X] Fix asset paths
 - [X] Add layout `src/views/layouts`
 - [X] Add partials dir
 - [X] Config hadlebars to work with mongoose documents

### 4.Database
 - [X] Install mongoose `npm i mongoose`
 - [X] Setup database
 - [X] Add error handling on connect
 - [X] Add simple user model

### 5.Register
 - [X] Fix navigation links
 - [X] Add user controller
 - [X] Add user controller to routes
 - [X] Create register view
 - [X] Render register view
 - [X] Modify register form
 - [X] Create post route for register
 - [X] Create user service
 - [X] Redirect after successfull register
 - [X] Install bcrypt `npm i bcrypt` 
 - [X] Hash passwords before safe
 - [X] BONUS: Check if user exists

### 6.Login
 - [X] Add login view
 - [X] Create get login action
 - [X] Fix login form
 - [X] Add post login action
 - [X] Add login method in userService
 - [X] Validate if user exists
 - [X] Validate password
 - [X] Insatl jsonwebtoken `npm i jsonwebtoken`
 - [X] Generate token
 - [X] Call user service from userController
 - [X] Send token as cookie
 - [X] Redirect to home page
 - [X] BONUS: Extract jwt secret to constant or env
 - [X] Auto login on register

### 7.Logout
 - [X] Add logout action(in userController)

### 8.Authentication
 - [X] Install and use cookie parser `npm i cookie-parser`
 - [X] Create Auth Middleware
 - [X] Use auth middleware

### 9.Authorization
 - [X] Create isAuth middleware
 - [X] Create isGuest middleware
 - [X] Add route guards

### 10. Dynamic content
 - [X] Add user data to handlebars context (in auth middleware)
 - [X] Dynamic navigation (in main.hbs through res.locals)
 - [X] Dynamic titles (in main.hbs)
 - [X] BONUS: Set page title from view
 - [X] Add not found page
 
### 11. Error handling and validation
 - [X] Fix notification conditional rendering and add error message in notification (in main.hbs)
 - [X] Create getErrorMessage util function
 - [X] Add register form data persistance
 - [X] Check repeatPassword
 - [X] Add error handling for register
 - [X] Add error handling for login

## Steps to use the skeleton project
 - [X] Install dependencies `npm i`
 - [X] Replace recources
 - [X] Rename database name (in index.js - dbName: 'mind-blog',)
 - [X] Replace layout
   - [X] Dynamic title
   - [X] Fix resource routes
   - [X] Error notification
   - [X] Body
   - [X] Dynamic navigation
 - [X] Replace home page
 - [X] Modify navigation links
 - [X] Modify user model
 - [X] Modify login and register controller
 - [X] Modify login and register service
 - [X] Modify token generation (in tokenUtils)
 - [X] Modify login and register error handlers(in userController) - vkarvam username pri handlebars
 - [X] Replace login page
 - [X] Replace register page
 - [X] Replace 404 page

## Solve Mind Blog Exam Prep

### Create Blog
 - [X] Fix create blog navigation link
 - [X] Add blogs controller
 - [X] Add controller to routes
 - [X] Add create action with render
 - [X] Add blogs folder in views
 - [X] Add blog model
 - [X] Add create blog view and fix the form
 - [X] Modify create blog view
 - [X] Create blog post action (in blogController)
 - [X] Create blog service with create method
 - [X] Add owner on blog creation
 - [X] Add error handling

### Blogs catalog page
 - [X] Fix navigation link
 - [X] Add catalog view
 - [X] Add get catalog action with static blogs
 - [X] Get all blogs service
 - [X] Show dynamic blogs

### Home page 
 - [X] Add get latest blogs in blog service
 - [X] Show dynamic latest blogs on home

### Blog details
 - [X] Fix details link in blogs and home page
 - [X] Show static detail page
 - [X] Add getOne method in blog service
 - [X] Show dynamic details page (without author and followers)
 - [X] Show dynamic author (in blog service:     return Blog.findById(blogId).populate('owner'))
 - [X] Hide buttons if not logged
 - [X] Show edit and delte buttons if author
 - [X] Show follow and already following buttons if logged
 - [X] Implement follow functionality 
    - [X] Add followers in blog relation
    - [X] Add follow action
    - [X] Add follow service method
    - [X] Fix follow link
 - [X] Show dynamic followers
 - [X] Show follow button or already following buttons condittionally

### Delete blog
 - [X] Fix Navigation link in details
 - [X] Add delete action
 - [X] Add delete method in blog service

### Edit blog
 - [X] Fix Navigation link in details
 - [X] Add get edit action
 - [X] Show empty edit page
 - [X] Populate edit form with data
 - [X] Add post edit action
 - [X] Add edit method in blog service
 - [X] Add error handling

### Profile
 - [X] Fix navigation link
 - [X] Show static profile page
 - [X] Show dynamic user information
 - [X] Get created blogs count
 - [X] Show followed blogs

### Validation and error handling