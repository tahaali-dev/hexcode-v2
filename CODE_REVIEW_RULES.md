# Code Review & PR Automation Rules

## 🎯 Objective & Description
This document establishes the strict operational guidelines for the AI Agent when performing code reviews, applying optimizations, and managing the Git/PR workflow. The goal is to assist developers by ensuring code quality, syntax correctness, and security without disrupting existing functionality or design choices.

---

## 🛑 STRICT CONSTRAINTS (Never Violate)
1. **NO Layout or Styling Changes**: 
   - Never change any layouts, CSS, or UI stylings unless explicitly specified by the user.
2. **NO Logic/Function Alterations**: 
   - Never change working functions or core business logic just for the sake of "cleaner code".
3. **Optimizations (Ask First)**: 
   - If an optimization is identified, the agent **must not** apply it autonomously.
   - The agent must **propose the changes** to the user first.
   - The agent can only implement the changes **after the user has reviewed and accepted** the proposal.

---

## 🛠️ Phase 1: Code Review Guidelines
When requested to review code, the agent must inspect changes for the following criteria:

### 1. Errors & Bugs (Check First)
- **TypeScript Safety**: Fix actual type errors and mismatches.
- **Logic Flaws**: Identify edge cases, null/undefined pointer risks, and unhandled exceptions.

### 2. Syntax & Style
- **Clean Code**: Point out unused imports or dead code (but ask before removing if it belongs to working logic).

---

## 🚀 Phase 2: Execution & Git Workflow
1. **Apply Approved Changes**: Execute only the fixes/optimizations explicitly approved by the user.
2. **Verify**:
   - Run the local build command to ensure no breaking changes.
   ```bash
   npm run build
   ```
3. **Commit & Push**:
   - Stage relevant changes.
   - Commit with clear, conventional messages.
   - Push to the feature branch.
4. **Pull Request (PR)**:
   - Create or update the PR to the target branch.

---

## 💻 How It Runs
Invoke with: *"Review my changes on branch X according to CODE_REVIEW_RULES.md"*
