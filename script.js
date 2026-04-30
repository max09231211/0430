const skillsData = {
    academicResearch: ["Syntax & X-bar Theory", "Sociolinguistics", "Discourse Analysis", "Pragmatics"],
    languages: ["Mandarin Chinese (Native)", "English (Advanced)", "Spanish (Intermediate)", "Japanese (Beginner)"],
    professional: ["Project Management", "Cross-departmental Communication", "Event Planning", "Content Strategy"],
    techAndTools: ["Python", "Generative AI Applications", "Document Formatting", "Microsoft Office Suite"]
};

const coursesData = [
    { name: "語法學 (Syntax)", semester: "Junior", skills: "X-bar Theory, Generative Grammar", desc: "運用 X-bar 理論進行嚴謹的樹狀圖結構分析與論旨角色判定。" },
    { name: "社會語言學 & 言談分析", semester: "Junior", skills: "Pragmatics, Discourse Analysis", desc: "分析語言在社會情境中的運用，具備剖析網路流行文本語用學意涵的能力。" },
    { name: "Python 生成式 AI 實作", semester: "Junior", skills: "Python, Prompt Engineering", desc: "學習 Python 基礎與 AI 工具實務應用，培養跨領域技術邏輯。" }
];

const projectsData = [
    { name: "台北捷運實習專案", meta: "Metro Taipei Internship", desc: "於中運量運輸處參與實務運作，將嚴謹邏輯應用於現場挑戰與跨部門協作。" },
    { name: "「笑死」言談分析研究", meta: "Sociolinguistics Research", desc: "針對台灣流行網路用語進行深度剖析，探討其在不同情境下的語用功能。" },
    { name: "Harvard Camp 活動統籌", meta: "Event Leadership", desc: "負責高中生營隊之時程管理與人員統籌，展現優秀的領導力與溝通邊界感。" }
];

// --- 渲染邏輯 ---
document.addEventListener('DOMContentLoaded', () => {
    renderSkills();
    renderCourses();
    renderProjects();
    initNav();
});

function renderSkills() {
    const grid = document.getElementById('skills-grid');
    const titles = { academicResearch: "學術研究", languages: "語言能力", professional: "實務經驗", techAndTools: "技術工具" };
    
    let html = '';
    for (const key in skillsData) {
        html += `<div class="skill-category">
            <h3>${titles[key]}</h3>
            <div class="skill-tags">
                ${skillsData[key].map(s => `<span class="tag">${s}</span>`).join('')}
            </div>
        </div>`;
    }
    grid.innerHTML = html;
}

function renderCourses() {
    const container = document.getElementById('courses-container');
    container.innerHTML = coursesData.map(c => `
        <div class="card">
            <div class="card-meta">${c.semester} | ${c.skills}</div>
            <h3>${c.name}</h3>
            <p class="card-desc">${c.desc}</p>
        </div>
    `).join('');
}

function renderProjects() {
    const container = document.getElementById('projects-container');
    container.innerHTML = projectsData.map(p => `
        <div class="card">
            <div class="card-meta">${p.meta}</div>
            <h3>${p.name}</h3>
            <p class="card-desc">${p.desc}</p>
        </div>
    `).join('');
}

function initNav() {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', !isExpanded);
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('is-active');
    });

    // 點擊後收合
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.setAttribute('aria-expanded', 'false');
            navLinks.classList.remove('active');
            menuToggle.classList.remove('is-active');
        });
    });
}
