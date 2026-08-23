import { ProfileData } from '../types';

export function generateMarkdown(profile: ProfileData): string {
  const {
    githubUsername,
    fullName,
    subtitle1,
    subtitle2,
    subtitle3,
    greetingTitle,
    aboutMeTitle,
    infoBlocks,
    techCategories,
    featuredProjects,
    milestones,
    activeMission,
    dailyQuote,
    socials,
  } = profile;

  // Build Shields.io tech badges per category
  const techStackRows = techCategories.map((cat) => {
    const badges = cat.items.map((item) => {
      const bg = item.bgHex || '0D1117';
      const text = item.textHex || 'white';
      const logo = item.logo ? `&logo=${encodeURIComponent(item.logo)}` : '';
      const encodedName = encodeURIComponent(item.name.replace(/-/g, '--').replace(/_/g, '__'));
      return `![${item.name}](https://img.shields.io/badge/${encodedName}-${bg}?style=for-the-badge${logo}&logoColor=${text})`;
    }).join(' ');

    return `| **${cat.category}** | ${badges} |`;
  }).join('\n');

  // Build Info blocks (3x2 or grid format using HTML table for perfect GitHub rendering)
  const infoBlockCells = infoBlocks.map((b) => `
  <td width="33%" valign="top">
    <h3>${b.icon} ${b.title}</h3>
    <p>${b.description}</p>
  </td>`).join('');

  // Chunk info blocks into rows of 3
  let infoTable = '<table width="100%">\n<tr>';
  infoBlocks.forEach((b, idx) => {
    if (idx > 0 && idx % 3 === 0) {
      infoTable += '\n</tr>\n<tr>';
    }
    infoTable += `
  <td width="33%" valign="top">
    <h4>${b.icon} ${b.title}</h4>
    <p>${b.description}</p>
  </td>`;
  });
  infoTable += '\n</tr>\n</table>';

  // Build Featured Projects HTML Grid
  let projectsTable = '<table width="100%">\n<tr>';
  featuredProjects.forEach((proj, idx) => {
    if (idx > 0 && idx % 2 === 0) {
      projectsTable += '\n</tr>\n<tr>';
    }
    const tagsBadges = proj.tags.map(t => `<code>${t}</code>`).join(' ');
    projectsTable += `
  <td width="50%" valign="top">
    <h4>${proj.icon} <a href="${proj.repoUrl}">${proj.title}</a></h4>
    <p>${proj.description}</p>
    <p>${tagsBadges}</p>
    <p>👉 <a href="${proj.repoUrl}"><b>View Repository</b></a></p>
  </td>`;
  });
  projectsTable += '\n</tr>\n</table>';

  // Milestone checklist
  const milestoneList = milestones.map((m) => {
    const check = m.status === 'completed' ? '[x]' : m.status === 'in_progress' ? '[/]' : '[ ]';
    const statusLabel = m.status === 'completed' ? 'Completed' : m.status === 'in_progress' ? 'In Progress' : 'Future';
    return `- ${check} **${statusLabel}**: ${m.title} — *${m.description}*`;
  }).join('\n');

  // Snake Contribution Grid URL dynamically configured with Platane/snk@v3 output and assets fallback
  const snakeHtml = `<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/${githubUsername}/${githubUsername}/output/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/${githubUsername}/${githubUsername}/output/github-contribution-grid-snake.svg">
  <img alt="GitHub Contribution Grid Snake" src="https://raw.githubusercontent.com/${githubUsername}/${githubUsername}/main/assets/github-contribution-grid-snake-dark.svg" width="100%" />
</picture>`;

  // Visitor counter badge
  const visitorBadge = `![Visitor Count](https://komarev.com/ghpvc/?username=${githubUsername}&color=007ec6&style=flat-square)`;

  return `<div align="center">

# ${fullName}

\`\`\`
${subtitle1}
${subtitle2}
${subtitle3}
\`\`\`

---

</div>

<div align="center">
  <table border="1" cellpadding="10">
    <tr>
      <td>👋 <b>${greetingTitle}</b></td>
    </tr>
  </table>
</div>

<br />

<div align="center">
  <table border="1" cellpadding="10">
    <tr>
      <td>👤 <b>${aboutMeTitle}</b></td>
    </tr>
  </table>
</div>

<br />

${infoTable}

<br />

<div align="center">
  <table border="1" cellpadding="10">
    <tr>
      <td>🎛️ <b>Tech Stack</b></td>
    </tr>
  </table>
</div>

<br />

| Category | Skills & Tools |
| :--- | :--- |
${techStackRows}

<br />

<div align="center">
  <table border="1" cellpadding="10">
    <tr>
      <td>🐍 <b>Contribution Snake</b></td>
    </tr>
  </table>
</div>

<br />

<div align="center">
  ${snakeHtml}
</div>

<br />

<div align="center">
  <table border="1" cellpadding="10">
    <tr>
      <td>📁 <b>Featured Projects</b></td>
    </tr>
  </table>
</div>

<br />

${projectsTable}

<br />

<div align="center">
  <table border="1" cellpadding="10">
    <tr>
      <td>🏆 <b>Achievements & Milestones</b></td>
    </tr>
  </table>
</div>

<br />

<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&rank_icon=github&border_radius=8" alt="${fullName}'s GitHub Stats" width="48%" />
  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark&border_radius=8" alt="${fullName}'s Streak Stats" width="48%" />
</div>

<br />

### 📌 Milestone Journey

${milestoneList}

<br />

<div align="center">
  <table>
    <tr>
      <td align="center">🚀 <b>${activeMission.status}</b></td>
      <td align="center">🎯 <b>${activeMission.progressPercent}% Progress</b></td>
      <td align="center">💻 <b>${activeMission.systemsBuilt} Systems Built</b></td>
      <td align="center">💡 <b>${activeMission.nextGoal}</b></td>
    </tr>
  </table>
</div>

<br />

<div align="center">
  <table border="1" cellpadding="10">
    <tr>
      <td>💬 <b>Daily Inspiration</b></td>
    </tr>
  </table>
</div>

> *"_${dailyQuote.quote}_"*
> — **${dailyQuote.author}**

<br />

<div align="center">
  <table border="1" cellpadding="10">
    <tr>
      <td>🔗 <b>Let's Connect</b></td>
    </tr>
  </table>
</div>

<p align="center">
  <a href="${socials.github}">
    <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="${socials.linkedin}">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="mailto:${socials.email}">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" alt="Email" />
  </a>
</p>

<p align="center">
  <b>Open to collaborations, discussions, and new opportunities.</b>
</p>

---

<div align="center">

### Thanks for visiting.

${visitorBadge}

*Crafted with code and curiosity*

</div>
`;
}
