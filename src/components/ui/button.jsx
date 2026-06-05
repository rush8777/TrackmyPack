import React from "react";
import { cn } from "../../lib/utils";

const Button = React.forwardRef(({ className, type = "button", ...props }, ref) => (
  <button ref={ref} type={type} className={cn("shadcn-button", className)} {...props} />
));

Button.displayName = "Button";

export { Button };
