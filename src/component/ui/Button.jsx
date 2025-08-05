// components/ui/button.jsx
// This file defines a reusable Button component for your UI.

import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "../../lib/utils"; // Assuming utils.js is in a 'lib' directory one level up

/**
 * Reusable Button component with Tailwind CSS styling and Radix UI Slot integration.
 * Supports different variants, sizes, and the 'asChild' prop for rendering as a child element.
 */
const Button = React.forwardRef(({ className, asChild = false, ...props }, ref) => {
  // Determine if the component should render as a Slot (to compose with other Radix primitives)
  // or as a standard HTML button.
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      // Apply common button styles and any additional styles passed via `className`
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium",
        "transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        "disabled:pointer-events-none disabled:opacity-50", // Styles for disabled state
        // Default styling for a primary button. You can extend this with 'variant' prop if needed.
        "bg-primary text-primary-foreground  hover:bg-primary/90 h-9 px-4 py-2",
        className // Apply any custom classes provided
      )}
      ref={ref} // Forward the ref to the underlying DOM element
      {...props} // Pass any other props (e.g., onClick, type)
    />
  );
});

// Set a display name for the component for easier debugging in React DevTools
Button.displayName = "Button";

// Export the Button component for use in other files
export { Button };