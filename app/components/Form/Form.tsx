// "use client";
// import { FormData } from "@/app/interfaces/Form";
// import React from "react";
// import { SubmitHandler, useForm } from "react-hook-form";

// const questions = [
//   {
//     id: "q1",
//     heading: "",
//     label: "Primary Professional Industry:",
//     options: [
//       "Technology/Software",
//       "Marketing/Advertising",
//       "Financial Services",
//       "Healthcare",
//       "Education",
//       "E-commerce/Retail",
//       "Manufacturing",
//       "Consulting",
//     ],
//   },
//   {
//     id: "q2",
//     heading: "",
//     label: "Years of Professional Experience:",
//     options: [
//       "0-2 years",
//       "3-5 years",
//       "6-10 years",
//       "11-20 years",
//       "20+ years",
//     ],
//   },
//   {
//     id: "q3",
//     heading: "Network & Referal Potential",
//     label:
//       "Which types of organizations do you have strong connections with? (Select all that apply)",
//     options: [
//       "Early-stage startups",
//       "Scale-ip companies",
//       "Enterprise/corporate organizations",
//       "Healthcare Providers",
//       "Educational institutions",
//       "Government/public sector",
//       "Non-profit organizations",
//     ],
//   },
//   {
//     id: "q4",
//     heading: "",
//     label: "Approximate size of your professional network:",
//     options: [
//       "0-100 connections",
//       "101-500 connections",
//       "501-1000 connections",
//       "1000+ connections",
//     ],
//   },
//   {
//     id: "q5",
//     heading: "",
//     label:
//       "Do you currently have potential clients in mind that may need Artificizen's services?",
//     options: [
//       "Yes, I have specific clients in mind",
//       "Yes, but not specific clients yet",
//       "Not currently, but expect to in the future",
//       "No",
//     ],
//   },
// ];

// const SecondQuestions = [
//   {
//     id: "q6",
//     heading: "",
//     label: "Approximate project budget (if known):",
//     options: [
//       "Under $10000",
//       "$10001-$25000",
//       "$25001-$50000",
//       "$50001-$100000",
//       "$100001-$250000",
//       "Over $250000",
//       "Unknown",
//     ],
//   },
//   {
//     id: "q7",
//     heading: "",
//     label: "Has the client expressed explicit interest in AI solutions?",
//     options: [
//       "Has the client expressed explicit interest in AI solutions?",
//       "Yes, but they're in early exploration stage",
//       "No, but I believe they would benefit",
//       "Unsure",
//     ],
//   },
//   {
//     id: "q8",
//     heading: "",
//     label: "Client's availability for a discovery call:",
//     options: [
//       "Weekdays during business hours (9am-5pm)",
//       "Weekday mornings only",
//       "Weekday afternoons only",
//       "Evenings",
//       "Weekends",
//     ],
//   },
//   {
//     id: "q9",
//     heading: "",
//     label: "How would you like to facilitate the introduction?",
//     options: [
//       "Email introduction connecting both parties",
//       "I'll provide client info to Artificizen for direct outreach",
//       "Schedule a joint call with the client and Artificizen",
//     ],
//   },
//   {
//     id: "q10",
//     heading: "Partner Prefrences",
//     label:
//       "Which Artificizen services are you most interested in referring? (Select all that apply)",
//     options: [
//       "Conversational AI & Chatbots",
//       "Voice AI & Speech Technologies",
//       "AI-Powered SaaS Applications",
//       "MLOps & AIOps",
//       "MVP & POC Development",
//       "Full Stack Web Development",
//       "Workflow Automation",
//       "Data Engineering & Analytics",
//       "Data Engineering & Analytics",
//     ],
//   },
//   {
//     id: "q11",
//     heading: "",
//     label: "How would you prefer to be involved in the referral process?",
//     options: [
//       "Introduction only, then Artificizen handles all communication",
//       "Remain involved throughout the initial discussions",
//       "Stay engaged throughout the entire project lifecycle",
//       "Depends on the specific client/project",
//     ],
//   },
//   {
//     id: "q12",
//     heading: "",
//     label:
//       "What resources would help you succeed in referring clients to Artificizen? (Select all that apply)",
//     options: [
//       "Detailed service descriptions",
//       "Case studies/success stories",
//       "Presentation materials",
//       "Technical documentation",
//       "ROI calculators",
//       "Introduction email/message templates",
//       "Regular product/service updates",
//     ],
//   },
//   {
//     id: "q13",
//     heading: "Payment Information",
//     label: "Preferred payment method:",
//     options: ["Bank Transfer", "PayPal", "Cheque", "Cryptocurrency"],
//   },
//   {
//     id: "q14",
//     heading: "",
//     label: "How would you prefer to be involved in the referral process?",
//     options: [
//       "Introduction only, then Artificizen handles all communication",
//       "Remain involved throughout the initial discussions",
//       "Stay engaged throughout the entire project lifecycle",
//       "Depends on the specific client/project",
//     ],
//   },
//   {
//     id: "q15",
//     heading: "",
//     label: "Payment frequency preference:",
//     options: ["Monthly", "Quarterly", "Upon project completion/milestone"],
//   },
// ];

