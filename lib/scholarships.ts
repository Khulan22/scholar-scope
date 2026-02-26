export interface Scholarship {
  id: number
  name: string
  university: string
  country: string
  degreeLevel: string
  fieldOfStudy: string
  type: string
  deadline: string
  shortDescription: string
  fullDescription: string
  eligibility: string[]
  benefits: string[]
  requiredDocuments: string[]
  officialUrl: string
}

export const scholarships: Scholarship[] = [
  {
    id: 1,
    name: "Chevening Scholarship",
    university: "Various UK Universities",
    country: "United Kingdom",
    degreeLevel: "Master",
    fieldOfStudy: "Business",
    type: "Fully Funded",
    deadline: "2026-11-03",
    shortDescription: "UK government's global scholarship programme, funded by the Foreign, Commonwealth & Development Office.",
    fullDescription: "Chevening is the UK government's international scholarships programme aimed at developing global leaders. Funded by the Foreign, Commonwealth and Development Office (FCDO) and partner organisations, Chevening offers two types of award: Chevening Scholarships and Chevening Fellowships. The programme provides full financial support for scholars to study at any UK university.",
    eligibility: [
      "Be a citizen of a Chevening-eligible country",
      "Return to your country of citizenship for a minimum of two years after your award has ended",
      "Have an undergraduate degree",
      "Have at least two years of work experience",
      "Apply to three different eligible UK university courses"
    ],
    benefits: [
      "Full tuition fees",
      "Monthly stipend",
      "Travel costs to and from the UK",
      "Arrival allowance",
      "Homeward departure allowance",
      "Cost of one visa application"
    ],
    requiredDocuments: [
      "Valid passport",
      "Academic transcripts and certificates",
      "Two reference letters",
      "Personal statement",
      "English language test results (IELTS/TOEFL)"
    ],
    officialUrl: "https://www.chevening.org"
  },
  {
    id: 2,
    name: "Fulbright Scholarship",
    university: "Various US Universities",
    country: "United States",
    degreeLevel: "Master",
    fieldOfStudy: "Engineering",
    type: "Fully Funded",
    deadline: "2026-10-15",
    shortDescription: "Prestigious scholarship program for international students pursuing graduate studies in the United States.",
    fullDescription: "The Fulbright Program is the flagship international educational exchange program sponsored by the U.S. government and is designed to increase mutual understanding between the people of the United States and the people of other countries. The program provides participants with the opportunity to study, teach, and conduct research in the United States.",
    eligibility: [
      "Be a citizen of a participating country",
      "Hold a bachelor's degree or equivalent",
      "Have sufficient English language proficiency",
      "Meet health requirements",
      "Be committed to returning to home country after completion"
    ],
    benefits: [
      "Full tuition and fees",
      "Monthly living stipend",
      "Round-trip airfare",
      "Health insurance",
      "Book and equipment allowances",
      "Pre-academic training program"
    ],
    requiredDocuments: [
      "Completed application form",
      "Academic transcripts",
      "Three letters of recommendation",
      "Study/research objective statement",
      "Personal statement",
      "TOEFL/IELTS scores"
    ],
    officialUrl: "https://foreign.fulbrightonline.org"
  },
  {
    id: 3,
    name: "DAAD Scholarship",
    university: "Various German Universities",
    country: "Germany",
    degreeLevel: "PhD",
    fieldOfStudy: "Engineering",
    type: "Fully Funded",
    deadline: "2026-09-30",
    shortDescription: "German Academic Exchange Service scholarship for international doctoral candidates and young academics.",
    fullDescription: "The DAAD (Deutscher Akademischer Austauschdienst) is the world's largest funding organisation for the international exchange of students and researchers. DAAD scholarships offer opportunities for students, doctoral candidates, and postdocs to come to Germany for study and research. The programme supports various fields of study at German universities.",
    eligibility: [
      "Hold a master's degree or equivalent",
      "Have a clearly defined research proposal",
      "Have acceptance from a German university supervisor",
      "Maximum 6 years since last degree",
      "Demonstrate academic excellence"
    ],
    benefits: [
      "Monthly scholarship of 1,200 EUR",
      "Travel allowance",
      "Health insurance subsidy",
      "Research allowance",
      "Rent subsidy",
      "German language course funding"
    ],
    requiredDocuments: [
      "DAAD application form",
      "Curriculum vitae",
      "Research proposal",
      "Letter of acceptance from German supervisor",
      "Academic transcripts and certificates",
      "Two academic recommendation letters"
    ],
    officialUrl: "https://www.daad.de"
  },
  {
    id: 4,
    name: "Erasmus Mundus Joint Masters",
    university: "Multiple European Universities",
    country: "Europe",
    degreeLevel: "Master",
    fieldOfStudy: "Arts",
    type: "Fully Funded",
    deadline: "2026-12-01",
    shortDescription: "EU-funded programme offering joint master's degrees at multiple European universities with full scholarships.",
    fullDescription: "Erasmus Mundus Joint Masters (EMJMs) are prestigious, integrated, international study programmes, jointly delivered by an international consortium of higher education institutions. They award EU-funded scholarships to the best students worldwide. Students study and carry out research in at least two of the consortium countries.",
    eligibility: [
      "Hold a bachelor's degree or equivalent",
      "Not have previously received an Erasmus Mundus scholarship",
      "Meet specific programme language requirements",
      "Apply within the programme's deadline",
      "Open to students from all countries"
    ],
    benefits: [
      "Contribution to participation costs up to 9,000 EUR per year",
      "Monthly allowance of 1,400 EUR",
      "Travel and installation costs",
      "Insurance coverage",
      "Joint degree from multiple universities"
    ],
    requiredDocuments: [
      "Certified copies of degree certificates",
      "Transcript of records",
      "CV/Resume",
      "Motivation letter",
      "Language proficiency certificates",
      "Two recommendation letters"
    ],
    officialUrl: "https://erasmus-plus.ec.europa.eu"
  },
  {
    id: 5,
    name: "Australia Awards Scholarship",
    university: "Various Australian Universities",
    country: "Australia",
    degreeLevel: "Bachelor",
    fieldOfStudy: "Medicine",
    type: "Fully Funded",
    deadline: "2026-04-30",
    shortDescription: "Australian Government scholarships for students from developing countries to study at Australian universities.",
    fullDescription: "Australia Awards Scholarships are long-term awards administered by the Department of Foreign Affairs and Trade. They aim to contribute to the development needs of Australia's partner countries in line with bilateral and regional agreements. The scholarships provide opportunities to study full-time undergraduate or postgraduate courses at participating Australian universities.",
    eligibility: [
      "Be a citizen of an eligible country",
      "Not be a citizen or permanent resident of Australia",
      "Be at least 18 years old at time of application",
      "Have completed at least two years of employment",
      "Not hold a military position"
    ],
    benefits: [
      "Full tuition fees",
      "Return air travel",
      "Establishment allowance",
      "Contribution to living expenses",
      "Introductory academic programme",
      "Overseas Student Health Cover"
    ],
    requiredDocuments: [
      "Online application form",
      "Certified academic transcripts",
      "Proof of citizenship",
      "Statement of purpose",
      "English language test results",
      "Employment references"
    ],
    officialUrl: "https://www.dfat.gov.au/people-to-people/australia-awards"
  },
  {
    id: 6,
    name: "Gates Cambridge Scholarship",
    university: "University of Cambridge",
    country: "United Kingdom",
    degreeLevel: "PhD",
    fieldOfStudy: "Medicine",
    type: "Fully Funded",
    deadline: "2026-12-05",
    shortDescription: "Full-cost scholarship for outstanding applicants outside the UK pursuing a postgraduate degree at Cambridge.",
    fullDescription: "The Gates Cambridge Scholarship programme was established in October 2000 by a donation of US$210m from the Bill and Melinda Gates Foundation to the University of Cambridge. It is one of the most prestigious international scholarships in the world. The programme aims to build a global network of future leaders committed to improving the lives of others.",
    eligibility: [
      "Be a citizen of any country outside the UK",
      "Apply for a full-time postgraduate degree at Cambridge",
      "Have an outstanding academic record",
      "Demonstrate leadership potential",
      "Have a commitment to improving the lives of others"
    ],
    benefits: [
      "Full cost of tuition and fees",
      "Maintenance allowance of GBP 20,000 per year",
      "One economy single airfare",
      "Visa costs and immigration health surcharge",
      "Academic development funding",
      "Family allowance (if applicable)"
    ],
    requiredDocuments: [
      "Cambridge graduate application",
      "Gates Cambridge Scholarship statement",
      "Research proposal",
      "Academic transcripts",
      "Two academic references",
      "CV/Resume"
    ],
    officialUrl: "https://www.gatescambridge.org"
  },
  {
    id: 7,
    name: "MEXT Scholarship",
    university: "Various Japanese Universities",
    country: "Japan",
    degreeLevel: "Bachelor",
    fieldOfStudy: "Engineering",
    type: "Fully Funded",
    deadline: "2026-04-15",
    shortDescription: "Japanese Government scholarship for international students to study at Japanese universities.",
    fullDescription: "The MEXT (Ministry of Education, Culture, Sports, Science and Technology) Scholarship is a comprehensive scholarship offered by the Japanese Government. It covers tuition, living expenses, and travel costs. The program is available for undergraduate and graduate students who wish to study at Japanese universities.",
    eligibility: [
      "Be a citizen of a country with diplomatic relations with Japan",
      "Be under 25 years old for undergraduate applicants",
      "Have completed 12 years of school education",
      "Be willing to learn Japanese",
      "Be in good health"
    ],
    benefits: [
      "Full tuition waiver",
      "Monthly allowance of 117,000 JPY",
      "Round-trip airfare",
      "Japanese language preparatory course",
      "Free accommodation in university dormitory"
    ],
    requiredDocuments: [
      "Application form",
      "Academic transcripts and certificates",
      "Recommendation letter from school principal",
      "Health certificate",
      "Passport copy",
      "Photograph"
    ],
    officialUrl: "https://www.mext.go.jp"
  },
  {
    id: 8,
    name: "Swiss Government Excellence Scholarship",
    university: "Various Swiss Universities",
    country: "Switzerland",
    degreeLevel: "PhD",
    fieldOfStudy: "Engineering",
    type: "Fully Funded",
    deadline: "2026-08-01",
    shortDescription: "Swiss Government scholarships for research and doctoral studies at Swiss universities.",
    fullDescription: "The Swiss Government Excellence Scholarships are aimed at promoting international exchange and research cooperation between Switzerland and over 180 countries. The Federal Commission for Scholarships for Foreign Students (FCS) is responsible for these scholarships, which offer graduates from all fields the opportunity to pursue doctoral or postdoctoral research in Switzerland.",
    eligibility: [
      "Hold a master's degree",
      "Be under 35 years of age",
      "Have a clearly defined research project",
      "Have acceptance from a Swiss university professor",
      "Not have Swiss nationality"
    ],
    benefits: [
      "Monthly scholarship of CHF 1,920",
      "Tuition fee waiver",
      "Health insurance",
      "Housing allowance",
      "Flight ticket to Switzerland"
    ],
    requiredDocuments: [
      "FCS application form",
      "Research plan",
      "Academic transcripts and diplomas",
      "Two academic recommendation letters",
      "List of publications (if applicable)",
      "Language certificate"
    ],
    officialUrl: "https://www.sbfi.admin.ch"
  },
  {
    id: 9,
    name: "Korean Government Scholarship (KGSP)",
    university: "Various Korean Universities",
    country: "South Korea",
    degreeLevel: "Master",
    fieldOfStudy: "Business",
    type: "Fully Funded",
    deadline: "2026-03-15",
    shortDescription: "Korean Government scholarship for international students to pursue graduate studies in South Korea.",
    fullDescription: "The Korean Government Scholarship Program (KGSP) is designed to provide international students with opportunities to conduct advanced studies at higher educational institutions in South Korea. The program aims to develop global leaders, strengthen Korea-friendly networks worldwide, and promote mutual exchanges between countries.",
    eligibility: [
      "Be a citizen of a KGSP partner country",
      "Be under 40 years of age",
      "Hold a bachelor's degree with GPA of 2.64/4.0 or higher",
      "Be in good health",
      "Not have previously completed a degree in Korea"
    ],
    benefits: [
      "Full tuition",
      "Monthly allowance of 900,000 KRW",
      "Settlement allowance of 200,000 KRW",
      "Korean language training",
      "Medical insurance",
      "Round-trip airfare"
    ],
    requiredDocuments: [
      "KGSP application form",
      "Personal statement and study plan",
      "Two recommendation letters",
      "Academic transcripts and degree certificates",
      "Proof of citizenship",
      "Health certificate"
    ],
    officialUrl: "https://www.studyinkorea.go.kr"
  },
  {
    id: 10,
    name: "Vanier Canada Graduate Scholarship",
    university: "Various Canadian Universities",
    country: "Canada",
    degreeLevel: "PhD",
    fieldOfStudy: "Medicine",
    type: "Fully Funded",
    deadline: "2026-11-01",
    shortDescription: "Canada's most prestigious doctoral scholarship for world-class researchers in health, sciences, and humanities.",
    fullDescription: "The Vanier Canada Graduate Scholarships (Vanier CGS) program was created to attract and retain world-class doctoral students and to establish Canada as a global centre of excellence in research and higher learning. Valued at $50,000 per year for three years, the Vanier CGS is among the world's most competitive doctoral scholarships.",
    eligibility: [
      "Be nominated by a Canadian institution",
      "Be pursuing a doctoral degree at a Canadian institution",
      "Have a first-class academic standing",
      "Demonstrate research potential",
      "Show leadership skills"
    ],
    benefits: [
      "$50,000 per year for three years",
      "Access to research networks",
      "Professional development opportunities",
      "Prestige recognition"
    ],
    requiredDocuments: [
      "Nomination from Canadian institution",
      "Research proposal",
      "Academic transcripts",
      "Two reference letters",
      "Leadership profile",
      "CV/Resume"
    ],
    officialUrl: "https://vanier.gc.ca"
  },
  {
    id: 11,
    name: "Commonwealth Scholarship",
    university: "Various UK Universities",
    country: "United Kingdom",
    degreeLevel: "Master",
    fieldOfStudy: "Arts",
    type: "Fully Funded",
    deadline: "2026-12-18",
    shortDescription: "Scholarships for students from Commonwealth countries to study for a Master's or PhD in the UK.",
    fullDescription: "Commonwealth Scholarships for Master's and PhD study in the UK are offered for citizens of developing Commonwealth countries. These scholarships are funded by the UK Department for International Development (DFID), with the aim of contributing to the UK's international development aims and wider overseas interests.",
    eligibility: [
      "Be a citizen of a Commonwealth country",
      "Hold a first degree of upper second class (2:1) or above",
      "Be unable to afford to study in the UK without this scholarship",
      "Not have studied for a year or more in a developed country",
      "Have relevant work experience (preferred)"
    ],
    benefits: [
      "Approved tuition fees",
      "Stipend at rate set by the Commission",
      "Warm clothing allowance (if applicable)",
      "Thesis grant",
      "Study travel grant",
      "Economy class airfare"
    ],
    requiredDocuments: [
      "Electronic application form",
      "References from two academic referees",
      "Evidence of English language proficiency",
      "Academic transcripts",
      "Degree certificates"
    ],
    officialUrl: "https://cscuk.fcdo.gov.uk"
  },
  {
    id: 12,
    name: "Eiffel Excellence Scholarship",
    university: "Various French Universities",
    country: "France",
    degreeLevel: "Master",
    fieldOfStudy: "Business",
    type: "Partial",
    deadline: "2027-01-10",
    shortDescription: "French Government scholarship to attract top international students to France for master's and PhD programmes.",
    fullDescription: "The Eiffel Excellence Scholarship Programme is designed by the French Ministry for Europe and Foreign Affairs to attract international students to French higher education institutions. The programme supports French higher education institutions in their international recruitment strategy for master's and doctoral courses.",
    eligibility: [
      "Be a non-French citizen",
      "Be under 25 for Master's or under 30 for PhD",
      "Not already be living in France",
      "Be nominated by a French higher education institution",
      "Demonstrate academic excellence"
    ],
    benefits: [
      "Monthly allowance of 1,181 EUR (Master's) or 1,700 EUR (PhD)",
      "International return travel",
      "Housing assistance",
      "Health insurance",
      "Cultural activities allowance"
    ],
    requiredDocuments: [
      "Application submitted by French institution",
      "Academic transcripts and diplomas",
      "CV/Resume",
      "Motivation letter",
      "Language certificates",
      "Copy of passport"
    ],
    officialUrl: "https://www.campusfrance.org"
  },
  {
    id: 13,
    name: "Aga Khan Foundation Scholarship",
    university: "Various Global Universities",
    country: "Global",
    degreeLevel: "Master",
    fieldOfStudy: "Medicine",
    type: "Partial",
    deadline: "2026-03-31",
    shortDescription: "Need-based scholarships for exceptional students from developing countries pursuing postgraduate studies.",
    fullDescription: "The Aga Khan Foundation provides a limited number of scholarships each year for postgraduate studies to outstanding students from developing countries who have no other means of financing their studies. Scholarships are awarded on a 50% grant, 50% loan basis through a competitive application process.",
    eligibility: [
      "Be a national of a developing country",
      "Have excellent academic records",
      "Demonstrate genuine financial need",
      "Have secured admission to a reputable university",
      "Be under 30 years of age"
    ],
    benefits: [
      "50% grant / 50% loan scholarship",
      "Tuition fees coverage",
      "Living expenses support",
      "Travel costs assistance"
    ],
    requiredDocuments: [
      "AKF application form",
      "Academic transcripts",
      "Financial information and documents",
      "University admission letter",
      "Two recommendation letters",
      "Budget plan"
    ],
    officialUrl: "https://www.akdn.org"
  },
  {
    id: 14,
    name: "Rhodes Scholarship",
    university: "University of Oxford",
    country: "United Kingdom",
    degreeLevel: "Master",
    fieldOfStudy: "Arts",
    type: "Fully Funded",
    deadline: "2026-10-01",
    shortDescription: "The oldest and perhaps most prestigious international scholarship programme for postgraduate study at Oxford.",
    fullDescription: "The Rhodes Scholarship is one of the oldest and most prestigious international graduate scholarship programmes. Founded in 1903, it enables talented young people from around the world to study at the University of Oxford. Rhodes Scholars are selected on the basis of intellect, character, leadership, and commitment to service.",
    eligibility: [
      "Be a citizen of an eligible Rhodes country",
      "Be between 18 and 24 years old (depending on country)",
      "Have completed a bachelor's degree",
      "Demonstrate academic excellence",
      "Show qualities of character, leadership, and commitment to service"
    ],
    benefits: [
      "Full university and college fees",
      "Annual stipend for living expenses",
      "Airfare to and from Oxford",
      "Health insurance through the NHS",
      "Access to Rhodes House community and events"
    ],
    requiredDocuments: [
      "Online application form",
      "Personal statement",
      "Academic transcripts",
      "Four to eight letters of recommendation",
      "CV/Resume",
      "Photograph"
    ],
    officialUrl: "https://www.rhodeshouse.ox.ac.uk"
  },
  {
    id: 15,
    name: "Schwarzman Scholars Program",
    university: "Tsinghua University",
    country: "China",
    degreeLevel: "Master",
    fieldOfStudy: "Business",
    type: "Fully Funded",
    deadline: "2026-09-15",
    shortDescription: "A fully funded one-year Master's program at Tsinghua University designed to prepare future global leaders.",
    fullDescription: "Schwarzman Scholars is the first scholarship created to respond to the geopolitical landscape of the 21st Century. Whether in politics, business, or science, the program's goal is to prepare the next generation of global leaders for a future in which China plays a growing role. The program offers a one-year Master's degree in Global Affairs at Tsinghua University in Beijing.",
    eligibility: [
      "Have completed an undergraduate degree",
      "Be between 18 and 28 years old",
      "Demonstrate leadership abilities",
      "Have strong English language skills",
      "Open to all nationalities"
    ],
    benefits: [
      "Full tuition and fees",
      "Room and board",
      "In-country study tours",
      "Round-trip airfare",
      "Personal stipend",
      "Health insurance"
    ],
    requiredDocuments: [
      "Online application form",
      "Resume/CV",
      "Two recommendation letters",
      "Transcript",
      "Video essay or interview",
      "English proficiency proof (non-native speakers)"
    ],
    officialUrl: "https://www.schwarzmanscholars.org"
  },
  {
    id: 16,
    name: "New Zealand Scholarships",
    university: "Various NZ Universities",
    country: "New Zealand",
    degreeLevel: "Bachelor",
    fieldOfStudy: "Engineering",
    type: "Fully Funded",
    deadline: "2026-03-28",
    shortDescription: "New Zealand Government scholarships for students from eligible countries to study at NZ universities.",
    fullDescription: "New Zealand Scholarships provide full funding for students from eligible developing countries to study at New Zealand tertiary institutions. The scholarships are a key part of the New Zealand Aid Programme, supporting partner country development through education and training.",
    eligibility: [
      "Be a citizen of an eligible developing country",
      "Meet English language requirements",
      "Not hold dual citizenship with New Zealand or Australia",
      "Meet health and character requirements",
      "Have relevant work experience (preferred)"
    ],
    benefits: [
      "Full tuition fees",
      "Living allowance",
      "Establishment allowance",
      "Medical and travel insurance",
      "Return airfare",
      "Research and thesis costs"
    ],
    requiredDocuments: [
      "Completed online application",
      "Academic transcripts and certificates",
      "IELTS/TOEFL scores",
      "Employer support letter",
      "Passport copy",
      "Medical clearance"
    ],
    officialUrl: "https://www.nzscholarships.govt.nz"
  },
  {
    id: 17,
    name: "Lester B. Pearson Scholarship",
    university: "University of Toronto",
    country: "Canada",
    degreeLevel: "Bachelor",
    fieldOfStudy: "Arts",
    type: "Fully Funded",
    deadline: "2026-11-30",
    shortDescription: "University of Toronto's prestigious scholarship recognizing exceptional international students in high school.",
    fullDescription: "The Lester B. Pearson International Scholarship Program at the University of Toronto is intended to recognize international students who demonstrate exceptional academic achievement and creativity and who are recognized as leaders within their school. The scholarship covers tuition, books, incidental fees, and full residence support for four years.",
    eligibility: [
      "Be an international student nominated by their school",
      "Currently be in the final year of secondary school",
      "Demonstrate exceptional academic achievement",
      "Show creativity and leadership",
      "Be applying for admission to the University of Toronto"
    ],
    benefits: [
      "Full tuition coverage for four years",
      "Books and incidental fees",
      "Full residence support for four years",
      "Approximately $100,000 CAD total value"
    ],
    requiredDocuments: [
      "School nomination form",
      "University of Toronto application",
      "Academic transcripts",
      "School reference letter",
      "Personal profile"
    ],
    officialUrl: "https://future.utoronto.ca/pearson"
  },
  {
    id: 18,
    name: "Swedish Institute Scholarships",
    university: "Various Swedish Universities",
    country: "Sweden",
    degreeLevel: "Master",
    fieldOfStudy: "Engineering",
    type: "Fully Funded",
    deadline: "2027-02-10",
    shortDescription: "Scholarships for global professionals to pursue master's studies at Swedish universities.",
    fullDescription: "The Swedish Institute Scholarships for Global Professionals (SISGP) target working professionals from eligible countries who wish to pursue a master's degree in Sweden. The programme aims to develop future leaders who will contribute to the UN Sustainable Development Goals and who will strengthen the ties between Sweden and the target countries.",
    eligibility: [
      "Be a citizen of an eligible country",
      "Have a minimum of 3,000 hours of work or volunteer experience",
      "Hold a bachelor's degree",
      "Have been admitted to a master's programme in Sweden",
      "Demonstrate leadership and sustainability ambitions"
    ],
    benefits: [
      "Full tuition fees",
      "Monthly living allowance of SEK 10,000",
      "Travel grant",
      "Insurance",
      "Networking and leadership training",
      "Membership in SI network of alumni"
    ],
    requiredDocuments: [
      "Online scholarship application",
      "Motivation essay",
      "CV/Resume",
      "Proof of work experience",
      "University admission letter",
      "Academic documents"
    ],
    officialUrl: "https://si.se/en/apply/scholarships"
  }
]

// Helper functions for filter options
export const countries = [...new Set(scholarships.map(s => s.country))].sort()
export const degreeLevels = ["Bachelor", "Master", "PhD"]
export const fieldsOfStudy = [...new Set(scholarships.map(s => s.fieldOfStudy))].sort()
export const scholarshipTypes = ["Fully Funded", "Partial", "Merit-based"]
export const deadlineOptions = ["Upcoming", "This Month", "This Year"]

export function getDeadlineCategory(deadline: string): string {
  const now = new Date()
  const deadlineDate = new Date(deadline)
  const diffDays = Math.ceil((deadlineDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24))

  if (diffDays <= 30 && diffDays >= 0) return "Upcoming"
  if (deadlineDate.getMonth() === now.getMonth() && deadlineDate.getFullYear() === now.getFullYear()) return "This Month"
  if (deadlineDate.getFullYear() === now.getFullYear()) return "This Year"
  if (deadlineDate.getFullYear() === now.getFullYear() + 1) return "This Year"
  return "Past"
}
