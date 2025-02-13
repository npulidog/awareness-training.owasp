# **Module 9: Security Logging and Monitoring Failures**

## **Introduction**
**Security logging and monitoring failures** occur when applications **fail to detect or log suspicious activities**, allowing attacks to go unnoticed. Without proper monitoring, organizations **cannot detect breaches, respond to threats, or investigate security incidents**.

In this module, we demonstrate how **a lack of security logging** enables attackers to perform unauthorized actions **without detection** and how proper logging ensures real-time monitoring.

---

## **Vulnerability: Missing Security Logs**
**Issue:** The platform does **not log critical security events**, making it vulnerable to:
- **Brute-force login attempts** without detection.
- **Unauthorized access to admin features**.
- **Data manipulation with no audit trail**.

---

## **Insecure Code Example**
This code **does not log failed login attempts**, allowing attackers to brute-force credentials **without triggering alerts**.

```javascript
// Insecure Code: No logging for authentication failures
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = ? AND password = ?`;

    db.query(query, [username, password], (err, results) => {
        if (results.length > 0) {
            res.send("Login successful.");
        } else {
            res.send("Invalid credentials."); // No log entry recorded
        }
    });
});
```

---

## **Simulated Attack**
How an attacker can exploit this flaw

1. The attacker tries multiple login attempts with different passwords.
2. The system does not track failed attempts, allowing unlimited brute-force attempts.
3. Once the attacker guesses the correct password, they gain access without triggering any alerts.

**Consequence:** Security teams cannot detect the attack or take action.

---

## **Proper Implementation: Enable Security Logging**
The system should log all authentication failures and security events to detect attacks in real-time.

```javascript
// Secure Code: Log all authentication failures
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = ?`;

    db.query(query, [username], (err, results) => {
        if (results.length === 0 || results[0].password !== password) {
            logSecurityEvent(`❌ Failed login attempt for user: ${username}`);
            return res.status(401).send("Invalid credentials.");
        }
        res.send("Login successful.");
    });
});

function logSecurityEvent(message) {
    console.log(`[SECURITY LOG] ${new Date().toISOString()}: ${message}`);
}
```
### **Why is this secure?**
- Records all authentication failures, making brute-force attacks visible.
- Allows administrators to monitor security activity.
- Prevents repeated login attempts by enforcing rate limits.

---

## **How to Test the Vulnerability in the Platform**

### **Step 1: Simulate an Attack Without Logging**
1. Log into the user dashboard.
2. Enter multiple incorrect passwords.
3. Observe that the system does not track failed attempts.
4. The attacker eventually gains access without detection.

### **Step 2: Test the Secure Implementation**
1. Click "Enable Security Logging".
2. Attempt multiple incorrect logins.
3. The system now logs every failed login attempt.
4. Security alerts appear in the admin dashboard logs.

---

## **Conclusion**

- ALWAYS log failed login attempts to detect brute-force attacks.
- Monitor administrative access logs to track suspicious activities.
- Use centralized logging solutions for better security analysis.
- Set up real-time alerts to detect and respond to attacks immediately.