// const Form = () => {
//   //   const { register, handleSubmit, watch } = useForm();

//   //   const onSubmit = (data: any) => {
//   //     console.log(data);
//   //   };

//   const { register, handleSubmit, watch } = useForm<FormData>();

//   const onSubmit: SubmitHandler<FormData> = (data) => {
//     console.log(data);
//   };

//   return (
//     <div>
//       <p className="text-[clamp(1.5rem,2.5vw,2.25rem)]">
//         BYC Partner Program Application
//       </p>
//       <p className="mt-5">
//         Thank you for your interest in joining Artificizens Bring Your Client
//         (BYC) Partner Program. Please complete all sections of this form.
//       </p>

//       <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
//         <p className="text-xl font-semibold mb-4">Personal Information</p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           {/* First Name */}
//           <div className="relative">
//             <input
//               {...register("fullName")}
//               placeholder="Full Name"
//               className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//             />
//             <label
//               className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//             >
//               Full Name
//             </label>
//           </div>

//           {/* Last Name */}
//           <div className="relative">
//             <input
//               {...register("email")}
//               placeholder="Email Address"
//               className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//             />
//             <label
//               className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//             >
//               Email Address
//             </label>
//           </div>

//           {/* Repeat for Email, Phone, City, Country */}
//           {/* Example: Email */}
//           <div className="relative">
//             <input
//               {...register("phone")}
//               type="number"
//               placeholder="Phone Number"
//               className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//             />
//             <label
//               className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//             >
//               Phone Number
//             </label>
//           </div>

//           <div className="relative">
//             <input
//               {...register("linkdin")}
//               placeholder="Linkedin Profile Url"
//               className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//             />
//             <label
//               className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//             >
//               Linkedin Profile Url
//             </label>
//           </div>
//           <div className="relative">
//             <input
//               {...register("company")}
//               placeholder="Company/Organization (if Applicable)"
//               className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//             />
//             <label
//               className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//             >
//               Company/Organization
//             </label>
//           </div>

//           <div className="relative">
//             <input
//               {...register("title")}
//               placeholder="Professional Title"
//               className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//             />
//             <label
//               className={`absolute left-2 top-2 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//             >
//               Professional Title
//             </label>
//           </div>

//           {/* Add Phone, City, Country in the same way */}
//         </div>

//         <div className="mt-10">
//           <p className="text-xl font-semibold mb-4">Professional Background</p>
//           {/* Questions */}
//           {questions.map((question) => {
//             const selectedOptions = watch(`${question.id}.options`) || [];
//             return (
//               <div key={question.id}>
//                 <p className="font-semibold mt-5 text-xl mb-4">
//                   {question.heading}
//                 </p>
//                 <p className="">{question.label}</p>
//                 <div className="mt-2 grid grid-cols-1 gap-2">
//                   {question.options.map((opt) => (
//                     <label key={opt} className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         value={opt}
//                         {...register(`${question.id}.options`)}
//                       />
//                       {opt}
//                     </label>
//                   ))}
//                 </div>

