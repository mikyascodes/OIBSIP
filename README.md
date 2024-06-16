# OIBSIP
Oisis InfoByte web development and design internship
## Level 2  🔥🎚️ 
### Task 1 ✅
For this task, I built a JavaScript calculator using HTML, CSS, and JavaScript. The calculator includes basic operations as well as advanced functions such as logarithmic and trigonometric functionalities. It has both day and night modes, allowing the user to switch between modes. Additionally, by hitting the settings button, a user can switch between different button configurations on the calculator. The layout was primarily created using Bootstrap.<br/><br/>

<img src="level2/Assets/Screenshot (2).png" alt="calculator-demo"/>

### Task 2 ✅
In this task, I built a tribute page using HTML and CSS. The tribute page is dedicated to MrBeast, the renowned YouTube icon loved by many.<br/><br/>

<img src="level2/Assets/Screenshot (3).png" alt="tributepage-demo"/>

### Task 3 ✅
In this task I built a todo app using HTML, Bootstrap(CSS) for frontend and I used Django for backend. The website allows user to create a task. They can see the task in the pending section of the webpage until they complete it. If they mark the task as complete the task will be moved from pending section of the page to completed section. It also allows users to Edit or Delete the task.<br/><br/>

<img src="level2/Assets/Screenshot (4).png" alt="todoapp-demo"/>

### Task 4 ✅
In this last task, we were tasked with implementing a simple user authentication system using a programming language of our choice, I used Django(Python). The system allows users to register by providing information that will be displayed on their profile. After registration, users can log in and access their profile page. The Django app includes:
<ul>
<li>Validation to prevent multiple users from registering with the same username or email.</li>
<li>Validation errors for incorrect login credentials.</li>
</ul>
<br/>

<img src="level2/Assets/Screenshot (1).png" alt="authentication-demo"/>

## How to run the Django(Python) projects ⚙️
<ol>
<li> Clone the repository </li>
    <ul>
    <li>git clone https://github.com/mikyascodes/OIBSIP.git</li>
    </ul>
<li> Change directory to either Task3/project_name or Task4/project_name folder which ever one project you are  trying to run.</li>
<li> Install virtual environment by running these commnds:</li>
    <ul>
    <li>pip install virtualenv</li>
    <li>virtualenv env</li>
    <li>env\Scripts\activate.bat</li>
    </ul>
<li> Once the virtual enviroment is installed and activated, install the project requirements using this command:</li>
    <ul>
    <li>pip install -r requirements.txt</li>
    </ul>
<li>Then migrate the database using these commands:</li>
    <ul>
    <li>python manage.py makemigrations</li>
    <li>python manage.py migrate</li>
    </ul>
<li>Create a superuser to have access to the admin page:</li>
    <ul>
    <li>python manage.py createsuperuser --username=yourusername --email=youremail@gmail.com</li>
    <li>replace the yourusername and youremail with the username and email you want to use</li>
    </ul>
<li>Finally run the project using this command: 👏</li>
    <ul>
    <li>python manage.py runserver</li>
    </ul>
</ol>






