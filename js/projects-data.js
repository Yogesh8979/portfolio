// /* =========================================================
//    PROJECTS DATA
//    ---------------------------------------------------------
//    This is the ONLY file you need to edit to add, remove, or
//    update a project on your portfolio.

//    HOW TO ADD A NEW PROJECT:
//    1. Copy one of the objects below (the curly braces { ... }).
//    2. Paste it inside the square brackets, separated by a comma.
//    3. Update each field with your project's details.
//    4. Save the file and refresh the page — script.js will
//       automatically build a new project card for you.

//    FIELD GUIDE:
//    - title       : Project name shown at the top of the card.
//    - description : 1-3 sentence summary of what the project does
//                     and the business problem it solves.
//    - image       : Path to a screenshot of your dashboard.
//                     Put image files inside assets/projects/
//    - video       : (optional) YouTube/Loom embed URL for a demo.
//                     Leave as an empty string "" if you don't have one.
//    - github      : Link to the project's GitHub repository.
//    - linkedin    : Link to the LinkedIn post where you showcased it.
//    - docs        : Link to README / case-study / documentation.
//    - tech        : Array of technology tag strings, e.g. ["Power BI", "DAX"]
//    - status      : Small label shown in the card header,
//                     e.g. "Completed", "In Progress", "Case Study"
//    ========================================================= 
// */

// const projectsData = [
//   {
//     title: "Telecom Customer Churn Analysis Dashboard",
//     description:
//       "An interactive Power BI dashboard analyzing customer churn for a telecom provider. Includes KPI cards, churn drivers by contract type and tenure, and 29 custom DAX measures to help retention teams target at-risk customers.",
//     image: "assets/projects/telecom-churn.svg",
//     video: "",
//     github: "https://github.com/yogicode519",
//     linkedin: "https://linkedin.com/in/yogesh-gariya",
//     docs: "#",
//     tech: ["Power BI", "DAX", "Data Cleaning", "SQL"],
//     status: "Completed",
//   },

//   {
//     id: "telecom",

//     title: "Telecom Customer Churn Dashboard",

//     description:
//       "Power BI Dashboard...",

//     heroImage: "assets/projects/telecom/cover.png",

//     screenshots: [
//       "assets/projects/telecom/1.png",
//       "assets/projects/telecom/2.png",
//       "assets/projects/telecom/3.png",
//       "assets/projects/telecom/4.png",
//       "assets/projects/telecom/5.png"
//     ],

//     youtube:
//       "https://www.youtube.com/embed/VIDEO_ID?autoplay=1",

//     github: "...",

//     docs: "...",

//     tech: [
//       "Power BI",
//       "SQL",
//       "DAX"
//     ]
//   },
//   {
//     title: "HR Analytics Dashboard",
//     description:
//       "A people-analytics dashboard tracking headcount, attrition rate, and employee satisfaction across departments. Helps HR teams spot attrition hotspots and monitor workforce trends at a glance.",
//     image: "assets/projects/hr-analytics.svg",
//     video: "",
//     github: "https://github.com/yogicode519",
//     linkedin: "https://linkedin.com/in/yogesh-gariya",
//     docs: "#",
//     tech: ["Power BI", "DAX", "Excel", "Data Visualization"],
//     status: "Completed",
//   },
//   {
//     title: "Bank Loan Analysis Dashboard",
//     description:
//       "A loan portfolio dashboard that tracks total applications, funded amounts, and good vs. bad loan ratios. Built with month-over-month trend analysis to support lending and risk decisions.",
//     image: "assets/projects/bank-loan.svg",
//     video: "",
//     github: "https://github.com/yogicode519",
//     linkedin: "https://linkedin.com/in/yogesh-gariya",
//     docs: "#",
//     tech: ["Power BI", "DAX", "SQL", "Dashboard Design"],
//     status: "Completed",
//   },
//   {
//     title: "Patient Health Risk Analysis Dashboard",
//     description:
//       "A healthcare dashboard that segments patients by risk score using BMI, age, and lifestyle indicators. Visualizes high-risk populations to support proactive care planning.",
//     image: "assets/projects/patient-risk.svg",
//     video: "",
//     github: "https://github.com/yogicode519",
//     linkedin: "https://linkedin.com/in/yogesh-gariya",
//     docs: "#",
//     tech: ["Power BI", "Python", "Data Cleaning", "DAX"],
//     status: "Completed",
//   },

