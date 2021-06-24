# password-generator

## Deployed at: https://thehebi.github.io/password-generator/
![WebPage on load](./assets/images/initial-load.png)

The purpose of this web application is to generate a random password.

![Password length prompt](./assets/images/length-prompt.png)

The user is prompted to input how many characters they want the generated password to contain. 

![Invalid password length](./assets/images/invalid-length-chosen.png)

The generated password but be at least 8 characters long, and no longer than 128 characters.If the user inputs an invalid response an alert window will pop up informing the user that they are not meeting the criteria for the password generator. 

![Uppercase confirm](./assets/images/upper-confirm.png)

![Lowercase confirm](./assets/images/lower-confirm.png)

![Numbers confirm](./assets/images/numbers-confirm.png)

![Special confirm](./assets/images/special-confirm.png)

After that there are 4 subsequent confirm windows asking if you want to include uppercase letters, lower case letters, numbers, and special characters. If the user cancels all of the confirm windows the generator will display the text "No password variables selected", otherwise it will generate a password using the variables confirmed by the user.