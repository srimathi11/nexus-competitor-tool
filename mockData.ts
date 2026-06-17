import { FounderDashboardData } from './types';

export function getMockAnalysisData(input: string): FounderDashboardData {
  return {
    competitors: [
      {
        id: "comp-1",
        name: "AlphaSync Tools",
        website: "https://alphasync.io",
        productOfferings: ["Task Dashboard", "Automated Reports"],
        keyFeatures: ["Data Syncing", "Email Triggers", "Basic Intake Forms"],
        pricing: "$49 / month",
        targetAudience: "Small Businesses & Freelancers",
        positioning: "Fast workflow cleaner for small busy teams.",
        valueProposition: "Save 10 hours a week by letting our system move your documents automatically.",
        strengths: ["Beautiful look", "Very cheap to start running"],
        weaknesses: ["No enterprise security tools", "Slows down with big spreadsheets"]
      },
      {
        id: "comp-2",
        name: "EnterpriseFlow Pro",
        website: "https://enterpriseflow.com",
        productOfferings: ["Corporate Suite", "Dedicated Cloud Hosting"],
        keyFeatures: ["Single Sign-On (SSO)", "Custom Workflow Matrix", "Audit Logs"],
        pricing: "$450 / month",
        targetAudience: "Fortune 500 Large Enterprises",
        positioning: "The absolute gold standard for secure workflow operations.",
        valueProposition: "Complete security-first automated task manager built for heavily audited legal teams.",
        strengths: ["Bank-grade data security protocols", "Never goes down"],
        weaknesses: ["Extremely hard to set up", "Takes 3 months to train employees"]
      },
      {
        id: "comp-3",
        name: "NovaOps Network",
        website: "https://novaops.net",
        productOfferings: ["No-Code Builder Engine"],
        keyFeatures: ["Drag-and-Drop Canvas", "Community Template Library"],
        pricing: "$19 / month",
        targetAudience: "Solo Creators & Product Builders",
        positioning: "A drag-and-drop lego-kit for company software tools.",
        valueProposition: "Build your own custom internal data tracker dashboard in under 10 minutes flat.",
        strengths: ["Thousands of free templates", "Huge user community"],
        weaknesses: ["Cannot handle complex mathematical processing", "Horrible customer support response times"]
      },
      {
        id: "comp-4",
        name: "ZetaStream Intelligence",
        website: "https://zetastream.ai",
        productOfferings: ["AI Agent Assistant"],
        keyFeatures: ["Natural Language Inputs", "Smart Project Ticket Routing"],
        pricing: "$99 / month",
        targetAudience: "Agile Software Teams",
        positioning: "The autonomous co-pilot for software engineers.",
        valueProposition: "Let intelligent bots handle bug tracking and developer task scheduling automatically.",
        strengths: ["State-of-the-art predictive AI maps", "Direct connection to code tools"],
        weaknesses: ["High waiting latency on chats", "Confusing dashboard setup"]
      },
      {
        id: "comp-5",
        name: "CoreStack Systems",
        website: "https://corestack.co",
        productOfferings: ["Legacy Middleware Systems"],
        keyFeatures: ["Database Listeners", "On-Premises Security Tunneling"],
        pricing: "$300 / month",
        targetAudience: "Traditional IT Departments",
        positioning: "Old reliable database routing bridges.",
        valueProposition: "Safely bridge legacy internal company mainframes with newer internet cloud endpoints.",
        strengths: ["Perfect historical uptime score", "Works with 15-year old code databases"],
        weaknesses: ["Ugly gray interface layout", "Completely missing any AI features"]
      }
    ],
    featureMatrix: [
      { featureName: "Automated Data Capture", ourProduct: true, competitors: { "comp-1": true, "comp-2": true, "comp-3": false, "comp-4": true, "comp-5": true } },
      { featureName: "AI-Powered Core Suggestions", ourProduct: true, competitors: { "comp-1": false, "comp-2": false, "comp-3": false, "comp-4": true, "comp-5": false } },
      { featureName: "Enterprise SAML Security Compliance", ourProduct: false, competitors: { "comp-1": false, "comp-2": true, "comp-3": false, "comp-4": false, "comp-5": true } },
      { featureName: "One-Click PDF / CSV Data Export", ourProduct: true, competitors: { "comp-1": true, "comp-2": true, "comp-3": true, "comp-4": false, "comp-5": true } },
      { featureName: "Drag-and-Drop Layout UI Canvas", ourProduct: false, competitors: { "comp-1": true, "comp-2": true, "comp-3": true, "comp-4": false, "comp-5": false } }
    ],
    marketGaps: [
      "No single competitor provides high-end artificial intelligence suggestions combined with strict enterprise security layers.",
      "The mid-market pricing range ($150-$250) is empty; options are either too cheap or insanely expensive."
    ],
    differentiationPoints: [
      "We explain *why* an artificial intelligence recommendation was made to the founder.",
      "We provide a flat team-license fee layout instead of charging for every individual user account."
    ],
    leads: [
      {
        id: "lead-1",
        companyName: "Vanguard Tech Partners",
        website: "https://vanguardpartners.tech",
        industry: "Financial Operations & Auditing Software",
        employeeSize: "250 - 500 Employees",
        location: "New York, USA",
        contactPerson: "Sarah Jenkins",
        jobTitle: "VP of Product Engineering",
        businessEmail: "s.jenkins@vanguardpartners.tech",
        confidenceScore: "High",
        supportingEvidence: "The target lead published a public post on LinkedIn requesting third-party secure data syncing automation help."
      },
      {
        id: "lead-2",
        companyName: "Nexus Build Labs",
        website: "https://nexusbuild.in",
        industry: "Startup Incubators & Startup Accelerators",
        employeeSize: "50 - 100 Employees",
        location: "Chennai, India",
        contactPerson: "Rajesh Kumar",
        jobTitle: "Managing Director of Team Operations",
        businessEmail: "r.kumar@nexusbuild.in",
        confidenceScore: "High",
        supportingEvidence: "Company manifestos state that creating automated market competitor research blueprints is an ongoing bottleneck for them."
      },
      {
        id: "lead-3",
        companyName: "Acme Logistics Group",
        website: "https://acmesynergy.com",
        industry: "Supply Chains & Shipping Freight",
        employeeSize: "1,000+ Employees",
        location: "London, UK",
        contactPerson: "David Cole",
        jobTitle: "Chief Information Officer (CIO)",
        businessEmail: "d.cole@acmesynergy.com",
        confidenceScore: "Medium",
        supportingEvidence: "Internal data infrastructure charts mention a company-wide initiative pushing to integrate cloud workflow automation toolsets."
      }
    ],
    productRecs: {
      nextFeatures: { title: "Top 5 Features to Prioritize and Build Next", items: ["Enterprise SAML Single Sign-On Module", "Custom Field Data Verification Rules", "Interactive History Timeline Audit Streams", "Multi-Tenant Data Access Scopes", "Slack & Microsoft Teams Alert Webhooks"], reasoning: "Fills missing layout gaps preventing multi-user enterprise company subscriptions." },
      featureGaps: { title: "Top 5 Feature Gaps (What We Are Missing)", items: ["Role-Based Access Control matrix controls", "Complete history change logs for files", "Local on-premises database terminal links", "Nested condition logic branch tools", "System-wide automatic data pruning schedules"], reasoning: "Discovered by comparing our checklist directly with EnterpriseFlow and CoreStack." },
      advantages: { title: "Top 5 Competitive Advantages to Chase", items: ["AI-First automated path explanation maps", "Instant browser playground template test layouts", "Blazing fast regional edge server database loading scores", "Flat-fee team billing models", "Public transparent live service update sheets"], reasoning: "Keeps your setup feeling light-years cleaner and faster than old legacy platforms." }
    },
    marketRecs: {
      opportunities: { title: "Top 5 White-Space Market Opportunities", items: ["Target fast-growing high-security modern companies", "Provide white-labeled system screens for corporate developers", "Include baseline automation data compliance reporting structures", "Target the completely open European operational technology arena", "Partner with corporate technology startup incubators"], reasoning: "Strategic market layout empty zones spotted via competitive mapping files." },
      risks: { title: "Top 5 Systemic Market Risks to Watch", items: ["EnterpriseFlow launching sudden price match discounts", "Big Tech companies building free tools directly into server clouds", "Aggressive local government compliance laws on consumer files", "Sudden user cancellation retention curves", "AI computing engine pricing tier fee updates"], reasoning: "Defensive analytical frameworks to keep the product stable over the years." }
    },
    salesRecs: {
      targetCompanies: { title: "Top 5 Target Accounts to Convert First", items: ["Vanguard Tech Partners", "Nexus Build Labs", "Acme Logistics Group", "Apex Health Global Systems", "Orbit Digital Delivery Squads"], reasoning: "Tech-focused operators currently bleeding overhead capital doing manual market reporting data sheets." },
      decisionMakers: { title: "Top 5 High-Value Decision-Makers to Email", items: ["Sarah Jenkins (VP Engineering)", "Rajesh Kumar (MD Operations)", "David Cole (CIO)", "Amanda Ross (Director of IT Architecture)", "Vikram Shah (Head of Corporate Systems Strategy)"], reasoning: "Key target stakeholders holding immediate spending budget permissions for tools." }
    }
  };
}