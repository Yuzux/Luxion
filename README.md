# Luxion - Discord bot

Luxion is a Discord bot made in JS with Discord JS v13.

This bot allows you to use commands to interact with other discord users on the server.
This bot also has NSFW commands.
You are free to add commands or improve it.

## Install Dependencies

To be able to launch the project you must have previously installed node v16 minimum.

after installing node run the following command
```
npm install
```


## Start the project

To start the project use the following command
```
npm run start
```

To start the project in dev mode use the following command
```
npm run start:dev
```

In this mode after launching it, the application restarts automatically after saving
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`CLIENTID`: your app's client id (need for deploy new command)

`GUILDID`: your unique server identifier (need for deploy new command)

`TOKEN`: the token of your discord application


## Adding commands

After creating/developing a command you must deploy it with the command
```
npm run deploy-commands
```
## Example Command file

Here is an example discord command template
```js
const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('[setName]')
        .setDescription('[setDescription]'),
    /**
     * 
     * @param {CommandInteraction} interaction
     */
    async execute(interaction) {
        
        /** Your Code **/

    }
}
```