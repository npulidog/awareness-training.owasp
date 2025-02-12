# **Module 1: Broken Access Control**

## **Introduction**
**Broken Access Control** occurs when a system improperly enforces permissions, allowing users to access **unauthorized resources**.

In this module, we demonstrate how **improper role validation** in a **payment platform** allows a regular user to escalate their privileges and gain **admin access**.

---

## **Vulnerability: Privilege Escalation via Role Manipulation**
**Issue:** The platform fails to properly enforce role validation, allowing a user to modify their permissions **on the client-side**.

### **Insecure Code Example**
This code **trusts client-side input** to determine the user's role.

```javascript
// Insecure Code: Role controlled by client-side input
app.post('/update-role', (req, res) => {
    const { username, role } = req.body; 
    db.query(`UPDATE users SET role = '${role}' WHERE username = '${username}'`);
    res.send("Role updated.");
});
```

### **Issue:**
- The system directly accepts the role input from the user without validation.
- A normal user can modify their own role to become an admin.

---

## **Simulated Attack**
How an attacker can exploit this flaw

1. The attacker inspects the role field using the browser's developer tools.
2. They change their role from "user" to "admin".
3. The system updates their role without verification.
4. The attacker gains full administrative access.

**Consequence:** The attacker can modify user roles, delete transactions, and access sensitive data.

---

## **Proper Implementation: Server-Side Role Validation**
The system must always validate roles on the server and prevent unauthorized role changes.

```javascript
// Secure Code: Role Validation on Server
app.post('/update-role', (req, res) => {
    const { username, role } = req.body; 
    if (req.user.role !== 'admin') {
        return res.status(403).send("Access Denied");
    }
    db.query(`UPDATE users SET role = ? WHERE username = ?`, [role, username]);
    res.send("Role updated securely.");
});
```
### **Why is this secure?**
- Only authenticated admins can modify roles.
- Role changes require verification on the server.
- SQL Injection protection is enforced using prepared statements.

---

## **How to Test the Vulnerability in the Platform**

### **Step 1: Simulate an Attack**
1. Log in as a regular user.
2. Inspect the browser’s developer tools (F12 → Network).
3. Modify the role field in the request and change "user" to "admin".
4. Submit the request and refresh the page.
5. You now have admin privileges.

### **Step 2: Test the Secure Implementation**
1. Log in again as a regular user.
2. Try modifying your role using the same method as before.
3. The system now blocks the change, showing "Access Denied".

---

## **Conclusion**

- NEVER trust client-side role input.
- Always enforce role validation on the server.
- Use role-based access control (RBAC) with strict permission rules.
- Implement proper session validation to prevent privilege escalation.
