'use client';

import { useState } from "react";

const features = [
  {
    title: "Kolay Sipariş",
    description:
      "Müşteriler ürünleri hızlıca seçer, sepeti oluşturur ve siparişi dakikalar içinde tamamlar.",
  },
  {
    title: "Canlı Durum Takibi",
    description:
      "Siparişler alındı, hazırlanıyor, yolda ve teslim edildi aşamalarında şeffaf şekilde görüntülenir.",
  },
  {
    title: "Cari Bakiye Yönetimi",
    description:
      "Müşteri panelinde güncel hesap bakiyesi ve sipariş geçmişi tek ekranda takip edilir.",
  },
];

const steps = [
  "Hesabını oluştur ve giriş yap",
  "Ürünlerini seç, siparişini gönder",
  "Hazırlık ve teslimat sürecini anlık takip et",
];

const previews = [
  {
    title: "Ürün Kataloğu",
    detail: "Kategori bazlı ürün listeleme, hızlı arama ve sepet ekleme.",
  },
  {
    title: "Sipariş Durumu",
    detail: "Sipariş alındı, hazırlanıyor, yolda, teslim edildi adımları.",
  },
  {
    title: "Cari Hesap",
    detail: "Güncel bakiye, geçmiş siparişler ve finansal özet görünümü.",
  },
];

const faqs = [
  {
    question: "Uygulamayı kimler kullanabilir?",
    answer:
      "Başak Sebze ile çalışan bayi ve kurumsal müşteriler giriş bilgileriyle uygulamayı kullanabilir.",
  },
  {
    question: "Sipariş verdikten sonra değişiklik yapabilir miyim?",
    answer:
      "Sipariş henüz sevkiyata çıkmadan önce destek hattı üzerinden güncelleme talebi iletebilirsiniz.",
  },
  {
    question: "Destek için nasıl iletişime geçebilirim?",
    answer:
      "info@basaksebze.com.tr e-posta adresi veya +90 545 837 23 24 telefon hattı üzerinden bize ulaşabilirsiniz.",
  },
];

