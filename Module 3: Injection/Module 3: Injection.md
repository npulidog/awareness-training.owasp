# **Module 3: Injection Attacks**

## **Introduction**
**Injection attacks** occur when untrusted data is inserted into an interpreter, allowing attackers to execute **malicious SQL, command-line, or script code**.

In this module, we demonstrate how **SQL Injection (SQLi)** can be used to **manipulate database queries** and retrieve unauthorized transaction data.

---

## **Vulnerability: Authentication Token in URL**
**Issue:** The payment system allows **direct user input** in SQL queries without proper sanitization, leading to:
- Unauthorized access to **transaction records**.
- **Bypassing authentication** using SQL queries.
- **Data manipulation** via malicious queries.

---

## **Insecure Code Example**
This code directly inserts user input into a SQL query, making it vulnerable to injection.

```javascript
//  Insecure Code: User input directly in SQL query
app.get('/transactions', (req, res) => {
    const transactionId = req.query.id;
    const query = `SELECT * FROM transactions WHERE id = '${transactionId}'`;  // SQL Injection possible
    db.query(query, (err, results) => {
        res.json(results);
    });
});
```

---

## **Simulated Attack**
How an attacker can exploit this flaw

1. The user searches for a valid transaction ID (e.g., 12345).
2. The attacker inputs a malicious SQL query instead:
   
```
12345' OR '1'='1
```

3. The modified SQL query executed by the system:
  
```
SELECT * FROM transactions WHERE id = '12345' OR '1'='1'
```

**Consequence:** The attacker retrieves all transaction records instead of a single one.

---

## **Proper Implementation: Using HTTP Headers**
Instead of inserting user input directly into a query, prepared statements should be used to sanitize input.

```javascript
// Secure Code: Using parameterized queries
app.get('/transactions', (req, res) => {
    const transactionId = req.query.id;
    const query = `SELECT * FROM transactions WHERE id = ?`;  // Secure query
    db.query(query, [transactionId], (err, results) => {
        res.json(results);
    });
});
```
### **Why is this secure?**
- User input is treated as data, not part of the SQL command.
- Injection attempts are ignored, preventing unauthorized queries.
- Only valid transaction IDs are processed.

---

## **How to Test the Vulnerability in the Platform**

### **Step 1: Simulate an Injection Attack**
1. Log into the user dashboard.
2. Navigate to the transaction search feature.
3. Enter the malicious payload in the search bar:
  
```
12345' OR '1'='1
```

4. Observe that all transaction records are retrieved.

### **Step 2: Test the Secure Implementation**
1. Enable SQL Injection Protection by clicking "Enable SQL Protection".
2. Attempt the same attack with:
  
```
12345' OR '1'='1
```

3. The system now blocks the attack, and only valid transaction data is displayed.

---

## **Conclusion**

- NEVER insert user input directly into database queries.
- Always use parameterized queries to prevent injection attacks.
- Restrict database privileges to minimize damage if an attack occurs.
- Monitor and log suspicious SQL activity to detect intrusion attempts.
