"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Mesajınız başarıyla gönderildi!");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-xl py-3" : "bg-transparent py-6"}`}>
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="/public/siyahlogo.png" 
                  alt="NAR24 Logo"
                  className="h-12 w-auto transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    // Fallback if logo doesn't load
                    e.currentTarget.style.display = 'none';
                    (e.currentTarget.nextElementSibling as HTMLElement)?.style.setProperty('display', 'flex');
                  }}
                />
                <div className="hidden w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
              </div>
              <div>
                <h1 className={`font-bold text-xl transition-colors duration-300 ${scrolled ? "text-gray-800" : "text-white"}`}>E.C.T.S TRADING LTD</h1>
                <p className={`text-sm font-medium transition-colors duration-300 ${scrolled ? "text-orange-600" : "text-orange-200"}`}>Kuzey Kıbrıs&apos;ın Teknoloji ve E-ticaret Şirketi</p>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className={`hover:text-orange-500 transition-all duration-300 hover:scale-105 ${scrolled ? "text-gray-700" : "text-white"}`}>Ana Sayfa</a>
              <a href="#about" className={`hover:text-orange-500 transition-all duration-300 hover:scale-105 ${scrolled ? "text-gray-700" : "text-white"}`}>Hakkımızda</a>
              <a href="#services" className={`hover:text-orange-500 transition-all duration-300 hover:scale-105 ${scrolled ? "text-gray-700" : "text-white"}`}>Hizmetler</a>
              <a href="#app" className={`hover:text-orange-500 transition-all duration-300 hover:scale-105 ${scrolled ? "text-gray-700" : "text-white"}`}>Mobil Uygulama</a>
              <a href="#contact" className={`hover:text-orange-500 transition-all duration-300 hover:scale-105 ${scrolled ? "text-gray-700" : "text-white"}`}>İletişim</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50"
            >
              <div className={`w-6 h-0.5 ${scrolled ? "bg-gray-800" : "bg-white"} mb-1.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 ${scrolled ? "bg-gray-800" : "bg-white"} mb-1.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 ${scrolled ? "bg-gray-800" : "bg-white"} transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
            <div className="mt-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-6 border border-gray-200">
              <a href="#home" className="block py-3 text-gray-700 hover:text-orange-500 transition-colors duration-300">Ana Sayfa</a>
              <a href="#about" className="block py-3 text-gray-700 hover:text-orange-500 transition-colors duration-300">Hakkımızda</a>
              <a href="#services" className="block py-3 text-gray-700 hover:text-orange-500 transition-colors duration-300">Hizmetler</a>
              <a href="#app" className="block py-3 text-gray-700 hover:text-orange-500 transition-colors duration-300">Mobil Uygulama</a>
              <a href="#contact" className="block py-3 text-gray-700 hover:text-orange-500 transition-colors duration-300">İletişim</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-orange-900 to-red-900"></div>
        <div className="absolute inset-0 bg-black/30"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-red-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-orange-400/30 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-red-400/30 rounded-full blur-2xl animate-float animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Dijital <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Ticaretin</span> Geleceği
            </h1>
          </div>
          <div className="animate-fade-in-up animation-delay-300">
            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
              Kuzey Kıbrıs'ta teknoloji ile e-ticaret deneyimini yeniden tanımlıyoruz
            </p>
          </div>
          <div className="animate-fade-in-up animation-delay-600">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#app" className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-full hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                <span className="flex items-center justify-center space-x-2">
                  <span>Uygulamayı İncele</span>
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a href="#contact" className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full hover:bg-white/20 transform hover:scale-105 transition-all duration-300 shadow-2xl border border-white/20">
                Bizimle İletişime Geçin
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Hakkımızda</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kuzey Kıbrıs merkezli teknoloji şirketi olarak e-ticaret alanında yenilikçi çözümler sunuyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-left">
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>NAR24</strong>, Kuzey Kıbrıs'ta faaliyet gösteren öncü bir teknoloji şirketidir. E-ticaret sektöründe mobil ve web tabanlı yenilikçi çözümler geliştirerek, kullanıcılarına modern ve kullanıcı dostu alışveriş deneyimi sunmaktayız.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Teknolojinin gücünden yararlanarak, hem iOS hem de Android platformlarında mobil uygulama geliştirmenin yanı sıra, kapsamlı web sitesi çözümleri sunuyoruz. Misyonumuz, dijital ticaretin sınırlarını zorlamak ve müşterilerimize en iyi online alışveriş deneyimini yaşatmaktır.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl font-bold text-orange-600 mb-2">2024</div>
                  <div className="text-gray-600">Kuruluş Yılı</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl font-bold text-orange-600 mb-2">3</div>
                  <div className="text-gray-600">Platform</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                  <div className="text-gray-600">Aktif Kullanıcı</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-gray-600">Destek</div>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop" 
                  alt="Teknoloji ve E-ticaret"
                  className="rounded-2xl shadow-lg w-full h-auto"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-orange-500 to-red-600 text-white p-4 rounded-2xl shadow-xl">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Hizmetlerimiz</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Teknoloji odaklı e-ticaret çözümlerimizle işinizi dijital dünyaya taşıyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Mobil Uygulama Geliştirme",
                icon: "📱",
                description: "iOS ve Android platformları için özelleştirilmiş, kullanıcı dostu mobil e-ticaret uygulamaları geliştiriyoruz.",
                features: ["Native iOS/Android", "Cross-Platform", "UI/UX Tasarım"]
              },
              {
                title: "Web Sitesi Geliştirme",
                icon: "💻",
                description: "Modern, responsive ve SEO uyumlu e-ticaret web siteleri tasarlayıp geliştiriyoruz.",
                features: ["Responsive Tasarım", "SEO Optimizasyonu", "Hızlı Yüklenme"]
              },
              {
                title: "E-ticaret Platformu",
                icon: "🛒",
                description: "Kapsamlı e-ticaret çözümleri ile online satış süreçlerinizi yönetiyoruz.",
                features: ["Ödeme Entegrasyonu", "Stok Yönetimi", "Sipariş Takibi"]
              },
              {
                title: "Teknoloji Danışmanlığı",
                icon: "🎯",
                description: "Dijital dönüşüm sürecinizde teknoloji stratejinizi belirlemenize yardımcı oluyoruz.",
                features: ["Strateji Geliştirme", "Teknoloji Seçimi", "Proje Yönetimi"]
              },
              {
                title: "Sistem Entegrasyonu",
                icon: "🔗",
                description: "Mevcut sistemlerinizi modern e-ticaret çözümleri ile entegre ediyoruz.",
                features: ["API Geliştirme", "Veri Migrasyonu", "Sistem Optimizasyonu"]
              },
              {
                title: "Teknik Destek",
                icon: "🛠️",
                description: "7/24 teknik destek ile sistemlerinizin kesintisiz çalışmasını sağlıyoruz.",
                features: ["7/24 Destek", "Bakım Hizmetleri", "Performans İzleme"]
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 transform hover:-translate-y-3 animate-fade-in-up" style={{animationDelay: `${index * 100}ms`}}>
                <div className="text-5xl mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-full mr-3 transform group-hover:scale-150 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-300">
                    Daha Fazla Bilgi →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Section */}
      <section id="app" className="py-20 px-6 bg-gradient-to-br from-orange-900 via-red-900 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">NAR24 Mobil Uygulaması</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              iOS ve Android cihazlarınızda kesintisiz alışveriş deneyimi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Kullanıcı Dostu Arayüz</h3>
                    <p className="text-gray-300">Sezgisel tasarım ile kolay ve hızlı alışveriş deneyimi</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Hızlı Performans</h3>
                    <p className="text-gray-300">Optimize edilmiş kod yapısı ile yıldırım hızında işlem</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Güvenli Ödeme</h3>
                    <p className="text-gray-300">SSL sertifikası ve gelişmiş güvenlik protokolleri</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://nar24.com" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center px-6 py-3 bg-white text-gray-800 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-xl">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  <span className="font-semibold">nar24.com'u ziyaret et</span>
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <div className="flex space-x-3">
                  <button className="flex items-center px-4 py-3 bg-black text-white rounded-2xl hover:bg-gray-800 transition-all duration-300 shadow-xl">
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                    <span className="text-sm">App Store</span>
                  </button>
                  <button className="flex items-center px-4 py-3 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-all duration-300 shadow-xl">
                    <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <span className="text-sm">Google Play</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-right">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=600&fit=crop" 
                  alt="Mobil Uygulama"
                  className="rounded-3xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-all duration-500"
                />
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-orange-500 to-red-600 text-white p-3 rounded-2xl shadow-xl animate-bounce">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-2 16h14l-2-16" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">İletişime Geçin</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Teknoloji projeleriniz için bugün bizimle iletişime geçin
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10 animate-fade-in-left">
              <h3 className="text-2xl font-bold text-white mb-6">Bize Mesaj Gönderin</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Adınız Soyadınız</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-all duration-300"
                    placeholder="Adınızı giriniz"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">E-posta Adresiniz</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-all duration-300"
                    placeholder="ornek@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Telefon Numaranız</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-all duration-300"
                    placeholder="+90 532 123 45 67"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Mesajınız</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none transition-all duration-300 resize-none"
                    placeholder="Proje detaylarınızı buraya yazınız..."
                  ></textarea>
                </div>
                <button
                  onClick={handleSubmit}
                  type="button"
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-2xl"
                >
                  Mesaj Gönder
                </button>
              </div>
            </div>

            <div className="space-y-8 text-white animate-fade-in-right">
              <div>
                <h3 className="text-2xl font-bold mb-6">İletişim Bilgilerimiz</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Adres</h4>
                      <p className="text-gray-300">Teknoloji Merkezi<br />Lefkoşa, Kuzey Kıbrıs<br />KKTC</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Telefon</h4>
                      <p className="text-gray-300">+90 392 123 45 67<br />+90 533 987 65 43</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">E-posta</h4>
                      <p className="text-gray-300">info@nar24.com<br />destek@nar24.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">Website</h4>
                      <a href="https://nar24.com" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors duration-300">
                        nar24.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-4">Çalışma Saatlerimiz</h4>
                <div className="space-y-2 text-gray-300">
                  <p>Pazartesi - Cuma: 09:00 - 18:00</p>
                  <p>Cumartesi: 10:00 - 14:00</p>
                  <p>Pazar: Kapalı</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-4">Bizi Takip Edin</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center hover:from-orange-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src="/public/siyahlogo.png" 
              alt="NAR24 Logo"
              className="h-8 w-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                (e.currentTarget.nextElementSibling as HTMLElement)?.style.setProperty('display', 'flex');
              }}
            />
            <div className="hidden w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg items-center justify-center">
              <span className="text-white font-bold text-sm">N</span>
            </div>
            <span className="font-bold text-xl">NAR24</span>
          </div>
          <p>&copy; 2024 E.C.T.S TRADING LTD. Tüm hakları saklıdır.</p>
          <p className="text-gray-400 mt-2">Dijital Ticaretin Teknoloji Ortağı</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-left {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .animate-fade-in-left {
          animation: fade-in-left 0.8s ease-out forwards;
        }

        .animate-fade-in-right {
          animation: fade-in-right 0.8s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animation-delay-200 {
          animation-delay: 200ms;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }

        .animation-delay-600 {
          animation-delay: 600ms;
        }

        .animation-delay-1000 {
          animation-delay: 1000ms;
        }

        .animation-delay-2000 {
          animation-delay: 2000ms;
        }

        /* Smooth scrolling for anchor links */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #f97316, #dc2626);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #ea580c, #b91c1c);
        }
      `}</style>
    </div>
  );
}