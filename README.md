# Rock Spot Climbing

## Description

This project serves as a primary web site for Rock Spot Climbing. 
Originally the site was built using a Wordpress multi-site. Rebuilding it with code let's us build a cleaner web presence for Rock Spot climbing. Rather then having to build a new site for each location, this project will host all Rock Spot locations on one central template. 

This project will address this problem in a number of ways:

### 1. One Template To Rule Them All
* A single template
* Populated with gym specific information. 
* Changes are reflected across all sites instantly.
* Fonts, logos, pages will all be uniform and on brand.
* Automatic ads, banners, and events will run on site.
### 2. A Simplified CMS
* Custom backend based off Rockspots needs.
* Simpler backend means easier changes
* A backend easy enough for Gym Staff to make updates.
### 3. Room To Expand
* As RSC grows this site can grow with it.
* Modular sites allows for infinite expansion.
* Integration with any other apps we develop
* Custom features with relative ease

---

# Initializing Project

To get started follow these steps to set up your local environment

### 1. Fork Repo
* [Fork The main repo onto your github account](https://github.com/RockSpotDev/rock-spot-climbing/fork)
* Copy the clone url of the forked on github.

        $git clone [Fork Url]
### 2.Install Dependancies
    $npm install
### 3. Add main Repo as an upstream
    $git remote add upstream https://github.com/RockSpotDev/rock-spot-climbing.git

    $git remote -v

You should see two origins and two upstreams in the terminal response.

### 4. Add Environment Variables
Create a file named .env in the root folder. 
Paste all of the environment variables in this file.
### 5. Run Live Server
    $npm start
Should run happily in your default browser.

---

# Pull Code From Upstream

Do this every time you start coding for the day, or if anohter Developer has made major changes to the main Repo. This keeps your code up to date with the live code base.

### 1. Make sure you are on the correct branch
    git checkout main
### 2. Fetch content
    git fetch upstream
### 3. Merge upstream and main
    git merge upstream/main

---

# Pull Code / Deploy

### 1. Save all files
### 2. Push Code
    $git add .

    $git commit -m [Add comment about commit in quotes]

    $git push
### 3. Submit pull request
* [Follow This link](https://github.com/RockSpotDev/rock-spot-climbing/compare) or do steps A and B
    * A) Go to RockSpotDev/rock-spot-climbing repo and click the Pull requests tab
    * B) Click create pull request
* Click 'compare across all forks' it is small blue hyper-text at the top of the section.
* Select your Forked Repo in the head repository dropdown.
* After looking over changes Click "Create Pull Request" 
* Make sure to leave a comment explaining the request
* Click "Create Pull Request" Again. It will be reviewd by the senior dev and merged with the main code if approved.

---

# Libraries Used

## Image-conversion

This is an awsome libary used to compress images being uploaded to the website.

[GitHub](https://github.com/WangYuLue/image-conversion)

---

## React Draft.js
This library was used to build the basic text editor mainly seen on the backend of the site. 

Let it be noted that there was an unfixed bug that threw an error. A user had submitted a pull request which fixed the bug but the main branch hasn't approved it. So We are working off the working branch. 

If this bug ever returns Copy and paste the list file from this github into node modules equivalent:

[GitHub](https://github.com/jpuri/react-draft-wysiwyg/pull/1044/commits/3e3d1fef82cc7bbc1fff6a562803608523b845b6), [Docs](https://jpuri.github.io/react-draft-wysiwyg/#/docs?_k=jjqinp)

[Artical used to understand editor](https://blog.logrocket.com/building-rich-text-editors-in-react-using-draft-js-and-react-draft-wysiwyg/)


---


