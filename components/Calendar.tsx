"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface Gift {
  day: number;
  gift: string;
  message: string;
  isOpen: boolean;
  pattern: string;
}

const gifts = [
  {
    day: 1,
    gift: "A USB-C Charger",
    message: "On the first day of Christmas, my true love gave to me...",
    isOpen: false,
    pattern: "bg-sa",
  },
  {
    day: 2,
    gift: "Lays Chips x2",
    message: "Two packs of snacks...",
    isOpen: false,
    pattern: "bg-sa",
  },
  {
    day: 3,
    gift: "Taco Supreme x3",
    message: "Three tacos to eat...",
    isOpen: false,
    pattern: "bg-sa",
  },
  {
    day: 4,
    gift: "Candles x4",
    message: "Four candles of joy...",
    isOpen: false,
    pattern: "bg-sa",
  },
  {
    day: 5,
    gift: "Kindle Premium Books x5",
    message: "Five books to read...",
    isOpen: false,
    pattern: "bg-pi-la",
  },
  {
    day: 6,
    gift: "Heart Sushi",
    message: "Six SALMON AVO...",
    isOpen: false,
    pattern: "bg-pi-la",
  },
  {
    day: 7,
    gift: "Brazilian Crush Cheirosa '40",
    message: "Seven hours of scent...",
    isOpen: false,
    pattern: "bg-pi-la",
  },
  {
    day: 8,
    gift: "Dove Body Wash x2",
    message: "Eight months of wash...",
    isOpen: false,
    pattern: "bg-pi-la",
  },
  {
    day: 9,
    gift: "A USB-C Charger",
    message: "On the first day of Christmas, my true love gave to me...",
    isOpen: false,
    pattern: "bg-pi",
  },
  {
    day: 10,
    gift: "A USB-C Charger",
    message: "On the first day of Christmas, my true love gave to me...",
    isOpen: false,
    pattern: "bg-pi",
  },
  {
    day: 11,
    gift: "Personal .com Domain",
    message: "Eleven months of web...",
    isOpen: false,
    pattern: "bg-pi",
  },
  {
    day: 12,
    gift: "Nike Panda Dunks",
    message: "Twelve holes to lace...",
    isOpen: false,
    pattern: "bg-pi",
  },
];

export default function Calendar() {
  const [days, setDays] = useState<Gift[]>(gifts);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  const handleDayClick = (day: number) => {
    const dayDate = new Date(currentDate.getFullYear(), 11, 25 - 12 + day);

    if (currentDate >= dayDate) {
      setDays((prevDays) =>
        prevDays.map((d) => (d.day === day ? { ...d, isOpen: true } : d))
      );
    } else {
      toast.error(
        `This gift can be opened on ${dayDate.toLocaleDateString()}.`
      );
    }
  };

  const isClickable = (day: number) => {
    const dayDate = new Date(currentDate.getFullYear(), 11, 25 - 12 + day);
    return currentDate >= dayDate;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-w-full min-h-screen mx-auto px-4 grid grid-cols-3 z-50">
      <div className="col-span-3 lg:col-span-1 mt-6 lg:my-auto">
        <div className="text-5xl sm:text-6xl xl:text-7xl min-[1600px]:text-8xl font-bold text-center text-white tracking-wider">
          12 Days of{" "}
          <motion.h1
            initial="initial"
            whileHover="hovered"
            className="text-5xl sm:text-6xl xl:text-7xl min-[1600px]:text-8xl font-bold text-center text-white mt-2 mb-4 tracking-wider relative block overflow-hidden whitespace-nowrap">
            <motion.div
              variants={{ initial: { y: 0 }, hovered: { y: "-100%" } }}>
              Christmas
            </motion.div>
            <motion.div
              className="absolute inset-0"
              variants={{ initial: { y: "100%" }, hovered: { y: 0 } }}>
              Gifts & Luv
            </motion.div>
          </motion.h1>
        </div>
        <motion.h2
          initial="initial"
          whileHover="hovered"
          className={`text-2xl sm:text-3xl xl:text-4xl min-[1600px]:text-5xl text-center text-white opacity-80 tracking-wide relative block overflow-hidden whitespace-nowrap`}>
          <motion.div
            variants={{ initial: { y: "-10%" }, hovered: { y: "-110%" } }}>
            ~ for Sydney Turner ~
          </motion.div>
          <motion.div
            className="absolute inset-0"
            variants={{ initial: { y: "110%" }, hovered: { y: "-10%" } }}>
            ~ for Sudu Manika ~
          </motion.div>
        </motion.h2>

        {/*
        <motion.div whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}>
          <Image
            src={treeImage}
            alt="Christmas Tree with Gifts"
            width={225}
            height={225}
            className="mx-auto mt-12 min-[1600px]:h-[600px] min-[1600px]:w-[400px]"
          />
        </motion.div>
        */}
      </div>
      <motion.div
        className="col-span-3 lg:col-span-2 min-w-full max-w-full px-8 min-[1600px]:pl-6 min-[1600px]:pr-12 my-12 lg:my-auto align-middle"
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={containerVariants}>
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 align-middle">
          {days.map((day) => (
            <motion.div key={day.day} variants={cardVariants}>
              <Card
                className={`overflow-hidden border-none bg-transparent shadow-sm`}>
                <motion.div
                  className={`h-40 min-[1440px]:h-52 min-[1600px]:h-64 flex flex-col items-center justify-center cursor-pointer px-4 py-6 rounded-3xl ${day.pattern}`}
                  whileHover={day.isOpen ? { scale: 1.05 } : { scale: 1.2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleDayClick(day.day)}>
                  <AnimatePresence mode="wait">
                    {day.isOpen ? (
                      <motion.div
                        key="open"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="text-center text-white">
                        <motion.div
                          initial={{ y: -20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: 0.2, duration: 0.3 }}>
                          <p className="text-base sm:text-lg font-thin mb-2">
                            {day.message}
                          </p>
                          <p className="text-base sm:text-lg font-medium">
                            {day.gift}
                          </p>
                        </motion.div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="closed"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5 }}
                        className="text-center text-white p-4">
                        <motion.div
                          animate={
                            isClickable(day.day) ? { scale: [1, 1.1, 1] } : {}
                          }
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                          }}>
                          <div className="text-8xl font-medium mb-2">
                            {day.day}
                          </div>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
