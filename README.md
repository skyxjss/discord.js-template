# Discord.js v14 bot template
> Disclaimer: Before you start make sure you already have [Node.js](https://nodejs.org/de) with npm installed.
>


This project was created to give people that are starting with bot developing a simple base to work with.

## ✨Features

* ✔️ Getting started;
* 🤔 Questions;
* ❗ Possible errors;
* 💻 Development & Support;

## 🚀 Getting started
### 1. Create Application & Invite to server

First of all you need to create a new Application [here](https://discord.com/developers/applications).
<img src="https://cdn.discordapp.com/attachments/1154759668489539624/1156616602817663016/kgHHsnqrpR.png?ex=65159ea7&is=65144d27&hm=d96c36d3e891d844b06dc7c6157a498131c63bbe26f209e3f8eaa3605b172719&" />

After that we have to generate a invite url. We can do this by going to the Installation tab. There select this options shown below and copy the link to invite your bot to your server.
<img src="https://cdn.discordapp.com/attachments/1154759668489539624/1156619590198116522/wrZouHwvEW.png?ex=6515a16f&is=65144fef&hm=7d4233cf98799d896a1fdcdcc263bc711a3c9796025267076cf4e4b5b9126c20&" />

### 2. Initalize project

Download this project on your computer and open it in any code editor (Recommended: Visual Studio Code). Open the terminal inside the project and run

```
npm init -y
```

### 3. Install all required dependencies

Make sure to install all required dependencies. Again run this line using the terminal (**inside the project**)!

```
npm i discord.js dotenv commandkit
```

### 4. Settings

Go to the `.env` file and put in the bot token and the error channel ID.
```
Token = yourToken
ErrorChannel = yourChannelID
```

### 5. Run index.js

This is how to run the index.js file:
```
node index.js
```
## 🤔 Questions

### How do I find my Bot token?
To find your Bot token you have to go to your application and click on Bot -> Reset Token.

<img src="https://cdn.discordapp.com/attachments/1154759668489539624/1156617452491386931/lPmX0kpBqe.png?ex=65159f71&is=65144df1&hm=5c4126cf854f3fe0fd18755662ba9da8ca598839d43e7282a7d7be0a53d92bb8&" />

## ❗ Possible errors

### Used disallowed intents
To fix this go into the [Developer Portal](https://discord.com/developers/applications) and head to your bot. Then go to Bot and scroll down and enable the following settings
```
Presence Intent
Server Members Intent
Message Content Intent
```
### Error: cannot find module '/Users/.../index.js Please verify that package.json has a valid "main" entry
To fix this go to the package.json file and edit the `"main": "index.js"` to `"main": "src/index.js"`
## 💻 Development & Support
This was created by [skyxjs](https://github.com/skyxjss)

Join the [Support Server](https://discord.gg/skyjs) if you need help.