//   // -----------------------------------------------------
//   // EXAMPLE: copy the object below (remove the // marks)
//   // to add your next project.
//   // -----------------------------------------------------
//   //
//   {
//     title: "Your Next Project Title",
//     description: "A short, recruiter-friendly description of what this project does and the impact it has.",
//     image: "assets/projects/your-image.png",
//     video: "https://www.youtube.com/embed/your-video-id",
//     github: "https://github.com/yogicode519/your-repo",
//     linkedin: "https://linkedin.com/in/yogesh-gariya",
//     docs: "https://github.com/yogicode519/your-repo#readme",
//     tech: ["Power BI", "SQL"],
//     status: "In Progress",
//   },
//   {
//     title: "Your Next Project Title",
//     description: "A short, recruiter-friendly description of what this project does and the impact it has.",
//     image: "assets/projects/your-image.png",
//     video: "https://www.youtube.com/embed/your-video-id",
//     github: "https://github.com/yogicode519/your-repo",
//     linkedin: "https://linkedin.com/in/yogesh-gariya",
//     docs: "https://github.com/yogicode519/your-repo#readme",
//     tech: ["Power BI", "SQL"],
//     status: "In Progress",
//   },
//   {
//     title: "Your Next Project Title",
//     description: "A short, recruiter-friendly description of what this project does and the impact it has.",
//     image: "assets/projects/your-image.png",
//     video: "https://www.youtube.com/embed/your-video-id",
//     github: "https://github.com/yogicode519/your-repo",
//     linkedin: "https://linkedin.com/in/yogesh-gariya",
//     docs: "https://github.com/yogicode519/your-repo#readme",
//     tech: ["Power BI", "SQL"],
//     status: "In Progress",
//   },
//   {
//     title: "Your Next Project Title",
//     description: "A short, recruiter-friendly description of what this project does and the impact it has.",
//     image: "assets/projects/your-image.png",
//     video: "https://www.youtube.com/embed/your-video-id",
//     github: "https://github.com/yogicode519/your-repo",
//     linkedin: "https://linkedin.com/in/yogesh-gariya",
//     docs: "https://github.com/yogicode519/your-repo#readme",
//     tech: ["Power BI", "SQL"],
//     status: "In Progress",
//   },
// ];




