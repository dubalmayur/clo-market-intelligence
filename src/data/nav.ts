export interface NavItem {
  label: string;
  href: string;
  icon: string;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    title: "Overview",
    items: [
      { label: "Dashboard", href: "/", icon: "LayoutDashboard" },
      { label: "Issuance Analytics", href: "/issuance", icon: "BarChart3" },
      { label: "Market Forecasts", href: "/forecasts", icon: "TrendingUp" },
    ],
  },
  {
    title: "Markets",
    items: [
      { label: "US CLO Market", href: "/markets/us", icon: "USFlag" },
      { label: "European CLO Market", href: "/markets/europe", icon: "EUFlag" },
    ],
  },
  {
    title: "Participants",
    items: [
      { label: "Managers", href: "/managers", icon: "Users" },
      { label: "Arrangers", href: "/arrangers", icon: "Landmark" },
      { label: "Trustees", href: "/trustees", icon: "ShieldCheck" },
      { label: "Administrators", href: "/administrators", icon: "Building2" },
      { label: "Service Providers", href: "/service-providers", icon: "Layers" },
    ],
  },
  {
    title: "Resources",
    items: [
      { label: "Deal Records", href: "/deals", icon: "FileSearch" },
      { label: "Reports", href: "/reports", icon: "FileText" },
      { label: "Data Downloads", href: "/downloads", icon: "Download" },
      { label: "API Access", href: "/api-access", icon: "Code2" },
      { label: "Methodology & Sources", href: "/methodology", icon: "BookOpen" },
    ],
  },
];
