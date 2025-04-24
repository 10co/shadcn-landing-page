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
      { name: '首页', href: '#home' },
      { name: '功能', href: '#features' },
      { name: '价格', href: '#pricing' },
      { name: '客户评价', href: '#testimonials' },
    ],
    cta: {
      signIn: {
        text: '登录',
        href: '/#',
      },
      getStarted: {
        text: '立即开始',
        href: '/#',
      },
    },
  },
  hero: {
    badgeText: '新功能：AI驱动的着陆页生成器',
    titleMain: '将创意转化为',
    titleHighlighted: '精美网站',
    titleTrailing: '',
    description:
      'Landing2 重新定义了网站设计方式。从产品展示到营销活动，企业官网到个人作品集 – 通过一个设计精美、AI增强的落地页平台，轻松实现您的创想。',
    primaryCTA: {
      text: '免费开始使用',
      href: '#',
    },
    secondaryCTA: {
      text: '观看演示',
      href: '#',
    },
    trialText: '无需信用卡 • 强大的免费版本永久可用',
    statistics: [
      {
        value: '85%',
        label: '设计时间节省',
        icon: <Zap className="text-emerald-500 h-4 w-4" aria-hidden="true" />,
      },
      {
        value: '3.6M',
        label: '网站已创建',
        icon: (
          <CheckCircle2
            className="h-4 w-4 text-indigo-500"
            aria-hidden="true"
          />
        ),
      },
      {
        value: '28k+',
        label: '每日活跃用户',
        icon: <Globe className="h-4 w-4 text-sky-500" aria-hidden="true" />,
      },
    ],
  },
  features: {
    title: '更智能的设计，更出色的转化',
    subtitle:
      '一套全面的网站构建工具，旨在革新您打造专业营销页面、产品展示和品牌形象的方式。',
    featuresList: [
      {
        title: '智能模板系统',
        description:
          'AI驱动的模板推荐，根据您的行业和目标自动选择最佳设计方案，支持一键定制和个性化调整。',
        icon: <ListChecks className="h-7 w-7" aria-hidden="true" />,
        bgColor: 'rgba(16, 185, 129, 0.1)',
        textColor: 'rgb(16, 185, 129)',
      },
      {
        title: '视觉化编辑器',
        description:
          '拖拽式界面设计，无需编码即可创建专业级页面，支持实时预览和响应式调整，确保在所有设备上完美展示。',
        icon: <FolderKanban className="h-7 w-7" aria-hidden="true" />,
        bgColor: 'rgba(99, 102, 241, 0.1)',
        textColor: 'rgb(99, 102, 241)',
      },
      {
        title: 'SEO优化工具集',
        description:
          '内置SEO分析和建议，自动优化元标签、图像和内容结构，帮助您的网站在搜索引擎中获得更高排名。',
        icon: <Compass className="h-7 w-7" aria-hidden="true" />,
        bgColor: 'rgba(14, 165, 233, 0.1)',
        textColor: 'rgb(14, 165, 233)',
      },
      {
        title: '转化率优化系统',
        description:
          '智能A/B测试工具，热力图分析和用户行为跟踪，帮助您持续优化设计和内容，提高访客转化率。',
        icon: <Target className="h-7 w-7" aria-hidden="true" />,
        bgColor: 'rgba(249, 115, 22, 0.1)',
        textColor: 'rgb(249, 115, 22)',
      },
      {
        title: '性能分析工具',
        description:
          '深入了解您网站的加载速度、用户体验指标和整体性能，提供针对性优化建议，确保访客获得最佳体验。',
        icon: <PieChart className="h-7 w-7" aria-hidden="true" />,
        bgColor: 'rgba(168, 85, 247, 0.1)',
        textColor: 'rgb(168, 85, 247)',
      },
      {
        title: '团队协作空间',
        description:
          '多人实时编辑，角色权限管理，评论和审核系统，让设计团队、营销人员和内容创作者无缝协作。',
        icon: <Milestone className="h-7 w-7" aria-hidden="true" />,
        bgColor: 'rgba(236, 72, 153, 0.1)',
        textColor: 'rgb(236, 72, 153)',
      },
    ],
    highlight: {
      title: 'AI驱动的内容生成助手',
      description:
        '遇见您的设计伙伴。我们的智能助手分析行业趋势，建议最佳内容结构，创建吸引眼球的标题和说明文案，并帮助您打造专业的视觉体验。从构思创意到生成完整页面 – Landing2 学习并适应您的独特风格。',
      icon: (
        <Lightbulb className="text-emerald-500 h-10 w-10 md:h-12 md:w-12" />
      ),
      capabilities: [
        {
          icon: <Sparkles className="text-emerald-500 h-4 w-4" />,
          text: '个性化内容建议',
        },
        {
          icon: <Clock className="text-emerald-500 h-4 w-4" />,
          text: '一键生成完整页面',
        },
        {
          icon: <Rocket className="text-emerald-500 h-4 w-4" />,
          text: '转化率优化建议',
        },
      ],
    },
  },
  testimonials: {
    title: '成功案例分享',
    subtitle:
      '了解Landing2如何帮助企业和个人创建者提升品牌形象并实现业务增长。',

    testimonialsList: [
      {
        quote:
          'Landing2完全改变了我们的市场营销方式。直观的编辑工具让复杂的页面设计变得简单，AI内容建议帮助我们提升了42%的转化率。对于我们这样的初创企业来说，这是一个改变游戏规则的工具。',
        author: '李明',
        role: '营销总监，创新科技',
        avatar: '/avatars/avatar.png',
      },
      {
        quote:
          '作为一名自由设计师，Landing2节省了我大量时间。我现在可以在几小时内完成之前需要几天的工作，而且客户对结果非常满意。协作功能让我和客户的沟通变得无比顺畅。',
        author: '张晓华',
        role: '自由网站设计师',
        avatar: '/avatars/avatar.png',
      },
      {
        quote:
          '我们的电商转化率自使用Landing2以来提高了35%。SEO优化工具帮助我们在搜索结果中排名更靠前，而A/B测试功能让我们能够持续优化着陆页。投资回报率简直难以置信。',
        author: '王建国',
        role: '电商平台负责人，购物先锋',
        avatar: '/avatars/avatar.png',
      },
    ],
  },
  pricing: {
    title: '简单定价，满足各种需求',
    subtitle:
      '选择适合您目标的计划。从功能强大的免费版开始，随着业务增长随时升级。',
    tiers: [
      {
        name: '免费版',
        price: '¥0',
        description: '适合个人创作者和小型项目',
        features: [
          '每月可创建3个网站',
          '基础模板库',
          '响应式设计支持',
          '基本SEO工具',
          '电子邮件提醒',
          '移动应用访问',
        ],
        cta: '立即开始',
        popular: false,
      },
      {
        name: '专业版',
        price: '¥59',
        description: '为有多个项目的专业人士设计',
        features: [
          '无限网站创建',
          '高级AI内容推荐',
          '全部模板和组件',
          '详细转化分析',
          'A/B测试工具',
          '优先客户支持',
          '日历与CRM集成',
          '5GB存储空间',
        ],
        cta: '开始使用',
        popular: true,
      },
      {
        name: '团队版',
        price: '¥159',
        description: '为协作团队打造',
        features: [
          '专业版全部功能',
          '无限团队成员',
          '团队仪表盘',
          '高级权限控制',
          '团队分析报告',
          '资源分配工具',
          '自定义工作流',
          '管理员控制台',
          '20GB存储空间',
        ],
        cta: '赋能您的团队',
        popular: false,
      },
    ],
    customPlan: {
      title: '企业解决方案',
      description:
        '需要定制功能、高级安全性或专属支持？我们的企业方案为大型组织量身定制。',
      buttonText: '联系我们',
    },
  },
  cta: {
    title: '今天就开始打造您的完美网站',
    description:
      '加入超过20万个人和团队的行列，他们已经通过Landing2彻底改变了网站设计和在线营销方式。',
    primaryCTA: {
      text: '免费开始使用',
      href: '/dashboard',
      icon: <ArrowRight className="h-4 w-4" aria-hidden="true" />,
    },
    secondaryCTA: {
      text: '预约演示',
      variant: 'outline',
    },
    trialText: '无需信用卡。强大的免费版本永久可用。',
  },
  footer: {
    logo: {
      icon: <Target className="h-8 w-8 text-primary" aria-hidden="true" />,
      text: 'Landing2',
    },
    description:
      '赋能个人创作者和企业团队，打造更智能、更高效的网站体验。',
    navigation: {
      product: [
        { name: '功能', href: '#features' },
        { name: '价格', href: '#pricing' },
        { name: '模板库', href: '#' },
        { name: '路线图', href: '#' },
      ],
      company: [
        { name: '关于我们', href: '#' },
        { name: '博客', href: '#' },
        { name: '招贤纳士', href: '#' },
        { name: '媒体报道', href: '#' },
      ],
      support: [
        { name: '帮助中心', href: '#' },
        { name: '视频教程', href: '#' },
        { name: 'API文档', href: '#' },
        { name: '联系我们', href: '#' },
      ],
      legal: [
        { name: '隐私政策', href: '#' },
        { name: '服务条款', href: '#' },
        { name: '安全说明', href: '#' },
        { name: '无障碍访问', href: '#' },
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
    copyright: `© ${new Date().getFullYear()} Landing2, Inc. 保留所有权利。`,
  },
};

export default websiteConfig;