const sections = [
  {
    title: "Ön Bilgilendirme Formu",
    content: [
      "Satın alma onayı öncesinde sipariş verilen taze meyve, sebze ve gıda ürünlerinin sağlayıcısı (Başak Sebze), kapsamı, toplam bedeli, KDV dahil fiyatı, teslimat ücretleri ve teslimat süreci müşteriye açık şekilde sunulur.",
      "Siparişlerin teslimatı, müşterinin belirttiği teslimat adresine Başak Sebze özel soğuk zincir araçları veya anlaşmalı kuryeler aracılığıyla gerçekleştirilir.",
      "İptal, iade ve cayma hakkı istisnaları (taze gıda ve çabuk bozulabilen ürünler kapsamındaki istisnalar) satın alma aşamasında belirtilir; müşteri onayı elektronik kayıtlarla saklanır.",
      "Müşteri destek talepleri için iletişim kanalları: info@basaksebze.com.tr ve +90 545 837 23 24.",
    ],
  },
  {
    title: "Gizlilik Politikası",
    content: [
      "Başak Sebze, sipariş süreçlerinde paylaşılan ad-soyad, e-posta, telefon ve teslimat adresi bilgilerini yalnızca sipariş teslimatı, faturalandırma ve destek operasyonları amacıyla işler.",
      "Ödeme adımında kart verileri doğrudan iyzico altyapısında güvenli bir şekilde işlenir; Başak Sebze kart numarası gibi hassas ödeme verilerini sistemlerinde saklamaz.",
      "Toplanan veriler, yasal yükümlülükler veya hizmet ifası için gerekli süre boyunca saklanır; yetkisiz erişime karşı teknik ve idari tedbirler uygulanır.",
      "Veri sahibi olarak KVKK kapsamındaki haklarınızı info@basaksebze.com.tr adresi üzerinden iletebilirsiniz.",
    ],
  },
  {
    title: "Teslimat ve İade",
    content: [
      "Başak Sebze tarafından sunulan ürünler taze gıda, sebze ve meyveler olup fiziksel olarak soğuk zincir araçlarımızla veya kuryelerimizle müşterinin adresine teslim edilir.",
      "Teslimat, sipariş esnasında seçilen teslimat saat diliminde ve en geç 24-48 saat içerisinde gerçekleştirilir.",
      "Alıcı, teslim alırken ürünlerin tazeliğini ve kalitesini kontrol etmelidir. Hasarlı, ezilmiş veya bozuk olduğu tespit edilen ürünler teslimat anında kuryeye iade edilebilir.",
      "Taze gıda ve çabuk bozulabilen ürünlerin niteliği gereği, teslim alındıktan sonra uygun saklama koşullarında muhafaza edilmeyen veya sonradan iade edilmek istenen ürünlerde yasa gereği cayma hakkı geçerli değildir.",
    ],
  },
  {
    title: "İptal ve İade Koşulları",
    content: [
      "Siparişler, dağıtıma ve hazırlık aşamasına girmeden önce destek hattı üzerinden ücretsiz olarak iptal edilebilir.",
      "Hazırlanmış ve yola çıkmış siparişlerde, taze gıda ürünlerinin niteliği ve siparişe özel paketlenmesi nedeniyle iptal veya iade kabul edilmemektedir.",
      "Kusurlu, ezilmiş veya eksik teslim edilen ürünler için anında telafi veya ücret iadesi sağlanır.",
      "İade onayı verilen işlemlerin tutarı, ödeme yöntemine bağlı olarak bankacılık süreçleri dahilinde 7-14 iş günü içinde karta veya hesaba yansıtılır.",
    ],
  },
  {
    title: "Mesafeli Satış Sözleşmesi",
    content: [
      "Bu sözleşme, Başak Sebze tarafından elektronik ortamda satışı yapılan taze sebze, meyve ve gıda ürünlerinin mesafeli olarak satılmasına ilişkin alıcı ve satıcı hak ve yükümlülüklerini düzenler.",
      "Ürünlerin temel nitelikleri, KDV dahil satış fiyatı, ödeme yöntemi ve teslimat detayları sipariş özetinde belirtilen şartlarla birlikte geçerlidir.",
      "Alıcı, sipariş öncesinde ürünlerin temel nitelikleri, toplam bedeli, ödeme yöntemi, teslimat süreci ve iptal/iade koşulları hakkında bilgilendirildiğini kabul eder.",
      "Uyuşmazlıklarda yürürlükteki tüketici ve ticaret mevzuatı uygulanır; taraflar öncelikle yazılı uzlaşma yolunu dener, sonuç alınamazsa yetkili mercilere başvurulur.",
    ],
  },
];

interface Product {
  id: string;
  category: string;
  name: string;
  price: number;
  unit: string;
  image: string;
  description: string;
}

