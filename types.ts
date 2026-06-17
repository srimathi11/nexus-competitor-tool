// These are the strict rule sets required by the assignment evaluation team
export interface Competitor {
  id: string;
  name: string;
  website: string;
  productOfferings: string[];
  keyFeatures: string[];
  pricing: string;
  targetAudience: string;
  positioning: string;
  valueProposition: string;
  strengths: string[];
  weaknesses: string[];
}

export interface FeatureMatrixRow {
  featureName: string;
  ourProduct: boolean;
  competitors: { [key: string]: boolean };
}

export interface B2BLead {
  id: string;
  companyName: string;
  website: string;
  industry: string;
  employeeSize: string;
  location: string;
  contactPerson: string;
  jobTitle: string;
  businessEmail: string;
  confidenceScore: 'High' | 'Medium' | 'Low';
  supportingEvidence: string;
}

export interface RecommendationSection {
  title: string;
  items: string[];
  reasoning: string;
}

export interface FounderDashboardData {
  competitors: Competitor[];
  featureMatrix: FeatureMatrixRow[];
  marketGaps: string[];
  differentiationPoints: string[];
  leads: B2BLead[];
  productRecs: {
    nextFeatures: RecommendationSection;
    featureGaps: RecommendationSection;
    advantages: RecommendationSection;
  };
  marketRecs: {
    opportunities: RecommendationSection;
    risks: RecommendationSection;
  };
  salesRecs: {
    targetCompanies: RecommendationSection;
    decisionMakers: RecommendationSection;
  };
}