import { Header } from "@/components/wiki/Header";
import { Footer } from "@/components/wiki/Footer";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-grow">
        <div className="container py-6">
          <div className="w-full h-64 mb-6 relative">
            <Skeleton className="w-full h-full rounded-lg bg-gradient-to-r from-[#58c7d5]/30 via-[#95b8cc]/30 to-[#daa2a8]/30 animate-pulse" />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <div className="w-60 h-10 bg-white/20 rounded-lg mb-4"></div>
              <div className="w-40 h-6 bg-white/20 rounded-lg"></div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-64 shrink-0">
              <Skeleton className="w-full h-[500px] rounded-lg bg-[#e8f4f8] animate-pulse" />
            </div>

            <div className="flex-1 space-y-6">
              <div className="space-y-4">
                <Skeleton className="w-full h-10 rounded-lg bg-[#58c7d5]/30 animate-pulse" />

                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex border rounded overflow-hidden">
                    <Skeleton className="w-64 h-32 bg-[#c9dde4]/50 animate-pulse" />
                    <div className="flex-1 p-3 space-y-2">
                      <Skeleton className="w-3/4 h-6 bg-[#e8f4f8] animate-pulse" />
                      <Skeleton className="w-1/2 h-4 bg-[#e8f4f8] animate-pulse" />
                    </div>
                  </div>
                ))}
              </div>

              <Skeleton className="w-full h-64 rounded-lg bg-[#e8f4f8] animate-pulse" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
