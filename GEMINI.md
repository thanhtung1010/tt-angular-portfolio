# Gemini Rules & Guidelines

This file serves as the "System Instructions" and "Rule File" for Gemini (Antigravity) when working on this project.

## 1. Project Context
- **Project Name**: tt-angular-portfolio
- **Framework**: Angular 20+ (Bleeding Edge/Latest)
- **Styling**: Tailwind CSS 4.x
- **Build System**: Angular CLI (`@angular/build`) with Application Builder (esbuild)

## 2. Technology Stack & Best Practices

### Angular (v20+)
- **Standalone Components**: All components, directives, and pipes must be `standalone: true`.
- **Signals**: Use Angular Signals (`signal()`, `computed()`, `effect()`) for state management and reactivity. Avoid `Zone.js` based change detection where possible (Experiment with `ChangeDetectionStrategy.OnPush`).
- **Control Flow**: Use the new built-in control flow syntax (`@if`, `@for`, `@switch`) instead of `*ngIf`, `*ngFor`.
- **Dependency Injection**: Use the `inject()` function for dependency injection instead of constructor-based injection.
- **Inputs/Outputs**: Use `input()` and `output()` signal-based APIs.
- **Queries**: Use `viewChild()`, `contentChild()` signal-based queries.

### Tailwind CSS (v4.x)
- **Configuration**: Tailwind v4 uses CSS-first configuration. Check `src/styles.css` (or `index.css`) for theme variables (`@theme`).
- **Utility-First**: Use utility classes directly in templates. Avoid creating custom CSS classes unless creating a reusable atomic abstraction (using `@apply`).
- **Dark Mode**: Implement dark mode using the `dark:` variant.
- **Responsive Design**: Mobile-first approach. Use `sm:`, `md:`, `lg:` prefixes.

### TypeScript
- **Strict Mode**: `strict: true` is enabled. No implicit `any`.
- **Interfaces**: Use `interface` for object definitions.
- **Immutability**: Prefer `readonly` properties and `ReadonlyArray<T>`.

## 3. Coding Conventions
- **Naming**:
  - Files: `kebab-case` (e.g., `user-profile.component.ts`)
  - Classes: `PascalCase` (e.g., `UserProfileComponent`)
  - Interfaces: `PascalCase` (e.g., `ISocialNetwork`)
  - Variables/Functions: `camelCase` (e.g., `getUserData`)
  - Constants: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_COUNT`)
  - Enums: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_COUNT`)
  - Types: `UPPER_SNAKE_CASE` (e.g., `MAX_RETRY_COUNT`)
- **Structure**:
  - Place components within feature directories (`src/app/features/`).
  - Shared UI components go in `src/app/components/`.
  - Logic/Services go in `src/app/services/`.
- **File Creation (Standalone Architecture)**:
  - **Directory Mapping**: Organize files strictly by type. 
    - Components: `src/app/components/{name}/` (contains .ts, .html, .spec.ts)
    - Services: `src/app/services/`
    - Interfaces: `src/app/interfaces/`
    - Pipes/Directives/Enums: `src/app/{type}s/`
  - **Naming Convention**: Use clean filenames without type suffixes (e.g., `user.ts` inside the `services` folder, not `user.service.ts`), as the directory provides the context.
  - **Automatic Barrel Exports**: 
    - Every type folder must have an `index.ts`. 
    - Upon creating a new file, automatically add `export * from './{filename}';` to the folder's `index.ts`.
  - **Path Aliasing**: 
    - If a new type folder is created, update `tsconfig.json` → `compilerOptions.paths`.
    - Example: `"@components/*": ["src/app/components/*"]`.
  - **Standalone Workflow**: Since these are standalone, do not look for or update `.module.ts` files. Focus on the `index.ts` for clean imports.

## 4. Testing
- Use `ng test` (Karma/Jasmine) for unit tests.
- Ensure all new components have basic test coverage ('should create').

## 5. Artifacts & Documentation
- When planning complex changes, create an `implementation_plan.md`.
- Update `task.md` to track progress.
- Document any specific "gotchas" or workarounds in this file.
