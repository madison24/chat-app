# App Overview

Chat App is an app that provides users with a chat interface that includes options to share images, audio, as well as their location.

<img src=img/chatappimg.PNG height="500"/>

## Technologies used:

- React Native
- Expo
- Google Firestore Database

## Key Features:

- A page where users can enter their name and choose a background color for the chat screen before joining the chat.
- A page displaying the conversation, as well as an input field and submit button.
- Users data gets stored online and offline.
- The chat provides users with three additional communication features: sending images,location data, and audio.

## Setting up the App:

- Clone this repository
- Install Node JS, in your terminal run `nvm use 16.19.0`
- Intall Expo globally `npm install -g expo cli`
- Sign up for Expo Go account (to be able to run the app on your device)
- In your terminal navigate to chat-app folder and run `npm install`
- Download Android Studio or iOS Simulator on your computer
- In your terminal run `npx expo start` and follow the instructions to access the app on the emulator or on the Expo Go app
- To store messages, images, and other data use Google Firebase
  - Sign in with your Google account
  - Set up a Firestore Database
  - Create database in production mode
  - Under the "Rules" tab edit "allow read, write: if false" to true and publish
