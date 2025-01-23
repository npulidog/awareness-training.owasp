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
```

In this case, any authenticated user can access the admin dashboard without verifying their role.

### Exploit
An attacker, even with a basic user account, can navigate to /admin and access the dashboard, bypassing security.

---

## Securing Broken Access Control
### Secure Code Implementation
Let’s fix the vulnerability by implementing Role-Based Access Control (RBAC):

```javascript
app.get('/admin', (req, res) => {
  const userRole = req.user.role; // Assuming role is stored in user session

  if (userRole !== 'admin') {
    return res.status(403).send('Access Denied: You are not authorized to view this page.');
  }

  res.send('Welcome to the admin dashboard!');
});
```

### Key Improvements
1. Check the user’s role before granting access.
2. Return a 403 Forbidden status code if the user lacks permissions.

---

## Hands-On Exercise
### Task
1. Access the vulnerable /admin endpoint with a non-admin account and note what happens.
2. Apply the secure code snippet above to fix the issue.
3. Test the endpoint again with both admin and non-admin accounts.

---

## Example: Insecure Direct Object Reference (IDOR)
Another form of Broken Access Control involves IDOR vulnerabilities, where attackers can access unauthorized resources by manipulating object identifiers.
### Vulnerable Code

```javascript
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;

  // Fetch user details directly based on the provided ID
  const userDetails = getUserById(userId);
  res.send(userDetails);
});
```

### Exploit
An attacker with a valid session can change the :id parameter to access data for other users (e.g., /user/12345). 
### Secure Code Implementation

```javascript
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;

  if (req.user.id !== userId) {
    return res.status(403).send('Access Denied: Unauthorized access to user data.');
  }

  const userDetails = getUserById(userId);
  res.send(userDetails);
});
```

---

## Common Mitigation Strategies
- **1. Server-Side Validation:** Always validate permissions server-side; never rely on client-side checks.
- **2. Principle of Least Privilege:** Grant users only the permissions they need to perform their tasks.
- **3. Audit and Review:** Regularly review access control configurations and logs to detect anomalies.

---
## Quiz: Test Your Knowledge
#### Question: What’s the primary difference between authentication and authorization?

- [x] Authentication is about determining a user’s identity, while authorization determines what the user is allowed to do.
- [ ] Authentication is about granting access to resources, while authorization verifies identity.
- [ ] They are the same; both involve granting access.

---

## Summary
- Broken Access Control is a critical vulnerability that allows attackers to bypass restrictions and access unauthorized resources.
- Always implement role-based checks and validate permissions server-side.
- Regularly test your system for access control issues to avoid costly breaches.
