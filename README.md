# LORAX
For setup, go ahead and download it. Make sure expo is installed and run expo install just to made sure all dependencies are present. Then run expo start and press i or a depending on whether you want to run it on the ios simulator or android emulator. Make sure you have set up the emulator/simulator. That's it !

## Inspiration

Resource extraction has tripled since 1970. That leaves us on track to run out of non-renewable resources by 2060. To fight this extremely dangerous issue, I used my app development skills to help everyone support the environment. 

As a human and a person residing in this environment, I felt that I needed to used my technological development skills in order to help us take care of the environment better, especially in industrial countries such as the United States. In order to do my part in the movement to help sustain the environment. I used the symbolism of the LORAX to name LORAX app; inspired to help the environment.

_ side note: when referencing firebase I mean firebase as a whole since two different databases were used; one to upload images and the other to upload data (ex. form data) in realtime. Firestore is the specific realtime database for user data versus firebase storage for image uploading _

##Main Features of the App

To start out we are prompted with the **authentication panel** where we are able to either sign in with an existing email or sign up with a new account. Since we are new, we will go ahead and create a new account. After registering we are signed in and now are at the home page of the app. Here I will type in my name, email and password and log in. Now if we go back to firebase authentication, we see a new user pop up over here and a new user is added to firestore with their user associated data such as their **points, their user ID, Name and email.** Now lets go back to the main app. Here at the home page we can see the various things we can do. Lets start out with the Rewards tab where we can choose rewards depending on the amount of points we have.

If we press redeem rewards, it takes us to the rewards tab, where we can choose various coupons from companies and redeem them with the points we have. Since we start out with zero points, we can‘t redeem any rewards right now. 

Let's go back to the home page.

The first three pages I will introduce are apart of the point incentive system for purchasing items that help the environment

If we press the view requests button, we are then navigated to a page where we are able to view our requests we have made in the past. These requests are used in order to redeem points from items you have purchased that help support the environment. Here we would we able to view some details and the status of the requests, but since we haven’t submitted any yet, we see there are none upon refreshing. Let’s come back to this page after submitting a request. 

If we go back, we can now press the request rewards button. By pressing it, we are navigated to a form where we are able to submit details regarding our purchase and an image of proof to ensure the user truly did indeed purchase the item. After pressing submit, this data and image is pushed to firebase’s realtime storage and firestore which I will show in a moment.

Here if we go to firebase, we see a document with the details of our request we submitted and if we go to storage we are able to view the image that we submitted. And here we see the details. Here we can review the details, approve the status and assign points to the user based on their requests. Now let’s go back to the app itself.

Now let’s go to the view requests tab again now that we have submitted our request. If we go there, we see our request, the status of the request and other details such as how many points you received if the request was approved, the time, the date and other such details.

Now to the Footprint Calculator tab, where you are able to input some details and see the global footprint you have on the environment and its resources based on your house, food and overall lifestyle. Here I will type in some data and see the results. Here its says I would take up X earths, if everyone used the same amount of resources as me. The goal of this is to be able to reach only one earth since then Earth and its resources would be able to sustain for a much longer time. We can also share it with our friends to encourage them to do the same. 

Now to the last tab, is the savings tab. Here we are able to find daily tasks we can simply do to no only save thousands and thousands of dollars but also heavily help sustain and help the environment. Here we have some things we can do to save in terms of transportation and by clicking on the saving, we are navigated to a website where we are able to view what we can do to achieve these savings and do it ourselves. 

This has been the demonstration of the LORAX app and thank you for listening. 


## How I built it

For the navigation, I used react native navigation in order to create the authentication navigator and the tab and stack navigators in each of the respective tabs.

##For the incentive system

 I used Google Firebase’s Firestore in order to view, add and upload details and images to the cloud for reviewal and data transfer. For authentication, I also used Google Firebase’s Authentication which allowed me to create custom user data such as their user, the points associated with it and the complaints associated with their user ID. Overall, Firebase made it EXTREMELY easy to create a high level application with barely any code. For this entire application, I used Google Firebase for the backend.

##For the UI 

for the tabs such as Request Submitter, Request Viewer I used React-native-base library to create modern looking components which allowed me to create a modern looking application. 

##For the Prize Redemption section and Savings Sections,
 I created the UI from scratch trialing and erroring with different designs and shadow effects to make it look cool. The user react-native-deeplinking to navigate to the specific websites for the savings tab. 

##For the Footprint Calculator
 I embedded the Global Footprint Network’s Footprint Calculator with my application in this tab to be able to use it for the reference of the user of this app. The website is shown in the tab app and is functional on that UI, similar to the website. 

I used expo for wifi-application testing, allowing me to develop the app without any wires over the wifi network. 

For the Request submission tab, I used react-native-base components to create the form UI elements and firebase to upload the data.

For the Request Viewer, I used firebase to retrieve and view the data as seen.

## Challenges I ran into

Some last second challenges I ran to was the manipulation of the database on Google Firebase. While creating the video in fact, I realize that some of the parameters were missing and were not being updated properly. I eventually realized that the naming conventions for some of the parameters being updated both in the state and in firebase got mixed up. Another issue I encountered was being able to retrieve the image from firebase. I was able to log the url, however, due to some issues with the state, I wasnt able to get the uri to the image component, and due to lack of time I left that off. Firebase made it very very easy to push, read and upload files after installing their dependencies. 
Thanks to all the great documentation and other tutorials I was able to effectively implement the rest. 

##What I learned

I learned a lot. Prior to this, I had not had experience with data modelling, and creating custom user data points. However, due to my previous experience with firebase, and some documentation referencing I was able to see firebase’s built in commands allowing me to query and add specific User ID’s to the the database, allowing me to search for data base on their UIDs.  Overall, it was a great experience learning how to model data, using authentication and create custom user data and modify that using google firebase.

## Theme and How This Helps The Environment

Overall, this application used **incentives and educates** the user about their impact on the environment to better help the environment.

## Design

I created a comprehensive and simple UI to make it easy for users to navigate and understand the purposes of the Application. Additionally, I used previously mentioned utilities in order to create a modern look.

## What's next for LORAX (Luring Others to Retain our Abode Extensively)

I hope to create my **own backend in the future**, using **ML** and an **AI** to classify these images and details to automate the submission process and **create my own footprint calculator** rather than using the one provided by the global footprint network. 
