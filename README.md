# Awareness Training: OWASP Top 10

## Objective
The goal of this training is to empower Nuvei developers to identify, understand, and mitigate the most critical vulnerabilities in software development, as outlined by the OWASP Top 10. This training uses an engaging narrative format to make the material relatable and memorable while addressing real-world challenges developers face daily.

## Target Audience
- *Role:* Software developers, architects, and engineers at Nuvei.
- *Experience Level:* Intermediate to advanced technical knowledge.
- *Assumptions:* Familiarity with programming, basic cybersecurity concepts, and secure development practices.

## Training Format
This training uses a *story-driven narrative* format, following a fictional team of developers facing real-world vulnerabilities in their project. Through their journey, participants will:
- Learn how vulnerabilities manifest in the development lifecycle.
- Explore the technical and business impacts of each issue.
- Apply mitigation strategies through hands-on exercises and simulations.

## Duration
- *Total Training Time:* 6 hours
  - *3 Modules*, each lasting 2 hours.
  - Includes breaks and Q&A sessions.

## Learning Objectives
By the end of this training, participants will be able to:
1. Recognize and describe vulnerabilities in the OWASP Top 10.
2. Apply best practices to mitigate risks during the development lifecycle.
3. Implement secure coding techniques to protect Nuvei systems and data.
4. Evaluate existing systems for vulnerabilities and propose enhancements.

## Contents and Structure
### Module 1: The Team Faces OWASP Top 10
- *Narrative:* A fictional team, SecureDevSquad, starts a new project, unaware of the lurking dangers in their codebase.
  - *Example:* During a product launch, the team discovers that unauthorized users can access admin dashboards (Broken Access Control).
  - *Topics Covered:*
    1. Introduction to OWASP Top 10.
    2. Overview of the first 5 vulnerabilities:
        - Broken Access Control
        - Cryptographic Failures
        - Injection
        - Insecure Design
        - Security Misconfiguration
    3. Real-life scenarios of attacks exploiting these vulnerabilities.

### Module 2: Hands-on Rescue Mission
- *Narrative:* The SecureDevSquad uncovers vulnerabilities and embarks on a mission to fix them before attackers strike.
  - *Example:* They fix a *SQL Injection* issue in a query vulnerable to manipulation.
  - *Interactive Exercises:*
    - Identifying vulnerabilities in pre-written code.
    - Fixing flaws in real-world scenarios, like insecure API keys and poorly configured servers.
    - Debugging simulated security breaches.
  - *Topics Covered:*
    - Introduction to the remaining OWASP Top 10 vulnerabilities:
      - Vulnerable and Outdated Components
      - Identification and Authentication Failures
      - Software and Data Integrity Failures
      - Security Logging and Monitoring Failures
      - Server-Side Request Forgery (SSRF)

### Module 3: Best Practices and Final Challenge
- *Narrative:* The SecureDevSquad implements long-term solutions and establishes best practices.
  - *Example:* Designing a CI/CD pipeline with integrated security checks.
  - *Interactive Exercises:*
    - Building a secure development pipeline.
    - Reviewing and enhancing project documentation for security compliance.
    - Participating in a capture-the-flag (CTF) challenge to solidify learning.
  - *Topics Covered:*
    - Secure design principles.
    - Automating security in development workflows.
    - Monitoring and incident response.

## Materials Provided
1. *Training Slides:* Comprehensive overview of each module.
2. *Code Samples:* Examples of vulnerable and secure code.
3. *Reference Manual:*
   - Detailed descriptions of each OWASP Top 10 vulnerability.
   - Real-world attack examples.
   - Specific mitigation strategies tailored to Nuvei.
4. *Post-Training Assessment:*
   - A quiz to measure understanding.
   - Feedback form to refine future sessions.

## Frequently Asked Questions
1. *What is OWASP Top 10?*
   - A list of the 10 most critical security risks in web applications, maintained by the Open Worldwide Application Security Project (OWASP).
2. *Why does it matter?*
   - These vulnerabilities are exploited in 90% of attacks targeting applications.
3. *How does it apply to my role?*
   - Understanding and addressing these risks ensures secure applications and protects user data.
4. *How do we measure success?*
   - Reduced security incidents.
   - Improved awareness and secure coding practices.

## Next Steps for Deployment
1. Finalize the narrative format and exercises for each module.
2. Pilot the training with a small group of developers and gather feedback.
3. Iterate on the materials based on feedback.
4. Scale the training to the entire development team.

---

*Final Notes:*
This training is designed to be practical, engaging, and directly applicable to Nuvei’s development workflows. Feedback and collaboration will be key to making this program a success. Let’s work together to empower our developers with the tools and knowledge they need to build secure systems!
