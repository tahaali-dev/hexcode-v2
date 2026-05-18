const fs = require('fs');
const html = fs.readFileSync('code-review-report.html', 'utf-8');

const prdRegex = /<div class="prd-section">([\s\S]*?)<\/div>\s*<div class="stats-outer">/g;
const prdMatch = prdRegex.exec(html);

console.log(prdMatch ? prdMatch[1] : 'No PRD match');
