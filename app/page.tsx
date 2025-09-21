import { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  Heart, 
  BookOpen, 
  Users, 
  Globe, 
  Star,
  Calendar,
  Lotus,
  Sun,
  Moon,
  Crown,
  Flame
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Divinora - Universal Spiritual Wisdom & Sacred Knowledge',
  description: 'Discover divine wisdom from all world religions. Explore sacred texts, spiritual teachings, meditation practices, and join a global community of seekers.',
};

export default function HomePage() {
  const religions = [
    { 
      name: 'Hinduism', 
      href: '/religions/hinduism', 
      icon: '🕉️', 
      color: 'from-orange-500 to-red-500',
      description: 'Ancient wisdom and eternal dharma',
      followers: '1B+'
    },
    { 
      name: 'Christianity', 
      href: '/religions/christianity', 
      icon: '✝️', 
      color: 'from-blue-500 to-purple-500',
      description: 'Love, faith, and salvation',
      followers: '2.4B+'
    },
    { 
      name: 'Islam', 
      href: '/religions/islam', 
      icon: '☪️', 
      color: 'from-green-500 to-teal-500',
      description: 'Peace and submission to Allah',
      followers: '1.8B+'
    },
    { 
      name: 'Buddhism', 
      href: '/religions/buddhism', 
      icon: '☸️', 
      color: 'from-amber-500 to-orange-500',
      description: 'Path to enlightenment',
      followers: '500M+'
    },
    { 
      name: 'Sikhism', 
      href: '/religions/sikhism', 
      icon: '☬', 
      color: 'from-yellow-500 to-orange-500',
      description: 'One God, equality, service',
      followers: '30M+'
    },
    { 
      name: 'Judaism', 
      href: '/religions/judaism', 
      icon: '✡️', 
      color: 'from-blue-500 to-indigo-500',
      description: 'Covenant and Torah wisdom',
      followers: '15M+'
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Sacred Texts',
      description: 'Explore holy scriptures from all traditions',
      href: '/texts',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Festivals',
      description: 'Celebrate divine occasions worldwide',
      href: '/festivals',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Heart,
      title: 'Meditation',
      description: 'Find inner peace through practice',
      href: '/meditation',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Connect with fellow seekers',
      href: '/community',
      color: 'from-blue-500 to-cyan-500'
    },
  ];

  const stats = [
    { label: 'World Religions', value: '12+', icon: Globe },
    { label: 'Sacred Texts', value: '100+', icon: BookOpen },
    { label: 'Daily Users', value: '50K+', icon: Users },
    { label: 'Countries', value: '150+', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 dark:from-purple-950/20 dark:via-pink-950/20 dark:to-orange-950/20">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10" />
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl animate-float" />
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-xl animate-float-slow" />
          <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-float" />
          <div className="absolute bottom-20 right-1/3 w-18 h-18 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-xl animate-float-slow" />
        </div>
        
        <div className="nav-container relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-6 py-3 rounded-full animate-pulse-glow">
              <Sparkles className="h-5 w-5 text-purple-600 animate-bounce" />
              <span className="font-medium text-purple-700 dark:text-purple-300">Universal Spiritual Wisdom</span>
              <Globe className="h-5 w-5 text-pink-600 animate-bounce" />
            </div>
            
            <h1 className="text-4xl md:text-7xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-gradient leading-tight">
              Divinora
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              🌍 Explore divine wisdom from all world religions 🌍<br />
              <span className="text-lg">Sacred texts • Spiritual teachings • Meditation practices • Global community</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 animate-pulse-glow text-lg px-8 py-4">
                <Sparkles className="h-5 w-5 mr-2" />
                Begin Sacred Journey
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/30 text-lg px-8 py-4">
                <Heart className="h-5 w-5 mr-2" />
                Start Meditation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
        <div className="nav-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="mx-auto p-3 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-full w-fit mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-6 w-6 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Religions Section */}
      <section className="py-20">
        <div className="nav-container">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-orange-100 to-pink-100 dark:from-orange-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full mb-6">
              <Globe className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-medium text-orange-700 dark:text-orange-300">World Religions</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Explore Sacred Traditions
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the beautiful diversity of spiritual paths that guide billions of people worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {religions.map((religion, index) => (
              <Link key={religion.name} href={religion.href}>
                <Card className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-2 hover:border-purple-300 dark:hover:border-purple-600 h-full">
                  <CardHeader className="text-center pb-4">
                    <div className={`mx-auto p-6 bg-gradient-to-r ${religion.color} rounded-full w-fit mb-4 group-hover:scale-110 transition-transform duration-300 animate-pulse-glow`}>
                      <span className="text-4xl">{religion.icon}</span>
                    </div>
                    <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">
                      {religion.name}
                    </CardTitle>
                    <Badge variant="secondary" className="w-fit mx-auto">
                      {religion.followers} followers
                    </Badge>
                  </CardHeader>
                  
                  <CardContent className="text-center">
                    <p className="text-muted-foreground mb-4">{religion.description}</p>
                    <Button variant="ghost" className="group-hover:bg-purple-50 dark:group-hover:bg-purple-950/30 transition-colors">
                      Explore Tradition →
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20">
        <div className="nav-container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Spiritual Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tools and resources to deepen your spiritual journey and connect with the divine
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link key={feature.title} href={feature.href}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer text-center p-8 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm h-full">
                  <div className={`mx-auto p-4 bg-gradient-to-r ${feature.color} rounded-full w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Navratri 2025 Special Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20" />
        </div>
        
        <div className="nav-container relative z-10">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full">
              <Crown className="h-5 w-5 animate-bounce" />
              <span className="font-medium">Special Celebration</span>
              <Sparkles className="h-5 w-5 animate-bounce" />
            </div>
            
            <h2 className="text-3xl md:text-6xl font-bold mb-6">
              Navratri 2025
            </h2>
            
            <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
              🌺 Nine Sacred Nights of Divine Mother Durga 🌺<br />
              <span className="text-lg">October 2-10, 2025 • Daily prayers • Goddess worship • Festive celebrations</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/navratri-2025">
                <Button size="lg" variant="secondary" className="bg-white text-orange-600 hover:bg-gray-100 animate-pulse-glow text-lg px-8 py-4">
                  <Calendar className="h-5 w-5 mr-2" />
                  Join Celebration
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-4">
                <Heart className="h-5 w-5 mr-2" />
                Daily Prayers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="nav-container">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Begin Your Sacred Journey
            </h2>
            <p className="text-xl text-muted-foreground">
              Join millions of seekers exploring divine wisdom, finding inner peace, and connecting with the universal spirit that unites all traditions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-4">
                <Sparkles className="h-5 w-5 mr-2" />
                Start Exploring
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50 dark:border-purple-800 dark:hover:bg-purple-950/30 text-lg px-8 py-4">
                <Users className="h-5 w-5 mr-2" />
                Join Community
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gradient-to-r from-slate-900 to-purple-900 text-white">
        <div className="nav-container">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Sparkles className="h-6 w-6 text-purple-400" />
              <span className="text-2xl font-bold">Divinora</span>
            </div>
            <p className="text-purple-200 max-w-2xl mx-auto">
              Connecting hearts and souls through the universal wisdom of all spiritual traditions
            </p>
            <div className="flex justify-center space-x-6 text-sm text-purple-300">
              <span>🕉️ Hinduism</span>
              <span>✝️ Christianity</span>
              <span>☪️ Islam</span>
              <span>☸️ Buddhism</span>
              <span>☬ Sikhism</span>
              <span>✡️ Judaism</span>
            </div>
            <p className="text-sm text-purple-400">
              © 2025 Divinora. Spreading love, peace, and universal wisdom.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}