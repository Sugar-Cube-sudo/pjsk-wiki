"use client";

import { Card } from "@/components/ui/card";

export function MusicPageLoading() {
  // Create an array to render multiple skeleton cards
  const skeletonCards = Array.from({ length: 15 }, (_, i) => i);

  return (
    <div className="space-y-8">
      {/* Skeleton for filters */}
      <div className="w-full p-4 space-y-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {Array.from({ length: 6 }, (_, i) => (
            <div
              key={`filter-${i}`}
              className="h-10 w-32 loading-shimmer bg-gray-200 dark:bg-gray-700 rounded-lg"
            />
          ))}
        </div>

        <div className="flex justify-center mt-4">
          <div className="h-10 w-64 loading-shimmer bg-gray-200 dark:bg-gray-700 rounded-lg" />
        </div>
      </div>

      {/* Skeleton grid for songs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-8">
        {skeletonCards.map((index) => (
          <Card key={index} className="overflow-hidden border border-[#c9dde4] dark:border-[#3a4a59]">
            {/* Song cover image skeleton */}
            <div className="aspect-square w-full loading-shimmer bg-gray-200 dark:bg-gray-700" />

            {/* Song details skeleton */}
            <div className="p-3 space-y-2">
              <div className="h-5 w-4/5 loading-shimmer bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="h-4 w-2/3 loading-shimmer bg-gray-200 dark:bg-gray-700 rounded" />
              <div className="flex gap-1 mt-2">
                {Array.from({ length: 4 }, (_, i) => (
                  <div
                    key={`diff-${i}`}
                    className="h-6 w-6 loading-shimmer bg-gray-200 dark:bg-gray-700 rounded-full"
                  />
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
