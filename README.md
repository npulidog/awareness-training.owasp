# **Awareness Training: OWASP Top 10**

## **Objective**
The goal of this training is to equip Nuvei developers with the knowledge and skills to **identify, understand, and mitigate the most critical vulnerabilities** in software development, as outlined in the **OWASP Top 10**. The training is delivered via an **interactive e-learning platform**, allowing developers to complete the modules at their own pace.

## **Target Audience**
- **Role:** Software developers, architects, and engineers at Nuvei.
- **Experience Level:** Intermediate to advanced technical knowledge.
- **Assumptions:** Familiarity with programming, basic cybersecurity principles, and secure development practices.

## **Training Format**
This training is hosted on Nuvei’s **learning platform (Campus)** and consists of **self-paced modules** that include:
- **Story-driven scenarios** to illustrate real-world security challenges.
- **Hands-on coding exercises** embedded within the platform.
- **Quizzes and assessments** to reinforce learning outcomes.

## **Duration**
- **Total Estimated Time:** 6-8 hours.
  - Each module takes approximately **30-45 minutes** to complete.
  - Participants can finish the training over **1-2 weeks**, depending on their availability.

## **Learning Objectives**
By the end of this training, participants will be able to:
1. Identify and explain vulnerabilities from the **OWASP Top 10**.
2. Apply **secure coding practices** to mitigate common security risks.
3. Implement security controls to **protect applications and user data**.
4. **Evaluate existing applications** for vulnerabilities and propose solutions.

---

## **Course Content Overview**

### **Module 1: Broken Access Control**
- **Description:** When access control mechanisms fail, users can access resources they shouldn't.
- **Interactive Content:**
  - Story: *An attacker bypasses role-based restrictions to access admin functionality.*
  - Hands-on: Implement **role-based access control (RBAC)** to restrict unauthorized actions.
- **Key Takeaways:** Validate user permissions **server-side** and enforce **strict access controls**.

### **Module 2: Cryptographic Failures**
- **Description:** Weak cryptographic implementations can expose sensitive data.
- **Interactive Content:**
  - Story: *Customer data is being transmitted without encryption, making it vulnerable to interception.*
  - Hands-on: **Implement HTTPS** and **strong encryption standards (AES-256)**.
- **Key Takeaways:** Use **proper cryptographic algorithms** and never expose encryption keys.

### **Module 3: Injection Attacks**
- **Description:** When user input is **not properly validated**, attackers can manipulate SQL, commands, or scripts.
- **Interactive Content:**
  - Story: *An insecure login form allows SQL injection, exposing the entire database.*
  - Hands-on: **Fix the vulnerable query** using **parameterized statements**.
- **Key Takeaways:** **Sanitize all inputs** and **use prepared queries** to prevent injection attacks.

### **Module 4: Insecure Design**
- **Description:** Security must be considered from the design phase, not as an afterthought.
- **Interactive Content:**
  - Story: *A poorly designed authentication system allows users to reset passwords without verification.*
  - Hands-on: **Redesign the authentication workflow** to enforce proper security controls.
- **Key Takeaways:** Implement **security best practices during development**, not after deployment.

### **Module 5: Security Misconfiguration**
- **Description:** Default settings, exposed debug pages, or unnecessary features can be exploited.
- **Interactive Content:**
  - Story: *An attacker extracts system credentials from a misconfigured debug page.*
  - Hands-on: **Harden server configurations** and **disable debugging features in production**.
- **Key Takeaways:** Regularly audit configurations and automate security policies.

### **Module 6: Vulnerable and Outdated Components**
- **Description:** Old or vulnerable third-party components can introduce severe security risks.
- **Interactive Content:**
  - Story: *A legacy library contains a known vulnerability that attackers exploit to gain access.*
  - Hands-on: **Update software components** and **use dependency scanning tools**.
- **Key Takeaways:** Regularly update dependencies and **monitor for security patches**.

### **Module 7: Identification and Authentication Failures**
- **Description:** Weak authentication mechanisms allow unauthorized access.
- **Interactive Content:**
  - Story: *A weak password policy allows an attacker to brute-force a user’s account.*
  - Hands-on: **Implement multi-factor authentication (MFA)** and **strong password policies**.
- **Key Takeaways:** Enforce **robust authentication** and **limit failed login attempts**.

### **Module 8: Software and Data Integrity Failures**
- **Description:** Allowing unverified updates or data modifications can introduce malicious code.
- **Interactive Content:**
  - Story: *An attacker injects a malicious software update, compromising system security.*
  - Hands-on: **Verify software updates** using **cryptographic signatures**.
- **Key Takeaways:** Ensure **secure update mechanisms** and prevent **unauthorized data modifications**.

### **Module 9: Security Logging and Monitoring Failures**
- **Description:** Without security logs, it’s impossible to detect or respond to attacks.
- **Interactive Content:**
  - Story: *A security breach goes undetected because there are no logs or alerts.*
  - Hands-on: **Implement centralized logging** and **real-time alerts**.
- **Key Takeaways:** Log **all critical security events** and **enable proactive monitoring**.

### **Module 10: Server-Side Request Forgery (SSRF)**
- **Description:** Attackers manipulate a server into making unauthorized requests.
- **Interactive Content:**
  - Story: *An attacker tricks the server into accessing internal resources using SSRF.*
  - Hands-on: **Restrict outbound requests** and **validate user input** to prevent SSRF.
- **Key Takeaways:** Harden server configurations **against unauthorized outbound requests**.

---

## **Frequently Asked Questions**
### **1. What is OWASP Top 10?**
   - A list of the **most critical security risks** in web applications, maintained by the Open Worldwide Application Security Project (OWASP).

### **2. Why is this training important?**
   - These vulnerabilities are **actively exploited** in real-world cyberattacks.
   - Understanding these risks **prevents security breaches** and **protects Nuvei systems**.

### **3. How does this apply to my role?**
   - Secure coding practices **protect customer data** and **ensure compliance** with industry standards.
   - Developers who understand OWASP Top 10 **write more secure applications**.

### **4. How do we measure success?**
   - Reduction in security vulnerabilities reported in internal audits.
   - Increased **developer awareness** and adherence to **secure coding practices**.

---

## **Deployment Plan**
1. **Upload modules to the e-learning platform** with interactive exercises.
2. **Announce training to developers** and provide access instructions.
3. **Monitor participation and completion rates** through the platform.
4. **Collect feedback** to refine the training for future sessions.

---

### **Final Notes**
This training is designed to be **interactive, practical, and directly applicable** to Nuvei’s development workflows. By making it available on the **e-learning platform**, we ensure accessibility for all team members.  

Let’s work together to **build a security-first culture** at Nuvei!
