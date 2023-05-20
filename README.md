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


**Create a cluster in MongoDB Atlas cloud**


To create a cluster in the MongoDB Atlas cloud, you can follow these steps:

1. Sign up for MongoDB Atlas:
   - Go to the MongoDB Atlas website: [https://www.mongodb.com/cloud/atlas](https://www.mongodb.com/cloud/atlas).
   - Click on the "Get started free" button or "Sign in" if you already have an account.
   - Follow the prompts to create an account or sign in to your existing account.

2. Create a New Project:
   - After signing in, you will be taken to the MongoDB Atlas dashboard.
   - Click on the "New Project" button.
   - Enter a name for your project.
   - Optionally, you can choose to disable the sample dataset if you prefer not to include it.
   - Click on the "Create Project" button.

3. Create a New Cluster:
   - In the MongoDB Atlas dashboard, click on the "Build a Cluster" button.
   - Select the cloud provider and region where you want your cluster to be hosted.
   - Choose the cluster tier based on your requirements. The free tier is suitable for testing and development purposes.
   - Set the additional cluster configurations according to your preferences, such as the cluster name and shared or dedicated cluster options.
   - Click on the "Create Cluster" button to start creating the cluster.

4. Wait for Cluster Creation:
   - MongoDB Atlas will now create your cluster. The process may take a few minutes.
   - You can monitor the cluster creation progress on the MongoDB Atlas dashboard. Once the cluster is ready, it will be listed as "Active."

5. Configure Cluster Settings (Optional):
   - You can further configure your cluster settings by clicking on the "Clusters" tab in the MongoDB Atlas dashboard.
   - Here, you can modify settings such as cluster scaling, backup configurations, and more.

6. Connect to Your Cluster:
   - To connect to your cluster, click on the "Connect" button for your cluster in the MongoDB Atlas dashboard.
   - Choose the connection method based on your application's requirements (e.g., application connection, MongoDB Compass, etc.).
   - Follow the instructions provided to establish the connection to your cluster.

 Now use this cluster to store your MongoDB databases and perform CRUD operations using our preferred method of connection.
 
 
 **Create a database to store data in the student's database in MongoDB compass**


To create a database for storing data in the "students" database using MongoDB Compass, you can follow these steps:

1. Open MongoDB Compass:
   - Launch MongoDB Compass on your computer.

2. Connect to MongoDB Atlas:
   - In the MongoDB Compass connection screen, click on the "New Connection" button.
   - Enter your MongoDB Atlas connection details, including the connection string or hostname, username, and password.
   - Click on the "Connect" button to establish a connection to your MongoDB Atlas cluster.

3. Create a Database:
   - Once connected, you will see the list of databases on the left-hand side of the Compass interface.
   - Click on the "+ Create Database" button to create a new database.
   - Enter the name "students" for the database and press Enter or click outside the field to create the database.

4. Create a Collection:
   - With the "students" database selected, click on the "+ Create Collection" button.
   - Enter a name for the collection, such as "student details," and press Enter or click outside the field to create the collection.

5. Define Collection Schema (Optional):
   - If you want to define a specific schema for your student details, you can do so by clicking on the "Schema" tab within the collection view.
   - Here, you can define the fields, their types, and any validation rules.

6. Insert Data:
   - To insert data into the "student details" collection, click on the "Documents" tab within the collection view.
   - Click on the "+ Insert Document" button to add a new document.
   - Enter the student details as key-value pairs according to your defined schema or the default BSON format.
   - Click on the "Insert" button to save the document.

Now create a database named "students" and a collection named "studentDetails" in MongoDB Compass. Continue inserting more documents into the collection by repeating the steps mentioned in the "Insert Data" section.



