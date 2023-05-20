MongoDB
**Student Management System**

This repository contains a Student Management System that allows performing CRUD operations on student details using MongoDB Atlas cloud with a cluster and MongoDB Compass for database storage.

** Installation**

1. Install the Visual Studio Code(VSCode)
2. Navigate to the project directory: 'cd Poorani-nOsql '
3. Install the dependencies: 'npm i --s express express-handler body-parser mongodb express-handlebars' and 'npm i -g nodemon'  


**Prerequisites**

Before running the application, you need to set up a MongoDB Atlas cluster and obtain the connection details. Here's how you can do it:

1. Sign up for a MongoDB Atlas account at [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
2. Create a new project and follow the instructions to set up a new cluster.
3. Once the cluster is created, navigate to the dashboard and click the "Connect" button.
4. Choose "Connect your application" and copy the connection string.

**Configuration**

1. Open the 'database.js' file located in the project's root directory.
2. Replace the 'MONGODB_URI' value with your MongoDB Atlas connection string.
(mongodb+srv://poorani2352002:#####@cluster0.fumlgr9.mongodb.net/?retryWrites=true&w=majority)

**Usage**

To use the Student Management System, follow these steps:

1. Start the application: 'nodemon app.js '
2. Open your web browser and go to 'http://localhost:2345'
3. The home page will display a form for students.

 **Create a Student**

To create a new student record, follow these steps:

1. Click on the "Add Student" button on the home page.
2. Fill out the required details in the provided form.
3. Click the "Submit" button to create the student record.
4. The new student will be added to the list on the home page.

**Read Student Details**

To view the details of a student, follow these steps:

1. On the home page, click on the student's name in the list.
2. The student details are displayed below the home page

**Update Student Details**

To update the details of a student, follow these steps:

1. On the student details page, click on the "Edit" button.
2. Update the desired fields in the form.
3. Click the "Submit" button to update the student's information.
4. The updated details will be reflected on the student details page.

**Delete a Student**

To delete a student record, follow these steps:

1. On the student details page, click on the "Delete" button.
2. Confirm the deletion when prompted.
3. The student record will be removed from the system.

**Technologies Used**

- Node.js
- Express.js
- MongoDB Atlas
- MongoDB Compass
- HBase





