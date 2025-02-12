# Module 2: Cryptographic Failures

## Introduction
**Cryptographic failures** occur when sensitive information is mishandled, exposing data such as **session tokens, passwords, and transactions**.

In this module, we demonstrate how a **poor authentication implementation** can lead to **token exposure in URLs**, allowing an **attacker to perform unauthorized transactions**.

---

## Vulnerability: Authentication Token in URL
**Issue:** Some payment platforms include **authentication tokens in URLs**, making them visible in:
- Browser history.
- Server logs.
- Shared links.

---

### **Insecure Code Example**
This code **sends authentication tokens in the URL**, making them accessible to attackers.

```javascript
//  Insecure Code: Token in URL
app.get('/checkout', (req, res) => {
    const token = req.query.token;  // Token visible in the URL
    validatePayment(token);
    res.send("Payment confirmed.");
});
```

---

### **Simulated Attack**
How an attacker can exploit this flaw

1. The user accesses an insecure URL:

```
https://payments.com/checkout?token=123456abcdef
```

2. The user copies and shares the URL with someone else.
3. Anyone with the URL can complete the payment without authentication.
4. The attacker steals the session token and performs unauthorized transactions.

**Consequence:** The attacker takes over the user's account and makes payments on their behalf.

---

### **Proper Implementation: Using HTTP Headers**
Instead of passing the token in the URL, it should be sent securely via HTTP headers.

```javascript
// Secure Code: Token in Headers
app.get('/checkout', (req, res) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(403).send('Access Denied');
    }
    validatePayment(token);
    res.send("Payment confirmed securely.");
});

});
```
### Why is this secure?
- The token is not exposed in the URL.
- Browsers and server logs do not store it.
- Attackers cannot easily capture it.

---

### **How to Test the Vulnerability in the Platform**

### Step 1: Simulate an Attack
1. Log into the user dashboard.
2. Look for the payment option using token in the URL.
3. Copy the generated URL and open it in another browser.
4. You will see that you can complete the transaction without authentication.

### Step 2: Test the Secure Implementation
1. Log into the user dashboard again.
2. Use the secure payment option with token in headers.
3. You will see that authentication is required, and the token is not exposed.

---

### **Conclusion**

- NEVER pass authentication tokens in URLs.
- Always use HTTP headers to transmit authentication tokens.
- Ensure tokens have expiration times to prevent reuse.
- Use HTTPS to encrypt communication.
