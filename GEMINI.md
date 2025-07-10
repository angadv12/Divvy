# Gemini Development Partnership

This document outlines how we'll work together to build your application. My goal is to be a productive and helpful partner, writing high-quality, maintainable code for your React Native project.

## 🚨 Test-Driven Development is Key
**ALL tests must pass. Any test failures are BLOCKING.**
- No errors.
- No failing tests.
- Zero tolerance for broken code.

These are not suggestions. Please ensure all tests are passing before we move on to the next task.

## CRITICAL WORKFLOW - ALWAYS FOLLOW THIS!

### Research → Plan → Implement
**NEVER JUMP STRAIGHT TO CODING!** Always follow this sequence:
1.  **Research**: I will explore the codebase to understand existing patterns, components, and conventions.
2.  **Plan**: I will create a clear implementation plan and share it with you before I begin.
3.  **Implement**: I will execute the plan, providing updates at key milestones.

When you ask me to implement a feature, I'll start by saying: "Okay, I'll research the codebase and create a plan before implementing."

For complex architectural decisions or challenging problems, I will take time to analyze the problem and propose a solution.

### Breaking Down Complexity
For larger tasks, I will break the problem down into smaller, manageable parts. This allows us to tackle each piece systematically and ensure the quality of the final result.

### Reality Checkpoints
**Stop and validate** at these moments:
- After implementing a complete feature.
- Before starting a new major component.
- When something feels wrong or overly complex.
- Before declaring a task "done".
- **WHEN TESTS FAIL** ❌

To check the project's status, run the test suite:
`npm test`

> Why: It's easy to lose track of what's actually working. These checkpoints prevent cascading failures and ensure we're building on a stable foundation.

### 🚨 CRITICAL: Test Failures Are BLOCKING
**When tests report ANY issues, I will:**
1.  **STOP IMMEDIATELY** - Do not continue with other tasks.
2.  **FIX THE TESTS** - Address every failing test until the suite is ✅ **GREEN**.
3.  **VERIFY THE FIX** - Re-run `npm test` to confirm all issues are resolved.
4.  **CONTINUE ORIGINAL TASK** - Return to what I was doing before the interruption.

My code must be 100% clean and tested. No exceptions.

## React Native & TypeScript Standards

### FORBIDDEN - NEVER DO THESE:
- **NEVER CHANGE MODELS USED BY OPENAI** 
- **NO `any` type** - Use specific types or `unknown` when necessary.
- **NO `console.log()`** or other debug statements in final, committed code.
- **NO large, monolithic components** - Break down complex UI into smaller, reusable components.
- **NO hardcoded styles in JSX** - Use `StyleSheet.create` for styling.
- **NO ignoring existing conventions** - Follow the established coding style.

### Required Standards:
- **TypeScript First**: Use TypeScript for all new code.
- **Functional Components & Hooks**: All new components should be functional components using React Hooks.
- **Meaningful Names**: Use descriptive names for variables, functions, and components (e.g., `UserProfile` instead of `Profile`).
- **Early Returns**: Use early returns to reduce nesting and improve readability.
- **Async/Await**: Use `async/await` for all asynchronous operations.
- **Table-Driven Tests**: Use table-driven tests for complex logic where applicable.

## Project Structure

Your React Native application is located in `/divvy_bill_app`. The key directories are:
- `app/`: Contains the application screens and navigation, managed by Expo Router.
- `assets/`: Static assets like images and fonts.
- `components/`: Reusable React components used across the app.
- `constants/`: Shared constants, such as color schemes.

## Problem-Solving Together

When I'm stuck or confused:
1.  **Stop** - I won't spiral into overly complex solutions.
2.  **Step back** - I will re-read the requirements and analyze the existing code.
3.  **Simplify** - The simplest solution is usually the best one.
4.  **Ask** - I will present different approaches and ask for your preference (e.g., "I see two approaches: [A] vs [B]. Which do you prefer?").

Your insights on better approaches are valued - please share them!

## Performance & Security

### **Measure First**:
- No premature optimization.
- I will focus on writing clean, readable code first.

### **Security Always**:
- Validate all user inputs.
- Never store sensitive information (like API keys) in the codebase. Use environment variables or a secure secret management solution.

## Communication Protocol

### Progress Updates:
I'll use checklists to show progress:
```
```

### Suggesting Improvements:
"The current approach works, but I notice [observation]. Would you like me to [specific improvement]?"

## Working Together

- We are always working on a feature branch; no backwards compatibility is needed unless specified.
- When in doubt, we choose clarity over cleverness.
- Simple, obvious solutions are better than complex, "clever" code.
