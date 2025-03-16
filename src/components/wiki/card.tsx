"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface WikiCardProps extends React.ComponentPropsWithoutRef<typeof Card> {
  hoverEffect?: boolean;
  unitColor?: string;
  borderColor?: string;
  asChild?: boolean;
}

const WikiCard = forwardRef<HTMLDivElement, WikiCardProps>(
  ({ className, hoverEffect = true, unitColor, borderColor, children, ...props }, ref) => {
    // If we need to add a special hover effect
    if (hoverEffect) {
      return (
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="h-full"
        >
          <Card
            ref={ref}
            className={cn(
              "overflow-hidden h-full transition-all duration-300",
              borderColor ? `border-${borderColor}` : "border-[#c9dde4] dark:border-[#3a4a59]",
              hoverEffect && "hover:shadow-md",
              unitColor && `hover:border-[${unitColor}]`,
              className
            )}
            {...props}
          >
            {children}
          </Card>
        </motion.div>
      );
    }

    // Default card without hover effect
    return (
      <Card
        ref={ref}
        className={cn(
          "overflow-hidden h-full",
          borderColor ? `border-${borderColor}` : "border-[#c9dde4] dark:border-[#3a4a59]",
          className
        )}
        {...props}
      >
        {children}
      </Card>
    );
  }
);
WikiCard.displayName = "WikiCard";

// Re-export the original sub-components
export {
  WikiCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
};
