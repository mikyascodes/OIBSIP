# OIBSIP
Oisis InfoByte web development and design internship
## Level 2
### Task 1
For this task, I built a JavaScript calculator using HTML, CSS, and JavaScript. The calculator includes basic operations as well as advanced functions such as logarithmic and trigonometric functionalities. It has both day and night modes, allowing the user to switch between modes. Additionally, by hitting the settings button, a user can switch between different button configurations on the calculator. The layout was primarily created using Bootstrap.
![calculator-demo](C:\Users\Mikyas\Pictures\Screenshots\Screenshot(7).png)

# OIBSIP
Oisis InfoByte web development and design internship
## Level 2  🔥🎚️ 
### Task 1 ✅
For this task, I built a JavaScript calculator using HTML, CSS, and JavaScript. The calculator includes basic operations as well as advanced functions such as logarithmic and trigonometric functionalities. It has both day and night modes, allowing the user to switch between modes. Additionally, by hitting the settings button, a user can switch between different button configurations on the calculator. The layout was primarily created using Bootstrap.
![calculator-demo](C:\Users\Mikyas\Pictures\Screenshots\Screenshot (2).png)

### Task 2 ✅
In this task, I built a tribute page using HTML and CSS. The tribute page is dedicated to MrBeast, the renowned YouTube icon loved by many. 
![tributepage-demo](C:\Users\Mikyas\Pictures\Screenshots\Screenshot (3).png)

### Task 3 ✅
In this task I built a todo app using HTML, Bootstrap(CSS) for frontend and I used Django for backend. The website allows user to create a task. They can see the task in the pending section of the webpage until they complete it. If they mark the task as complete the task will be moved from pending section of the page to completed section. It also allows users to Edit or Delete the task.
![todoapp-demo](C:\Users\Mikyas\Pictures\Screenshots\Screenshot (4).png)

### Task 4 ✅
In this last task, we were tasked with implementing a simple user authentication system using a programming language of our choice, I used Django(Python). The system allows users to register by providing information that will be displayed on their profile. After registration, users can log in and access their profile page. The Django app includes:
-Validation to prevent multiple users from registering with the same username or email.
-Validation errors for incorrect login credentials.
![authentication-demo](C:\Users\Mikyas\Pictures\Screenshots\Screenshot (1).png)

<h3 style="text-decoration: underline;">⚙️How to run the Django(python) projects</h3>
1. Clone the repository 
    git clone https://github.com/mikyascodes/OIBSIP.git
2. Change directory to either Task3/project_name or Task4/project_name folder which ever one project you are trying to run.  
3. Install virtual environment by running these commnds:
    -pip install virtualenv
    -virtualenv env
    -env\Scripts\activate.bat
4. Once the virtual enviroment is installed and activated, install the project requirements using this command:
    -pip install -r requirements.txt
5. Then migrate the database using these commands:
    - python manage.py makemigrations
    - python manage.py migrate
6. Create a superuser to have access to the admin page:
    - pyhton manage.py createsuperuser --username=yourusername --email=youremail@gmail.com
    - replace the yourusername and youremail with the username and email you want to use
7. Finally run the project using this command: 👏
    - python manage.py runserver






