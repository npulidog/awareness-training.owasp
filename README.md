# Awareness Training: OWASP Top 10

## Objective
The goal of this training is to empower Nuvei developers to identify, understand, and mitigate the most critical vulnerabilities in software development, as outlined by the OWASP Top 10. The training is delivered through an interactive **e-learning platform**, providing flexibility for participants to complete the modules at their own pace.

## Target Audience
- **Role:** Software developers, architects, and engineers at Nuvei.
- **Experience Level:** Intermediate to advanced technical knowledge.
- **Assumptions:** Familiarity with programming, basic cybersecurity concepts, and secure development practices.

## Training Format
This training is hosted on the company's **learning platform (Campus)** and consists of self-paced modules that incorporate:
- **Story-driven narratives** to illustrate real-world security challenges.
- **Interactive coding exercises** directly embedded in the platform.
- **Quizzes and assessments** to reinforce key concepts.

## Duration
- **Total Estimated Time:** 6-8 hours.
  - Each module takes approximately **30-45 minutes** to complete.
  - Participants can complete the training over a span of **1-2 weeks**, depending on their schedule.

## Learning Objectives
By the end of this training, participants will be able to:
1. Recognize and describe vulnerabilities in the OWASP Top 10.
2. Apply best practices to mitigate risks during the development lifecycle.
3. Implement secure coding techniques to protect Nuvei systems and data.
4. Evaluate existing systems for vulnerabilities and propose enhancements.

## Contents and Structure

### Module 1: Broken Access Control
- **Description:**
  - Broken Access Control has more occurrences in applications than any other category. It ensures that users act within their intended permissions.
- **Interactive Content:**
  - Story: *The team realizes unauthorized users can access their admin panel due to missing access controls.*
  - Hands-on: Fix an API endpoint by implementing role-based access control (RBAC).
- **Key Takeaways:** Validate user roles server-side and use proper access management strategies.

### Module 2: Cryptographic Failures
- **Description:**
  - Cryptographic failures can lead to data exposure or system compromise. Learn to protect sensitive data effectively.
- **Interactive Content:**
  - Story: *The team discovers that sensitive customer data is being transmitted without encryption.*
  - Hands-on: Implement HTTPS and secure encryption algorithms (e.g., AES-256).
- **Key Takeaways:** Use up-to-date cryptographic standards and configure them properly.

### Module 3: Injection
- **Description:**
  - Includes SQL injection, XSS, and more. Injection vulnerabilities allow attackers to manipulate queries or commands.
- **Interactive Content:**
  - Story: *A database is compromised due to a poorly validated login form.*
  - Hands-on: Identify and prevent injection vulnerabilities by using parameterized queries.
- **Key Takeaways:** Sanitize and validate all user input.

### Module 4: Insecure Design
- **Description:**
  - Represents weaknesses due to missing or ineffective security measures during the design phase.
- **Interactive Content:**
  - Story: *The team encounters scalability issues due to insecure design choices.*
  - Hands-on: Redesign a flow using secure design principles.
- **Key Takeaways:** Implement security from the start.

### Module 5: Security Misconfiguration
- **Description:**
  - Misconfigurations can leave systems exposed. This includes using default passwords or unnecessary features.
- **Interactive Content:**
  - Story: *Debug information is exposed in production, revealing sensitive data.*
  - Hands-on: Audit and fix misconfigured server settings.
- **Key Takeaways:** Regularly audit configurations and automate security checks.

### Module 6: Vulnerable and Outdated Components
- **Description:**
  - Outdated software components can create vulnerabilities. Ensure your components are up-to-date.
- **Interactive Content:**
  - Story: *An old library version is exploited by attackers.*
  - Hands-on: Update dependencies and implement dependency scanning tools.
- **Key Takeaways:** Regularly check for vulnerabilities in third-party libraries.

### Module 7: Identification and Authentication Failures
- **Description:**
  - Weak or absent authentication mechanisms can allow unauthorized access.
- **Interactive Content:**
  - Story: *Attackers bypass a weak password policy.*
  - Hands-on: Implement multi-factor authentication (MFA) and strong password policies.
- **Key Takeaways:** Enforce robust authentication methods.

### Module 8: Software and Data Integrity Failures
- **Description:**
  - These occur when code or data is maliciously or accidentally modified.
- **Interactive Content:**
  - Story: *An untrusted plugin introduces malicious code.*
  - Hands-on: Verify and validate software dependencies.
- **Key Takeaways:** Use trusted sources and verify integrity.

### Module 9: Security Logging and Monitoring Failures
- **Description:**
  - Without logs, detecting and responding to breaches is nearly impossible.
- **Interactive Content:**
  - Story: *The team struggles to identify the cause of a breach due to lack of logs.*
  - Hands-on: Implement and analyze log data for suspicious activity.
- **Key Takeaways:** Use centralized logging tools and enable alerting.

### Module 10: Server-Side Request Forgery (SSRF)
- **Description:**
  - Occurs when an attacker tricks the server into making unauthorized requests.
- **Interactive Content:**
  - Story: *Attackers exploit a server to access internal resources.*
  - Hands-on: Implement input validation and restrict outbound requests.
- **Key Takeaways:** Harden server configurations against SSRF attacks.

## Materials Provided
1. **Training Platform Access:**
   - Hosted on Nuvei’s Campus e-learning platform.
   - Includes interactive modules, quizzes, and coding exercises.
2. **Reference Manual:**
   - Detailed descriptions of each OWASP Top 10 vulnerability.
   - Real-world attack examples.
   - Specific mitigation strategies tailored to Nuvei.
3. **Post-Training Assessment:**
   - A quiz to measure understanding.
   - Feedback form to refine future sessions.

## Frequently Asked Questions
1. **What is OWASP Top 10?**
   - A list of the 10 most critical security risks in web applications, maintained by the Open Worldwide Application Security Project (OWASP).
2. **Why does it matter?**
   - These vulnerabilities are exploited in 90% of attacks targeting applications.
3. **How does it apply to my role?**
   - Understanding and addressing these risks ensures secure applications and protects user data.
4. **How do we measure success?**
   - Reduced security incidents.
   - Improved awareness and secure coding practices.

## Next Steps for Deployment
1. Upload the modules and interactive exercises to the e-learning platform.
2. Announce the training program to the development team and provide access instructions.
3. Monitor participation and completion rates through the platform.
4. Collect feedback to refine the training and ensure continuous improvement.

---

**Final Notes:**
This training is designed to be flexible, practical, and directly applicable to Nuvei’s development workflows. Hosting it on the e-learning platform ensures accessibility for all team members, regardless of their schedules. Let’s work together to empower our developers with the tools and knowledge they need to build secure systems!