//                 {selectedOptions.length === 0 && (
//                   <input
//                     {...register(`${question.id}.other`)}
//                     placeholder="Other (please specify)"
//                     className="mt-2 w-full md:w-1/2 border-0 border-b border-gray-300 focus:border-b focus:border-black focus:outline-none mb-5"
//                   />
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         <div className="mt-10">
//           <p className="text-xl font-semibold mb-4">
//             Client Referral Information
//           </p>
//           <p className="text-base">
//             Complete this section if you have a specific client you would like
//             to refer immediately. Leave blank if you are just applying to the
//             program at this time.
//           </p>
//           <p className="font-semibold text-base mt-5 mb-5">
//             Referred Client Details
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {/* First Name */}
//             <div className="relative">
//               <input
//                 {...register("clientName")}
//                 placeholder="Client/Company Name"
//                 className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//               />
//               <label
//                 className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//               >
//                 Client/Company Name:
//               </label>
//             </div>

//             {/* Last Name */}
//             <div className="relative">
//               <input
//                 {...register("clientSite")}
//                 placeholder="Client Website"
//                 className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//               />
//               <label
//                 className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//               >
//                 Client Website:
//               </label>
//             </div>

//             {/* Repeat for Email, Phone, City, Country */}
//             {/* Example: Email */}
//             <div className="relative">
//               <input
//                 {...register("clientIndustry")}
//                 type="text"
//                 placeholder="Client Industry"
//                 className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//               />
//               <label
//                 className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//               >
//                 Client Industry:
//               </label>
//             </div>

//             <div className="relative">
//               <input
//                 {...register("primaryContact")}
//                 placeholder="Primary Contact Name"
//                 className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//               />
//               <label
//                 className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//               >
//                 Primary Contact Name:
//               </label>
//             </div>
//             <div className="relative">
//               <input
//                 {...register("primaryTitle")}
//                 placeholder="Primary Contact Title/Position"
//                 className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//               />
//               <label
//                 className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//               >
//                 Primary Contact Title/Position:
//               </label>
//             </div>

//             <div className="relative">
//               <input
//                 {...register("primaryEmail")}
//                 placeholder="Primary Contact Email"
//                 className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//               />
//               <label
//                 className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//               >
//                 Primary Contact Email:
//               </label>
//             </div>

//             <div className="relative">
//               <input
//                 {...register("primaryPhone")}
//                 placeholder="Primary Contact Phone"
//                 className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//               />
//               <label
//                 className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//               >
//                 Primary Contact Phone:
//               </label>
//             </div>

//             <div className="relative">
//               <input
//                 {...register("primaryLinkedIn")}
//                 placeholder="Primary Contact Linkedin Profile (if available)"
//                 className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//               />
//               <label
//                 className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//               >
//                 Primary Contact Linkedin Profile (if available):
//               </label>
//             </div>
//             <div className="relative">
//               <input
//                 {...register("description")}
//                 placeholder="Brief description of clients needs/project"
//                 className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//               />
//               <label
//                 className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//               >
//                 Brief description of clients needs/project:
//               </label>
//             </div>

//             {/* Add Phone, City, Country in the same way */}
//           </div>
//         </div>

//         <div className="mt-5">
//           {/* Questions */}
//           {SecondQuestions.map((secondQuestion) => {
//             const selectedOptions = watch(`${secondQuestion.id}.options`) || [];
//             return (
//               <div key={secondQuestion.id}>
//                 <p className="font-semibold mt-5 text-xl mb-4">
//                   {secondQuestion.heading}
//                 </p>
//                 <p className="">{secondQuestion.label}</p>
//                 <div className="mt-2 grid grid-cols-1 gap-2">
//                   {secondQuestion.options.map((option) => (
//                     <label key={option} className="flex items-center gap-2">
//                       <input
//                         type="checkbox"
//                         value={option}
//                         {...register(`${secondQuestion.id}.options`)}
//                       />
//                       {option}
//                     </label>
//                   ))}
//                 </div>

