import { Award, Clock, Shield, Star, type LucideIcon } from "lucide-react";

export const TRUST_BADGES: {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  color: string;
}[] = [
  {
    icon: Shield,
    title: "Insured",
    subtitle: "$2M Coverage",
    color: "text-blue-600",
  },
  { icon: Clock, title: "24/7", subtitle: "Support", color: "text-green-600" },
  { icon: Star, title: "5-Star", subtitle: "Rated", color: "text-yellow-600" },
  {
    icon: Award,
    title: "Licensed",
    subtitle: "Professional",
    color: "text-purple-600",
  },
];
