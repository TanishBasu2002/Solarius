import {
  BarChart3,
  Brain,
  Building,
  Crown,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Sparkles,
  Target,
  TrendingUp,
  Twitter,
  Users,
  Youtube,
  Zap,
  ShoppingCart,
  Package,
  Headphones,
  Settings,
  Code,
  Globe,
  Smartphone,
} from "lucide-react";

export const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    content: "tanishbasu50@gmail.com",
    link: "mailto:tanishbasu50@gmail.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 9330610914",
    link: "tel:+919330610914",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: MapPin,
    title: "Address",
    content: "Kolkata, India",
    link: "https://maps.google.com",
    color: "from-green-500 to-teal-500",
  },
];

export const socialLinks = [
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/techvisionpro",
    color: "hover:bg-blue-500",
  },
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/techvisionpro",
    color: "hover:bg-blue-600",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/techvisionpro",
    color: "hover:bg-pink-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/company/techvisionpro",
    color: "hover:bg-blue-700",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/@techvisionpro",
    color: "hover:bg-red-500",
  },
];

export const navItems = [
  { name: "Features", href: "#features", id: "features" },
  { name: "Pricing", href: "#pricing", id: "pricing" },
  { name: "Testimonials", href: "#testimonials", id: "testimonials" },
  { name: "FAQ", href: "#faq", id: "faq" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export const plans = [
  {
    name: "Starter",
    icon: Code,
    price: { monthly: 99, yearly: 990 },
    description:
      "Perfect for small businesses and startups looking to establish their digital presence with essential development tools",
    features: [
      "Web Development Toolkit",
      "Basic Mobile App Framework",
      "2 Developer Team Support",
      "Standard Templates & Components",
      "Email Support (48h response)",
      "Basic Analytics Dashboard",
      "Code Repository Access",
      "Documentation & Tutorials",
      "Community Forum Access",
      "Monthly Progress Reports",
    ],
    popular: false,
    color: "from-blue-500 to-blue-600",
    teamSize: "2 Developers",
  },
  {
    name: "Premium",
    icon: Crown,
    price: { monthly: 399, yearly: 3990 },
    description:
      "Comprehensive development solution with advanced features, custom solutions, and dedicated consultancy support",
    features: [
      "Advanced Web & Mobile Development Suite",
      "Custom Software Development Tools",
      "5 Developer Team Support",
      "Custom UI/UX Components",
      "Priority Support & Live Chat",
      "Advanced Analytics & Monitoring",
      "CI/CD Pipeline Integration",
      "API Development & Integration",
      "Weekly Consultancy Sessions (4 hours)",
      "Custom Branding & White-label",
      "Advanced Security Features",
      "Performance Optimization Tools",
    ],
    popular: true,
    color: "from-purple-500 to-purple-600",
    teamSize: "5 Developers",
  },
  {
    name: "Enterprise",
    icon: Building,
    price: { monthly: 999, yearly: "Custom Pricing" },
    description:
      "Complete enterprise development ecosystem with unlimited resources, dedicated team, and full consultancy services",
    features: [
      "Full-Stack Development Platform",
      "Enterprise Software Architecture",
      "Unlimited Developer Team Access",
      "Custom Enterprise Solutions",
      "Dedicated Account Manager & Support Team",
      "24/7 Priority Support",
      "Custom Development & Deployment",
      "Weekly Consultancy Package (20+ hours)",
      "On-site Development & Training",
      "Enterprise Security & Compliance",
      "Multi-platform Development (Web, Mobile, Desktop)",
      "Scalable Cloud Infrastructure",
      "Advanced DevOps & Automation",
      "Custom Integrations & APIs",
      "Dedicated Project Management",
    ],
    popular: false,
    color: "from-emerald-500 to-emerald-600",
    teamSize: "Unlimited Developers",
  },
];

export const features = [
  {
    icon: Globe,
    title: "Web Development Platform",
    description:
      "Comprehensive web development tools with modern frameworks, responsive design templates, and advanced deployment options.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development Suite",
    description:
      "Cross-platform mobile development tools for iOS and Android with native performance and modern UI components.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Settings,
    title: "Custom Software Solutions",
    description:
      "Tailored software development services for unique business requirements, from concept to deployment and maintenance.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Code,
    title: "Development Consultancy",
    description:
      "Expert technical guidance, architecture planning, code reviews, and best practices consulting for your development projects.",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Users,
    title: "Team Scaling Solutions",
    description:
      "Flexible developer team allocation and scaling options to match your project requirements and timeline demands.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Building,
    title: "Enterprise Integration",
    description:
      "Seamless integration with existing enterprise systems, APIs, databases, and third-party services for complex workflows.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Crown,
    title: "Premium Support & Training",
    description:
      "Comprehensive technical support, developer training programs, and ongoing maintenance for all your development needs.",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
  {
    icon: Headphones,
    title: "24/7 Technical Support",
    description:
      "Round-the-clock technical assistance, emergency support, and dedicated account management for enterprise clients.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
];

export const footerLinks = {
  products: [
    { name: "Web Development", href: "#products" },
    { name: "Mobile Apps", href: "#products" },
    { name: "Custom Software", href: "#products" },
    { name: "Development Tools", href: "#products" },
    { name: "API Solutions", href: "#products" },
  ],
  services: [
    { name: "Development Consultancy", href: "#services" },
    { name: "Custom Development", href: "#services" },
    { name: "System Integration", href: "#services" },
    { name: "Team Scaling", href: "#services" },
    { name: "Technical Training", href: "#services" },
  ],
  company: [
    { name: "About Us", href: "#about" },
    { name: "Our Team", href: "#team" },
    { name: "Case Studies", href: "#case-studies" },
    { name: "Partners", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ],
  resources: [
    { name: "Documentation", href: "#docs" },
    { name: "API Reference", href: "#api" },
    { name: "Developer Portal", href: "#portal" },
    { name: "Code Examples", href: "#examples" },
    { name: "Technical Blog", href: "#blog" },
  ],
};

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechStart Solutions",
    image: "/testimoni2.jpg?height=80&width=80",
    rating: 5,
    content:
      "Their development platform transformed our entire workflow. The 5-developer team allocation was perfect for our needs, and the consultancy sessions helped us avoid costly mistakes. Our app launched 3 months ahead of schedule.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    company: "Innovation Labs",
    image: "/testimoni3.jpg?height=80&width=80",
    rating: 5,
    content:
      "The web and mobile development suite is incredibly comprehensive. The custom solutions and ongoing consultancy support have been invaluable. We've scaled from 2 to 15 developers using their platform.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Lead Developer",
    company: "Digital Dynamics",
    image: "/testimoni1.jpg?height=80&width=80",
    rating: 5,
    content:
      "Best development platform we've used. The enterprise features and unlimited team support made it easy to handle complex projects. Their consultancy team's expertise saved us months of development time.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Founder & CEO",
    company: "NextGen Apps",
    image: "/testimoni5.jpg?height=80&width=80",
    rating: 5,
    content:
      "From startup to scale-up, their platform grew with us. The premium plan's 5-developer support and weekly consultancy sessions were game-changers. Revenue increased 400% post-launch.",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Technical Director",
    company: "Enterprise Solutions Inc",
    image: "/testimoni4.jpg?height=80&width=80",
    rating: 5,
    content:
      "The enterprise plan exceeded expectations. Unlimited developer access, custom integrations, and dedicated consultancy support made our digital transformation seamless. Highly recommend their services.",
  },
];

export const faqs = [
  {
    question: "What development services do you offer?",
    answer:
      "We provide comprehensive development services including web applications, mobile apps (iOS/Android), custom software solutions, and enterprise integrations. Our platform includes development tools, frameworks, and dedicated team support ranging from 2 to unlimited developers based on your plan.",
  },
  {
    question: "How does the developer team allocation work?",
    answer:
      "Each plan includes a specific number of developers: Starter (2 devs), Premium (5 devs), and Enterprise (unlimited). These developers work on your projects using our platform and tools, with direct access to consultancy support and technical guidance from our expert team.",
  },
  {
    question: "What kind of consultancy services do you provide?",
    answer:
      "Our consultancy services cover technical architecture, code reviews, best practices guidance, project planning, technology selection, performance optimization, and strategic development roadmaps. We offer weekly sessions ranging from 4 hours (Premium) to 20+ hours (Enterprise).",
  },
  {
    question: "Can you handle both web and mobile app development?",
    answer:
      "Absolutely! Our platform supports full-stack web development with modern frameworks and cross-platform mobile development for iOS and Android. We also provide custom software solutions and can integrate with existing systems and third-party APIs.",
  },
  {
    question: "What's included in the development platform?",
    answer:
      "Our platform includes development tools, UI/UX components, templates, CI/CD pipelines, analytics, monitoring tools, code repositories, documentation, and deployment solutions. Higher tiers include advanced features like custom branding, enterprise security, and dedicated infrastructure.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes, all plans include technical support with varying response times. Premium and Enterprise plans get priority support, live chat, and dedicated account management. We also provide ongoing maintenance, updates, security patches, and performance optimization services.",
  },
  {
    question: "Can I scale my developer team as my project grows?",
    answer:
      "Definitely! You can upgrade your plan at any time to access more developers and advanced features. Our Enterprise plan offers unlimited developer access, making it perfect for large-scale projects and growing teams.",
  },
  {
    question: "What makes your development approach different?",
    answer:
      "We combine powerful development tools with expert consultancy services. Unlike traditional agencies, our platform empowers your team while providing ongoing guidance. This hybrid approach ensures faster development, better code quality, and long-term success for your projects.",
  },
];
