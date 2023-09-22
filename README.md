<h1 align="center">Welcome to gamesiteReact 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0-blue.svg?cacheSeconds=2592000" />
</p>

> A simple anime news site, where you can find the latest anime and manga out. Chat with others about what your favorite series are. Say your favourites to your profile and keep track of what season and episodes you are currently on. Follow others to keep track of what they are watching too!

###  [LiveDemo](bewen.net)

## Install

```sh
docker-compose build
docker-compose up
```

## Usage


**To use this project:**
  1. Clone the repo
  1. If you have docker
  ```
      docker-compose build 
      docker-compose up
  ```
  1. If you are running using node
      * open 4 separate terminal windows
      ```
       cd backend/user-microservice
       npm install
       node userMicroservice.js
       npm install
       cd backend/anime-microservice
       npm install
       node animeMicroservice.js
       cd backend/posts-microservice
       node postsMicroservice.js
       cd frontend
       npm install
       npm start
       ```

## Pages

### Home

> The home page contains a variety of information cards, when the title of these cards are clicked you are directed to the myanimelist website to find out more information about what you have selected.

### Fourms

> The fourms page contains an input for users to add their own posts. NOTE: you must be logged in to post. Underneath all posts that have been made are shown with the date they were made aswell as the user who posted it. You are able to click the users name to see their profile.

### Anime

> The anime page is used to search for a paticular anime you may want to find. Here you are also able to favorite these anime's which are added to your profile. You can keep track of the episode and season you are currently on for a particular anime by navigating to your profile page

### Admin

> This is a hidden page only used by admin users to delete users from the DB


## Author

👤 **Brendan Ewen**

* Website: https://bportfolio.net
* GitHub: [@obrendanx](https://gitlab.com/obrendanx)

