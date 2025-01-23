# Awareness Training: OWASP Top 10

## Objective
The goal of this training is to empower Nuvei developers to identify, understand, and mitigate the most critical vulnerabilities in software development, as outlined by the OWASP Top 10. The training uses a fun and engaging narrative format, paired with interactive examples and practical exercises, to ensure maximum retention and applicability.

## Target Audience
- **Role:** Software developers, architects, and engineers at Nuvei.
- **Experience Level:** Intermediate to advanced technical knowledge.
- **Assumptions:** Familiarity with programming, basic cybersecurity concepts, and secure development practices.

## Training Format
This training combines **story-driven narratives** and **interactive coding exercises**. Participants follow the journey of a fictional development team (*SecureDevSquad*) as they encounter and solve real-world security challenges. Each lesson includes:
- A relatable story illustrating the vulnerability.
- Hands-on coding exercises to identify and fix issues.
- Key takeaways and actionable steps.

## Duration
- **Total Training Time:** 6 hours
  - **3 Modules**, each lasting 2 hours.
  - Includes breaks and Q&A sessions.

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
1. **Training Slides:** Comprehensive overview of each module.
2. **Code Samples:** Examples of vulnerable and secure code.
3. **Reference Manual:**
   - Detailed descriptions of each OWASP Top 10 vulnerability.
   - Real-world attack examples.
   - Specific mitigation strategies tailored to Nuvei.
4. **Post-Training Assessment:**
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
1. Finalize the narrative format and exercises for each module.
2. Pilot the training with a small group of developers and gather feedback.
3. Iterate on the materials based on feedback.
4. Scale the training to the entire development team.

---

**Final Notes:**
This training is designed to be practical, engaging, and directly applicable to Nuvei’s development workflows. Feedback and collaboration will be key to making this program a success. Let’s work together to empower our developers with the tools and knowledge they need to build secure systems!
