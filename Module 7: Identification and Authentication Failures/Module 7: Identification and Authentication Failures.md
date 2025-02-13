# **Module 7: Identification and Authentication Failures**

## **Introduction**
**Identification and authentication failures** occur when applications **fail to properly verify user identities**, allowing attackers to **bypass authentication, take over accounts, or perform unauthorized actions**.

In this module, we demonstrate how **weak authentication mechanisms** can lead to **brute-force attacks, session hijacking, and account takeovers**.

---

## **Vulnerability: Weak Authentication Implementation**
**Issue:** The platform has an **insecure authentication system**, leading to:
- **Brute-force attacks** due to missing login attempt limits.
- **Weak password enforcement**, allowing users to set easily guessable credentials.
- **Lack of Multi-Factor Authentication (MFA)**, making accounts vulnerable to takeover.

---

## **Insecure Code Example**
This code **does not limit login attempts**, allowing attackers to guess passwords indefinitely.

```javascript
// Insecure Code: No brute-force protection
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`; // SQL Injection risk
    db.query(query, (err, results) => {
        if (results.length > 0) {
            res.send("Login successful.");
        } else {
            res.send("Invalid credentials.");
        }
    });
});
```

---

## **Simulated Attack**
How an attacker can exploit this flaw

1. The attacker writes a script that tries thousands of password guesses in seconds:

```python
import requests
url = "https://payments.com/login"
for password in ["123456", "password", "admin", "letmein"]:
    response = requests.post(url, data={"username": "user", "password": password})
    if "Login successful" in response.text:
        print("Account compromised:", password)
        break
```

2. The system does not block repeated failed attempts, allowing the attacker to eventually guess the password.

**Consequence:** The attacker gains full access to the user's account.

---

## **Proper Implementation: Enforce Secure Authentication**
To protect against brute-force attacks and session hijacking, implement strong authentication measures.

```javascript
// Secure Code: Implementing account lockout and MFA
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    if (failedAttempts[username] >= 5) {
        return res.status(403).send("Account locked. Too many failed attempts.");
    }

    db.query(`SELECT password, mfa_enabled FROM users WHERE username = ?`, [username], (err, results) => {
        if (results.length === 0 || results[0].password !== password) {
            failedAttempts[username] = (failedAttempts[username] || 0) + 1;
            return res.status(401).send("Invalid credentials.");
        }
        
        if (results[0].mfa_enabled) {
            return res.send("MFA required.");
        }

        failedAttempts[username] = 0;
        res.send("Login successful.");
    });
});

```
### **Why is this secure?**
- Limits login attempts, preventing brute-force attacks.
- Implements Multi-Factor Authentication (MFA) for additional security.
- Uses parameterized queries, preventing SQL Injection.

---

## **How to Test the Vulnerability in the Platform**

### **Step 1: Simulate a Brute-Force Attack**
1. Log into the user dashboard.
2. Enter multiple wrong passwords.
3. Observe that the system does not lock the account.
4. After multiple attempts, the attacker guesses the password and gains access.

### **Step 2: Test the Secure Implementation**
1. Click "Enable Secure Authentication" to activate:
   - Login attempt limits
   - Multi-Factor Authentication (MFA)
2. Attempt multiple incorrect logins.
3. The system now locks the account after 5 failed attempts.
4. MFA is now required for authentication.

---

## **Conclusion**

- NEVER allow unlimited login attempts—implement account lockouts.
- Use Multi-Factor Authentication (MFA) to enhance security.
- Hash and store passwords securely using bcrypt or Argon2.
- Monitor failed login attempts and alert users of suspicious activity.
