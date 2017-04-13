# Project_1 CPSC473
# Set-Up

1- RethinkDB install: <br>
+ follow the instructions based on your operating system at <br>
   https://rethinkdb.com/docs/install/

2- Install Horizon through NPM: <br>
 +    npm install -g horizon

3- Initializing Horizon, navigate to the appropriate directory and type the command: <br>
 +  hz init
 


4- Start DB at local host http://127.0.0.1:8181/ <br>
 +  hz serve --dev
    
# Use

1- With the server running, navigate to local host http://127.0.0.1:8181/. The webapp will appear on screen.

2- Enter your name, location, an optional imgur link (must be directly linked to the file (.jpg, .png, etc.) for a thumbnail and image post, and a brief description of what you saw!

3- When you are ready to submit, click the blue button next to the description field marked "Post".

4- Congratulations! Your personal and very important UFO experience will be updated on the page so the world will know! Go
   ahead and scroll through the other posts and see what others have been talking about. Don't forget to check out some of
   our favorite jokes near the title at the top for some comic relief!

Quick Note: pagination works after refershing the page. 5 posts per page. 

# Developer

1- The structure of the program is outlined in the dist folder. 

2- Scripts: 
   horizonhandler.js - this script handles all the horizon api interactions with our website. It includes methods for retrieving, adding, and posting entries from horizon. 
      function CreateDB - creates the database 
      function SubmitHandler - checks the post command and updates the page
      function row - Adds the row (entry) onto the website 
      function displayRow - uses the Horizon Communications API to fetch/watch horizon entries 
   
   main.js - The main function initializes and sets up the application on the website. It also includes the jokes from the UFO website front page. 
   
   pagination.js - This script creates the pagination function for the row entries within the UFO. Pagination creates new pages based on how many posts are made. The default value is 5. So more than 5 entires will create a new page. 
   
3- Index.html - standard HTML index page 


