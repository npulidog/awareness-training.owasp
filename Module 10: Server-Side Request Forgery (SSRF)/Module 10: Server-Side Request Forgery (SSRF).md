# **Module 10: Server-Side Request Forgery (SSRF)**

## **Introduction**
**Server-Side Request Forgery (SSRF)** occurs when an attacker tricks a server into making unintended HTTP requests. This can allow attackers to **access internal services, steal sensitive data, or scan internal networks**.

In this module, we demonstrate how **an insecure URL request feature** allows attackers to **send unauthorized requests**, and how restricting outbound requests prevents SSRF attacks.

---

## **Vulnerability: Unrestricted URL Fetching**
**Issue:** The platform allows users to **request external URLs without validation**, making it vulnerable to:
- **Accessing internal resources** (e.g., metadata services, admin endpoints).
- **Port scanning internal networks**.
- **Performing unauthorized API calls** from a trusted server.

---

## **Insecure Code Example**
This code **directly fetches user-supplied URLs**, allowing SSRF attacks.

```javascript
// Insecure Code: No URL validation
app.get('/fetch-data', (req, res) => {
    const targetUrl = req.query.url;
    fetch(targetUrl)
        .then(response => response.text())
        .then(data => res.send(data))
        .catch(err => res.status(500).send("Error fetching data"));
});
```

---

## **Simulated Attack**
How an attacker can exploit this flaw

1. The attacker enters an internal URL to access sensitive data:

```ruby
https://payments.com/fetch-data?url=http://169.254.169.254/latest/meta-data/
```

2. The system retrieves cloud metadata, exposing credentials.

**Consequence:** The attacker steals cloud service credentials and gains full access to the cloud environment.

---

## **Proper Implementation: Restrict Outbound Requests**
The system should only allow whitelisted URLs and block unauthorized internal requests.

```javascript
// Secure Code: Restrict outbound requests
const allowedDomains = ["https://api.trusted.com", "https://payments.example.com"];

app.get('/fetch-data', (req, res) => {
    const targetUrl = req.query.url;

    if (!allowedDomains.some(domain => targetUrl.startsWith(domain))) {
        return res.status(403).send("SSRF blocked: Unauthorized URL request.");
    }

    fetch(targetUrl)
        .then(response => response.text())
        .then(data => res.send(data))
        .catch(err => res.status(500).send("Error fetching data"));
});
```
### **Why is this secure?**
- Blocks access to internal resources, preventing metadata exposure.
- Limits requests to trusted domains, reducing attack surface.
- Prevents internal port scanning using SSRF techniques.

---

## **How to Test the Vulnerability in the Platform**

### **Step 1: Simulate an SSRF Attack**
1. Log into the user dashboard.
2. Enter an internal IP address (http://169.254.169.254/latest/meta-data/) in the URL request field.
3. Click "Send Request".
4. Observe that sensitive cloud metadata is returned.

### **Step 2: Test the Secure Implementation**
1. Click "Enable SSRF Protection".
2. Attempt the same attack again.
3. The system now blocks the unauthorized request.

---

## **Conclusion**

- NEVER allow unrestricted outbound requests.
- Use an allowlist to restrict external requests.
- Prevent access to internal networks and metadata services.
- Log and monitor outbound requests to detect SSRF attacks.
