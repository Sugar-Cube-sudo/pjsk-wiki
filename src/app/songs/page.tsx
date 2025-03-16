"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/wiki/Header";
import { Footer } from "@/components/wiki/Footer";
import { SongPageBanner } from "@/components/wiki/SongPageBanner";
import { SongFilters } from "@/components/wiki/SongFilters";
import { SongGrid } from "@/components/wiki/SongGrid";
import { MusicPageLoading } from "@/components/wiki/MusicPageLoading";

export default function SongsPage() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
    // Simulate loading for a pleasing UI experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <SongPageBanner />

        <div className="container mx-auto py-6 px-4">
          {loading ? (
            <MusicPageLoading />
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <SongFilters 
                activeFilter={activeFilter} 
                setActiveFilter={setActiveFilter}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              
              <SongGrid activeFilter={activeFilter} searchQuery={searchQuery} />
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}