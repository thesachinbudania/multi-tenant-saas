# Dashboard Implementation Plan

## Goal
Create a dashboard page at `/dashboard` with task management content and specific navigation links, adhering to the "Bold" high-contrast design system.

## Proposed Changes

### Components
#### [NEW] [DashboardNav.tsx](file:///c:/Users/Sachin/Documents/multi-tenant-saas/app/src/components/dashboard/DashboardNav.tsx)
- Sidebar navigation.
- Inverted theme (Black background, White text) to effect a "command center" feel.
- Links: Overview (active), Management, Change Employees, Settings.

#### [NEW] [TaskCard.tsx](file:///c:/Users/Sachin/Documents/multi-tenant-saas/app/src/components/dashboard/TaskCard.tsx)
- Reusable card for the task list.
- White background, `border border-black`.
- Large typography for task titles.
- Status indicators using bold styles (e.g., solid black badges).

### Pages
#### [NEW] [page.tsx](file:///c:/Users/Sachin/Documents/multi-tenant-saas/app/dashboard/page.tsx)
- Layout: Flex row (Sidebar + Main Content).
- Main Content:
    - Large Page Title ("Dashboard" or "My Tasks").
    - Grid of `TaskCard` items.

## Verification Plan
### Manual Verification
- Navigate to `/dashboard`.
- Verify the layout is split (Sidebar / Content).
- Check responsive behavior (stacking on mobile potentially).
- Verify navigation links are present.
