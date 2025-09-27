import { cn } from "@/lib/utils";
interface IconProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "accent";
  size?: "sm" | "md" | "lg";
}
const iconVariants = {
  variant: {
    default: "text-foreground",
    primary: "text-primary",
    secondary: "text-muted-foreground",
    accent: "text-accent-foreground"
  },
  size: {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  }
};
export const IconContainer = ({
  children,
  variant = "default",
  size = "md",
  className,
  ...props
}: IconProps) => <div className={cn("inline-flex items-center justify-center rounded-full bg-primary-light p-3", iconVariants.variant[variant], className)} {...props}>
    
  </div>;