// Centralized company logo URLs to avoid duplication across components
export const COMPANY_LOGOS = {
  travelers: 'https://upload.wikimedia.org/wikipedia/de/6/66/Travelers_logo.svg', 
  aetna: 'https://upload.wikimedia.org/wikipedia/commons/0/01/1_Heart_Aetna_logo_sm_rgb_violet.png',
  utc: 'https://upload.wikimedia.org/wikipedia/commons/9/97/UTC_Aerospace_Systems.svg', 
  clarkson: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Clarkson-university-logo-green.png',
  orgadata: 'https://d1eipm3vz40hy0.cloudfront.net/images/Customer+Stories+/Orgadata/orgadata_logo.png'
} as const;

// Company information interface
export interface CompanyInfo {
  name: string;
  logo?: string;
  colorClass: string;
}

// Centralized company information
export const COMPANY_INFO: Record<string, CompanyInfo> = {
  'Travelers': {
    name: 'Travelers',
    logo: COMPANY_LOGOS.travelers,
    colorClass: 'travelers'
  },
  'Aetna': {
    name: 'Aetna, a CVS Health Company',
    logo: COMPANY_LOGOS.aetna,
    colorClass: 'aetna'
  },
  'UTC': {
    name: 'UTC Aerospace Systems',
    logo: COMPANY_LOGOS.utc,
    colorClass: 'utc'
  },
  'Orgadata': {
    name: 'Orgadata AG',
    logo: COMPANY_LOGOS.orgadata,
    colorClass: 'orgadata'
  },
  'Clarkson': {
    name: 'Clarkson University',
    logo: COMPANY_LOGOS.clarkson,
    colorClass: 'clarkson'
  }
};
