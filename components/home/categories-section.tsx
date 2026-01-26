// "use client"

// import Link from "next/link"
// import { motion } from "framer-motion"
// import Image from "next/image"
// import abstrractImage from "./../../public/Better_Career_Pitch_page_1.png"
// import { Fullscreen } from "lucide-react"
// const categories = [
//   { name: "Hospitality & Tourism", icon: "🏨", count: 124, color: "bg-orange-100" },
//   { name: "Manufacturing", icon: "🏭", count: 89, color: "bg-blue-100" },
//   { name: "Transport & Logistics", icon: "🚛", count: 156, color: "bg-green-100" },
//   { name: "Information Technology", icon: "💻", count: 243, color: "bg-purple-100" },
//   { name: "Construction", icon: "🏗️", count: 178, color: "bg-yellow-100" },
// ]

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
// }

// const itemVariants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: { opacity: 1, y: 0 },
// }

// export function CategoriesSection() {
//   return (
//     <section className="py-16 lg:py-24">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Browse by Categoryies</h2>
//           <p className="mt-4 text-lg text-muted-foreground">
//             Explore opportunities across Tanzania&apos;s leading industries
//           </p>
//         </motion.div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
//         >
//           {categories.map((category) => (
//             <motion.div key={category.name} variants={itemVariants}>
//               <Link href={`/jobs?category=${encodeURIComponent(category.name)}`}>
//                 <motion.div
//                   whileHover={{ scale: 1.05, y: -5 }}
//                   className="group cursor-pointer rounded-2xl bg-card p-6 text-center shadow-md transition-shadow hover:shadow-xl"
//                 >
//                   <div
//                     className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${category.color} text-3xl`}
//                   >
//                     {category.icon}
//                   </div>
//                   <h3 className="mt-4 font-semibold text-foreground group-hover:text-primary">{category.name}</h3>
//                   <p className="mt-1 text-sm text-muted-foreground">{category.count} jobs</p>
//                 </motion.div>
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//      <div className="relative w-screen h-screen">
//   <Image
//     src={abstrractImage}
//     alt=""
//     fill
//     unoptimized
//     className="object-cover"
//     priority
//   />
// </div>

//     </section>
//   )
// }
