# Newsletter-Mailchimp-API
Using Node.js & Https with the third party Mailchimp API to create our Newsletter Application

The purpose of this Web Application is to demonstrate the use of our third party API provided by Mailchimp into our own Web Application. When a user signs into our Web Application, we are able save the user credentials into a third party site, - https://mailchimp.com/ -. The owner of the Web Application, this being me, will be able see all the registered contacts in my own mailchimp account. Mailchimp provides us with an API that allows us to post our users information into their own site.

To complete this simple Web Application we used Node.js & Https primarily.
  

Run this project using npm.

**Note you will need to have your own Mailchimp Account in order to get your own unqiue API Key, & List id, in order to have the credentials for the URL & AUTH in app.js which have environmental variables. You will need your own .env file as well.

1) To run this project you will need to clone this repo using SSH or HTTP
2) Open the folder in VS Code or applicable source-code editor with access to terminal
3) When in the terminal, use npm install to install node dependencies - "npm install."
4) Once the dependencies are installed, you can go back into the terminal and use nodemon app.js to have your API running on port 3000. - "nodemon app.js"
5) You can now go to your browser and enter "http://localhost:3000/" to view the application


NOTE*This project has also been uploaded to Heroku, and you can simply use the link -  https://my-newsletter-mailchimp-api-a60166cf13cc.herokuapp.com/ - to view the application on your Web Browser. However, any users that you add in this link will not posted into your mailchimp account but it will be posted into mine , this because the app uploaded in heroku has my mailchimp api credentials. 
