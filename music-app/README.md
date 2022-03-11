# Getting Started with our Music App, Shuf.l

In a new folder, run the following commands:  
```
git init  
git remote add origin https://github.com/amidthestars/cs35Lproject.git  
git pull  
cd .\music-app\  
npm i  
```
By this point, the React app setup should be finished and all packages should be installed.

#### Install MongoDB: ####  
This application uses MongoDB to host its database. You can find the installation documents here:  
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/  
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-windows/  

##### MongoDB (MAC):  #####  
1. Open terminal and install brew if you do not currently have it.   https://brew.sh/#install
2. Then, in terminal run: "brew tap mongodb/brew"  
3. Then run: "brew install mongodb-community@5.0"  
4. To start mongodb server run: "brew services start mongodb-community@5.0"  
5. To terminate mongodb server run: "brew services stop mongodb-community@5.0"  
Note: You may have to use the sudo command in front of step 4.  

##### MongoDB (Windows):  ######  
1.  Install the MongoDB Community Server from this link: https://www.mongodb.com/try/download/community?tck=docs_server. Follow the installation package.  
2. In the windows search box, type in 'env' and select "Edit the system environment variables"  
3. In the newly opened window, select 'environment variables', click PATH, click edit, and then click new.  
4. Paste the location of the bin file that was included with the Mongodb download.  
5. Open a new terminal and run the command 'mongod'  
It may ask you to create the folder `C:\data\db`. Create that folder if this happens.

If you are having trouble connecting to the database, try uninstalling and reinstalling.  
Getting Spotify keys:  
1. Visit https://developer.spotify.com/dashboard/login and create an account.  
2. Click "Create an app."  
3. Give it whatever name and description you wish, then click "Create."  
4. Click on the "Edit Settings" button. Under "Redirect URIS", add the following links:  
```
http://localhost:3000/  
http://localhost:3000/*  
```
5. We will use the client ID and client secret, which can be found under the name you chose for your app, in the next step.    

#### Creating the .env file:  ####  
1. Make a copy of the .env.example file and call it .env.  
2. Add your client ID from your Spotify app in the REACT_APP_CLIENT_ID, no quotes needed.  
3. Add your client secret ID from your Spotify app in the REACT_APP_CLIENT_SECRET, no quotes needed.  
4. For the REACT_APP_CLIENT_PORT and REACT_APP_SERVER_PORT, you can use any port you want. As an example, we used the ports 3000 and 8000 respectively.

### Running the application ###
The `npm-start` will not let you run backend and frontend simultaneously. Instead, you can use "npm run shufl" in the music-app folder. If everything has been set up correctly, the terminal should say:  
```
Listening on port [the port that has been put in the .env file]  
Database connected : 127.0.0.1  
```

Good luck!  