const productsData: Product[] = [
  // Taze Sebzeler
  {
    id: "sebze-1",
    category: "Taze Sebzeler",
    name: "Salkım Domates",
    price: 45,
    unit: "kg",
    image: "🍅",
    description: "Yerli üretim, dalından taze salkım domates."
  },
  {
    id: "sebze-2",
    category: "Taze Sebzeler",
    name: "Sivri Biber",
    price: 50,
    unit: "kg",
    image: "🫑",
    description: "Çıtır çıtır, taze sivri yeşil biber."
  },
  {
    id: "sebze-3",
    category: "Taze Sebzeler",
    name: "Langa Salatalık",
    price: 35,
    unit: "kg",
    image: "🥒",
    description: "Kütür kütür, taze bahçe salatalığı."
  },
  {
    id: "sebze-4",
    category: "Taze Sebzeler",
    name: "Patates (Afyon)",
    price: 20,
    unit: "kg",
    image: "🥔",
    description: "Kızartmalık ve yemeklik kaliteli sarı patates."
  },
  {
    id: "sebze-5",
    category: "Taze Sebzeler",
    name: "Kuru Soğan",
    price: 18,
    unit: "kg",
    image: "🧅",
    description: "Yemeklerin vazgeçilmezi sert kuru soğan."
  },
  
  // Taze Meyveler
  {
    id: "meyve-1",
    category: "Taze Meyveler",
    name: "Amasya Elması",
    price: 40,
    unit: "kg",
    image: "🍎",
    description: "Sert, sulu ve kokulu kırmızı Amasya elması."
  },
  {
    id: "meyve-2",
    category: "Taze Meyveler",
    name: "İthal Muz",
    price: 85,
    unit: "kg",
    image: "🍌",
    description: "A sınıfı kaliteli besleyici ithal muz."
  },
  {
    id: "meyve-3",
    category: "Taze Meyveler",
    name: "Taze Çilek",
    price: 70,
    unit: "kg",
    image: "🍓",
    description: "Kokulu, tatlı ve taze toplanmış çilek."
  },
  {
    id: "meyve-4",
    category: "Taze Meyveler",
    name: "Sıkmalık Portakal",
    price: 30,
    unit: "kg",
    image: "🍊",
    description: "Bol sulu Finike sıkmalık portakalı."
  },

  // Hazır Paketler
  {
    id: "paket-1",
    category: "Hazır Paketler",
    name: "Haftalık Ev Sebze Kutusu",
    price: 250,
    unit: "kutu",
    image: "📦",
    description: "Bir ailenin haftalık sebze ihtiyacını karşılayacak 8 çeşit taze sebze."
  },
  {
    id: "paket-2",
    category: "Hazır Paketler",
    name: "Büyük Boy Restoran Paketi",
    price: 750,
    unit: "kutu",
    image: "🏢",
    description: "İşletmeler için özenle seçilmiş toptan sebze ve yeşillik paketi."
  },
  {
    id: "paket-3",
    category: "Hazır Paketler",
    name: "Vitamin Deposu Meyve Sepeti",
    price: 350,
    unit: "sepet",
    image: "🧺",
    description: "Mevsimin en taze meyvelerinden oluşan karışık vitamin sepeti."
  }
];

