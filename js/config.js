/* ==========================================================================
   KANDULA SRIKAR - PORTFOLIO CONFIGURATION & DATA SOURCE (EXPANDED SUMMARY)
   ========================================================================== */

const PORTFOLIO_CONFIG = {
    personal: {
        name: "Kandula Srikar",
        title: "AI Engineer & Data Science Specialist",
        headline: "Building Autonomous Multi-Agent AI Systems & Data-Driven Intelligence",
        location: "Kurupam, Andhra Pradesh, India",
        email: "kandulasrikar172@gmail.com",
        phone: "(+91) 8897968735",
        heroBio: "Computer Science (AI & Data Science) student passionate about developing autonomous AI agents with LangChain & LLMs, building interactive BI dashboards, and solving complex DSA problems.",
        aboutSummary: "Computer Science and Engineering (Artificial Intelligence & Data Science) student at Vishnu Institute of Technology, Bhimavaram (CGPA: 9.17 / 10). Possess hands-on experience developing autonomous multi-agent AI systems and enterprise business intelligence dashboards. Skilled in Java, Python, SQL, LangChain, Mistral AI, Power BI, and DAX modeling.",
        learningPhilosophy: "Continuous learning through building real-world autonomous systems, solving algorithmic challenges daily, and transforming raw data into actionable insights.",
        careerObjective: "To leverage artificial intelligence, multi-agent frameworks, and data analytics to design scalable, intelligent products that solve critical real-world problems."
    },

    socialLinks: {
        github: "https://github.com/Srikar-sri1722",
        linkedin: "https://www.linkedin.com/in/kandula-srikar-878b19317/",
        leetcode: "https://leetcode.com/u/Srikar1704/",
        geeksforgeeks: "https://www.geeksforgeeks.org/profile/kandulasrm8r3",
        hackerrank: "https://www.hackerrank.com/profile/kandulasrikar172"
    },

    stats: {
        cgpa: "9.17 / 10",
        leetcodeSolved: "304",
        totalDsaSolved: "351+",
        gfgScore: "121",
        gfgSolved: "47",
        intermediatePercentage: "97.5%",
        sscPercentage: "91.6%",
        projectsCount: "2 Main & Multiple AI Workflows",
        certificationsCount: "4 Certifications"
    },

    codingProfiles: {
        leetcode: {
            username: "Srikar1704",
            profileUrl: "https://leetcode.com/u/Srikar1704/",
            totalSolved: 304,
            easy: 189,
            medium: 107,
            hard: 8,
            contestRating: "1,411",
            globalRank: "477,607",
            topPercentile: "81.82%",
            badge: "50 Days Badge 2026",
            activeDays: "111",
            streak: "28 Days",
            languages: {
                Java: 290,
                MySQL: 12,
                Pandas: 2
            }
        },
        geeksforgeeks: {
            username: "kandulasrm8r3",
            name: "Srikar Kandula",
            profileUrl: "https://www.geeksforgeeks.org/profile/kandulasrm8r3",
            totalSolved: 47,
            score: "121",
            easy: 26,
            medium: 17,
            basic: 4,
            instituteRank: "648"
        },
        hackerrank: {
            username: "kandulasrikar172",
            profileUrl: "https://www.hackerrank.com/profile/kandulasrikar172",
            stars: "5 Stars in Python & Problem Solving"
        }
    },

    education: [
        {
            degree: "B.Tech in CSE (Artificial Intelligence & Data Science)",
            institution: "Vishnu Institute of Technology, Bhimavaram",
            duration: "Aug 2023 – May 2027",
            grade: "CGPA: 9.17 / 10",
            status: "Current",
            coursework: ["Data Structures & Algorithms", "Artificial Intelligence", "Generative AI", "Data Analytics", "Database Management Systems (SQL)", "Java & Python Programming"],
            highlights: "Top tier academic standing (9.17 CGPA), active participant in technical workshops, team member of TEDx Vishnu Institute of Technology."
        },
        {
            degree: "Intermediate (MPC - Mathematics, Physics, Chemistry)",
            institution: "Ascent Junior College, Visakhapatnam",
            duration: "Jun 2021 – Mar 2023",
            grade: "Percentage: 97.5%",
            status: "Completed",
            coursework: ["Mathematics", "Physics", "Chemistry"],
            highlights: "Secured outstanding distinction with 97.5% marks in state board examinations."
        },
        {
            degree: "Secondary School Certificate (SSC)",
            institution: "Z.P.H.S Kurupam",
            duration: "Jul 2020 – Apr 2021",
            grade: "Percentage: 91.6%",
            status: "Completed",
            coursework: ["General Sciences", "Mathematics", "Languages"],
            highlights: "Graduated with 91.6% marks."
        }
    ],

    skills: {
        programming: [
            { name: "Python", level: 95, icon: "code" },
            { name: "Java (290 Solved)", level: 92, icon: "terminal" },
            { name: "SQL & MySQL", level: 88, icon: "database" }
        ],
        generativeAi: [
            { name: "LangChain", level: 90, icon: "cpu" },
            { name: "Mistral AI", level: 85, icon: "bot" },
            { name: "Multi-Agent AI Systems", level: 92, icon: "network" },
            { name: "Prompt Engineering", level: 94, icon: "sparkles" },
            { name: "Agentic AI Frameworks", level: 88, icon: "workflow" },
            { name: "LLM Application Dev", level: 86, icon: "brain" }
        ],
        dataAnalytics: [
            { name: "Power BI", level: 90, icon: "bar-chart-2" },
            { name: "Excel & Power Query", level: 92, icon: "file-text" },
            { name: "DAX Modeling", level: 85, icon: "trending-up" },
            { name: "Pandas & NumPy", level: 88, icon: "layers" },
            { name: "EDA & Feature Eng.", level: 86, icon: "pie-chart" },
            { name: "KPI Reporting & Viz", level: 90, icon: "activity" }
        ],
        developerTools: [
            { name: "Git & GitHub", level: 90, icon: "git-branch" },
            { name: "Jupyter Notebook", level: 92, icon: "book-open" },
            { name: "VS Code & IDEs", level: 88, icon: "terminal" }
        ]
    },

    projects: [
        {
            id: "ai-research-agent",
            title: "AI Research Agent – Multi-Agent Research Assistant",
            category: "Generative AI & Agentic Workflows",
            subtitle: "Autonomous multi-agent pipeline generating comprehensive research reports in real-time.",
            liveDemoUrl: "https://ai-reseacrh-agent-srikar1704.streamlit.app/",
            githubUrl: "https://github.com/Srikar-sri1722",
            tools: ["Python", "LangChain", "Mistral AI", "Requests"],
            highlights: [
                "Developed a multi-agent AI research assistant using LangChain to automate web search, content extraction, and report generation.",
                "Designed autonomous Search, Reader, Writer, and Critic agents for information retrieval, summarization, validation, and iterative refinement.",
                "Integrated real-time web search APIs and requests for intelligent multi-source content scraping.",
                "Built an end-to-end research pipeline that outputs structured, context-aware reports, significantly reducing manual research overhead."
            ],
            architecture: [
                "User Query Input -> Search Agent (Information Retrieval)",
                "Extracted Raw Web Data -> Reader Agent (Information Extraction & Parsing)",
                "Parsed Insights -> Writer Agent (Drafting Structured Academic/Technical Report)",
                "Draft Report -> Critic Agent (Fact-Checking, Hallucination Verification & Refinement)",
                "Final Polish -> Published Structured Report Output"
            ],
            folderStructure: `ai-research-agent/
├── agents/
│   ├── search_agent.py
│   ├── reader_agent.py
│   ├── writer_agent.py
│   └── critic_agent.py
├── core/
│   ├── langchain_pipeline.py
│   └── prompt_templates.py
├── app.py
├── requirements.txt
└── README.md`,
            metrics: {
                timeSaved: "75%",
                accuracy: "High Fact Validation",
                agentsCount: "4 Collaborative Agents"
            }
        },
        {
            id: "powerbi-sales-dashboard",
            title: "Power BI Sales Dashboard – Business Analytics Visualization",
            category: "Data Analytics & Business Intelligence",
            subtitle: "Interactive executive dashboard analyzing sales performance, revenue trends, and regional metrics.",
            liveDemoUrl: null,
            githubUrl: "https://github.com/Srikar-sri1722",
            tools: ["Power BI", "Excel", "Power Query", "DAX", "Data Visualization"],
            highlights: [
                "Developed an interactive Power BI dashboard to analyze sales performance using key performance indicators (KPIs), revenue trends, and regional insights.",
                "Cleaned and transformed raw sales datasets using Power Query and wrote DAX measures for dynamic calculations and business metrics.",
                "Designed interactive visualizations with filter slicers and drill-down capabilities to pinpoint sales patterns, top products, and customer trends."
            ],
            architecture: [
                "Raw CSV/Excel Sales Data -> Power Query ETL & Data Cleaning",
                "Data Model Schema -> Star Schema Relationship Building",
                "DAX Measures -> Dynamic YoY Growth, Profit Margin, Revenue KPI Calculations",
                "Power BI Desktop UI -> Interactive Visual Dashboards with Slicers & Tooltips"
            ],
            folderStructure: `powerbi-sales-dashboard/
├── data/
│   ├── raw_sales_dataset.xlsx
│   └── transformed_sales.csv
├── dax_measures/
│   ├── kpi_metrics.dax
│   └── regional_analytics.dax
├── pbix/
│   └── Executive_Sales_Dashboard.pbix
└── README.md`,
            metrics: {
                dataProcessed: "10,000+ Transactions",
                insightsGenerated: "Executive KPIs",
                drilldownSpeed: "< 1s Response"
            }
        }
    ],

    certifications: [
        {
            title: "Google Generative AI Virtual Internship",
            organization: "Google / SmartInternz",
            date: "2024",
            credentialId: "GGENAI-2024-VIRTUAL",
            skillsGained: ["Generative AI", "Large Language Models (LLMs)", "Prompt Engineering", "AI App Development"],
            verificationUrl: "https://github.com/Srikar-sri1722"
        },
        {
            title: "Deloitte Data Analyst Virtual Internship",
            organization: "Deloitte (Forage)",
            date: "2024",
            credentialId: "DELOITTE-DA-FORAGE",
            skillsGained: ["Data Visualization", "Tableau", "Business Insight Generation", "Executive Reporting"],
            verificationUrl: "https://github.com/Srikar-sri1722"
        },
        {
            title: "EduSkills Data Science Master Virtual Internship",
            organization: "EduSkills / AICTE",
            date: "2024",
            credentialId: "EDUSKILLS-DS-2024",
            skillsGained: ["Data Analysis", "Machine Learning", "Python Workflows", "AI Model Pipelines"],
            verificationUrl: "https://github.com/Srikar-sri1722"
        },
        {
            title: "Programming in Java",
            organization: "NPTEL",
            date: "2024",
            credentialId: "NPTEL-JAVA-CERT",
            skillsGained: ["Core Java", "OOP Principles", "Data Structures", "Multi-Threading"],
            verificationUrl: "https://github.com/Srikar-sri1722"
        }
    ],

    aiKnowledgeBase: [
        {
            keywords: ["who", "about", "bio", "srikar", "introduction", "name"],
            response: "Kandula Srikar is a Computer Science (Artificial Intelligence & Data Science) student at Vishnu Institute of Technology with a 9.17 CGPA. He has solved 304+ problems on LeetCode and 47+ on GeeksForGeeks (Score 121)."
        },
        {
            keywords: ["education", "college", "degree", "cgpa", "school", "marks"],
            response: "Srikar is pursuing B.Tech in CSE (AI & DS) at Vishnu Institute of Technology, Bhimavaram (2023-2027) with a CGPA of 9.17/10. He completed Intermediate at Ascent Junior College with 97.5% and SSC at ZPHS Kurupam with 91.6%."
        },
        {
            keywords: ["projects", "ai agent", "langchain", "research agent"],
            response: "Srikar built an AI Research Agent (Multi-Agent Research Assistant) using LangChain and Mistral AI. It uses 4 autonomous agents (Search, Reader, Writer, Critic). Live demo available at: https://ai-reseacrh-agent-srikar1704.streamlit.app/ !"
        },
        {
            keywords: ["power bi", "analytics", "dashboard", "sales", "dax"],
            response: "Srikar developed an interactive Power BI Sales Dashboard with DAX measures and Power Query ETL to analyze revenue trends, regional KPIs, and customer behavior."
        },
        {
            keywords: ["skills", "languages", "java", "python", "sql", "tools"],
            response: "Srikar's core skills include Python, Java (290 problems solved), SQL, LangChain, Mistral AI, Agentic AI, Power BI, Excel/DAX, Pandas, NumPy, and Git."
        },
        {
            keywords: ["leetcode", "dsa", "coding", "geeksforgeeks", "hackerrank", "problem solving"],
            response: "Srikar has solved 304 LeetCode problems (189 Easy, 107 Medium, 8 Hard; Rating 1411; 50 Days Badge 2026) and 47 GeeksForGeeks problems (Score 121, Rank 648)."
        },
        {
            keywords: ["contact", "email", "phone", "linkedin", "github", "hire"],
            response: "You can reach Kandula Srikar via email at kandulasrikar172@gmail.com or phone (+91) 8897968735. Connect on LinkedIn: https://www.linkedin.com/in/kandula-srikar-878b19317/ or GitHub: https://github.com/Srikar-sri1722 !"
        }
    ]
};

if (typeof window !== 'undefined') {
    window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
