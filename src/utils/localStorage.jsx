// localStorage.clear();
const employees = [
    {
      "id": 1,
      "firstName": "Saurabh",
      "email": "e@e.com",
      "password": "123",
      "taskCounts": {
          "active": 2,
          "newTask": 1,
          "completed": 1,
          "failed": 0,

      },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Update Report",
          "taskDescription": "Update the quarterly financial report and submit it to the manager.",
          "taskDate": "2025-02-21",
          "category": "Finance"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Team Meeting",
          "taskDescription": "Attend the weekly team meeting and discuss project progress.",
          "taskDate": "2025-02-19",
          "category": "Meetings"
        },
        {
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Client Presentation",
          "taskDescription": "Prepare a client presentation for the new project proposal.",
          "taskDate": "2025-02-18",
          "category": "Presentations"
        }
      ]
    },
    {
      "id": 2,
      "firstName": "Prakash",
      "email": "employee2@example.com",
      "password": "123",
      "taskCounts": {
        "active": 3,
        "newTask": 4,
        "completed": 6,
        "failed": 2,

    },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Code Review",
          "taskDescription": "Review the code of the latest feature release.",
          "taskDate": "2025-02-20",
          "category": "Development"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Fix Bugs",
          "taskDescription": "Fix bugs reported by the QA team in the latest build.",
          "taskDate": "2025-02-18",
          "category": "Development"
        }
      ]
    },
    {
      "id": 3,
      "firstName": "Rohit",
      "email": "employee3@example.com",
      "password": "123",
      "taskCounts": {
        "active": 6,
        "newTask": 5,
        "completed": 2,
        "failed": 3,

    },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Design UI",
          "taskDescription": "Design the user interface for the new mobile app feature.",
          "taskDate": "2025-02-21",
          "category": "Design"
        },
        {
          "active": true,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Create Wireframes",
          "taskDescription": "Create wireframes for the new dashboard layout.",
          "taskDate": "2025-02-19",
          "category": "Design"
        }
      ]
    },
    {
      "id": 4,
      "firstName": "Niraj",
      "email": "employee4@example.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 9,
        "completed": 7,
        "failed": 3,

    },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Write Documentation",
          "taskDescription": "Write detailed documentation for the new API endpoints.",
          "taskDate": "2025-02-21",
          "category": "Documentation"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": false,
          "taskTitle": "Team Collaboration",
          "taskDescription": "Collaborate with the product team on new feature specifications.",
          "taskDate": "2025-02-20",
          "category": "Collaboration"
        },
        {
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false,
          "taskTitle": "Test API",
          "taskDescription": "Test the newly developed API endpoints for functionality.",
          "taskDate": "2025-02-18",
          "category": "Testing"
        }
      ]
    },
    {
      "id": 5,
      "firstName": "Dheeraj",
      "email": "employee5@example.com",
      "password": "123",
      "taskCounts": {
        "active": 2,
        "newTask": 7,
        "completed": 5,
        "failed": 2,

    },
      "tasks": [
        {
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false,
          "taskTitle": "Server Maintenance",
          "taskDescription": "Perform scheduled server maintenance and backups.",
          "taskDate": "2025-02-21",
          "category": "Operations"
        },
        {
          "active": true,
          "newTask": false,
          "completed": false,
          "failed": true,
          "taskTitle": "Upgrade Database",
          "taskDescription": "Upgrade the database schema to the latest version.",
          "taskDate": "2025-02-19",
          "category": "Operations"
        }
      ]
    }
  ]
const admin = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "123"
    }
  ];

  export const setLocalStorage = () => {
    // Ensure JSON.stringify is used correctly
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
  };
  
  export const getLocalStorage = () => {
    // const data = localStorage.getItem('employees');
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    // console.log(data);
    // if want in form of array data 
    // console.log(JSON.parse(data))

    // console.log(employees, admin);

    return { employees, admin };
  }
