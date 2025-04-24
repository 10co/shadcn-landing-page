import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  Clock,
  Compass,
  FolderKanban,
  Globe,
  Lightbulb,
  ListChecks,
  Milestone,
  Pencil,
  PieChart,
  Rocket,
  Sparkles,
  TagIcon,
  Target,
  Timer,
  Zap,
} from 'lucide-react';

import { WebsiteConfig } from '@/types/types';
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/icons';

const websiteConfig: WebsiteConfig = {
  header: {
    logo: {
      icon: <Target className="text-primary h-5 w-5" aria-hidden="true" />,
      text: 'Landing2',
    },
    navItems: [
      { name: 'Home', href: '#home' },
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Testimonials', href: '#testimonials' },
    ],
    cta: {
      signIn: {
        text: 'Sign in',
        href: '/#',
      },
      getStarted: {
        text: 'Get Started',
        href: '/#',
      },
    },
  },
  hero: {
    badgeText: 'New: AI-Powered Landing Page Generator',
    titleMain: 'TRANSFORM IDEAS INTO',
    titleHighlighted: 'STUNNING WEBSITES',
    titleTrailing: '',
    description:
      'Landing2 redefines how websites are created. From product showcases to marketing campaigns, business sites to personal portfolios – all in one beautifully designed, AI-enhanced landing page platform.',
    primaryCTA: {
      text: 'START FREE FOREVER',
      href: '#',
    },
    secondaryCTA: {
      text: 'WATCH DEMO',
      href: '#',
    },
    trialText: 'No credit card required • Powerful free tier available',
    statistics: [
      {
        value: '85%',
        label: 'Design time saved',
        icon: <Zap className="text-emerald-500 h-4 w-4" aria-hidden="true" />,
      },
      {
        value: '3.6M',
        label: 'Websites created',
        icon: (
          <CheckCircle2
            className="h-4 w-4 text-indigo-500"
            aria-hidden="true"
          />
        ),
      },
      {
        value: '28k+',
        label: 'Active users daily',
        icon: <Globe className="h-4 w-4 text-sky-500" aria-hidden="true" />,
      },
    ],
  },
  features: {
    title: 'Design Smarter, Convert Better',
    subtitle:
      'A comprehensive website building toolkit designed to revolutionize how you create professional landing pages, product showcases, and brand experiences.',
    featuresList: [
      {
        title: 'Intelligent Template System',
        description:
          'AI-powered template recommendations that automatically select the best design based on your industry and goals, with one-click customization options.',
        icon: <ListChecks className="h-7 w-7" aria-hidden="true" />,
        bgColor: 'rgba(16, 185, 129, 0.1)',
        textColor: 'rgb(16, 185, 129)',
      },
      {
        title: 'Visual Editor',
        description:
          'Drag-and-drop interface design with no coding required, featuring real-time previews and responsive adjustments to ensure perfect display on all devices.',
        icon: <FolderKanban className="h-7 w-7" aria-hidden="true" />,
        bgColor: 'rgba(99, 102, 241, 0.1)',
        textColor: 'rgb(99, 102, 241)',
      },
      {
        title: 'SEO Toolkit',
        description:
          'Built-in SEO analysis and recommendations to automatically optimize meta tags, images, and content structure, helping your site rank higher in search engines.',
        icon: <Compass className="h-7 w-7" aria-hidden="true" />,
        bgColor: 'rgba(14, 165, 233, 0.1)',
        textColor: 'rgb(14, 165, 233)',
      },
      {
        title: 'Conversion Optimization',
        description:
          'Smart A/B testing tools, heatmap analytics, and user behavior tracking to help you continuously optimize designs and content for higher visitor conversion.',
        icon: <Target className="h-7 w-7" aria-hidden="true" />,
        bgColor: 'rgba(249, 115, 22, 0.1)',
        textColor: 'rgb(249, 115, 22)',
      },
      {
        title: 'Performance Analytics',
        description:
          "Gain deep insights into your site's loading speed, user experience metrics, and overall performance with targeted optimization recommendations.",
        icon: <PieChart className="h-7 w-7" aria-hidden="true" />,
        bgColor: 'rgba(168, 85, 247, 0.1)',
        textColor: 'rgb(168, 85, 247)',
      },
      {
        title: 'Team Collaboration',
        description:
          'Real-time editing with multiple users, role-based permissions, and comment systems that let designers, marketers, and content creators work seamlessly together.',
        icon: <Milestone className="h-7 w-7" aria-hidden="true" />,
        bgColor: 'rgba(236, 72, 153, 0.1)',
        textColor: 'rgb(236, 72, 153)',
      },
    ],
    highlight: {
      title: 'AI-POWERED CONTENT GENERATION',
      description:
        'Meet your design companion. Our intelligent assistant analyzes industry trends, suggests optimal content structures, creates eye-catching headlines and copy, and helps you craft professional visual experiences. From conceptualizing ideas to generating complete pages – Landing2 learns and adapts to your unique style.',
      icon: (
        <Lightbulb className="text-emerald-500 h-10 w-10 md:h-12 md:w-12" />
      ),
      capabilities: [
        {
          icon: <Sparkles className="text-emerald-500 h-4 w-4" />,
          text: 'Personalized content suggestions',
        },
        {
          icon: <Clock className="text-emerald-500 h-4 w-4" />,
          text: 'One-click page generation',
        },
        {
          icon: <Rocket className="text-emerald-500 h-4 w-4" />,
          text: 'Conversion optimization insights',
        },
      ],
    },
  },
  testimonials: {
    title: 'Success Stories',
    subtitle:
      'Discover how Landing2 is helping businesses and creators enhance their online presence and drive growth.',

    testimonialsList: [
      {
        quote:
          "Landing2 completely transformed our marketing approach. The intuitive editor makes complex page design simple, and the AI content suggestions helped us increase conversions by 42%. It's a game-changer for startups like ours.",
        author: 'Michael Roberts',
        role: 'Marketing Director, InnovateTech',
        avatar: '/avatars/avatar.png',
      },
      {
        quote:
          'As a freelance designer, Landing2 saves me incredible amounts of time. I can now complete in hours what used to take days, and my clients are thrilled with the results. The collaboration features make client communication seamless.',
        author: 'Sarah Johnson',
        role: 'Freelance Web Designer',
        avatar: '/avatars/avatar.png',
      },
      {
        quote:
          'Our e-commerce conversion rate has increased by 35% since implementing Landing2. The SEO tools have helped us rank higher in search results, and the A/B testing features allow us to continuously optimize our landing pages. The ROI is incredible.',
        author: 'David Chen',
        role: 'E-commerce Manager, ShopPioneer',
        avatar: '/avatars/avatar.png',
      },
    ],
  },
  pricing: {
    title: 'Simple Plans for Every Need',
    subtitle:
      'Choose the plan that matches your goals. Start with our powerful free tier and upgrade as you grow.',
    tiers: [
      {
        name: 'Free',
        price: '$0',
        description: 'Perfect for individual creators and small projects',
        features: [
          '3 websites per month',
          'Basic template library',
          'Responsive design support',
          'Basic SEO tools',
          'Email notifications',
          'Mobile app access',
        ],
        cta: 'Start creating now',
        popular: false,
      },
      {
        name: 'Pro',
        price: '$9',
        description: 'For professionals with multiple projects',
        features: [
          'Unlimited websites',
          'Advanced AI recommendations',
          'All templates & components',
          'Detailed conversion analytics',
          'A/B testing tools',
          'Priority support',
          'Calendar & CRM integrations',
          '5GB storage',
        ],
        cta: 'Get started',
        popular: true,
      },
      {
        name: 'Teams',
        price: '$19',
        description: 'For collaborative teams',
        features: [
          'Everything in Pro',
          'Unlimited team members',
          'Team dashboards',
          'Advanced permissions',
          'Team analytics',
          'Resource allocation',
          'Custom workflows',
          'Admin controls',
          '20GB storage',
        ],
        cta: 'Empower your team',
        popular: false,
      },
    ],
    customPlan: {
      title: 'Enterprise Solutions',
      description:
        'Need custom features, advanced security, or dedicated support? Our enterprise plan is tailored for larger organizations.',
      buttonText: 'Contact Us',
    },
  },
  cta: {
    title: 'Start building your perfect website today',
    description:
      'Join over 200,000 individuals and teams who have transformed how they design and market online with Landing2.',
    primaryCTA: {
      text: 'GET STARTED FOR FREE',
      href: '/dashboard',
      icon: <ArrowRight className="h-4 w-4" aria-hidden="true" />,
    },
    secondaryCTA: {
      text: 'BOOK A DEMO',
      variant: 'outline',
    },
    trialText: 'No credit card required. Powerful free tier forever.',
  },
  footer: {
    logo: {
      icon: <Target className="h-8 w-8 text-primary" aria-hidden="true" />,
      text: 'Landing2',
    },
    description:
      'Empowering creators and businesses to build smarter, more effective web experiences.',
    navigation: {
      product: [
        { name: 'Features', href: '#features' },
        { name: 'Pricing', href: '#pricing' },
        { name: 'Templates', href: '#' },
        { name: 'Roadmap', href: '#' },
      ],
      company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Press', href: '#' },
      ],
      support: [
        { name: 'Help Center', href: '#' },
        { name: 'Video Tutorials', href: '#' },
        { name: 'API Docs', href: '#' },
        { name: 'Contact', href: '#' },
      ],
      legal: [
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
        { name: 'Security', href: '#' },
        { name: 'Accessibility', href: '#' },
      ],
      social: [
        {
          name: 'X',
          href: '#',
          openInNewTab: true,
          icon: XIcon,
        },
        {
          name: 'GitHub',
          href: '#',
          openInNewTab: true,
          icon: GitHubIcon,
        },
        {
          name: 'LinkedIn',
          href: '#',
          openInNewTab: true,
          icon: LinkedInIcon,
        },
      ],
    },
    copyright: `© ${new Date().getFullYear()} Landing2, Inc. All rights reserved.`,
  },
};

export default websiteConfig;