const projectsData = [


  {
    id: "telecom",

    title: "Telecom Customer Churn Analysis Dashboard",

    status: "Completed",

    description:
       "Developed a comprehensive four-page Power BI dashboard to analyze customer churn patterns for a telecom company. The project combines KPI monitoring, churn risk assessment, contract performance analysis, and executive business recommendations to help stakeholders identify churn drivers and improve customer retention through data-driven decision making.",

    image: "assets/projects/dashboard-hero.jpg",

    // heroImage: "assets/projects/dashboard-hero.jpg",

    screenshots: [
      "https://picsum.photos/1200/700?random=1",
      "https://picsum.photos/1200/700?random=2",
      "https://picsum.photos/1200/700?random=3",
      "https://picsum.photos/1200/700?random=4",
      "https://picsum.photos/1200/700?random=5"
    ],

    youtube:
      "https://www.youtube.com/embed/eC9Z1QyJzSY?autoplay=1&mute=1",

    github:
      "https://github.com/yogicode519",

    linkedin:
      "https://linkedin.com/in/yogesh-gariya",

    docs:
      "https://github.com/yogicode519",

    tech: [
      "Power BI",
    "DAX",
    "Power Query",
    "SQL",
    "Excel",
    "Data Modeling",
    "Business Intelligence"
    ],

    features: [
      "Executive KPI Dashboard",
      "Customer Churn Risk Analysis",
      "Interactive Page Navigation",
      "Dynamic Contract Type Analysis",
      "Tenure-Based Customer Segmentation",
      "Internet Service Analysis",
      "Payment Method Analysis",
      "Executive Summary Report",
      "Business Recommendation Page",
      "Interactive Slicers & Filters",
      "Custom DAX Measures",
      "Professional Dashboard Storytelling"
    ],

    challenges: [
      "Cleaning inconsistent customer data",
      "Building complex DAX measures",
      "Optimizing report performance"
    ],

    learnings: [
      "Advanced DAX",
      "Data Modeling",
      "Dashboard Design",
      "Business Storytelling"
    ]
  },

  {
    id: "hr",

    title: "HR Analytics Dashboard",

    status: "Completed",

    description:
      "Power BI dashboard to monitor employee attrition, satisfaction, departments and workforce performance.",

    image: "assets/projects/dashboard-hero.jpg",


    screenshots: [
      "https://picsum.photos/1200/700?random=11",
      "https://picsum.photos/1200/700?random=12",
      "https://picsum.photos/1200/700?random=13",
      "https://picsum.photos/1200/700?random=14"
    ],

    youtube:
      "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",

    github:
      "https://github.com/yogicode519",

    linkedin:
      "https://linkedin.com/in/yogesh-gariya",

    docs:
      "https://github.com/yogicode519",

    tech: [
      "Power BI",
      "Excel",
      "SQL",
      "DAX"
    ],

    features: [
      "Attrition Dashboard",
      "Department Analysis",
      "Employee Satisfaction",
      "Hiring Trends"
    ],

    challenges: [
      "Data Cleaning",
      "Relationship Modeling"
    ],

    learnings: [
      "HR Analytics",
      "Power Query",
      "Visualization"
    ]
  },

  {
    id: "bank",

    title: "Bank Loan Analysis Dashboard",

    status: "Completed",

    description:
      "Interactive dashboard for loan applications, funded amounts, bad loans and lending performance.",

    image: "assets/projects/dashboard-hero.jpg",

    screenshots: [
      "https://picsum.photos/1200/700?random=21",
      "https://picsum.photos/1200/700?random=22",
      "https://picsum.photos/1200/700?random=23",
      "https://picsum.photos/1200/700?random=24"
    ],

    youtube:
      "https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1",

    github:
      "https://github.com/yogicode519",

    linkedin:
      "https://linkedin.com/in/yogesh-gariya",

    docs:
      "https://github.com/yogicode519",

    tech: [
      "Power BI",
      "SQL",
      "DAX"
    ],

    businessProblem: [
      "Telecom companies lose significant revenue when customers discontinue their services.",
      "The objective of this project is to identify the factors influencing customer churn",
      "measure churn across customer segments, contracts, and services, and provide actionable ",
      "AbortController recommendations that support customer retention strategies."
    ],

    features: [
      "Loan Approval Analysis",
      "Bad Loan Ratio",
      "Monthly Trends",
      "KPI Cards"
    ],

    challenges: [
      "Large Dataset",
      "Performance Optimization"
    ],

    learnings: [
      "Financial Analytics",
      "Dashboard Design"
    ]
  },

  {
    id: "patient",

    title: "Patient Health Risk Analysis Dashboard",

    status: "Completed",

    description:
      "Healthcare dashboard identifying patient risk based on BMI, age, blood pressure and lifestyle indicators.",

    image: "assets/projects/patient/cover.png",

    heroImage: "assets/projects/patient/cover.png",

    screenshots: [
      "https://picsum.photos/1200/700?random=31",
      "https://picsum.photos/1200/700?random=32",
      "https://picsum.photos/1200/700?random=33",
      "https://picsum.photos/1200/700?random=34"
    ],

    youtube:
      "https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1",

    github:
      "https://github.com/yogicode519",

    linkedin:
      "https://linkedin.com/in/yogesh-gariya",

    docs:
      "https://github.com/yogicode519",

    tech: [
      "Power BI",
      "Python",
      "DAX",
      "SQL"
    ],

    features: [
      "Risk Score Analysis",
      "BMI Dashboard",
      "Age Distribution",
      "Disease Prediction"
    ],

    challenges: [
      "Medical Data Cleaning",
      "Complex Visualizations"
    ],

    learnings: [
      "Healthcare Analytics",
      "Python Integration"
    ]
  }
];