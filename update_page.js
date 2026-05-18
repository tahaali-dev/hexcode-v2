const fs = require('fs');

const pageContent = `"use client";

import React, { useState } from 'react';
import styles from './report.module.css';
import issuesData from '../data/audit-issues.json';
import { DashedContainer } from '../Components/Containers';

type Issue = {
  severity: string;
  category: string;
  title: string;
  impact: string;
  problem: string;
  recommendation: string;
};

const CATEGORIES = [
  "Accessibility",
  "Architecture",
  "Backend",
  "Cart / Checkout",
  "Code Quality",
  "Database",
  "Dependencies",
  "Frontend",
  "Performance",
  "Security"
];

export default function AuditReportPage() {
  const issues = issuesData as Issue[];
  
  const [expandedIssue, setExpandedIssue] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [severityFilter, setSeverityFilter] = useState("ALL");
  const [categoryFilter, setCategoryFilter] = useState("ALL");

  const toggleIssue = (id: string) => {
    setExpandedIssue(prev => (prev === id ? null : id));
  };

  const filteredIssues = issues.filter(issue => {
    const matchesSearch = issue.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          issue.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          issue.impact.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSeverity = severityFilter === "ALL" || issue.severity === severityFilter;
    const matchesCategory = categoryFilter === "ALL" || issue.category === categoryFilter;

    return matchesSearch && matchesSeverity && matchesCategory;
  });

  const critical = filteredIssues.filter(i => i.severity === 'CRITICAL');
  const high = filteredIssues.filter(i => i.severity === 'HIGH');
  const medium = filteredIssues.filter(i => i.severity === 'MEDIUM');
  const low = filteredIssues.filter(i => i.severity === 'LOW');

  // Stats use original un-filtered array
  const totalCritical = issues.filter(i => i.severity === 'CRITICAL').length;
  const totalHigh = issues.filter(i => i.severity === 'HIGH').length;
  const totalMedium = issues.filter(i => i.severity === 'MEDIUM').length;
  const totalLow = issues.filter(i => i.severity === 'LOW').length;

  const renderIssueList = (title: string, list: Issue[], severityClass: string, prefix: string) => {
    if (list.length === 0) return null;
    return (
      <div className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>{title}</h2>
          <div className={`${styles.sectionLine} ${styles['line'+severityClass]}`}></div>
          <span className={styles.statLabel}>{list.length} issues</span>
        </div>
        <div className={styles.issueList}>
          {list.map((issue, idx) => {
            const id = \`\${prefix}-\${idx}\`;
            const isExpanded = expandedIssue === id;

            return (
              <div key={idx} className={\`\${styles.issueCard} \${isExpanded ? styles.expanded : ''}\`}>
                <div className={styles.issueHeader} onClick={() => toggleIssue(id)}>
                  <span className={\`\${styles.sevBadge} \${styles[severityClass]}\`}>
                    {issue.severity}
                  </span>
                  <div className={styles.issueTitleBlock}>
                    <div className={styles.issueTitle}>{issue.title}</div>
                    <div className={styles.issueMeta}>
                      <span className={styles.catChip}>{issue.category}</span>
                    </div>
                  </div>
                  <span className={\`\${styles.chevron} \${isExpanded ? styles.chevronOpen : ''}\`}>
                    &#9660;
                  </span>
                </div>
                
                {isExpanded && (
                  <div className={styles.issueContent}>
                    <div className={styles.impactBox}>
                      <span className={styles.impactIcon}>&#9888;</span>
                      <div className={styles.impactText}>
                        <strong>Website Impact:</strong> <span dangerouslySetInnerHTML={{ __html: issue.impact }} />
                      </div>
                    </div>
                    <div className={styles.problemSection}>
                      <h4>Problem</h4>
                      <p dangerouslySetInnerHTML={{ __html: issue.problem }} />
                    </div>
                    <div className={styles.recSection}>
                      <h4>Our Recommendation</h4>
                      <p dangerouslySetInnerHTML={{ __html: issue.recommendation }} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <DashedContainer leftBottom rightBottom>
      <div className={styles.container}>
        <header className={styles.hero}>
          <div className={styles.heroEyebrow}>Technical Audit Report &middot; May 2026</div>
          <h1 className={styles.heroTitle}>ZiShop <span>E-Commerce</span> Platform</h1>
          <p className={styles.heroSubtitle}>
            Senior Developer Code Review aligned with client PRD requirements. {issues.length} findings across Security, Architecture, Performance, and Code Quality &mdash; each mapped to the PRD target stack and real website impact.
          </p>
        </header>

        <div className={styles.narrative}>
          <h2>Our Audit Story &mdash; What We Found When We Opened the Codebase</h2>
          <p>When our team first opened the ZiShop codebase, the overall structure told a familiar story: a motivated developer who moved fast, shipped features, and deferred hardening for later. The architecture is sound in its intent &mdash; a Next.js storefront connected to Sanity CMS with Redux for state. But as we peeled back each layer, we found that &ldquo;later&rdquo; had arrived before the foundations were ready.</p>
          <p>The most immediate concern was not a styling inconsistency or a performance gap &mdash; it was a fundamental authentication bypass. A single error condition on the sign-up flow, if triggered deliberately, grants any visitor full authenticated access without a real account. Alongside this, the Sanity CMS write token is embedded in every page&rsquo;s JavaScript bundle, visible to any curious customer who opens DevTools.</p>
          <p>Moving into the commerce layer, we discovered the checkout flow does not exist. &ldquo;Place Order&rdquo; routes customers back to the homepage. The cart never clears after checkout. The search bar accepts input but returns nothing. These are not minor gaps &mdash; they are the core transactions the platform exists to perform.</p>
          <p>None of this is irreversible. Every finding maps to a clear strategic path forward. The PRD migration to Next.js 14, Auth.js, PostgreSQL with Prisma, and Zustand addresses the majority of architectural concerns at the root. This report prioritises the path from here to a production-ready platform.</p>
        </div>

        <div className={styles.prdSection}>
          <div className={styles.prdSectionHead}><h3>PRD Alignment &mdash; Target Stack vs Current State</h3></div>
          <table className={styles.prdTable}>
            <thead>
              <tr><th>PRD Requirement</th><th>Current State</th><th>Gap Summary</th></tr>
            </thead>
            <tbody>
              <tr><td>Next.js 14 + App Router</td><td>Next.js 12.1.6 (Pages Router)</td><td className={styles.prdGap}>3 major versions behind &mdash; App Router unavailable</td></tr>
              <tr><td>Auth.js (NextAuth v5)</td><td>Custom JWT, 30-day expiry</td><td className={styles.prdGap}>Auth bypass vulnerability, no session revocation</td></tr>
              <tr><td>PostgreSQL + Prisma ORM</td><td>Sanity used as user database</td><td className={styles.prdGap}>No relational DB, no migration infrastructure</td></tr>
              <tr><td>Stripe with Webhooks</td><td>No checkout flow exists</td><td className={styles.prdGap}>Commerce is entirely non-operational</td></tr>
              <tr><td>TypeScript Strict Mode</td><td>Loose mode, err: any everywhere</td><td className={styles.prdGap}>Strict mode not enabled, type safety absent</td></tr>
              <tr><td>Zustand for client state</td><td>Redux Toolkit</td><td className={styles.prdGap}>Cart never clears due to Immer no-op bug</td></tr>
              <tr><td>React Query v5 (TanStack)</td><td>react-query v3, unused</td><td className={styles.prdGap}>No server state management whatsoever</td></tr>
              <tr><td>Sanity CMS (current SDK)</td><td>@sanity/client v3.3.0</td><td className={styles.prdGap}>3 major versions behind, API compatibility risk</td></tr>
            </tbody>
          </table>
        </div>

        <div className={styles.statsGrid}>
          <div className={\`\${styles.statCard} \${styles.critical}\`} onClick={() => setSeverityFilter('CRITICAL')}>
            <div className={styles.statNum}>{totalCritical}</div>
            <div className={styles.statLabel}>Critical</div>
          </div>
          <div className={\`\${styles.statCard} \${styles.high}\`} onClick={() => setSeverityFilter('HIGH')}>
            <div className={styles.statNum}>{totalHigh}</div>
            <div className={styles.statLabel}>High</div>
          </div>
          <div className={\`\${styles.statCard} \${styles.medium}\`} onClick={() => setSeverityFilter('MEDIUM')}>
            <div className={styles.statNum}>{totalMedium}</div>
            <div className={styles.statLabel}>Medium</div>
          </div>
          <div className={\`\${styles.statCard} \${styles.low}\`} onClick={() => setSeverityFilter('LOW')}>
            <div className={styles.statNum}>{totalLow}</div>
            <div className={styles.statLabel}>Low</div>
          </div>
        </div>

        <div className={styles.controlsBar}>
          <div className={styles.searchBox}>
            <input 
              type="text" 
              placeholder="Search issues..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className={styles.filterGroup}>
            <button className={\`\${styles.filterBtn} \${severityFilter === 'ALL' ? styles.active : ''}\`} onClick={() => setSeverityFilter('ALL')}>All</button>
            <button className={\`\${styles.filterBtn} \${severityFilter === 'CRITICAL' ? styles.activeCrit : ''}\`} onClick={() => setSeverityFilter('CRITICAL')}>Critical</button>
            <button className={\`\${styles.filterBtn} \${severityFilter === 'HIGH' ? styles.activeHigh : ''}\`} onClick={() => setSeverityFilter('HIGH')}>High</button>
            <button className={\`\${styles.filterBtn} \${severityFilter === 'MEDIUM' ? styles.activeMed : ''}\`} onClick={() => setSeverityFilter('MEDIUM')}>Medium</button>
            <button className={\`\${styles.filterBtn} \${severityFilter === 'LOW' ? styles.activeLow : ''}\`} onClick={() => setSeverityFilter('LOW')}>Low</button>
          </div>
          <div className={styles.filterGroup}>
            <select 
              className={styles.categorySelect} 
              value={categoryFilter} 
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="ALL">All Categories</option>
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <span className={styles.resultsCount}>{filteredIssues.length} issues</span>
        </div>

        <main className={styles.main}>
          {filteredIssues.length === 0 ? (
            <div className={styles.noResults}>No issues found matching your filters.</div>
          ) : (
            <>
              {renderIssueList('Critical Issues', critical, 'critical', 'crit')}
              {renderIssueList('High Priority Issues', high, 'high', 'high')}
              {renderIssueList('Medium Priority Issues', medium, 'medium', 'med')}
              {renderIssueList('Low Priority Issues', low, 'low', 'low')}
            </>
          )}
        </main>
      </div>
    </DashedContainer>
  );
}
`;

fs.writeFileSync('src/app/audit-report/page.tsx', pageContent);
