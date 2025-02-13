# **Module 4: Insecure Design**

## **Introduction**
**Insecure design** occurs when applications **lack proper security controls** or fail to enforce **best practices**, making them vulnerable to exploitation.

In this module, we demonstrate how **weak password reset functionality** allows an attacker to **change a user's password without authentication**.

---

## **Vulnerability: Insecure Password Reset**
**Issue:** The platform allows users to **change their password without verifying the old password**, leading to:
- **Account takeover** if an attacker gains access to the reset function.
- **Privilege escalation**, allowing unauthorized users to modify credentials.
- **Lack of auditability**, making it impossible to track password changes.

---

## **Insecure Code Example**
This code **does not require authentication** to change a user's password.

```javascript
// Insecure Code: No old password verification
app.post('/change-password', (req, res) => {
    const { userId, newPassword } = req.body;
    db.query(`UPDATE users SET password = '${newPassword}' WHERE id = '${userId}'`);
    res.send("Password changed successfully.");
});
```

---

## **Simulated Attack**
How an attacker can exploit this flaw

1. The attacker intercepts a password change request.
2. They modify the user ID in the request to target another account:

```
POST /change-password
{
    "userId": "1002",
    "newPassword": "hacked123"
}
```

3. The system updates the password without verifying identity.

**Consequence:** The attacker gains control over another user's account.

---

## **Proper Implementation: Require Old Password Verification**
Instead of allowing password changes without authentication, the system should require the current password.

```javascript
// Secure Code: Require old password verification
app.post('/change-password', (req, res) => {
    const { userId, oldPassword, newPassword } = req.body;
    const query = `SELECT password FROM users WHERE id = ?`;
    
    db.query(query, [userId], (err, results) => {
        if (results[0].password !== oldPassword) {
            return res.status(403).send("Incorrect old password.");
        }
        db.query(`UPDATE users SET password = ? WHERE id = ?`, [newPassword, userId]);
        res.send("Password changed securely.");
    });
});
```
### **Why is this secure?**
- Prevents unauthorized password changes by requiring the old password.
- Protects users from account takeovers.
- Ensures identity verification before modifying sensitive data.

---

## **How to Test the Vulnerability in the Platform**

### **Step 1: Simulate an Insecure Password Change**
1. Log into the user dashboard.
2. Navigate to the password change feature.
3. Enter a new password without providing the old one.
4. Observe that the system accepts the change without verification.

### **Step 2: Test the Secure Implementation**
1. Enable Secure Password Change by clicking "Enable Security Controls".
2. Attempt to change the password again without entering the old password.
3. The system now blocks the request and requires authentication.

---

## **Conclusion**

- NEVER allow password changes without verifying the old password.
- Always enforce identity verification before modifying sensitive data.
- Implement Multi-Factor Authentication (MFA) to enhance security.
- Log all password change requests to detect unauthorized modifications.
