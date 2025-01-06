# Contact List

## Project Overview

This project is my submission for Parsity's react evaluation. It's a contact management application built with Next.js that demonstrates core React concepts and modern web development practices.

## Learning Journey

### Key Challenges

#### Understanding React Context

One of my biggest challenges was grasping the Context API in React. Initially, I struggled with:

- When to use context vs props
- Accessing context data in child components

#### Form Management

I learned two different approaches to handling forms:

1. Controlled components

   - Managing form state with React
   - Real-time updates and validation
   - Higher performance overhead

2. Uncontrolled components
   - Using native HTML form elements
   - Simpler to implement
   - Lower performance overhead

### Major Breakthroughs

#### Context Implementation

I discovered that Context is like a global props system that:

- Stores shared state (contacts list)
- Provides update methods (add, edit, delete contacts)
- Avoids passing props through multiple levels

#### Component Reusability

A significant achievement was creating a reusable ContactForm component that:

- Works for both new and edit operations
- Uses uncontrolled components for better performance
- Maintains clean separation of concerns
- Simplifies form handling in both new and edit pages

## Technologies Used

- Next.js 13+
- React Context API
- CSS Modules
- LocalStorage for data persistence

## Getting Started

To run the project, follow these steps:

1. Clone the repository
2. Navigate to the project directory
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server

## Future Improvements

- Add form validation
- Implement error boundaries
- Add loading states
- Improve accessibility
- Add unit tests

## Contact

For questions about this project or the Parsity program, visit [parsity.io](https://parsity.io/)
