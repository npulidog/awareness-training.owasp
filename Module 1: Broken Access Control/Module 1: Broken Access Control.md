# Module 1: Broken Access Control (Payments Security)

## What is Broken Access Control?
Broken Access Control occurs when a system does not properly enforce access permissions, allowing users to view or modify data they shouldn't have access to. In a **payment platform**, this could mean unauthorized access to financial transactions, user accounts, or sensitive payment processing systems.

### Why does it matter?
- **Security Risks:** Attackers could manipulate transactions, access customer payment data, or escalate privileges within the system.
- **Financial Impact:** Unauthorized access to payment processing could result in fraudulent transactions, chargebacks, and regulatory fines.
- **Compliance Issues:** Failure to properly enforce access controls could lead to violations of PCI DSS compliance.

---

## Learning Objectives
By the end of this module, participants will:
1. Understand what Broken Access Control is and how it impacts a **payment processing system**.
2. Identify real-world scenarios where access control failures can occur in a **financial environment**.
3. Learn to implement **Role-Based Access Control (RBAC)** and other security measures to prevent unauthorized actions.
4. Interact with an **interactive training platform** that simulates broken access control vulnerabilities.

---

## Real-World Scenario: "Unauthorized Refund Request"
### **The Problem: Unauthorized Access to Refunds**
Imagine you're part of the *SecureDevSquad* at Nuvei. A customer support agent discovers that by tweaking the **API request**, they can approve refunds **without authorization**. The issue? The system is not validating whether the user has permission to perform the action.

### **Exploit Example**
#### **Vulnerable API Request**
```json
POST /api/refunds
{
  "transaction_id": "ABC12345",
  "amount": "500.00",
  "currency": "USD"
}
```
In this scenario:
- **Any logged-in user** can send this request and issue refunds, even if they don’t have refund approval rights.
- There is no **server-side validation** to check if the user has the correct role.

---

## Interactive Simulation: Fixing Broken Access Control
To make this module more engaging, a **real-time interactive dashboard** has been created where users can:
- **Log in with different roles** (Admin, Support, Customer).
- **Attempt to access restricted areas** (Refund Management Panel).
- **Experience a security violation warning** when unauthorized access is attempted.

### **Implementation Details**
The simulation includes:
✅ **Login System:** Users authenticate using predefined roles.
✅ **Role-Based Access Control (RBAC):** Admins have full access, Support can request refunds, Customers can only view transactions.
✅ **Unauthorized Access Simulation:** Non-admin users receive a **security alert when trying to access restricted areas**.
✅ **User & Admin Dashboards:** Separate views for different roles.

---

## Hands-On Exercise: Access Control Simulation
### **Task**
1. **Log in to the training platform** using different roles.
2. **Attempt to access the admin panel** as a Support or Customer user.
3. **Fix the security vulnerability** by implementing **RBAC** in the provided training environment.

### **Secure Code Implementation Example**
```javascript
app.post('/api/refunds', (req, res) => {
  const userRole = req.user.role; 

  if (userRole !== 'admin' && userRole !== 'finance_manager') {
    return res.status(403).send('Access Denied: Unauthorized refund request.');
  }

  processRefund(req.body.transaction_id, req.body.amount);
  res.send('Refund processed successfully.');
});
```

✅ **Fix:** Only users with `admin` or `finance_manager` roles can process refunds.

---

## Common Mitigation Strategies
1. **Use Role-Based Access Control (RBAC):** Assign specific roles to users (Admin, Customer Support, Merchant, etc.).
2. **Enforce Server-Side Validation:** Never rely on client-side controls for permissions.
3. **Implement Logging & Monitoring:** Keep track of all access requests, especially for **refunds and transaction modifications**.
4. **Apply the Least Privilege Principle:** Grant users the minimum permissions necessary for their role.
5. **Use Secure APIs with Token Authentication:** Validate **JWTs or OAuth tokens** before processing requests.

---

## Quiz: Test Your Knowledge
**Question:** What is the difference between authentication and authorization?  
1. Authentication verifies who you are, while authorization determines what you can do.  
2. Authentication controls what actions a user can perform.  
3. Authorization checks if a user exists in the system.  

*Answer:* ✅ **Option 1: Authentication verifies who you are, while authorization determines what you can do.**

---

## Summary
- Broken Access Control is **one of the most exploited vulnerabilities in financial applications**.
- Payment platforms **must enforce strict role-based permissions** to prevent unauthorized transactions.
- Implement **RBAC, server-side validation, and transaction-level security controls** to mitigate risks.
