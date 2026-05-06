const app = document.querySelector('#app')

const projects = [
  {
    id: 1,
    title: 'FIX_MY_CITY',
    desc: 'A comprehensive municipal grievance management platform with interactive mapping.',
    tags: ['NODE.JS', 'MONGODB', 'LEAFLET','PYTHON'],
    year: '2026',
    link: 'https://github.com/vivekanandp1190/fix-my-city'
  },
  {
    id: 2,
    title: 'LIVE-CODERZ',
    desc: 'Live-Coderzz is a real-time collaborative code editor that allows developers to write and sync code simultaneously. It is built to explore the power of WebSockets and real-time data synchronization, providing a seamless "Google Docs" experience for coding.',
    tags: ['REACT', 'MONGODB', 'SOCKET.IO','DOCKER'],
    year: '2026',
    link: 'https://github.com/vivekanandp1190/live-coderz'
  },
  {
    id: 3,
    title: 'REAL-TIME-LOCATION-TRACKING',
    desc: 'LiveTrack is a powerful, real-time location-sharing platform designed for collaborative movement tracking and group coordination. Built with Node.js, Express, and Socket.io, it provides a seamless, interactive mapping experience.',
    tags: ['NODE.JS', 'EXPRESS', 'SOCKET.IO'],
    year: '2025',
    link: 'https://github.com/vivekanandp1190/real-time-location-tracking'
  },
  {
    id: 4,
    title: 'More projects',
    desc: 'coming soon',
    tags: [],
    year: '----',
    link: 'https://github.com/Vivekanand1190'
  }
]

const skills = [
  'C', 'C++', 'C#', 'JavaScript', 'Python', 'HTML5', 'CSS3', 
  'React', 'Next.js', 'Node.js', 'Express', 'Sass', 'Bootstrap', 
  'Vite', 'Supabase', 'MongoDB', 'Firebase', 'Google Cloud', 'Shadcn/ui'
]

app.innerHTML = `
  <section id="home" class="hero border-b">
    <div class="hero-sub border-all">FULL-STACK DEVELOPER</div>
    <h1>HI, WELCOME<br>TO MY<br>PORTFOLIO</h1>
    <p class="mono" style="max-width: 400px; margin-top: 2rem;">
      [SYSTEM_INFO]: P VIVEKANAND. Currently learning full-stack development, 
      building projects, and exploring new technologies.
    </p>
  </section>

  <div class="marquee border-b">
    <div class="marquee-content">
      LEARNING_FULL_STACK // SOLVING_PROBLEMS // BUILDING_PROJECTS // EXPLORING_TECH // 
      LEARNING_FULL_STACK // SOLVING_PROBLEMS // BUILDING_PROJECTS // EXPLORING_TECH // 
      LEARNING_FULL_STACK // SOLVING_PROBLEMS // BUILDING_PROJECTS // EXPLORING_TECH // 
    </div>
  </div>

  <section id="about" class="content-section border-b">
    <h2 class="section-title border-b" style="margin: -4rem -2rem 4rem -2rem;">ABOUT_ME</h2>
    <div class="about-text">
      I AM A FULL-STACK DEVELOPER IN TRAINING. 
      I ENJOY SOLVING PROBLEMS AND BUILDING SCALABLE DIGITAL SOLUTIONS. 
      CURRENTLY EXPLORING THE DEPTHS OF WEB TECHNOLOGIES AND MODERN ARCHITECTURES.
    </div>
  </section>

  <section id="skills" class="content-section border-b">
    <h2 class="section-title border-b" style="margin: -4rem -2rem 4rem -2rem;">TECH_STACK</h2>
    <div class="skills-grid">
      ${skills.map(s => `<div class="skill-box">${s}</div>`).join('')}
    </div>
  </section>

  <section id="projects">
    <h2 class="section-title border-b">SELECTED_WORKS</h2>
    <div class="grid">
      ${projects.map(p => `
        ${p.link
          ? `<a class="project-card border-b border-r" href="${p.link}" target="_blank" rel="noopener noreferrer" data-id="${p.id}">`
          : `<div class="project-card border-b border-r" data-id="${p.id}">`
        }
          <div class="mono" style="margin-bottom: 1rem;">[${p.year}]</div>
          <h3>${p.title}</h3>
          <p class="mono" style="margin-bottom: 2rem;">${p.desc}</p>
          <div class="project-tags">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          ${p.link ? '<div class="card-link-hint mono">[ OPEN ↗ ]</div>' : ''}
        ${p.link ? '</a>' : '</div>'}
      `).join('')}
    </div>
  </section>
`

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault()
    const targetId = this.getAttribute('href')
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    })
  })
})
