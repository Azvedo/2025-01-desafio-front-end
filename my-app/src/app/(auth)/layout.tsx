'use client'
import Image from "next/image";
import { motion } from "framer-motion";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>
      <div className="flex flex-col md:flex-row h-screen w-screen md:overflow-hidden">
      <motion.div 
        className="flex flex-col items-center justify-center bg-gray-900 w-full md:w-1/2 h-1/2 md:h-full"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 1 }}
        >
        <Image
          src="/logo.png"
          alt="Logo"
          width={200}
          height={200}
          className="rounded-full max-md:hidden w-1/3"
        />
        <h1 className="text-4xl font-bold text-white mt-4 md:mt-0">
          MyClub
        </h1>
      </motion.div>
      <motion.div className="flex flex-col justify-center items-center bg-white w-full md:w-1/2 h-1/2 md:h-full"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 1 }}
        >
        {children}
      </motion.div>
      </div>
      </body>
    </html>
  );
}
