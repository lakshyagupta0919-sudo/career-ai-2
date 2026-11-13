/**
 * CareerAI – AI Resume Analyzer
 * Core Application Logic & Client-Side Analysis Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================================================
  // 1. Role Skill Databases & Knowledge Graph
  // ==========================================================================
  const ROLE_DEFINITIONS = {
    'Data Analyst': {
      title: 'Data Analyst',
      icon: 'fa-solid fa-chart-pie',
      preview: 'SQL, Python, Excel, Tableau, Power BI, Statistics, Pandas, Data Cleaning, ETL...',
      coreSkills: [
        'sql', 'python', 'excel', 'tableau', 'power bi', 'statistics',
        'data visualization', 'pandas', 'numpy', 'data cleaning', 'etl',
        'r', 'data analysis', 'dashboards', 'reporting', 'pivot tables',
        'business intelligence', 'bigquery', 'data modeling', 'a/b testing'
      ],
      bonusSkills: [
        'git', 'aws', 'snowflake', 'jira', 'spark', 'scikit-learn',
        'google analytics', 'postgresql', 'mysql', 'looker', 'dbt'
      ],
      roleDescription: 'Transforms raw numbers into actionable business decisions using analytics, dashboards, and statistical models.'
    },
    'Python Developer': {
      title: 'Python Developer',
      icon: 'fa-brands fa-python',
      preview: 'Python, Django, Flask, FastAPI, REST API, SQL, Docker, Git, Unit Testing...',
      coreSkills: [
        'python', 'django', 'flask', 'fastapi', 'rest api', 'sql',
        'postgresql', 'mysql', 'git', 'github', 'docker', 'oop',
        'unit testing', 'pytest', 'redis', 'celery', 'linux', 'ci/cd',
        'orm', 'sqlalchemy', 'microservices', 'asyncio'
      ],
      bonusSkills: [
        'aws', 'kubernetes', 'mongodb', 'graphql', 'html', 'css',
        'javascript', 'web scraping', 'beautifulsoup', 'selenium', 'pandas'
      ],
      roleDescription: 'Designs, develops, tests, and deploys scalable backend services, APIs, and Python-powered automation platforms.'
    },
    'Business Analyst': {
      title: 'Business Analyst',
      icon: 'fa-solid fa-briefcase',
      preview: 'Requirements Gathering, Agile, Scrum, JIRA, SQL, Excel, Stakeholder Management, User Stories...',
      coreSkills: [
        'requirements gathering', 'agile', 'scrum', 'jira', 'user stories',
        'business process modeling', 'bpmn', 'uml', 'gap analysis',
        'stakeholder management', 'sql', 'excel', 'tableau', 'power bi',
        'data analysis', 'brd', 'frd', 'use cases', 'confluence', 'wireframing'
      ],
      bonusSkills: [
        'python', 'process mapping', 'swot analysis', 'change management',
        'salesforce', 'as-is to-be', 'visio', 'kpi tracking', 'trello'
      ],
      roleDescription: 'Bridges business requirements with technology solutions, analyzing workflows, user stories, and strategic ROI.'
    },
    'AI/ML Engineer': {
      title: 'AI/ML Engineer',
      icon: 'fa-solid fa-brain',
      preview: 'Python, Machine Learning, Deep Learning, PyTorch, TensorFlow, NLP, Scikit-Learn, MLOps...',
      coreSkills: [
        'python', 'machine learning', 'deep learning', 'tensorflow', 'pytorch',
        'scikit-learn', 'nlp', 'natural language processing', 'computer vision',
        'neural networks', 'pandas', 'numpy', 'mlops', 'model deployment',
        'hugging face', 'transformers', 'llms', 'docker', 'git', 'feature engineering'
      ],
      bonusSkills: [
        'opencv', 'fastapi', 'flask', 'aws', 'gcp', 'gpu', 'cuda',
        'sql', 'data modeling', 'hyperparameter tuning', 'kubernetes', 'langchain'
      ],
      roleDescription: 'Engineers end-to-end intelligent systems, machine learning architectures, neural networks, and generative AI solutions.'
    }
  };

  // General Competencies (Soft Skills & Professional Impact Verbs)
  const SOFT_SKILLS = [
    'communication', 'leadership', 'problem solving', 'teamwork', 'collaboration',
    'adaptability', 'critical thinking', 'time management', 'project management',
    'presentation', 'mentoring', 'negotiation', 'analytical skills', 'creativity'
  ];

  const ACTION_VERBS = [
    'developed', 'designed', 'led', 'managed', 'implemented', 'optimized',
    'created', 'built', 'analyzed', 'increased', 'reduced', 'improved',
    'automated', 'engineered', 'streamlined', 'delivered', 'achieved', 'launched'
  ];

  const STANDARD_SECTIONS = [
    { name: 'Summary / Objective', regex: /(summary|objective|profile|about me)/i },
    { name: 'Work Experience', regex: /(experience|employment|work history|career)/i },
    { name: 'Education', regex: /(education|academic|university|degree|bachelor|master)/i },
    { name: 'Skills & Competencies', regex: /(skills|technical skills|competencies|technologies)/i },
    { name: 'Projects', regex: /(projects|portfolio|personal projects|key achievements)/i },
    { name: 'Certifications', regex: /(certifications|licenses|courses|credentials)/i }
  ];

  // ==========================================================================
  // 2. Pre-Packaged Realistic Sample Resumes for 1-Click Testing
  // ==========================================================================
  const SAMPLE_RESUMES = {
    'data-analyst': `ALEX CHEN
Email: alex.chen@example.com | Phone: (555) 234-5678 | Portfolio: alexchen-data.io
LinkedIn: linkedin.com/in/alexchen-data | GitHub: github.com/alexchen-data

PROFESSIONAL SUMMARY
Results-driven Data Analyst with 4+ years of experience turning complex datasets into strategic business insights. Proficient in SQL, Python, Excel, Tableau, and Power BI. Proven track record of improving operational efficiency by 28% and driving over $1.4M in incremental revenue through predictive dashboard reporting and A/B test analysis.

TECHNICAL SKILLS
- Languages: SQL (PostgreSQL, MySQL, BigQuery), Python (Pandas, NumPy, Matplotlib, Seaborn), R
- BI & Visualization: Tableau Desktop & Server, Power BI, Advanced Excel (VLOOKUP, Pivot Tables, Power Query)
- Analytics & Modeling: Statistical Analysis, ETL Pipelines, Data Cleaning, Regression Analysis, A/B Testing, Cohort Analysis
- Tools & Methodologies: Git, JIRA, Agile, Data Modeling, Google Analytics

WORK EXPERIENCE
Senior Data Analyst | Apex Global Commerce (2022 – Present)
- Engineered 14 automated Tableau and Power BI executive dashboards, reducing reporting turnaround time by 45%.
- Wrote high-performance SQL queries across 10M+ transaction records in BigQuery to isolate customer churn drivers.
- Partnered with marketing to conduct rigorous A/B testing on promotional campaigns, resulting in an 18% lift in conversion rate and $850K revenue gain.
- Automated weekly data cleaning and ETL pipelines using Python (Pandas), eliminating 12 hours of manual data entry per week.

Data Analyst | Insight Metrics Corp (2020 – 2022)
- Formulated advanced Excel financial models and automated recurring KPI scorecards for C-suite stakeholders.
- Performed deep-dive exploratory data analysis to diagnose supply chain bottlenecks, cutting delivery delays by 22%.
- Collaborated with cross-functional product teams using Agile and JIRA to define data tracking requirements.

EDUCATION & CERTIFICATIONS
- B.S. in Statistics & Information Systems, University of Washington (2020)
- Google Data Analytics Professional Certificate
- Tableau Desktop Certified Associate`,

    'python-dev': `JORDAN SMITH
Email: jordan.smith@example.com | GitHub: github.com/jordansmith-dev
Location: Austin, TX | LinkedIn: linkedin.com/in/jordansmith-python

SUMMARY
Versatile Python Developer with 5 years of software engineering expertise specializing in building high-concurrency REST APIs, microservices, and backend architectures using Python, Django, FastAPI, PostgreSQL, and Docker. Passionate about clean code, unit testing, CI/CD automation, and scalable distributed systems.

TECHNICAL SKILLS
- Backend: Python (OOP, Asyncio, Multithreading), Django, Flask, FastAPI, REST API, Celery
- Databases: PostgreSQL, MySQL, Redis (Caching & Task Queues), SQLAlchemy ORM, MongoDB
- DevOps & Cloud: Docker, Git, GitHub Actions, CI/CD, Linux (Ubuntu/Debian), AWS (S3, EC2)
- Testing & Quality: PyTest, Unit Testing, Mocking, Code Review, TDD
- Frontend & Others: JavaScript, HTML5, CSS3, JSON, Microservices Architecture

PROFESSIONAL EXPERIENCE
Senior Backend Engineer | CloudScale Systems (2022 – Present)
- Architected and deployed 8 microservices utilizing FastAPI and PostgreSQL, handling over 4,500 requests per second with sub-50ms latency.
- Reduced API response times by 62% by integrating Redis caching layers and optimizing complex SQLAlchemy queries.
- Spearheaded CI/CD migration to GitHub Actions with PyTest test suites, increasing automated code coverage from 68% to 94%.
- Led a team of 4 engineers using Agile/Scrum ceremonies, code reviews, and mentorship.

Python Developer | NextGen Web Solutions (2019 – 2022)
- Developed robust REST APIs in Django REST Framework supporting 200,000+ active mobile and web subscribers.
- Implemented background asynchronous task processing via Celery and Redis to handle batch email distribution and data ingestion.
- Containerized development and staging environments using Docker, cutting developer onboarding time by 50%.
- Authored comprehensive unit tests and automated integration testing workflows.

EDUCATION
- B.S. in Computer Science, University of Texas at Austin (2019)
- Certified Kubernetes Application Developer (CKAD)`,

    'business-analyst': `PRIYA PATEL
Email: priya.patel@example.com | Phone: (555) 789-0123
LinkedIn: linkedin.com/in/priyapatel-ba | New York, NY

PROFESSIONAL SUMMARY
Strategic and detail-oriented Business Analyst with 5+ years of experience bridging technical teams and executive business stakeholders. Proven success in requirements gathering, agile product management, process mapping (BPMN), gap analysis, and user stories. Led digital transformation initiatives resulting in $650,000 annual operational savings.

CORE COMPETENCIES
- Analysis & Modeling: Requirements Gathering, Gap Analysis, Business Process Modeling (BPMN), Use Cases, UML, SWOT Analysis
- Agile & Tools: Scrum, Agile Methodologies, JIRA, Confluence, User Stories, Backlog Grooming, Trello
- Data & Reporting: SQL Querying, Advanced Excel (VBA, Macros, Pivot Tables), Power BI, Tableau, KPI Dashboards
- Documentation: Business Requirements Document (BRD), Functional Requirements Document (FRD), Wireframing
- Soft Skills: Stakeholder Management, Workshop Facilitation, Negotiation, Cross-Functional Leadership, Change Management

EXPERIENCE
Lead Business Analyst | FinTech Horizon Solutions (2021 – Present)
- Facilitated 50+ discovery workshops with business executives, product managers, and developers to capture end-to-end requirements.
- Drafted comprehensive BRD, FRD, and 120+ user stories with strict acceptance criteria in JIRA for a new mobile banking platform.
- Conducted as-is to-be process mapping using BPMN diagrams, identifying operational redundancies that saved $650,000 annually.
- Queried PostgreSQL databases with SQL to validate transaction data accuracy and support compliance audit reporting.

Business Systems Analyst | Metropoint Financial (2018 – 2021)
- Managed user story backlogs and sprint grooming sessions for two cross-functional Agile engineering squads.
- Designed interactive Power BI dashboards tracking customer onboarding drop-offs, boosting activation by 24%.
- Coordinated user acceptance testing (UAT) with 45 internal testers, resolving 110+ functional defects prior to launch.

EDUCATION & CREDENTIALS
- B.B.A. in Management Information Systems, New York University
- PMI Professional in Business Analysis (PMI-PBA)
- Certified Scrum Product Owner (CSPO)`,

    'ai-ml': `DR. MARCUS VANCE
Email: marcus.vance@example.com | Scholar: scholar.google.com/marcusvance
GitHub: github.com/marcusvance-ai | LinkedIn: linkedin.com/in/marcusvance-ml

PROFESSIONAL SUMMARY
Senior AI/ML Engineer with 6 years of industry and research experience architecting state-of-the-art Deep Learning, Natural Language Processing (NLP), and Computer Vision pipelines. Expert in PyTorch, TensorFlow, Hugging Face Transformers, LLM fine-tuning, and MLOps deployment on cloud infrastructure. Proven success deploying models serving 10M+ inferences per day.

TECHNICAL EXPERTISE
- Frameworks & Libs: PyTorch, TensorFlow, Scikit-Learn, Hugging Face, Transformers, OpenCV, Keras
- Core ML/AI: Deep Learning, Neural Networks, NLP, LLMs, Computer Vision, Feature Engineering, Hyperparameter Tuning
- Data & Math: Python, Pandas, NumPy, Linear Algebra, Probability & Statistics, Data Modeling, GPU Acceleration (CUDA)
- MLOps & Production: Docker, FastAPI, Git, MLflow, Model Deployment, AWS SageMaker, Kubernetes
- Languages: Python, C++, SQL, Bash

PROFESSIONAL EXPERIENCE
Staff Machine Learning Engineer | DeepCognition Labs (2022 – Present)
- Architected and trained a custom transformer-based NLP model with PyTorch for sentiment analysis, achieving a 94.6% F1-score across 5 languages.
- Fine-tuned open-source LLMs using LoRA and Hugging Face, reducing inference latency by 40% while preserving benchmark accuracy.
- Built an end-to-end MLOps pipeline with Docker, MLflow, and FastAPI on AWS, managing automated retraining and CI/CD model deployment.
- Reduced GPU inference memory footprint by 35% using 8-bit quantization and TensorRT optimizations.

Machine Learning Engineer | Apex Vision Tech (2019 – 2022)
- Implemented real-time Computer Vision object detection pipelines in PyTorch and OpenCV achieving 60 FPS on edge hardware.
- Engineered automated data preprocessing and feature extraction workflows processing 500,000+ image samples daily with NumPy and Pandas.
- Partnered with product and research teams to publish 2 conference papers on self-supervised learning algorithms.

EDUCATION
- Ph.D. in Computer Science (Machine Learning Focus), Stanford University
- B.S. in Electrical Engineering & Computer Science, UC Berkeley`
  };

  // ==========================================================================
  // 3. DOM Elements Cache
  // ==========================================================================
  const jobRoleSelect = document.getElementById('jobRole');
  const previewTags = document.getElementById('previewTags');
  const roleSkillsPreview = document.getElementById('roleSkillsPreview');

  const pdfFileInput = document.getElementById('pdfFileInput');
  const dropZone = document.getElementById('dropZone');
  const dropzoneDefault = document.getElementById('dropzoneDefault');
  const dropzoneStatus = document.getElementById('dropzoneStatus');
  const fileNameDisplay = document.getElementById('fileName');
  const fileSizeDisplay = document.getElementById('fileSize');
  const pdfParseStatus = document.getElementById('pdfParseStatus');
  const btnRemoveFile = document.getElementById('btnRemoveFile');

  const resumeText = document.getElementById('resumeText');
  const wordCountDisplay = document.getElementById('wordCount');
  const btnClearText = document.getElementById('btnClearText');

  const btnAnalyze = document.getElementById('btnAnalyze');
  const btnClearAll = document.getElementById('btnClearAll');
  const statusAlert = document.getElementById('statusAlert');
  const sampleButtons = document.querySelectorAll('.btn-sample');

  // Results Dashboard Elements
  const resultsSection = document.getElementById('resultsSection');
  const resultsRoleBadge = document.getElementById('resultsRoleBadge');
  const resultsTimestamp = document.getElementById('resultsTimestamp');
  const btnPrintReport = document.getElementById('btnPrintReport');

  const scoreRingProgress = document.getElementById('scoreRingProgress');
  const scoreValue = document.getElementById('scoreValue');
  const scoreRatingBadge = document.getElementById('scoreRatingBadge');
  const scoreSummary = document.getElementById('scoreSummary');

  const detectedSkillsCount = document.getElementById('detectedSkillsCount');
  const roleTotalSkills = document.getElementById('roleTotalSkills');
  const skillMatchProgress = document.getElementById('skillMatchProgress');
  const matchRateBadge = document.getElementById('matchRateBadge');

  const metricsDetectedCount = document.getElementById('metricsDetectedCount');
  const impactRating = document.getElementById('impactRating');
  const impactProgress = document.getElementById('impactProgress');

  const sectionsCount = document.getElementById('sectionsCount');
  const sectionsRating = document.getElementById('sectionsRating');
  const sectionsProgress = document.getElementById('sectionsProgress');

  const detectedSkillsContainer = document.getElementById('detectedSkillsContainer');
  const missingSkillsContainer = document.getElementById('missingSkillsContainer');
  const allSkillsCount = document.getElementById('allSkillsCount');
  const roleMatchCount = document.getElementById('roleMatchCount');
  const bonusCount = document.getElementById('bonusCount');
  const softSkillsCount = document.getElementById('softSkillsCount');
  const filterChips = document.querySelectorAll('.filter-chip');

  const strengthsList = document.getElementById('strengthsList');
  const suggestionsList = document.getElementById('suggestionsList');
  const careerRecommendationsGrid = document.getElementById('careerRecommendationsGrid');

  // Currently detected skill records for filtering
  let currentDetectedSkills = [];

  // ==========================================================================
  // 4. Role Selection & Preview Updates
  // ==========================================================================
  function updateRolePreview() {
    const selected = jobRoleSelect.value;
    const def = ROLE_DEFINITIONS[selected];
    if (def) {
      previewTags.textContent = def.preview;
    }
  }

  jobRoleSelect.addEventListener('change', updateRolePreview);
  updateRolePreview();

  // ==========================================================================
  // 5. Word & Character Counter
  // ==========================================================================
  function updateWordCount() {
    const text = resumeText.value.trim();
    const chars = text.length;
    const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
    wordCountDisplay.textContent = `${words} words / ${chars} chars`;
  }

  resumeText.addEventListener('input', updateWordCount);

  // Clear Text Only Button
  btnClearText.addEventListener('click', () => {
    resumeText.value = '';
    updateWordCount();
    resumeText.focus();
    showAlert('Resume text area cleared.', 'info');
  });

  // ==========================================================================
  // 6. Sample Resumes Quick Loader
  // ==========================================================================
  sampleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Toggle active glow state on sample pills
      sampleButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const sampleKey = btn.getAttribute('data-sample');
      if (SAMPLE_RESUMES[sampleKey]) {
        resumeText.value = SAMPLE_RESUMES[sampleKey];
        updateWordCount();

        // Automatically match the role dropdown to the sample
        if (sampleKey === 'data-analyst') jobRoleSelect.value = 'Data Analyst';
        else if (sampleKey === 'python-dev') jobRoleSelect.value = 'Python Developer';
        else if (sampleKey === 'business-analyst') jobRoleSelect.value = 'Business Analyst';
        else if (sampleKey === 'ai-ml') jobRoleSelect.value = 'AI/ML Engineer';
        updateRolePreview();

        showAlert(`Loaded sample resume for "${jobRoleSelect.value}". Click "Analyze Resume" to view full dashboard!`, 'success');
        
        // Auto scroll slightly to bring action buttons in view
        btnAnalyze.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    });
  });

  // ==========================================================================
  // 7. PDF Upload & Text Extraction (using PDF.js)
  // ==========================================================================
  if (typeof pdfjsLib !== 'undefined') {
    pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
  }

  function handlePdfFile(file) {
    if (!file) return;

    if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
      showAlert('Please upload a valid PDF document (.pdf).', 'error');
      return;
    }

    // Format file size
    const sizeKB = Math.round(file.size / 1024);
    fileNameDisplay.textContent = file.name;
    fileSizeDisplay.textContent = `${sizeKB} KB`;

    // Switch Dropzone UI
    dropzoneDefault.classList.add('hidden');
    dropzoneStatus.classList.remove('hidden');
    pdfParseStatus.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Extracting text from PDF...';

    const reader = new FileReader();
    reader.onload = async function() {
      try {
        const typedArray = new Uint8Array(this.result);
        
        if (typeof pdfjsLib === 'undefined') {
          throw new Error('PDF.js library is not available in the current environment.');
        }

        const loadingTask = pdfjsLib.getDocument({ data: typedArray });
        const pdf = await loadingTask.promise;
        const totalPages = pdf.numPages;
        let extractedText = '';

        for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const textContent = await page.getTextContent();
          const pageItems = textContent.items.map(item => item.str);
          extractedText += pageItems.join(' ') + '\n\n';
        }

        if (!extractedText.trim()) {
          pdfParseStatus.innerHTML = '<span style="color:#f59e0b;"><i class="fa-solid fa-triangle-exclamation"></i> Scanned PDF detected. No extractable text found. Please paste your text below.</span>';
          showAlert('Notice: This PDF may be an image/scanned document. Please paste the resume text into the text box.', 'info');
        } else {
          resumeText.value = extractedText.trim();
          updateWordCount();
          pdfParseStatus.innerHTML = `<span style="color:#10b981;"><i class="fa-solid fa-circle-check"></i> Extracted ${totalPages} page(s) successfully!</span>`;
          showAlert(`Successfully extracted text from "${file.name}". Click "Analyze Resume" to proceed!`, 'success');
        }
      } catch (err) {
        console.error('PDF parsing error:', err);
        pdfParseStatus.innerHTML = '<span style="color:#ef4444;"><i class="fa-solid fa-circle-exclamation"></i> Could not extract PDF text. Please paste text directly into the box.</span>';
        showAlert('Could not read PDF directly. Please paste your resume text into the text box below.', 'error');
      }
    };

    reader.onerror = function() {
      showAlert('Error reading uploaded file.', 'error');
      pdfParseStatus.innerHTML = '<span style="color:#ef4444;"><i class="fa-solid fa-circle-exclamation"></i> Error reading file.</span>';
    };

    reader.readAsArrayBuffer(file);
  }

  pdfFileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handlePdfFile(e.target.files[0]);
    }
  });

  // Drag and Drop Events
  ['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.add('dragover');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropZone.classList.remove('dragover');
    });
  });

  dropZone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    if (dt && dt.files && dt.files[0]) {
      pdfFileInput.files = dt.files;
      handlePdfFile(dt.files[0]);
    }
  });

  // Remove File Button
  btnRemoveFile.addEventListener('click', (e) => {
    e.stopPropagation();
    pdfFileInput.value = '';
    dropzoneStatus.classList.add('hidden');
    dropzoneDefault.classList.remove('hidden');
    showAlert('Removed uploaded PDF.', 'info');
  });

  // ==========================================================================
  // 8. Alert Banner Helper
  // ==========================================================================
  let alertTimeout = null;
  function showAlert(message, type = 'info') {
    if (alertTimeout) clearTimeout(alertTimeout);
    statusAlert.className = `status-alert ${type}`;
    let icon = 'fa-info-circle';
    if (type === 'error') icon = 'fa-circle-exclamation';
    if (type === 'success') icon = 'fa-circle-check';

    statusAlert.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;
    statusAlert.classList.remove('hidden');

    alertTimeout = setTimeout(() => {
      statusAlert.classList.add('hidden');
    }, 6000);
  }

  // ==========================================================================
  // 9. Core Analysis Engine
  // ==========================================================================
  btnAnalyze.addEventListener('click', () => {
    const rawContent = resumeText.value.trim();
    if (!rawContent) {
      showAlert('Please paste your resume text or upload a PDF before clicking Analyze.', 'error');
      resumeText.focus();
      return;
    }

    if (rawContent.length < 50) {
      showAlert('Resume content is too short for a meaningful analysis. Please provide more details.', 'error');
      return;
    }

    runAnalysis(rawContent, jobRoleSelect.value);
  });

  function runAnalysis(text, roleKey) {
    const targetRole = ROLE_DEFINITIONS[roleKey];
    if (!targetRole) return;

    // Normalization & Tokenization
    const normalizedText = text.toLowerCase();
    const words = text.split(/\s+/).filter(Boolean);
    const wordCount = words.length;

    // Helper for multi-word and boundary matching
    function containsSkill(haystack, skill) {
      // Escape special characters in skill (e.g., C++, A/B)
      const escaped = skill.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      // If skill contains punctuation or spaces, use word boundary or literal bounds
      const pattern = new RegExp(`(^|[^a-zA-Z0-9_#+])${escaped}([^a-zA-Z0-9_#+]|$)`, 'i');
      return pattern.test(haystack);
    }

    // 1. Detect Role Core Skills
    const detectedCore = [];
    const missingCore = [];
    targetRole.coreSkills.forEach(skill => {
      if (containsSkill(normalizedText, skill)) {
        detectedCore.push(skill);
      } else {
        missingCore.push(skill);
      }
    });

    // 2. Detect Bonus/Additional Tech Skills
    const detectedBonus = [];
    targetRole.bonusSkills.forEach(skill => {
      if (containsSkill(normalizedText, skill)) {
        detectedBonus.push(skill);
      }
    });

    // Cross-role tech skills discovery (discover tech from other domains)
    Object.keys(ROLE_DEFINITIONS).forEach(otherRoleKey => {
      if (otherRoleKey !== roleKey) {
        ROLE_DEFINITIONS[otherRoleKey].coreSkills.forEach(skill => {
          if (!targetRole.coreSkills.includes(skill) && 
              !targetRole.bonusSkills.includes(skill) && 
              !detectedBonus.includes(skill) &&
              containsSkill(normalizedText, skill)) {
            detectedBonus.push(skill);
          }
        });
      }
    });

    // 3. Detect Soft Skills
    const detectedSoft = [];
    SOFT_SKILLS.forEach(skill => {
      if (containsSkill(normalizedText, skill)) {
        detectedSoft.push(skill);
      }
    });

    // 4. Quantified Metrics / Numbers Analysis (Impact Analysis)
    // Matches percentages (e.g., 25%), dollar amounts ($1.2M, $500K), numbers with K/M/B, or standalone metrics
    const metricMatches = text.match(/(\$\s?\d+(?:[.,]\d+)?\s?[kKmMbB]?)|(\d+(?:[.,]\d+)?\s?%)|(\b\d+\s?(?:ms|fps|gb|tb|hours|users|records|requests|services)\b)/gi) || [];
    const metricsCount = metricMatches.length;

    // 5. Action Verbs Detection
    const detectedActionVerbs = [];
    ACTION_VERBS.forEach(verb => {
      if (containsSkill(normalizedText, verb)) {
        detectedActionVerbs.push(verb);
      }
    });

    // 6. Resume Structural Sections Check
    const detectedSections = [];
    STANDARD_SECTIONS.forEach(sec => {
      if (sec.regex.test(text)) {
        detectedSections.push(sec.name);
      }
    });

    // ========================================================================
    // Scoring Calculation (100-Point Weighted Rubric)
    // ========================================================================
    // A. Technical Skill Match (Max 50 points)
    const coreRatio = targetRole.coreSkills.length > 0 ? (detectedCore.length / targetRole.coreSkills.length) : 0;
    const coreScore = Math.min(42, Math.round(coreRatio * 42));
    const bonusScore = Math.min(8, detectedBonus.length * 1.5);
    const techScoreTotal = Math.round(coreScore + bonusScore);

    // B. Soft Skills & Professional Attributes (Max 15 points)
    const softScore = Math.min(15, detectedSoft.length * 3);

    // C. Quantified Impact & Metrics (Max 15 points)
    // 0-1 metrics: 4 pts, 2-3: 9 pts, 4+: 15 pts
    let impactScore = 4;
    if (metricsCount >= 5) impactScore = 15;
    else if (metricsCount >= 3) impactScore = 12;
    else if (metricsCount >= 2) impactScore = 9;
    else if (metricsCount >= 1) impactScore = 6;

    // D. Structure, Section Breadth & Length (Max 20 points)
    let structureScore = 0;
    // Word count sanity: 150-800 words is healthy for a resume page
    if (wordCount >= 200 && wordCount <= 1200) structureScore += 8;
    else if (wordCount >= 100) structureScore += 5;
    
    // Detected sections: up to 12 points (2 points per core section)
    structureScore += Math.min(12, detectedSections.length * 2.5);
    structureScore = Math.round(Math.min(20, structureScore));

    // Total Overall Resume Score
    const finalScore = Math.min(100, Math.max(15, techScoreTotal + softScore + impactScore + structureScore));

    // Render Dashboard with Results
    displayResults({
      roleKey,
      targetRole,
      finalScore,
      detectedCore,
      missingCore,
      detectedBonus,
      detectedSoft,
      metricsCount,
      detectedActionVerbs,
      detectedSections,
      wordCount,
      text
    });
  }

  // ==========================================================================
  // 10. Render Results Dashboard
  // ==========================================================================
  function displayResults(data) {
    const {
      roleKey,
      targetRole,
      finalScore,
      detectedCore,
      missingCore,
      detectedBonus,
      detectedSoft,
      metricsCount,
      detectedActionVerbs,
      detectedSections,
      wordCount,
      text
    } = data;

    // Show Results Section & Scroll Smoothly
    resultsSection.classList.remove('hidden');
    resultsRoleBadge.textContent = `Target Role: ${roleKey}`;
    resultsTimestamp.textContent = `Analyzed on ${new Date().toLocaleTimeString()} - Complete ATS Diagnostic`;

    // 1. Overall Score Ring & Verdict
    animateScoreRing(finalScore);

    let verdictText = 'Needs Improvement';
    let verdictSummary = 'Significant gaps in role-specific keywords. Needs targeted optimization.';
    let verdictColor = '#fb7185';

    if (finalScore >= 85) {
      verdictText = 'Exceptional Match';
      verdictSummary = 'Outstanding alignment with target role standards and ATS parsing benchmarks.';
      verdictColor = '#34d399';
    } else if (finalScore >= 70) {
      verdictText = 'Strong Candidate';
      verdictSummary = 'High keyword match with solid core technical competencies and structure.';
      verdictColor = '#38bdf8';
    } else if (finalScore >= 50) {
      verdictText = 'Competitive Base';
      verdictSummary = 'Foundational skills detected, but crucial tools and metrics are missing.';
      verdictColor = '#fbbf24';
    }

    scoreRatingBadge.textContent = verdictText;
    scoreRatingBadge.style.color = verdictColor;
    scoreRatingBadge.style.borderColor = verdictColor;
    scoreSummary.textContent = verdictSummary;

    // 2. Target Skill Match Card
    const coreTotal = targetRole.coreSkills.length;
    const matchPercent = Math.round((detectedCore.length / coreTotal) * 100);
    detectedSkillsCount.textContent = detectedCore.length;
    roleTotalSkills.textContent = `of ${coreTotal} role benchmarks`;
    matchRateBadge.textContent = `${matchPercent}% Match`;
    skillMatchProgress.style.width = `${Math.min(100, matchPercent)}%`;

    // 3. Impact & Metrics Card
    metricsDetectedCount.textContent = metricsCount;
    let impactText = 'Needs Work';
    let impactProgressPercent = 30;
    if (metricsCount >= 5) {
      impactText = 'High Impact';
      impactProgressPercent = 100;
    } else if (metricsCount >= 3) {
      impactText = 'Moderate';
      impactProgressPercent = 70;
    } else if (metricsCount >= 1) {
      impactText = 'Emerging';
      impactProgressPercent = 45;
    }
    impactRating.textContent = impactText;
    impactProgress.style.width = `${impactProgressPercent}%`;

    // 4. Structure & Sections Card
    sectionsCount.textContent = `${detectedSections.length} / 6`;
    const secProgress = Math.round((detectedSections.length / 6) * 100);
    sectionsRating.textContent = detectedSections.length >= 4 ? 'Standard ATS' : 'Incomplete';
    sectionsProgress.style.width = `${secProgress}%`;

    // 5. Skill Tag Clouds & Counters
    currentDetectedSkills = [
      ...detectedCore.map(s => ({ name: formatSkillName(s), category: 'role' })),
      ...detectedBonus.map(s => ({ name: formatSkillName(s), category: 'bonus' })),
      ...detectedSoft.map(s => ({ name: formatSkillName(s), category: 'soft' }))
    ];

    allSkillsCount.textContent = currentDetectedSkills.length;
    roleMatchCount.textContent = detectedCore.length;
    bonusCount.textContent = detectedBonus.length;
    softSkillsCount.textContent = detectedSoft.length;

    renderDetectedSkills('all');
    renderMissingSkills(missingCore);

    // 6. Strengths Generation
    generateStrengths(data);

    // 7. Suggestions for Improvement
    generateSuggestions(data);

    // 8. Career Recommendations
    generateCareerRecommendations(text, roleKey);

    // Scroll to dashboard smoothly
    resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    showAlert('Resume analysis completed successfully!', 'success');
  }

  // ==========================================================================
  // 11. Animated Radial Progress Ring
  // ==========================================================================
  function animateScoreRing(targetScore) {
    const circumference = 2 * Math.PI * 54; // r = 54 => ~339.29
    scoreRingProgress.style.strokeDasharray = `${circumference}`;
    
    // Calculate target offset
    const offset = circumference - (targetScore / 100) * circumference;
    
    // Choose ring color with neon futuristic palette
    let strokeColor = '#a855f7';
    if (targetScore >= 85) strokeColor = '#34d399';
    else if (targetScore >= 70) strokeColor = '#06b6d4';
    else if (targetScore >= 50) strokeColor = '#fbbf24';
    else strokeColor = '#fb7185';

    scoreRingProgress.style.stroke = strokeColor;
    scoreRingProgress.style.strokeDashoffset = `${offset}`;

    // Number counting animation
    let current = 0;
    const duration = 1200; // ms
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = targetScore / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetScore) {
        current = targetScore;
        clearInterval(timer);
      }
      scoreValue.textContent = Math.round(current);
    }, stepTime);
  }

  // Helper: Format skill capitalization
  function formatSkillName(str) {
    const acronyms = ['sql', 'aws', 'etl', 'r', 'kpi', 'brd', 'frd', 'uml', 'bpmn', 'nlp', 'llms', 'gpu', 'ci/cd', 'oop', 'api', 'rest api', 'orm', 'c++'];
    if (acronyms.includes(str.toLowerCase())) {
      return str.toUpperCase();
    }
    return str.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }

  // ==========================================================================
  // 12. Render Detected Skills with Filter Tabs
  // ==========================================================================
  function renderDetectedSkills(filterCategory = 'all') {
    detectedSkillsContainer.innerHTML = '';
    
    const filtered = filterCategory === 'all'
      ? currentDetectedSkills
      : currentDetectedSkills.filter(item => item.category === filterCategory);

    if (filtered.length === 0) {
      detectedSkillsContainer.innerHTML = `<span style="color:#94a3b8; font-size:0.875rem;"><i class="fa-solid fa-circle-info"></i> No skills found in this category.</span>`;
      return;
    }

    filtered.forEach(skill => {
      const tag = document.createElement('span');
      tag.className = `skill-tag detected-${skill.category}`;
      let icon = 'fa-check';
      if (skill.category === 'bonus') icon = 'fa-star';
      if (skill.category === 'soft') icon = 'fa-heart';

      tag.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${skill.name}</span>`;
      detectedSkillsContainer.appendChild(tag);
    });
  }

  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      renderDetectedSkills(chip.getAttribute('data-filter'));
    });
  });

  // ==========================================================================
  // 13. Render Missing Skills
  // ==========================================================================
  function renderMissingSkills(missingSkills) {
    missingSkillsContainer.innerHTML = '';

    if (missingSkills.length === 0) {
      missingSkillsContainer.innerHTML = `
        <div style="background:#ecfdf5; border:1px solid #a7f3d0; color:#065f46; padding:0.8rem 1rem; border-radius:10px; font-size:0.875rem; width:100%; display:flex; align-items:center; gap:0.5rem;">
          <i class="fa-solid fa-champagne-glasses"></i>
          <strong>Incredible!</strong> You have satisfied all core keywords for this target role!
        </div>
      `;
      return;
    }

    missingSkills.forEach((skill, index) => {
      const tag = document.createElement('span');
      // Highlight the first 4 as high priority
      const isHighPriority = index < 4;
      tag.className = isHighPriority ? 'skill-tag missing-core' : 'skill-tag missing-opt';
      
      const badgeText = isHighPriority ? 'High Priority' : 'Recommended';
      tag.innerHTML = `<i class="fa-solid fa-plus"></i> <span>${formatSkillName(skill)}</span> <small style="opacity:0.75; font-size:0.7rem; margin-left:2px;">(${badgeText})</small>`;
      missingSkillsContainer.appendChild(tag);
    });
  }

  // ==========================================================================
  // 14. Intelligent Strengths Generation
  // ==========================================================================
  function generateStrengths(data) {
    strengthsList.innerHTML = '';
    const strengths = [];

    // Check core skill strength
    if (data.detectedCore.length >= 6) {
      strengths.push({
        icon: 'fa-solid fa-code',
        text: `<strong>Robust Core Competency:</strong> Detected <strong>${data.detectedCore.length} essential tools and technologies</strong> directly requested for the ${data.roleKey} profile.`
      });
    } else if (data.detectedCore.length >= 3) {
      strengths.push({
        icon: 'fa-solid fa-check',
        text: `<strong>Fundamental Tech Stack:</strong> Good presence of staple technologies including <em>${data.detectedCore.slice(0, 3).map(formatSkillName).join(', ')}</em>.`
      });
    }

    // Check Quantified Impact
    if (data.metricsCount >= 3) {
      strengths.push({
        icon: 'fa-solid fa-arrow-trend-up',
        text: `<strong>Quantifiable Business Impact:</strong> Found <strong>${data.metricsCount} quantified metrics</strong> (percentages, currency, scale numbers). Recruiter ATS algorithms heavily favor evidence of measurable results.`
      });
    }

    // Check Action Verbs
    if (data.detectedActionVerbs.length >= 4) {
      strengths.push({
        icon: 'fa-solid fa-bolt',
        text: `<strong>Strong Action-Oriented Phrasing:</strong> Frequent use of leadership and implementation verbs (e.g., <em>${data.detectedActionVerbs.slice(0, 4).join(', ')}</em>), signaling accountability and ownership.`
      });
    }

    // Check Section Coverage
    if (data.detectedSections.length >= 4) {
      strengths.push({
        icon: 'fa-solid fa-table-list',
        text: `<strong>Well-Structured ATS Architecture:</strong> Clear presentation across multiple essential sections: <em>${data.detectedSections.join(', ')}</em>.`
      });
    }

    // Check Soft Skills
    if (data.detectedSoft.length >= 3) {
      strengths.push({
        icon: 'fa-solid fa-people-group',
        text: `<strong>Balanced Interpersonal Capabilities:</strong> Includes key collaborative attributes such as <em>${data.detectedSoft.slice(0, 3).map(formatSkillName).join(', ')}</em>.`
      });
    }

    // Default fallback strength if resume is very sparse
    if (strengths.length === 0) {
      strengths.push({
        icon: 'fa-solid fa-seedling',
        text: `<strong>Clean Starting Foundation:</strong> The resume text provides an identifiable starting framework ready for strategic keyword enhancements.`
      });
    }

    strengths.forEach(item => {
      const li = document.createElement('li');
      li.className = 'strength-item';
      li.innerHTML = `<i class="${item.icon}"></i> <div>${item.text}</div>`;
      strengthsList.appendChild(li);
    });
  }

  // ==========================================================================
  // 15. Intelligent Improvement Suggestions Generation
  // ==========================================================================
  function generateSuggestions(data) {
    suggestionsList.innerHTML = '';
    const suggestions = [];

    // Suggestion 1: Missing critical keywords
    if (data.missingCore.length > 0) {
      const topMissing = data.missingCore.slice(0, 4).map(formatSkillName).join(', ');
      suggestions.push({
        icon: 'fa-solid fa-key',
        text: `<strong>Incorporate High-Demand Keywords:</strong> Explicitly weave in top missing tools: <strong>${topMissing}</strong> in your project bullets or technical summary to pass ATS keyword filters.`
      });
    }

    // Suggestion 2: Quantified impact metrics
    if (data.metricsCount < 3) {
      suggestions.push({
        icon: 'fa-solid fa-calculator',
        text: `<strong>Add Measurable Metrics & Percentages:</strong> Transform descriptive tasks into quantifiable impact. Use the Google "X-Y-Z" formula: <em>Accomplished [X], as measured by [Y], by doing [Z]</em> (e.g., "Reduced query latency by 35%").`
      });
    }

    // Suggestion 3: Missing standard sections
    const standardNames = ['Work Experience', 'Education', 'Projects', 'Skills & Competencies'];
    const missingSections = standardNames.filter(sec => !data.detectedSections.includes(sec));
    if (missingSections.length > 0) {
      suggestions.push({
        icon: 'fa-solid fa-folder-tree',
        text: `<strong>Add Missing Standard Sections:</strong> Ensure distinct section headers for <strong>${missingSections.join(', ')}</strong> so automated parsers correctly categorize your experience.`
      });
    }

    // Suggestion 4: Content length & depth
    if (data.wordCount < 250) {
      suggestions.push({
        icon: 'fa-solid fa-align-left',
        text: `<strong>Expand Bullet Depth (${data.wordCount} words):</strong> Your resume is concise. Consider expanding your work experience with 3-4 bullet points per role highlighting tools used and team outcomes.`
      });
    } else if (data.wordCount > 1000) {
      suggestions.push({
        icon: 'fa-solid fa-scissors',
        text: `<strong>Condense Content for Brevity (${data.wordCount} words):</strong> Resumes exceeding 900 words risk losing recruiter attention. Trim older experience to ensure high-impact recent accomplishments stand out.`
      });
    }

    // Suggestion 5: Soft skills & collaboration
    if (data.detectedSoft.length < 2) {
      suggestions.push({
        icon: 'fa-solid fa-handshake',
        text: `<strong>Highlight Cross-Functional Collaboration:</strong> Mention agile teamwork, stakeholder presentation, or mentoring to demonstrate strong cultural and team fit.`
      });
    }

    // Ensure at least 3 high quality suggestions
    if (suggestions.length < 3) {
      suggestions.push({
        icon: 'fa-solid fa-link',
        text: `<strong>Include Live Project Links:</strong> Add clickable links to your GitHub repositories, deployed web applications, or Tableau/Power BI portfolios to provide verifiable proof of work.`
      });
    }

    suggestions.forEach(item => {
      const li = document.createElement('li');
      li.className = 'suggestion-item';
      li.innerHTML = `<i class="${item.icon}"></i> <div>${item.text}</div>`;
      suggestionsList.appendChild(li);
    });
  }

  // ==========================================================================
  // 16. Career Recommendations Engine
  // ==========================================================================
  function generateCareerRecommendations(text, currentRole) {
    careerRecommendationsGrid.innerHTML = '';
    const normalized = text.toLowerCase();

    function containsSkill(haystack, skill) {
      const escaped = skill.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      const pattern = new RegExp(`(^|[^a-zA-Z0-9_#+])${escaped}([^a-zA-Z0-9_#+]|$)`, 'i');
      return pattern.test(haystack);
    }

    // Comprehensive list of career tracks to evaluate
    const CAREER_TRACKS = [
      {
        id: 'Data Analyst',
        title: 'Data Analyst',
        icon: 'fa-solid fa-chart-pie',
        skills: ROLE_DEFINITIONS['Data Analyst'].coreSkills,
        desc: 'Derives actionable intelligence from datasets using SQL, BI dashboards, and statistical models.'
      },
      {
        id: 'Python Developer',
        title: 'Python Developer',
        icon: 'fa-brands fa-python',
        skills: ROLE_DEFINITIONS['Python Developer'].coreSkills,
        desc: 'Engineers scalable server-side systems, REST APIs, and microservices in Python environments.'
      },
      {
        id: 'Business Analyst',
        title: 'Business Analyst',
        icon: 'fa-solid fa-briefcase',
        skills: ROLE_DEFINITIONS['Business Analyst'].coreSkills,
        desc: 'Aligns business vision with engineering execution through user stories, BPMN, and stakeholder discovery.'
      },
      {
        id: 'AI/ML Engineer',
        title: 'AI/ML Engineer',
        icon: 'fa-solid fa-brain',
        skills: ROLE_DEFINITIONS['AI/ML Engineer'].coreSkills,
        desc: 'Constructs predictive models, deep neural networks, and generative AI systems with PyTorch/TensorFlow.'
      },
      {
        id: 'Data Engineer',
        title: 'Data Engineer',
        icon: 'fa-solid fa-database',
        skills: ['python', 'sql', 'etl', 'spark', 'docker', 'postgresql', 'bigquery', 'data modeling', 'git', 'aws', 'ci/cd'],
        desc: 'Builds robust data pipelines, scalable storage architectures, and automated ingestion workflows.'
      },
      {
        id: 'BI Developer',
        title: 'BI & Analytics Developer',
        icon: 'fa-solid fa-chart-line',
        skills: ['tableau', 'power bi', 'sql', 'excel', 'data visualization', 'dashboards', 'reporting', 'etl', 'kpi'],
        desc: 'Specializes in executive dashboard design, data warehousing schemas, and business reporting tools.'
      }
    ];

    // Calculate match percentage for every track
    const evaluatedTracks = CAREER_TRACKS.map(track => {
      const matched = track.skills.filter(s => containsSkill(normalized, s));
      const percentage = Math.min(100, Math.round((matched.length / track.skills.length) * 100));
      return {
        ...track,
        matched,
        percentage
      };
    });

    // Sort by highest percentage match
    evaluatedTracks.sort((a, b) => b.percentage - a.percentage);

    // Render top 4 tracks
    const topTracks = evaluatedTracks.slice(0, 4);

    topTracks.forEach(track => {
      const card = document.createElement('div');
      const isTarget = track.title === currentRole;
      card.className = `career-role-card ${isTarget ? 'highlighted-role' : ''}`;

      const matchTier = track.percentage >= 60 ? 'high' : 'medium';
      const badgeText = isTarget ? `Target (${track.percentage}%)` : `${track.percentage}% Fit`;

      const displayMatched = track.matched.slice(0, 4).map(formatSkillName);

      card.innerHTML = `
        <div>
          <div class="career-card-top">
            <div class="career-icon">
              <i class="${track.icon}"></i>
            </div>
            <span class="career-match-badge ${matchTier}">${badgeText}</span>
          </div>
          <h4 class="career-title">${track.title}</h4>
          <p class="career-desc">${track.desc}</p>
        </div>
        <div class="career-skills-overlap">
          <span class="overlap-label">Matching Skills Found:</span>
          <div class="overlap-tags">
            ${displayMatched.length > 0 
              ? displayMatched.map(s => `<span class="overlap-pill">${s}</span>`).join('') 
              : '<span class="overlap-pill">Entry Level Pathway</span>'}
          </div>
        </div>
      `;

      careerRecommendationsGrid.appendChild(card);
    });
  }

  // ==========================================================================
  // 17. Reset / Clear All
  // ==========================================================================
  btnClearAll.addEventListener('click', () => {
    // Reset sample pills active state
    sampleButtons.forEach(b => b.classList.remove('active'));

    // Reset inputs
    resumeText.value = '';
    updateWordCount();
    pdfFileInput.value = '';
    dropzoneStatus.classList.add('hidden');
    dropzoneDefault.classList.remove('hidden');

    // Reset Dropdown
    jobRoleSelect.value = 'Data Analyst';
    updateRolePreview();

    // Hide results section
    resultsSection.classList.add('hidden');
    currentDetectedSkills = [];

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showAlert('All resume inputs and analysis have been reset.', 'info');
  });

  // ==========================================================================
  // 18. Print / Save Report
  // ==========================================================================
  btnPrintReport.addEventListener('click', () => {
    window.print();
  });

});

