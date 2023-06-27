# switch-env
The best .env switching tool available 

# About

Switch-env is an open-source tool which makes switching between multiple .env files very easy.
> Star 🌟 & watch 👀 the repository to get updates.

## Features:

- **🧑‍💻 Tech Stack Independent**: It integrates will all tech stacks.
- **🪶 Fast->Faster->Fastest**: Switched envs in a blink.
- **⚡️ Interactive**: CLI tool but very interactive.


## Dependencies
- NodeJs : Make sure you have NodeJs installed.

# Installation

Run command after making sure NodeJs is installed:
```shell
npm i switch-env -g
```

**That's it.**


# How To Use?

## Navigate to your Project 

### Initialize:

To initialize run command:
```shell
switch-env init
```

This command will initialize ```switch-env``` into your current project.

It creates ```/envs``` folder in the root folder of your project.

Fill this folder up with all the .env files you'll ever need.

You are good to go.


### How to Switch:

To switch between .env(s) run command:
```shell
switch-env switch
```

This will open a interactive selector, where you can use your arrow keys to select a target Environment.

### Viewing all Environments:

To view all available envs run command:
```shell
switch-env ls
```


### Checking current Environment:

To view current Environment run command:
```shell
switch-env current
```




