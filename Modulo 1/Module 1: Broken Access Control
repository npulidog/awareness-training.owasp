# Module 1: Broken Access Control

## What is Broken Access Control?
Broken Access Control occurs when restrictions on authenticated users' actions are not properly enforced. It allows attackers to access unauthorized resources or perform actions outside their permissions.

### Why does it matter?
- **High Occurrence:** Broken Access Control is one of the most commonly exploited vulnerabilities.
- **Impact:** Attackers can access sensitive information, modify data, or even escalate privileges within a system.

---

## Learning Objectives
By the end of this module, participants will:
1. Understand what Broken Access Control is and how it affects systems.
2. Identify scenarios where access control may fail.
3. Learn to implement role-based access control (RBAC) and secure authorization practices.

---

## Real-World Scenario: "The Invisible Key"
Imagine you’re part of the *SecureDevSquad*, working on a project to build a financial management app. During testing, you discover that non-admin users can access the admin dashboard simply by modifying the URL. The system isn’t verifying the user’s role properly.

---

## Example of Broken Access Control in Action
### Vulnerable Code
Here’s an example of a poorly implemented route in an Express.js application:

```javascript
app.get('/admin', (req, res) => {
  res.send('Welcome to the admin dashboard!');
});
