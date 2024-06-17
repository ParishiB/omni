// // "use client";
// // import { CiFilter } from "react-icons/ci";
// // import { SlCalender } from "react-icons/sl";
// // import { IoPersonOutline } from "react-icons/io5";
// // import { FaRegDotCircle } from "react-icons/fa";
// // import { SlRefresh } from "react-icons/sl";
// // import { BsBoxArrowInDown } from "react-icons/bs";
// // import { MdOutlineSensorWindow } from "react-icons/md";
// // import data from "../data";

// // export default function Main() {
// //   return (
// //     <>
// //       <div className="">
// //         <div className="w-screen">
// //           <h1>Waitlist</h1>
// //           <div className="flex gap-3 ">
// //             <p className="border p-2 w-[220px]">All Waitlists</p>
// //             <p className="border p-2 w-[220px]">Newly added</p>
// //             <p className="border p-2 w-[220px]">Leads</p>
// //           </div>
// //           <div className="flex justify-between items-center p-4">
// //             <div>
// //               <button className="flex items-center border p-3">
// //                 <CiFilter className="mr-2" />
// //                 Add Filter
// //               </button>
// //             </div>
// //             <div className="flex items-center space-x-2">
// //               <input
// //                 type="text"
// //                 className="border p-2"
// //                 placeholder="Search..."
// //               />
// //               <SlRefresh className="text-lg" />
// //               <BsBoxArrowInDown className="text-lg" />
// //               <MdOutlineSensorWindow className="text-lg" />
// //             </div>
// //           </div>
// //         </div>
// //         <div className="border border-gray-300 rounded-md m-3">
// //           <table className="min-w-full divide-y divide-gray-200">
// //             <thead className="bg-[#F9FAFC]">
// //               <tr>
// //                 <th className="flex gap-2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   <SlCalender /> Created on
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   <div className="flex gap-2 ">
// //                     <IoPersonOutline />
// //                     Payer
// //                   </div>
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   <div className="flex gap-2 ">
// //                     <FaRegDotCircle /> Status
// //                   </div>
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   # Email
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   # Payer Phone
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   # Services
// //                 </th>
// //                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// //                   <div className="flex gap-2 ">
// //                     <SlCalender /> Scheduled
// //                   </div>
// //                 </th>
// //               </tr>
// //             </thead>
// //             <tbody className="bg-white ">
// //               {data.map((person, index) => (
// //                 <tr key={index}>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// //                     {person.created}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// //                     {person.payer}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// //                     {person.status}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// //                     {person.Email}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// //                     {person.PayerPhone}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// //                     {person.Services}
// //                   </td>
// //                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// //                     {person.Scheduled}
// //                   </td>
// //                 </tr>
// //               ))}
// //             </tbody>
// //           </table>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// "use client";
// import { CiFilter } from "react-icons/ci";
// import { SlCalender } from "react-icons/sl";
// import { IoPersonOutline } from "react-icons/io5";
// import { FaRegDotCircle } from "react-icons/fa";
// import { SlRefresh } from "react-icons/sl";
// import { BsBoxArrowInDown } from "react-icons/bs";
// import { MdOutlineSensorWindow } from "react-icons/md";
// import data from "../data";

// export default function Main() {
//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Waitlist</h1>
//       <div className="flex gap-3 mb-4">
//         <p className="border p-2 w-[220px]">All Waitlists</p>
//         <p className="border p-2 w-[220px]">Newly added</p>
//         <p className="border p-2 w-[220px]">Leads</p>
//       </div>
//       <div className="flex justify-between items-center mb-4 ">
//         <div>
//           <button className="flex items-center border p-3">
//             <CiFilter className="mr-2" />
//             Add Filter
//           </button>
//         </div>
//         <div className="flex items-center space-x-2">
//           <input type="text" className="border p-2" placeholder="Search..." />
//           <SlRefresh className="text-lg" />
//           <BsBoxArrowInDown className="text-lg" />
//           <MdOutlineSensorWindow className="text-lg" />
//         </div>
//       </div>
//       {/* <div className="border border-gray-300 rounded-md">
//         <table className="min-w-full divide-y divide-gray-200">
//           <thead className="bg-[#F9FAFC]">
//             <tr>
//               <th className="flex gap-2 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                 <SlCalender /> Created on
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase ">
//                 <div className="flex gap-2">
//                   <IoPersonOutline />
//                   Payer
//                 </div>
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                 <div className="flex gap-2">
//                   <FaRegDotCircle /> Status
//                 </div>
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                 Email
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                 Payer Phone
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                 Services
//               </th>
//               <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
//                 <div className="flex gap-2">
//                   <SlCalender /> Scheduled
//                 </div>
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white">
//             {data.map((person, index) => (
//               <tr key={index}>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                   {person.created}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                   {person.payer}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                   {person.status}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                   {person.Email}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                   {person.PayerPhone}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                   {person.Services}
//                 </td>
//                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
//                   {person.Scheduled}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div> */}
//     </div>
//   );
// }
"use client";
import { CiFilter } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
import { IoPersonOutline } from "react-icons/io5";
import { FaRegDotCircle } from "react-icons/fa";
import { SlRefresh } from "react-icons/sl";
import { BsBoxArrowInDown } from "react-icons/bs";
import { MdOutlineSensorWindow } from "react-icons/md";
import data from "../data";

export default function Main() {
  return (
    <div className="w-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Waitlist</h1>
      <div className="flex gap-3 mb-4">
        <p className="border p-2 w-[220px]">All Waitlists</p>
        <p className="border p-2 w-[220px]">Newly added</p>
        <p className="border p-2 w-[220px]">Leads</p>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <button className="flex items-center border p-3">
            <CiFilter className="mr-2" />
            Add Filter
          </button>
        </div>
        <div className="flex items-center space-x-2">
          <input type="text" className="border p-2" placeholder="Search..." />
          <SlRefresh className="text-lg" />
          <BsBoxArrowInDown className="text-lg" />
          <MdOutlineSensorWindow className="text-lg" />
        </div>
      </div>

      <div className="overflow-x-auto border border-gray-300 rounded-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-[#F9FAFC]">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex gap-2">
                  <SlCalender /> Created on
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex gap-2">
                  <IoPersonOutline /> Payer
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex gap-2">
                  <FaRegDotCircle /> Status
                </div>
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payer Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Services
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div className="flex gap-2">
                  <SlCalender /> Scheduled
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {data.map((person, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {person.created}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {person.payer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {person.status}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {person.Email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {person.PayerPhone}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {person.Services}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {person.Scheduled}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
