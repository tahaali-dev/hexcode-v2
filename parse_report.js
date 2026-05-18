const fs = require('fs');
const html = fs.readFileSync('code-review-report.html', 'utf-8');

// Use regex to extract issues
const issues = [];
const issueRegex = /<div class="issue-card" data-sev="([^"]+)" data-cat="([^"]+)">[\s\S]*?<div class="issue-title">([^<]+)<\/div>[\s\S]*?<div class="impact-text"><strong>Website Impact:<\/strong> (.*?)<\/div>[\s\S]*?<div class="body-section"><h4>Problem<\/h4><p>(.*?)<\/p><\/div>[\s\S]*?<div class="rec-box"><h4>Our Recommendation<\/h4><p>(.*?)<\/p><\/div>/g;

let match;
while ((match = issueRegex.exec(html)) !== null) {
  issues.push({
    severity: match[1],
    category: match[2],
    title: match[3],
    impact: match[4],
    problem: match[5],
    recommendation: match[6]
  });
}

fs.writeFileSync('src/app/data/audit-issues.json', JSON.stringify(issues, null, 2));
console.log('Extracted ' + issues.length + ' issues');
