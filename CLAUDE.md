CLAUDE  ## Standard Workflow
1. **Planning:**
- First, carefully think through the problem and review the relevant files in the codebase.
- Write a plan in `tasks/todo.md`.
- The plan should contain a checklist of items that can be marked as complete as you progress.

2. **Verification:**
- Share the plan with me before starting work so I can approve it.

3. **Execution:**
- Complete the tasks step by step, marking them as done.
- After each change, provide a short, high-level explanation of what was done.

4. **Simplicity:**
- Keep every change as small and simple as possible.
- Avoid massive or complex refactoring unless absolutely necessary to solve the problem.

5. **Finalization:**
- At the end, add a **Review** section to `tasks/todo.md` summarizing the changes made and any additional notes.

---

## Documentation & Library References

### Context7 Integration
- **Context7 MCP Server** is installed and configured to provide up-to-date documentation for libraries and frameworks.
- **Always use context7** when working with external libraries to ensure you're using the latest APIs and best practices.

### When to Use Context7
- **Before implementing features** that use external libraries (React, Next.js, Node.js packages, etc.)
- **When debugging issues** related to library usage to verify correct API usage
- **When updating dependencies** to check for API changes in new versions

### Usage Examples
- "Use context7 to show me how to implement authentication with NextAuth"
- "Using context7, explain the latest Next.js app router patterns"
- "Help me with React Server Components using context7"
- "Use context7 to show proper TypeScript types for this library"

### Benefits
- **Prevents outdated code:** Ensures implementation uses current, non-deprecated APIs
- **Reduces errors:** Avoids hallucinated or incorrect method names
- **Improves code quality:** Follows the latest best practices from official documentation
- **Version-aware:** Gets documentation specific to the versions used in this project

---

## Quality & Testing Guidelines
- **Automated and Manual Testing:**  
  Before confirming that a task is complete, perform as many tests as possible:
    - Call any modified endpoints and verify their responses.
    - Test calculations and logic with unit tests or manual checks.
    - Run a basic end-to-end scenario if the change affects UI or API flows.

- **No Leftover Debugging:**
    - Do not leave `console.log`, `debugger`, or temporary comments in the code unless I specifically ask you to keep them.

- **Security Review:**
    - Ensure the code is secure against common vulnerabilities (SQL injection, XSS, CSRF, unsafe token handling).
    - Backend: verify authorization and access control.
    - Frontend: ensure data is properly escaped and DOM operations are safe.

- **Code Quality:**
    - Follow the project’s linting and formatting rules.
    - Write code that is easy to read and maintain.
    - Add minimal tests for new functionality where possible.

---

## Additional Recommendations
- **Preview Results:** When possible, provide a screenshot, JSON response, or short example to demonstrate the change.
- **Edge Case Awareness:** Test edge cases such as empty arrays, null values, or API failures to avoid regressions.
- **Impact Assessment:** Consider whether the change might break other parts of the system and test those areas if relevant.
- **Documentation:** Add or update comments if the change modifies core logic so that future developers can quickly understand it.

---

## Continuous Improvement
- **Learn from Mistakes:** After completing a task, review any errors, bugs, or issues found during testing.
- **Prompt Refinement:** Adjust and improve prompts based on what worked and what caused problems to reduce future errors.
- **Retrospective:** Keep a short record of what was done well and what could be improved in future iterations.
- **Knowledge Sharing:** If a problem was tricky, add a note or comment in the codebase or documentation so others (and future you) can benefit from the solution.
- **Automation:** Gradually add automated tests and checks for recurring issues to catch them earlier next time.  

