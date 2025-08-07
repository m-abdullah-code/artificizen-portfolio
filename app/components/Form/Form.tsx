// "use client";
// import React from "react";
// import { useForm } from "react-hook-form";

// const Form = () => {
//   const { register, handleSubmit } = useForm();

//   const onSubmit = (data: any) => {
//     console.log(data);
//   };
//   return (
//     <>
//       <div className="p-5 md:p-10">
//         <p className="text-[clamp(1.5rem,2.5vw,2.25rem)]">
//           BYC Partner Program Application
//         </p>
//         <p className="mt-5">
//           Thank you for your interest in joining Artificizens Bring Your Client
//           (BYC) Partner Program. Please complete all sections of this form to
//           help us understand your background, network, and how we can best
//           support your success as a partner.
//         </p>
//         {/* <div className="mt-7">
//           <p className="text-xl font-bold">Personal Information</p>
//         </div> */}
//         <form onSubmit={handleSubmit(onSubmit)} className="mt-7">
//           <p className="text-xl font-bold mb-4">Personal Information</p>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 First Name
//               </label>
//               <input
//                 {...register("firstName")}
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">
//                 Last Name
//               </label>
//               <input
//                 {...register("lastName")}
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Email</label>
//               <input
//                 {...register("email")}
//                 type="email"
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Phone</label>
//               <input
//                 {...register("phone")}
//                 type="tel"
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">City</label>
//               <input
//                 {...register("city")}
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium mb-1">Country</label>
//               <input
//                 {...register("country")}
//                 className="w-full border border-gray-300 p-2 rounded"
//               />
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="mt-6 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Form;
import React from "react";

const Form = () => {
  return <div>Form</div>;
};

export default Form;
