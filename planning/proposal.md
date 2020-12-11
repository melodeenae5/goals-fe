### Your group members and scrum leader (if applicable)

### Your project idea

> Brief 2-3 sentence description of your app
> My app will be a goal tracking app called Achieve Your Goals. Users will be able to make an account and keep track of both daily accomplishments and long-term goals. They will be able to keep a daily checklist of things they have done, journal about their day, post long-term goals with smaller mini-goals attached, and journal progress towards those goals. I want there to be some sort of visual analytics too.

### Your tech stack (frontend, backend, database)

Front-end: React
Backend: Python/Django
Database: PostgreSQL

### List of backend models and their properties

Users: id, email, username, password, bigGoals, days
BigGoals: id, name, description, timeframe, smallerGoals, notes
Days: date, notes, listItems
ListItems: id, day, body, category, bigGoal

### React component hierarchy (if applicable)

![20201209_205220](https://media.git.generalassemb.ly/user/29132/files/a7b72080-3a60-11eb-8e5e-4851b865e4bd)

### User stories

-As a user, I want to be able to create an account, so I can use the site and login.
-As a user, I want to be able to login so I can access the site.
-As a user, I want a dashboard overview, so I can see both my goals and daily activities at a glance.
-As a user, I want a view of the daily checklist, so I can see what I accomplished that day.
-As a user, I want to be able to add to the daily checklist, so I can record my accomplishments.
-As a user, I want to be able to categorize my daily activities and attach them to goals so I can connect my daily activities to the bigger picture.
-As a user, I want a view of my bigger goals so I can see what I want to achieve.
-As a user, I want to be able to add a goal, so I can work towards achieving it.
-As a user, I want to be able to add list items to my goals, in order to break them down into manageable pieces.
-As a user, I want to be able to take notes on both my daily checklist and my goals, so I can document my progress.

Stretch goals
-As a user, I want a calendar so it's easier to navigate to the day's checklist I want to view.
-As a user, I want a progress chart(s) available from my dashboard, so I have a visual representation of my progress.

### Wireframes

![20201209_205656](https://media.git.generalassemb.ly/user/29132/files/5c057680-3a62-11eb-854c-0f34013b0d61)
![20201209_205851](https://media.git.generalassemb.ly/user/29132/files/64f64800-3a62-11eb-8ab6-519ef1303145)

![20201209_210235](https://media.git.generalassemb.ly/user/29132/files/6889cf00-3a62-11eb-9761-db7699bff916)

### Anything else your squad lead should know

I would appreciate feedback on ways to make this project more focused or MVP more manageable, if you have any feedback in that area.
