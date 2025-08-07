// export interface DataForm {
//   fullName: string;
//   email: string;
//   phone: string;
//   linkdin: string;
//   company: string;
//   title: string;
//   // Professional Background Questions (q1 to q5)
//   q1: {
//     options?: string[]; // Array for checkbox selections
//     other?: string; // Optional "Other" field
//   };
//   q2: {
//     options?: string[];
//     other?: string;
//   };
//   q3: {
//     options?: string[];
//     other?: string;
//   };
//   q4: {
//     options?: string[];
//     other?: string;
//   };
//   q5: {
//     options?: string[];
//     other?: string;
//   };
//   // Client Referral Information
//   clientName?: string;
//   clientSite?: string;
//   clientIndustry?: string;
//   primaryContact?: string;
//   primaryTitle?: string;
//   primaryEmail?: string;
//   primaryPhone?: string;
//   primaryLinkedIn?: string;
//   description?: string;
//   // Second Questions (q6 to q15)
//   q6: {
//     options?: string[];
//     other?: string;
//   };
//   q7: {
//     options?: string[];
//     other?: string;
//   };
//   q8: {
//     options?: string[];
//     other?: string;
//   };
//   q9: {
//     options?: string[];
//     other?: string;
//   };
//   q10: {
//     options?: string[];
//     other?: string;
//   };
//   q11: {
//     options?: string[];
//     other?: string;
//   };
//   q12: {
//     options?: string[];
//     other?: string;
//   };
//   q13: {
//     options?: string[];
//     other?: string;
//   };
//   q14: {
//     options?: string[];
//     other?: string;
//   };
//   q15: {
//     options?: string[];
//     other?: string;
//   };
//   // Additional Information
//   question1?: string;
//   question2?: string;
//   question3?: string;
//   // Agreement & Submission
//   digitalSign?: string;
//   date?: string;
// }


// Define the question IDs as a union type
export type QuestionId = 'q1' | 'q2' | 'q3' | 'q4' | 'q5' | 'q6' | 'q7' | 'q8' | 'q9' | 'q10' | 'q11' | 'q12' | 'q13' | 'q14' | 'q15';

export interface Question {
  id: QuestionId;
  heading: string;
  label: string;
  options: string[];
}

export interface QuestionData {
  options?: string[];
  other?: string;
}

// Create a mapped type for question fields
type QuestionFields = {
  [K in QuestionId]: QuestionData;
};

export interface FormData extends Partial<QuestionFields> {
  // Personal Information
  fullName?: string;
  email?: string;
  phone?: string;
  linkdin?: string;
  company?: string;
  title?: string;

  // Client Referral Information
  clientName?: string;
  clientSite?: string;
  clientIndustry?: string;
  primaryContact?: string;
  primaryTitle?: string;
  primaryEmail?: string;
  primaryPhone?: string;
  primaryLinkedIn?: string;
  description?: string;

  // Additional Information
  question1?: string;
  question2?: string;
  question3?: string;

  // Agreement & Submission
  digitalSign?: string;
  date?: string;
}