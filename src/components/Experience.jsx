const experiences = [
  {
    company: 'FedEx',
    role: 'Senior Full Stack Engineer / Technical Lead',
    period: 'Apr 2024 – Present',
    color: '#6366f1',
    points: [
      'Led modernization of a legacy tariff calculation platform into a scalable Spring Boot microservices architecture.',
      'Redesigned system architecture by migrating business logic from stored procedures to application layer, improving scalability and maintainability.',
      'Designed and implemented REST APIs handling complex tax and duty computation workflows.',
      'Built modular Angular 11 frontend components, enhancing code reuse and long-term maintainability.',
      'Designed and implemented CI/CD pipelines using GitHub Actions, reducing deployment effort and improving release stability.',
      'Performed production root cause analysis and optimized performance bottlenecks.',
      'Conducted code reviews and mentored junior engineers to elevate engineering standards.',
    ],
  },
  {
    company: 'People Tech Group',
    role: 'Software Engineer',
    period: 'Oct 2022 – Apr 2024',
    color: '#8b5cf6',
    points: [
      'Designed serverless REST APIs using AWS Lambda and API Gateway to enable scalable analytics processing.',
      'Implemented infrastructure as code using AWS CDK (TypeScript), ensuring repeatable cloud deployments.',
      'Developed React-based dashboards for real-time analytics visualization.',
      'Collaborated with cross-functional stakeholders to translate business requirements into scalable technical solutions.',
      'Contributed to performance optimization and system reliability improvements.',
    ],
  },
  {
    company: 'Publicis Sapient',
    role: 'Associate Technology L2',
    period: 'Mar 2022 – Oct 2022',
    color: '#a78bfa',
    points: [
      'Architected and deployed containerized microservices using Spring Boot and Docker.',
      'Deployed services on Kubernetes clusters enabling high availability and horizontal scaling.',
      'Implemented asynchronous communication using MQ to decouple services and improve resilience.',
      'Standardized logging and observability practices to improve monitoring and debugging efficiency.',
    ],
  },
  {
    company: 'Infosys',
    role: 'Systems Engineer',
    period: 'Nov 2019 – Mar 2022',
    color: '#c4b5fd',
    points: [
      'Developed secure and scalable Spring Boot microservices supporting banking transaction workflows.',
      'Built Angular-based user interfaces for account management and transaction processing systems.',
      'Designed PL/SQL procedures and optimized database queries for performance improvements.',
      'Implemented comprehensive unit and integration testing using JUnit and Mockito.',
      'Worked in Agile environment participating in sprint planning, code reviews, and release cycles.',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" style={{ background: exp.color }}></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h3 className="timeline-company">{exp.company}</h3>
                    <p className="timeline-role">{exp.role}</p>
                  </div>
                  <span className="timeline-period">{exp.period}</span>
                </div>
                <ul className="timeline-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
