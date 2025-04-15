'use client';
import Image from "next/image";
import { motion } from "framer-motion";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col md:flex-row h-screen w-screen md:overflow-hidden">
      <motion.div 
        className="flex flex-col items-center justify-center bg-gradient-to-t from-green-500 to-gray-800 w-full md:w-1/2 h-1/3 md:h-full"
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/myLogo.png"
          alt="Logo"
          width={200}
          height={200}
          className="rounded-full w-1/3"
        />
      </motion.div>
      <motion.div 
        className="flex flex-col justify-center items-center bg-white w-full md:w-1/2 h-1/2 md:h-full"
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: "0", opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
