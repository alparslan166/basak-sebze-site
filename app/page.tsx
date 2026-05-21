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
      "info@provision.com.tr e-posta adresi veya +90 545 837 23 24 telefon hattı üzerinden bize ulaşabilirsiniz.",
  },
];

const sections = [
  {
    title: "Ön Bilgilendirme Formu",
    content: [
      "Satın alma onayı öncesinde hizmetin sağlayıcısı, kapsamı, toplam bedeli, vergiler dahil fiyat bilgisi, ödeme yöntemi ve ifa süreci müşteriye açık şekilde sunulur.",
      "Hizmetin dijital ve proje bazlı niteliği, teslim modeli, tahmini teslim takvimi, revizyon koşulları ve destek kapsamı sipariş özeti ile birlikte paylaşılır.",
      "İptal, iade, cayma hakkı istisnaları ve başvuru kanalları satın alma aşamasında görünür şekilde belirtilir; müşteri onayı elektronik kayıtlarla saklanır.",
      "Müşteri destek talepleri için iletişim kanalları: info@provision.com.tr ve +90 545 837 23 24.",
    ],
  },
  {
    title: "Gizlilik Politikası",
    content: [
      "Provision, iletişim formu ve teklif süreçlerinde paylaşılan ad-soyad, e-posta, telefon ve proje kapsamı bilgilerini yalnızca hizmet sunumu, tekliflendirme ve destek operasyonları amacıyla işler.",
      "Ödeme adımında kart verileri doğrudan iyzico altyapısında işlenir; Provision kart numarası gibi hassas ödeme verilerini sistemlerinde saklamaz.",
      "Toplanan veriler, yasal yükümlülükler veya hizmet ifası için gerekli süre boyunca saklanır; yetkisiz erişime karşı teknik ve idari tedbirler uygulanır.",
      "Veri sahibi olarak KVKK kapsamındaki erişim, düzeltme, silme ve itiraz taleplerinizi info@provision.com.tr adresi üzerinden iletebilirsiniz.",
    ],
  },
  {
    title: "Teslimat ve İade",
    content: [
      "Provision tarafından sunulan hizmetler dijital ve proje bazlıdır; fiziksel ürün gönderimi yapılmaz.",
      "Teslimat, sözleşmede tanımlanan kapsam doğrultusunda analiz dokümanları, kaynak kod, panel erişimi, canlıya alma veya raporlama çıktıları şeklinde gerçekleştirilir.",
      "Teslim takvimi, proje başlangıcında belirlenen kilometre taşlarına (milestone) göre planlanır ve yazılı olarak paylaşılır.",
      "Onaylanan teslim kalemleri sonrasında bakım, destek ve revizyon süreçleri sözleşmedeki hizmet seviyelerine göre yürütülür.",
    ],
  },
  {
    title: "Hizmet Satışına İlişkin İptal",
    content: [
      "Müşteri, proje başlangıcından önce yazılı bildirimle iptal talebinde bulunursa alınan bedel, işlem masrafları hariç olacak şekilde iade edilir.",
      "Proje başlangıcı sonrasında iptal taleplerinde, o tarihe kadar tamamlanan analiz, geliştirme ve operasyonel çalışmalar oranında hak ediş düşülerek kalan tutar iade edilir.",
      "Müşteriye özel geliştirilen ve teslim edilmiş yazılım bileşenlerinde, dijital hizmetin niteliği gereği kullanılabilir kısmın iadesi mümkün olmayabilir.",
      "İade onayı verilen işlemlerde tutar, ödeme yöntemine bağlı olarak bankacılık süreçleri dahilinde 7-14 iş günü içinde karta veya hesaba yansıtılır.",
    ],
  },
  {
    title: "Mesafeli Satış Sözleşmesi",
    content: [
      "Bu sözleşme, Provision tarafından elektronik ortamda sunulan kurumsal yazılım geliştirme, danışmanlık ve bakım hizmetlerinin mesafeli olarak satışına ilişkin taraf hak ve yükümlülüklerini düzenler.",
      "Hizmet kapsamı, bedel, ödeme planı, teslim takvimi ve kabul kriterleri teklif formu, sipariş özeti ve proje sözleşmesinde belirtilen şartlarla birlikte değerlendirilir.",
      "Müşteri, sipariş öncesinde hizmetin temel nitelikleri, toplam bedeli, ödeme yöntemi, ifa süreci ve iptal/iade koşulları hakkında bilgilendirildiğini kabul eder.",
      "Uyuşmazlıklarda yürürlükteki tüketici ve ticaret mevzuatı uygulanır; taraflar öncelikle yazılı uzlaşma yolunu dener, sonuç alınamazsa yetkili mercilere başvurulur.",
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-b from-emerald-50 via-white to-orange-50">
      <header className="sticky top-0 z-20 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-slate-900">
            Başak Sebze Mobil
          </p>
          <nav className="flex items-center gap-3 text-xs font-medium text-slate-600 sm:gap-5 sm:text-sm">
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
                href="#ozellikler"
                className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-600 px-6 text-sm font-semibold text-white transition hover:bg-emerald-700"
              >
                Özelliklere Göz At
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

        <section id="politikalar" className="mt-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              Kullanım Koşulları & Politikalar
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Ödeme ve hizmet koşulları
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
              Aşağıdaki metinler, hizmet süreçlerine ilişkin temel gizlilik,
              teslimat, iptal ve iade çerçevesini açıklar. Projeye özel detaylar
              ayrıca sözleşme ve teklif dokümanlarında belirtilir.
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
              href="mailto:info@provision.com.tr"
              className="inline-flex h-11 items-center justify-center rounded-full bg-emerald-500 px-6 text-sm font-semibold text-white transition hover:bg-emerald-400"
            >
              info@provision.com.tr
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

      <footer className="border-t border-slate-200 bg-white/80">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-6 text-sm text-slate-600 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Başak Sebze</p>
          <div className="flex flex-wrap gap-3">
            <a href="#ozellikler" className="transition hover:text-slate-900">
              Özellikler
            </a>
            <a href="#ekranlar" className="transition hover:text-slate-900">
              Ekranlar
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
      </footer>
    </div>
  );
}
