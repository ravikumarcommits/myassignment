# Steps to run the test

Assumptions/prerequisites: 
1.	Latest version of the Chrome browser is installed on the system.
2.	LTS version of Node.js called Fermium version Node.js 14.18.1 is installed on the system.
3.	The latest version of IDE (Visual Studio Code) is installed on the system.

Steps to test
1.	Download the project from the GitHub repository by cloning the repository from the master branch in the location of your choice. Type the below command in the git bash where you want to download the project. 

 git clone https://github.com/ravikumarcommits/myassignment.git

2.	Launch IDE (Visual Studio code) Select File >Open Folder and choose the folder (ASSIGNMENT-MASTER) which you downloaded from Github.

3.	Type the below commands in the IDE terminal

•	npm install cypress --save-dev   //installing cypress
•	npm cypress -v   // to check the cypress version
•	npx cypress open    // to see if the cypress works

4.	From Terminal on the header select New terminal and type the command npm cypress open

5.	Click on amazon.spec.js from cypress automation client 