//                 {selectedOptions.length === 0 && (
//                   <input
//                     {...register(`${secondQuestion.id}.other`)}
//                     placeholder="Other (please specify)"
//                     className="mt-4 w-full md:w-1/2 border-0 border-b border-gray-300 focus:border-b focus:border-black focus:outline-none mb-5"
//                   />
//                 )}
//               </div>
//             );
//           })}
//         </div>

//         <p>
//           <span className="font-bold">Tax Information:</span>(We will collect
//           appropriate tax documentation upon approval)
//         </p>

//         <p className="text-xl font-semibold mb-4 mt-10">
//           Additional Information
//         </p>
//         <div>
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Why are you interested in joining the BYC Partner Program? (1-2
//               sentences)
//             </label>
//             <input
//               {...register("question1")}
//               placeholder="Write here..."
//               className="w-full border-0 border-b border-gray-300 focus:border-black focus:outline-none p-1 mb-5"
//             />
//           </div>

//           {/* Question 2 */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               What questions do you have about the BYC Partner Program?
//             </label>
//             <input
//               {...register("question2")}
//               placeholder="Write here..."
//               className="w-full border-0 border-b border-gray-300 focus:border-black focus:outline-none p-2 mb-5"
//             />
//           </div>

//           {/* Question 3 */}
//           <div>
//             <label className="block text-sm font-medium mb-1">
//               Any additional information you would like to share:
//             </label>
//             <input
//               {...register("question3")}
//               placeholder="Write here..."
//               className="w-full border-0 border-b border-gray-300 focus:border-black focus:outline-none p-2"
//             />
//           </div>
//         </div>

//         <div>
//           <p className="text-xl font-semibold mb-1 mt-10">
//             Agreement & Submission
//           </p>
//           <p className="mb-3">
//             By submitting this application, I confirm that:
//           </p>
//           <ul className="list-disc list-inside space-y-1 text-gray-700">
//             <li>All information provided is accurate and complete</li>
//             <li>
//               I understand that submission does not guarantee acceptance into
//               the program
//             </li>
//             <li>
//               I agree to be contacted by Artificizen regarding this application
//               and the BYC Partner Program
//             </li>
//             <li>
//               If accepted, I will adhere to Artificizens partner guidelines and
//               code of conduct
//             </li>
//           </ul>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
//           <div className="relative">
//             <input
//               {...register("digitalSign")}
//               placeholder="Digital Signature"
//               className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//             />
//             <label
//               className={`absolute left-2 top-2 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//             >
//               Digital Signature
//             </label>
//           </div>

//           <div className="relative">
//             <input
//               {...register("date")}
//               type="date"
//               placeholder="Date"
//               className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
//             />
//             <label
//               className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
//                 peer-placeholder-shown:top-5
//                 peer-placeholder-shown:text-base
//                 peer-placeholder-shown:text-gray-400
//                 peer-focus:top-0
//                 peer-focus:text-sm
//                 peer-focus:text-black
//               `}
//             >
//               Date:
//             </label>
//           </div>
//         </div>

//         <div className="flex gap-10">
//           <button
//             type="submit"
//             className="mt-6 bg-black border text-white px-4 py-2 rounded-full cursor-pointer"
//           >
//             Submit Application
//           </button>
//           <button className="mt-6 bg-white border text-black px-4 py-2 rounded-full cursor-pointer">
//             Download T&C
//           </button>
//         </div>
//         <div className="flex justify-center mt-10">
//           <p className="text-center w-full md:max-w-[700px]">
//             Thank you for your interest in the BYC Partner Program. Our team
//             will review your application and contact you within 3 business days
//             to discuss next steps. If you have any immediate questions, please
//             contact info@artificizen.com
//           </p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Form;

"use client";
import { FormData, QuestionData } from "@/app/interfaces/Form";
import React from "react";
import { SubmitHandler, useForm, FieldPath } from "react-hook-form";

// Define the question IDs as a union type for better type safety
type QuestionId =
  | "q1"
  | "q2"
  | "q3"
  | "q4"
  | "q5"
  | "q6"
  | "q7"
  | "q8"
  | "q9"
  | "q10"
  | "q11"
  | "q12"
  | "q13"
  | "q14"
  | "q15";

interface TypedQuestion {
  id: QuestionId;
  heading: string;
  label: string;
  options: string[];
}

const questions: TypedQuestion[] = [
  {
    id: "q1",
    heading: "",
    label: "Primary Professional Industry:",
    options: [
      "Technology/Software",
      "Marketing/Advertising",
      "Financial Services",
      "Healthcare",
      "Education",
      "E-commerce/Retail",
      "Manufacturing",
      "Consulting",
    ],
  },
  {
    id: "q2",
    heading: "",
    label: "Years of Professional Experience:",
    options: [
      "0-2 years",
      "3-5 years",
      "6-10 years",
      "11-20 years",
      "20+ years",
    ],
  },
  {
    id: "q3",
    heading: "Network & Referal Potential",
    label:
      "Which types of organizations do you have strong connections with? (Select all that apply)",
    options: [
      "Early-stage startups",
      "Scale-ip companies",
      "Enterprise/corporate organizations",
      "Healthcare Providers",
      "Educational institutions",
      "Government/public sector",
      "Non-profit organizations",
    ],
  },
  {
    id: "q4",
    heading: "",
    label: "Approximate size of your professional network:",
    options: [
      "0-100 connections",
      "101-500 connections",
      "501-1000 connections",
      "1000+ connections",
    ],
  },
  {
    id: "q5",
    heading: "",
    label:
      "Do you currently have potential clients in mind that may need Artificizen's services?",
    options: [
      "Yes, I have specific clients in mind",
      "Yes, but not specific clients yet",
      "Not currently, but expect to in the future",
      "No",
    ],
  },
];

const SecondQuestions: TypedQuestion[] = [
  {
    id: "q6",
    heading: "",
    label: "Approximate project budget (if known):",
    options: [
      "Under $10000",
      "$10001-$25000",
      "$25001-$50000",
      "$50001-$100000",
      "$100001-$250000",
      "Over $250000",
      "Unknown",
    ],
  },
  {
    id: "q7",
    heading: "",
    label: "Has the client expressed explicit interest in AI solutions?",
    options: [
      "Has the client expressed explicit interest in AI solutions?",
      "Yes, but they're in early exploration stage",
      "No, but I believe they would benefit",
      "Unsure",
    ],
  },
  {
    id: "q8",
    heading: "",
    label: "Client's availability for a discovery call:",
    options: [
      "Weekdays during business hours (9am-5pm)",
      "Weekday mornings only",
      "Weekday afternoons only",
      "Evenings",
      "Weekends",
    ],
  },
  {
    id: "q9",
    heading: "",
    label: "How would you like to facilitate the introduction?",
    options: [
      "Email introduction connecting both parties",
      "I'll provide client info to Artificizen for direct outreach",
      "Schedule a joint call with the client and Artificizen",
    ],
  },
  {
    id: "q10",
    heading: "Partner Prefrences",
    label:
      "Which Artificizen services are you most interested in referring? (Select all that apply)",
    options: [
      "Conversational AI & Chatbots",
      "Voice AI & Speech Technologies",
      "AI-Powered SaaS Applications",
      "MLOps & AIOps",
      "MVP & POC Development",
      "Full Stack Web Development",
      "Workflow Automation",
      "Data Engineering & Analytics",
      "Data Engineering & Analytics",
    ],
  },
  {
    id: "q11",
    heading: "",
    label: "How would you prefer to be involved in the referral process?",
    options: [
      "Introduction only, then Artificizen handles all communication",
      "Remain involved throughout the initial discussions",
      "Stay engaged throughout the entire project lifecycle",
      "Depends on the specific client/project",
    ],
  },
  {
    id: "q12",
    heading: "",
    label:
      "What resources would help you succeed in referring clients to Artificizen? (Select all that apply)",
    options: [
      "Detailed service descriptions",
      "Case studies/success stories",
      "Presentation materials",
      "Technical documentation",
      "ROI calculators",
      "Introduction email/message templates",
      "Regular product/service updates",
    ],
  },
  {
    id: "q13",
    heading: "Payment Information",
    label: "Preferred payment method:",
    options: ["Bank Transfer", "PayPal", "Cheque", "Cryptocurrency"],
  },
  {
    id: "q14",
    heading: "",
    label: "How would you prefer to be involved in the referral process?",
    options: [
      "Introduction only, then Artificizen handles all communication",
      "Remain involved throughout the initial discussions",
      "Stay engaged throughout the entire project lifecycle",
      "Depends on the specific client/project",
    ],
  },
  {
    id: "q15",
    heading: "",
    label: "Payment frequency preference:",
    options: ["Monthly", "Quarterly", "Upon project completion/milestone"],
  },
];

const Form = () => {
  const { register, handleSubmit, watch } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  // Helper function to get the options field path for a question
  //   const getOptionsFieldPath = (questionId: QuestionId): FieldPath<FormData> => {
  //     return `${questionId}.options` as FieldPath<FormData>;
  //   };
  const getQuestionFieldPath = (
    questionId: QuestionId
  ): FieldPath<FormData> => {
    return questionId;
  };

  return (
    <div className="container max-w-full">
      <p className="text-[clamp(1.5rem,2.5vw,2.25rem)]">
        BYC Partner Program Application
      </p>
      <p className="mt-5">
        Thank you for your interest in joining Artificizens Bring Your Client
        (BYC) Partner Program. Please complete all sections of this form.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
        <p className="text-xl font-semibold mb-4">Personal Information</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* First Name */}
          <div className="relative">
            <input
              {...register("fullName")}
              placeholder="Full Name"
              className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
            />
            <label
              className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
            >
              Full Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              {...register("email")}
              placeholder="Email Address"
              className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
            />
            <label
              className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
            >
              Email Address
            </label>
          </div>

          {/* Phone */}
          <div className="relative">
            <input
              {...register("phone")}
              type="number"
              placeholder="Phone Number"
              className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
            />
            <label
              className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
            >
              Phone Number
            </label>
          </div>

          <div className="relative">
            <input
              {...register("linkdin")}
              placeholder="Linkedin Profile Url"
              className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
            />
            <label
              className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
            >
              Linkedin Profile Url
            </label>
          </div>
          <div className="relative">
            <input
              {...register("company")}
              placeholder="Company/Organization (if Applicable)"
              className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
            />
            <label
              className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
            >
              Company/Organization
            </label>
          </div>

          <div className="relative">
            <input
              {...register("title")}
              placeholder="Professional Title"
              className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
            />
            <label
              className={`absolute left-2 top-2 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
            >
              Professional Title
            </label>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-xl font-semibold mb-4">Professional Background</p>
          {/* Questions */}
          {/* {questions.map((question) => {
            const optionsFieldPath = getOptionsFieldPath(question.id);
            const otherFieldPath = getOtherFieldPath(question.id);
            const selectedOptions = watch(optionsFieldPath) || [];
            
            return (
              <div key={question.id}>
                <p className="font-semibold mt-5 text-xl mb-4">
                  {question.heading}
                </p>
                <p className="">{question.label}</p>
                <div className="mt-2 grid grid-cols-1 gap-2">
                  {question.options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={opt}
                        {...register(optionsFieldPath)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>

                {selectedOptions.length === 0 && (
                  <input
                    {...register(otherFieldPath)}
                    placeholder="Other (please specify)"
                    className="mt-2 w-full md:w-1/2 border-0 border-b border-gray-300 focus:border-b focus:border-black focus:outline-none mb-5"
                  />
                )}
              </div>
            );
          })} */}
          {questions.map((question) => {
            const questionField = getQuestionFieldPath(question.id);
            const selectedQuestionData = watch(questionField) as
              | QuestionData
              | undefined;
            const selectedOptions = selectedQuestionData?.options || [];

            return (
              <div key={question.id}>
                <p className="font-semibold mt-5 text-xl mb-4">
                  {question.heading}
                </p>
                <p className="">{question.label}</p>
                <div className="mt-2 grid grid-cols-1 gap-2">
                  {question.options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={opt}
                        {...register(`${question.id}.options` as const)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>

                {selectedOptions.length === 0 && (
                  <input
                    {...register(`${question.id}.other` as const)}
                    placeholder="Other (please specify)"
                    className="mt-2 w-full md:w-1/2 border-0 border-b border-gray-300 focus:border-b focus:border-black focus:outline-none mb-5"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <p className="text-xl font-semibold mb-4">
            Client Referral Information
          </p>
          <p className="text-base">
            Complete this section if you have a specific client you would like
            to refer immediately. Leave blank if you are just applying to the
            program at this time.
          </p>
          <p className="font-semibold text-base mt-5 mb-5">
            Referred Client Details
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Client Name */}
            <div className="relative">
              <input
                {...register("clientName")}
                placeholder="Client/Company Name"
                className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
              />
              <label
                className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
              >
                Client/Company Name:
              </label>
            </div>

            {/* Client Website */}
            <div className="relative">
              <input
                {...register("clientSite")}
                placeholder="Client Website"
                className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
              />
              <label
                className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
              >
                Client Website:
              </label>
            </div>

            {/* Client Industry */}
            <div className="relative">
              <input
                {...register("clientIndustry")}
                type="text"
                placeholder="Client Industry"
                className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
              />
              <label
                className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
              >
                Client Industry:
              </label>
            </div>

            <div className="relative">
              <input
                {...register("primaryContact")}
                placeholder="Primary Contact Name"
                className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
              />
              <label
                className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
              >
                Primary Contact Name:
              </label>
            </div>
            <div className="relative">
              <input
                {...register("primaryTitle")}
                placeholder="Primary Contact Title/Position"
                className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
              />
              <label
                className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
              >
                Primary Contact Title/Position:
              </label>
            </div>

            <div className="relative">
              <input
                {...register("primaryEmail")}
                placeholder="Primary Contact Email"
                className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
              />
              <label
                className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
              >
                Primary Contact Email:
              </label>
            </div>

            <div className="relative">
              <input
                {...register("primaryPhone")}
                placeholder="Primary Contact Phone"
                className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
              />
              <label
                className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
              >
                Primary Contact Phone:
              </label>
            </div>

            <div className="relative">
              <input
                {...register("primaryLinkedIn")}
                placeholder="Primary Contact Linkedin Profile (if available)"
                className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
              />
              <label
                className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
              >
                Primary Contact Linkedin Profile (if available):
              </label>
            </div>
            <div className="relative">
              <input
                {...register("description")}
                placeholder="Brief description of clients needs/project"
                className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
              />
              <label
                className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
              >
                Brief description of clients needs/project:
              </label>
            </div>
          </div>
        </div>

        <div className="mt-5">
          {/* Second Questions */}
          {/* {SecondQuestions.map((secondQuestion) => {
            const optionsFieldPath = getOptionsFieldPath(secondQuestion.id);
            const otherFieldPath = getOtherFieldPath(secondQuestion.id);
            const selectedOptions = watch(optionsFieldPath) || [];
            
            return (
              <div key={secondQuestion.id}>
                <p className="font-semibold mt-5 text-xl mb-4">
                  {secondQuestion.heading}
                </p>
                <p className="">{secondQuestion.label}</p>
                <div className="mt-2 grid grid-cols-1 gap-2">
                  {secondQuestion.options.map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={option}
                        {...register(optionsFieldPath)}
                      />
                      {option}
                    </label>
                  ))}
                </div>

                {selectedOptions.length === 0 && (
                  <input
                    {...register(otherFieldPath)}
                    placeholder="Other (please specify)"
                    className="mt-4 w-full md:w-1/2 border-0 border-b border-gray-300 focus:border-b focus:border-black focus:outline-none mb-5"
                  />
                )}
              </div>
            );
          })} */}
          {SecondQuestions.map((question) => {
            const questionField = getQuestionFieldPath(question.id);
            const selectedQuestionData = watch(questionField) as
              | QuestionData
              | undefined;
            const selectedOptions = selectedQuestionData?.options || [];

            return (
              <div key={question.id}>
                <p className="font-semibold mt-5 text-xl mb-4">
                  {question.heading}
                </p>
                <p className="">{question.label}</p>
                <div className="mt-2 grid grid-cols-1 gap-2">
                  {question.options.map((opt) => (
                    <label key={opt} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={opt}
                        {...register(`${question.id}.options` as const)}
                      />
                      {opt}
                    </label>
                  ))}
                </div>

                {selectedOptions.length === 0 && (
                  <input
                    {...register(`${question.id}.other` as const)}
                    placeholder="Other (please specify)"
                    className="mt-4 w-full md:w-1/2 border-0 border-b border-gray-300 focus:border-b focus:border-black focus:outline-none mb-5"
                  />
                )}
              </div>
            );
          })}
        </div>

        <p>
          <span className="font-bold">Tax Information:</span>(We will collect
          appropriate tax documentation upon approval)
        </p>

        <p className="text-xl font-semibold mb-4 mt-10">
          Additional Information
        </p>
        <div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Why are you interested in joining the BYC Partner Program? (1-2
              sentences)
            </label>
            <input
              {...register("question1")}
              placeholder="Write here..."
              className="w-full border-0 border-b border-gray-300 focus:border-black focus:outline-none p-1 mb-5"
            />
          </div>

          {/* Question 2 */}
          <div>
            <label className="block text-sm font-medium mb-1">
              What questions do you have about the BYC Partner Program?
            </label>
            <input
              {...register("question2")}
              placeholder="Write here..."
              className="w-full border-0 border-b border-gray-300 focus:border-black focus:outline-none p-2 mb-5"
            />
          </div>

          {/* Question 3 */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Any additional information you would like to share:
            </label>
            <input
              {...register("question3")}
              placeholder="Write here..."
              className="w-full border-0 border-b border-gray-300 focus:border-black focus:outline-none p-2"
            />
          </div>
        </div>

        <div>
          <p className="text-xl font-semibold mb-1 mt-10">
            Agreement & Submission
          </p>
          <p className="mb-3">
            By submitting this application, I confirm that:
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            <li>All information provided is accurate and complete</li>
            <li>
              I understand that submission does not guarantee acceptance into
              the program
            </li>
            <li>
              I agree to be contacted by Artificizen regarding this application
              and the BYC Partner Program
            </li>
            <li>
              If accepted, I will adhere to Artificizens partner guidelines and
              code of conduct
            </li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
          <div className="relative">
            <input
              {...register("digitalSign")}
              placeholder="Digital Signature"
              className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
            />
            <label
              className={`absolute left-2 top-2 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
            >
              Digital Signature
            </label>
          </div>

          <div className="relative">
            <input
              {...register("date")}
              type="date"
              placeholder="Date"
              className="peer w-full border-0 border-b border-gray-300 p-2 pt-5 focus:outline-none focus:border-black"
            />
            <label
              className={`absolute left-2 top-0 text-sm text-gray-500 transition-all
                peer-placeholder-shown:top-5
                peer-placeholder-shown:text-base
                peer-placeholder-shown:text-gray-400
                peer-focus:top-0
                peer-focus:text-sm
                peer-focus:text-black
              `}
            >
              Date:
            </label>
          </div>
        </div>

        <div className="flex gap-10">
          <button
            type="submit"
            className="mt-6 bg-black border text-white px-4 py-2 rounded-full cursor-pointer"
          >
            Submit Application
          </button>
          <button className="mt-6 bg-white border text-black px-4 py-2 rounded-full cursor-pointer">
            Download T&C
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <p className="text-center w-full md:max-w-[700px]">
            Thank you for your interest in the BYC Partner Program. Our team
            will review your application and contact you within 3 business days
            to discuss next steps. If you have any immediate questions, please
            contact info@artificizen.com
          </p>
        </div>
      </form>
    </div>
  );
};

export default Form;
