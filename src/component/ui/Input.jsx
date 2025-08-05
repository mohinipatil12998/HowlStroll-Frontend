import React from "react";
import { cn } from "../../lib/utils"; 

/**
 * Reusable Input component with Tailwind CSS styling.
 * Supports standard HTML input types and props.
 */
const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type} // Set the input type (e.g., "text", "password", "email")
      className={cn(
        "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm", 
        "transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium", 
        "placeholder:text-muted-foreground", // Placeholder text color
        "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring", // Focus ring
        "disabled:cursor-not-allowed disabled:opacity-50", // Disabled state styles
        className // Apply any custom classes provided
      )}
      ref={ref} // Forward the ref to the underlying DOM element
      {...props} // Pass any other standard input props (e.g., value, onChange, placeholder)
    />
  );
});

// Set a display name for the component for easier debugging in React DevTools
Input.displayName = "Input";

// Export the Input component for use in other files
export { Input };

