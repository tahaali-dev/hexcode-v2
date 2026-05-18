"use server";

import issuesData from '../../data/audit-issues.json';

export async function fetchAuditData(password: string) {
  // Simulating a minor delay to prevent brute-forcing and show loading states if needed
  await new Promise(resolve => setTimeout(resolve, 400));
  
  if (password === "HEX-ZS-2026") {
    return { success: true, data: issuesData };
  }
  
  return { success: false, data: null };
}