interface CartItem {
  id: string;
  name: string;
  price: number;
  unit: string;
  quantity: number;
  image: string;
}

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tümü");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [checkoutStep, setCheckoutStep] = useState<"form" | "success">("form");

  // Form states
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("İstanbul");
  const [district, setDistrict] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCvc, setCardCvc] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [formError, setFormError] = useState("");

  const filteredProducts = selectedCategory === "Tümü"
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

  const categories = ["Tümü", "Taze Sebzeler", "Taze Meyveler", "Hazır Paketler"];

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, {
        id: product.id,
        name: product.name,
        price: product.price,
        unit: product.unit,
        quantity: 1,
        image: product.image
      }];
    });
  };

  const handleRemoveOneFromCart = (productId: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === productId);
      if (existing && existing.quantity > 1) {
        return prev.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      return prev.filter(item => item.id !== productId);
    });
  };

  const handleRemoveAllFromCart = (productId: string) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  const totalItemsCount = cart.reduce((count, item) => count + item.quantity, 0);

  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !surname || !email || !phone || !address || !district || !cardHolder || !cardNumber || !cardExpiry || !cardCvc) {
      setFormError("Lütfen tüm alanları doldurunuz.");
      return;
    }
    if (!acceptedTerms) {
      setFormError("Devam etmek için Mesafeli Satış Sözleşmesi ve Ön Bilgilendirme Koşullarını kabul etmelisiniz.");
      return;
    }
    setFormError("");
    setCheckoutStep("success");
    setCart([]); // Clear cart on success
  };

  const handleCloseCheckout = () => {
    setIsCheckoutOpen(false);
    setCheckoutStep("form");
    // Clear forms
    setName("");
    setSurname("");
    setEmail("");
    setPhone("");
    setAddress("");
    setDistrict("");
    setCardHolder("");
    setCardNumber("");
    setCardExpiry("");
    setCardCvc("");
    setAcceptedTerms(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-emerald-50 via-white to-orange-50 relative">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="text-sm font-bold text-emerald-800 flex items-center gap-1.5">
            <span className="text-base">🥬</span> Başak Sebze
          </a>
          <nav className="flex items-center gap-3 text-xs font-medium text-slate-600 sm:gap-5 sm:text-sm">
            <a href="#hakkimizda" className="transition hover:text-slate-900">
              Hakkımızda
            </a>
            <a href="#urunlerimiz" className="transition hover:text-slate-900 font-semibold text-emerald-700">
              Ürünlerimiz
            </a>
            <a href="#ozellikler" className="transition hover:text-slate-900">
              Özellikler
            </a>
            <a href="#ekranlar" className="transition hover:text-slate-900">
              Ekranlar
            </a>
            <a href="#sss" className="transition hover:text-slate-900">
              SSS
            </a>
            <a href="#politikalar" className="transition hover:text-slate-900">
              Politikalar
            </a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:pt-14">
        {/* Hero Section */}
        <section className="grid gap-8 rounded-3xl border border-emerald-100 bg-white/85 p-6 shadow-sm sm:p-8 lg:grid-cols-2 lg:p-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Başak Sebze Mobil
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Toptan siparişlerini mobilde hızlandır
            </h1>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Başak Sebze mobil uygulaması ile müşteriler ürün seçimi, sipariş
              takibi ve cari hesap yönetimini tek ekranda kolayca yapar.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#urunlerimiz"
                className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Ürünleri Satın Al
              </a>
              <a
                href="#politikalar"
                className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white px-6 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
              >
                Politikaları İncele
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-5 text-white sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-emerald-300">
              Uygulama Akışı
            </p>
            <ul className="mt-4 space-y-3">
              {steps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-start gap-3 text-sm text-slate-100"
                >
                  <span className="mt-0.5 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-emerald-500 text-xs font-bold">
                    {index + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ürünlerimiz (E-ticaret Onay Kataloğu) */}
        <section id="urunlerimiz" className="mt-16 scroll-mt-20">
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Online Sipariş & Tedarik
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Taze Ürün Kataloğumuz
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Aşağıdaki kategorilerden dilediğiniz taze ürünü sepetinize ekleyebilir, güvenli ödeme altyapımız ile siparişinizi tamamlayabilirsiniz.
            </p>
          </div>

          {/* Kategoriler */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition ${
                  selectedCategory === category
                    ? "bg-emerald-600 text-white shadow-sm"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Ürünler Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filteredProducts.map((product) => {
              const cartItem = cart.find(item => item.id === product.id);
              return (
                <article
                  key={product.id}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-xs flex flex-col justify-between transition hover:shadow-md"
                >
                  <div>
                    <div className="aspect-square rounded-xl bg-emerald-50/50 flex items-center justify-center text-5xl mb-4 border border-emerald-50">
                      {product.image}
                    </div>
                    <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full">
                      {product.category}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mt-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-lg font-bold text-slate-900">{product.price} TL</span>
                      <span className="text-xs text-slate-500"> / {product.unit}</span>
                    </div>

                    {cartItem ? (
                      <div className="flex items-center bg-emerald-50 rounded-full border border-emerald-200 p-0.5">
                        <button
                          onClick={() => handleRemoveOneFromCart(product.id)}
                          className="w-7 h-7 flex items-center justify-center text-emerald-800 font-bold rounded-full hover:bg-emerald-100 transition"
                        >
                          -
                        </button>
                        <span className="px-2 text-sm font-semibold text-emerald-950 min-w-5 text-center">
                          {cartItem.quantity}
                        </span>
                        <button
                          onClick={() => handleAddToCart(product)}
                          className="w-7 h-7 flex items-center justify-center text-emerald-800 font-bold rounded-full hover:bg-emerald-100 transition"
                        >
                          +
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-full transition flex items-center gap-1 shadow-xs"
                      >
                        <span>🛒</span> Sepete Ekle
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Hakkımızda */}
        <section id="hakkimizda" className="mt-16 rounded-3xl border border-emerald-100 bg-white/85 p-6 shadow-sm sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Hakkımızda
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Başak Sebze Hakkında
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Başak Sebze, taze ve kaliteli tarım ürünlerini toptan tedarik etme konusunda uzun yıllardır sektörün öncülerindendir. Bayilerimize en taze sebze ve meyveleri güvenilir ve sürdürülebilir bir hizmet anlayışıyla sunmaktayız.
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
              Siz değerli iş ortaklarımızın sipariş, teslimat ve ödeme süreçlerini kolaylaştırmak ve dijitalleştirmek amacıyla kurduğumuz "Başak Sebze Mobil" uygulamasıyla, en güncel ürün listelerine anında ulaşıp siparişlerinizi hızlıca yönetebilirsiniz.
            </p>
          </div>
        </section>

        {/* Ekran Önizlemeleri */}
        <section id="ekranlar" className="mt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Ekran Önizlemeleri
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Uygulama içinde seni neler bekliyor?
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {previews.map((preview) => (
              <article
                key={preview.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 rounded-xl bg-slate-100 p-3">
                  <div className="rounded-lg bg-white p-3 shadow-sm">
                    <div className="h-2.5 w-1/3 rounded-full bg-emerald-200" />
                    <div className="mt-2 h-2.5 w-2/3 rounded-full bg-slate-200" />
                    <div className="mt-2 h-20 rounded-lg bg-slate-100" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-slate-900">
                  {preview.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {preview.detail}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* SSS */}
        <section id="sss" className="mt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Sık Sorulan Sorular
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Kısa ve net cevaplar
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Neden Başak Sebze */}
        <section id="ozellikler" className="mt-14">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Neden Başak Sebze Mobil?
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Bayiler için sade ve hızlı deneyim
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <h3 className="text-base font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* Politikalar */}
        <section id="politikalar" className="mt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Kullanım Koşulları & Politikalar
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ödeme ve teslimat koşulları
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Aşağıdaki metinler, Başak Sebze üzerinden yapacağınız sipariş süreçlerine ilişkin temel gizlilik,
              teslimat, iptal, iade ve yasal mesafeli satış çerçevesini açıklar.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {sections.map((section) => (
              <article
                id={section.title.toLowerCase().replaceAll(" ", "-")}
                key={section.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="text-lg font-semibold text-slate-900">
                  {section.title}
                </h3>
                <ul className="mt-4 space-y-3">
                  {section.content.map((item) => (
                    <li key={item} className="text-sm leading-6 text-slate-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* İletişim */}
        <section className="mt-16 rounded-3xl bg-slate-900 p-6 text-white sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            İletişim & Başvuru
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Uygulama hakkında detay almak ister misin?
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            Başak Sebze mobil uygulaması için demo talebi, bayi erişimi veya
            teknik destek başvurularını aşağıdaki iletişim kanallarından
            iletebilirsin.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:info@basaksebze.com.tr"
              className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-500 px-6 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              info@basaksebze.com.tr
            </a>
            <a
              href="tel:+905458372324"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition hover:border-white/40"
            >
              +90 545 837 23 24
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Başak Sebze Gıda Sanayi ve Ticaret A.Ş.</p>
          <div className="flex flex-wrap gap-3">
            <a href="#hakkimizda" className="transition hover:text-slate-900">
              Hakkımızda
            </a>
            <a href="#urunlerimiz" className="transition hover:text-slate-900">
              Ürünlerimiz
            </a>
            <a href="#ozellikler" className="transition hover:text-slate-900">
              Özellikler
            </a>
            <a href="#ekranlar" className="transition hover:text-slate-900">
              Ekranlar
            </a>
            <a href="/delete-account" className="transition hover:text-emerald-800 font-semibold text-emerald-700">
              Hesap Silme Talebi
            </a>
            <a href="#sss" className="transition hover:text-slate-900">
              SSS
            </a>
            {sections.map((section) => (
              <a
                key={section.title}
                href={`#${section.title.toLowerCase().replaceAll(" ", "-")}`}
                className="transition hover:text-slate-900"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>

        {/* Güvenli Ödeme Bandı */}
        <div className="border-t border-slate-100 bg-slate-50">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-3 px-4 py-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
            <p className="text-xs font-medium text-slate-500">
              Güvenli ödeme altyapısı
            </p>
            <div className="flex items-center">
              <img
                src="/iyzico/logo_band_colored@2x.png"
                alt="iyzico ile Öde – Visa ve Mastercard desteklenir"
                height={32}
                style={{ height: "32px", width: "auto", display: "block" }}
              />
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Cart Button */}
      {totalItemsCount > 0 && (
        <div className="fixed bottom-6 right-6 z-30 animate-bounce">
          <button
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-5 rounded-full shadow-lg transition active:scale-95"
          >
            <span>🛒</span>
            <span>Sepetim ({totalItemsCount})</span>
            <span className="bg-emerald-800 text-xs px-2 py-1 rounded-full font-bold ml-1">
              {cartTotal} TL
            </span>
          </button>
        </div>
      )}

      {/* Cart Drawer (Sidebar Drawer) */}
      {isCartOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-xs flex justify-end">
          <div
            onClick={() => setIsCartOpen(false)}
            className="absolute inset-0"
          />
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between p-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                  <span>🛒</span> Sepetiniz ({totalItemsCount} Ürün)
                </h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="text-slate-400 hover:text-slate-600 text-2xl font-light"
                >
                  &times;
                </button>
              </div>

              {/* Items List */}
              <div className="mt-4 space-y-4 overflow-y-auto max-h-[60vh] pr-2">
                {cart.length === 0 ? (
                  <p className="text-sm text-slate-500 text-center py-8">Sepetiniz boş.</p>
                ) : (
                  cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between gap-4 p-3 rounded-xl border border-slate-100 bg-slate-50/50"
                    >
                      <div className="text-3xl bg-white w-12 h-12 rounded-lg flex items-center justify-center border border-slate-100">
                        {item.image}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm font-bold text-slate-900">{item.name}</h4>
                        <p className="text-xs text-slate-500">
                          {item.price} TL / {item.unit}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center bg-white rounded-full border border-slate-200 p-0.5">
                          <button
                            onClick={() => handleRemoveOneFromCart(item.id)}
                            className="w-6 h-6 flex items-center justify-center text-slate-700 font-bold rounded-full hover:bg-slate-100"
                          >
                            -
                          </button>
                          <span className="px-2 text-xs font-semibold text-slate-900 min-w-4 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleAddToCart({
                              id: item.id,
                              name: item.name,
                              price: item.price,
                              unit: item.unit,
                              image: item.image,
                              category: "",
                              description: ""
                            })}
                            className="w-6 h-6 flex items-center justify-center text-slate-700 font-bold rounded-full hover:bg-slate-100"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handleRemoveAllFromCart(item.id)}
                          className="text-xs text-red-500 hover:text-red-700 p-1 font-semibold"
                        >
                          Sil
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-slate-100">
              <div className="flex justify-between items-center text-base font-bold text-slate-900 mb-4">
                <span>Toplam Tutar:</span>
                <span className="text-emerald-700 text-lg">{cartTotal} TL</span>
              </div>
              <button
                disabled={cart.length === 0}
                onClick={() => {
                  setIsCartOpen(false);
                  setIsCheckoutOpen(true);
                }}
                className={`w-full py-3 rounded-full text-center text-sm font-bold text-white transition ${
                  cart.length === 0
                    ? "bg-slate-350 cursor-not-allowed"
                    : "bg-emerald-600 hover:bg-emerald-700 shadow-md active:scale-98"
                }`}
              >
                Siparişi Tamamla & Ödemeye Geç
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Checkout Modal */}
      {isCheckoutOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden my-8">
            <div className="bg-emerald-700 text-white p-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">💳 Güvenli Ödeme Formu</h3>
                <p className="text-xs text-emerald-100">iyzico altyapısı ile korumalı 256-bit SSL ödeme sayfası</p>
              </div>
              <button
                onClick={handleCloseCheckout}
                className="text-white hover:text-emerald-100 text-2xl font-light"
              >
                &times;
              </button>
            </div>

            {checkoutStep === "form" ? (
              <form onSubmit={handleCheckoutSubmit} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
                {formError && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl font-medium">
                    ⚠️ {formError}
                  </div>
                )}

                {/* Sipariş Özeti */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Sipariş Özeti</h4>
                  <div className="text-sm font-bold text-slate-900 flex justify-between">
                    <span>Toplam Ödeme:</span>
                    <span className="text-emerald-700 text-base">{cartTotal} TL</span>
                  </div>
                </div>

                {/* Müşteri & Teslimat Bilgileri */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-900 border-b pb-1 border-slate-100">1. Alıcı ve Teslimat Bilgileri</h4>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Adınız *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2 focus:outline-emerald-600"
                        placeholder="Örn. Ahmet"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Soyadınız *</label>
                      <input
                        type="text"
                        required
                        value={surname}
                        onChange={(e) => setSurname(e.target.value)}
                        className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2 focus:outline-emerald-600"
                        placeholder="Örn. Yılmaz"
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">E-posta Adresiniz *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2 focus:outline-emerald-600"
                        placeholder="Örn. ahmet@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Telefon Numaranız *</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2 focus:outline-emerald-600"
                        placeholder="Örn. 0545 837 23 24"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Teslimat ve Fatura Adresi *</label>
                    <textarea
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      rows={2}
                      className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2 focus:outline-emerald-600"
                      placeholder="Mahalle, sokak, daire no ve bina detaylarını giriniz..."
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Şehir *</label>
                      <input
                        type="text"
                        disabled
                        value={city}
                        className="w-full text-sm border border-slate-100 bg-slate-50 text-slate-500 rounded-xl px-3.5 py-2 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">İlçe *</label>
                      <input
                        type="text"
                        required
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2 focus:outline-emerald-600"
                        placeholder="Örn. Kadıköy"
                      />
                    </div>
                  </div>
                </div>

                {/* Kart Bilgileri (iyzico Mockup) */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-1 border-slate-100">
                    <h4 className="text-sm font-bold text-slate-900">2. Kart ile Ödeme Bilgileri</h4>
                    <span className="text-[10px] text-emerald-800 font-semibold bg-emerald-50 px-2 py-0.5 rounded-md">iyzico Güvenceli</span>
                  </div>

                  {/* Test Kartı Hatırlatma */}
                  <div className="p-3 bg-emerald-50 text-emerald-800 text-xs rounded-xl border border-emerald-100 flex items-start gap-2">
                    <span className="text-sm">💡</span>
                    <div>
                      <span className="font-bold">Ödeme Test Modu:</span> İnceleme için aşağıdaki örnek kartı kullanabilirsiniz.
                      <p className="font-mono mt-1 bg-white/60 p-1 rounded-sm select-all inline-block border border-emerald-100">
                        Kart No: 5890 0400 0000 0016 | SKT: 12/28 | CVC: 123
                      </p>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Kart Üzerindeki İsim *</label>
                    <input
                      type="text"
                      required
                      value={cardHolder}
                      onChange={(e) => setCardHolder(e.target.value)}
                      className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2 focus:outline-emerald-600"
                      placeholder="Mehmet Can"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Kart Numarası *</label>
                    <input
                      type="text"
                      required
                      maxLength={19}
                      value={cardNumber}
                      onChange={(e) => {
                        let val = e.target.value.replace(/\D/g, "");
                        val = val.match(/.{1,4}/g)?.join(" ") || val;
                        setCardNumber(val.slice(0, 19));
                      }}
                      className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2 focus:outline-emerald-600 font-mono"
                      placeholder="5890 0400 0000 0016"
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Son Kullanma Tarihi *</label>
                      <input
                        type="text"
                        required
                        maxLength={5}
                        value={cardExpiry}
                        onChange={(e) => {
                          let val = e.target.value.replace(/\D/g, "");
                          if (val.length > 2) {
                            val = val.slice(0, 2) + "/" + val.slice(2, 4);
                          }
                          setCardExpiry(val);
                        }}
                        className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2 focus:outline-emerald-600 font-mono"
                        placeholder="AA/YY (Örn. 12/28)"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1">Güvenlik Kodu (CVC) *</label>
                      <input
                        type="password"
                        required
                        maxLength={3}
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value.replace(/\D/g, ""))}
                        className="w-full text-sm border border-slate-200 rounded-xl px-3.5 py-2 focus:outline-emerald-600 font-mono"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>

                {/* Yasal Onay Kutuları */}
                <div className="space-y-3 pt-2">
                  <label className="flex items-start gap-2.5 text-xs text-slate-600 select-none cursor-pointer">
                    <input
                      type="checkbox"
                      checked={acceptedTerms}
                      onChange={(e) => setAcceptedTerms(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded-sm border-slate-350 text-emerald-650 focus:ring-emerald-500"
                    />
                    <span>
                      <a href="#ön-bilgilendirme-formu" target="_blank" className="font-semibold text-emerald-700 hover:underline">Ön Bilgilendirme Formu</a> ve{" "}
                      <a href="#mesafeli-satış-sözleşmesi" target="_blank" className="font-semibold text-emerald-700 hover:underline">Mesafeli Satış Sözleşmesi</a> şartlarını okudum, kabul ediyorum. *
                    </span>
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-full transition flex items-center justify-center gap-2 shadow-md active:scale-98"
                  >
                    🔒 {cartTotal} TL Ödeme Yap ve Sipariş Ver
                  </button>
                  <p className="text-center text-[10px] text-slate-400 mt-2">
                    Kart bilgileriniz doğrudan iyzico altyapısında işlenir, sunucularımızda saklanmaz.
                  </p>
                </div>
              </form>
            ) : (
              <div className="p-10 text-center space-y-6">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-4xl mx-auto text-emerald-700 animate-bounce">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Siparişiniz Başarıyla Alındı!</h3>
                  <p className="text-sm text-slate-500 mt-2 max-w-md mx-auto">
                    Ödemeniz güvenle tahsil edilmiştir. Siparişinizin hazırlık ve teslimat süreçleri başlamıştır.
                  </p>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl max-w-sm mx-auto border border-slate-100 text-left text-xs text-slate-600 space-y-1">
                  <p><strong>Firma Ünvanı:</strong> Başak Sebze Gıda Sanayi ve Ticaret A.Ş.</p>
                  <p><strong>Ödeme Altyapısı:</strong> iyzico Güvenli Ödeme</p>
                  <p><strong>Teslimat Tipi:</strong> Soğuk Zincir / Adrese Teslim</p>
                </div>
                <button
                  onClick={handleCloseCheckout}
                  className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-full transition"
                >
                  Kapat ve Keşfetmeye Devam Et
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
