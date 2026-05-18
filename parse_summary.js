const fs = require('fs');
const html = fs.readFileSync('code-review-report.html', 'utf-8');

const narrativeRegex = /<div class="narrative">([\s\S]*?)<\/div>\s*<div class="prd-section">/g;
const narrativeMatch = narrativeRegex.exec(html);

console.log(narrativeMatch ? narrativeMatch[1] : 'No narrative match');
