import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Catalog from '@/components/Catalog';

const HERO_IMG = 'https://cdn.poehali.dev/projects/bc1f4fb4-c6d7-44db-b1ef-cad46090ff0e/files/86991160-acff-4f01-b8fb-c2b167b7e5f4.jpg';

const navLinks = [
  { label: 'Главная', href: '#home' },
  { label: 'Каталог', href: '#catalog' },
  { label: 'О компании', href: '#about' },
  { label: 'Характеристики', href: '#specs' },
  { label: 'Применение', href: '#usage' },
  { label: 'Доставка', href: '#delivery' },
  { label: 'Контакты', href: '#contacts' },
];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center glow-shadow">
              <Icon name="Zap" size={20} className="text-primary-foreground" />
            </div>
            <div className="leading-none">
              <p className="font-display font-bold text-lg tracking-wide">АРКТИК ГРУПП</p>
              <p className="text-[10px] text-primary tracking-[0.2em] uppercase">Промсвет</p>
            </div>
          </a>
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l.label}
              </a>
            ))}
          </nav>
          <Button asChild className="hidden lg:inline-flex"><a href="#contacts">Связаться</a></Button>
          <button className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>
        {menuOpen && (
          <nav className="lg:hidden border-t border-border bg-background px-4 py-4 flex flex-col gap-3">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-muted-foreground hover:text-primary">
                {l.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative pt-16 min-h-screen flex items-center grid-bg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="container relative grid lg:grid-cols-2 gap-12 items-center py-20">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 text-primary text-xs font-display tracking-wide mb-6">
              <Icon name="MapPin" size={14} /> Производство · Екатеринбург
            </span>
            <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05]">
              Промышленное <span className="text-gradient">освещение</span> нового поколения
            </h1>
            <p className="text-muted-foreground text-lg mt-6 max-w-lg">
              Серия светильников <span className="text-foreground font-medium">ПРОМСВЕТ</span> — энергоэффективные LED-решения для складов, цехов и производств. Собственное производство ООО «АРКТИК ГРУПП».
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button asChild size="lg" className="glow-shadow"><a href="#catalog">Смотреть каталог</a></Button>
              <Button asChild size="lg" variant="outline"><a href="#contacts">Запросить расчёт</a></Button>
            </div>
            <div className="flex gap-8 mt-12">
              {[['7 лет', 'гарантия'], ['IP68', 'защита'], ['−60%', 'экономия']].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-3xl font-bold text-primary">{v}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">{l}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="rounded-2xl overflow-hidden border border-border glow-shadow">
              <img src={HERO_IMG} alt="Промышленный светильник ПРОМСВЕТ" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-display tracking-widest text-sm uppercase">О компании</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">ООО «АРКТИК ГРУПП»</h2>
            <p className="text-muted-foreground mt-5 leading-relaxed">
              Российский производитель промышленного светотехнического оборудования из Екатеринбурга. Мы разрабатываем и выпускаем светильники серии ПРОМСВЕТ — надёжные решения для самых суровых условий эксплуатации.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                ['Factory', 'Собственное производство', 'Полный цикл от разработки до сборки'],
                ['BadgeCheck', 'Сертификация', 'Соответствие ГОСТ и ТР ТС'],
                ['Wrench', 'Гарантия до 7 лет', 'Сервисное обслуживание'],
                ['Truck', 'Доставка по РФ', 'Отгрузка со склада в Екатеринбурге'],
              ].map(([icon, title, desc]) => (
                <div key={title} className="bg-card border border-border rounded-xl p-5">
                  <Icon name={icon} size={24} className="text-primary mb-3" />
                  <p className="font-display font-semibold">{title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-10">
            <p className="font-display text-2xl font-bold mb-6">Реквизиты</p>
            <dl className="space-y-4 text-sm">
              {[
                ['Наименование', 'ООО «АРКТИК ГРУПП»'],
                ['ИНН', '6658495988'],
                ['Город', 'Екатеринбург'],
                ['Серия продукции', 'ПРОМСВЕТ'],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between border-b border-border pb-3">
                  <dt className="text-muted-foreground">{k}</dt>
                  <dd className="font-medium text-right">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <Catalog />

      {/* Specs */}
      <section id="specs" className="py-24 bg-card/30">
        <div className="container">
          <span className="text-primary font-display tracking-widest text-sm uppercase">Технологии</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-12">Технические характеристики</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              ['Cpu', 'Драйверы Premium', 'Стабильная работа при перепадах напряжения 100–305В'],
              ['Lightbulb', 'LED-чипы', 'Светоотдача до 160 лм/Вт, индекс цветопередачи CRI>80'],
              ['ShieldCheck', 'Защита IP40–IP68', 'Пыле- и влагозащита для любых условий'],
              ['ThermometerSun', 'Радиатор из алюминия', 'Эффективный теплоотвод, ресурс 50 000 часов'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon name={icon} size={24} className="text-primary" />
                </div>
                <p className="font-display text-lg font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage */}
      <section id="usage" className="py-24">
        <div className="container">
          <span className="text-primary font-display tracking-widest text-sm uppercase">Применение</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-12">Где работают светильники ПРОМСВЕТ</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              ['Warehouse', 'Склады и логистика', 'Высокие потолки, складские комплексы'],
              ['Factory', 'Производственные цеха', 'Машиностроение, металлообработка'],
              ['Car', 'Паркинги и автосервис', 'Подземные и крытые парковки'],
              ['Fuel', 'АЗС и нефтебазы', 'Взрывозащищённые модели IP68'],
              ['TramFront', 'Уличное освещение', 'Дороги, территории предприятий'],
              ['ShoppingCart', 'Торговые комплексы', 'Гипермаркеты, выставочные залы'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="group bg-card border border-border rounded-xl p-6 flex items-start gap-4 hover:border-primary transition-all">
                <div className="w-11 h-11 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                  <Icon name={icon} size={22} className="text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <p className="font-display font-semibold">{title}</p>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-24 bg-card/30">
        <div className="container">
          <span className="text-primary font-display tracking-widest text-sm uppercase">Доставка и оплата</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 mb-12">Как мы работаем</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              ['1', 'PackageSearch', 'Заявка и расчёт', 'Подбираем модели под объект и готовим коммерческое предложение'],
              ['2', 'PackageCheck', 'Отгрузка со склада', 'Со склада в Екатеринбурге — день в день. Под заказ — от 5 рабочих дней'],
              ['3', 'Truck', 'Доставка по России', 'Транспортными компаниями в любой регион РФ и страны ЕАЭС'],
            ].map(([num, icon, title, desc]) => (
              <div key={num} className="relative bg-card border border-border rounded-xl p-7">
                <span className="absolute top-5 right-6 font-display text-5xl font-bold text-primary/15">{num}</span>
                <Icon name={icon} size={28} className="text-primary mb-4" />
                <p className="font-display text-lg font-semibold">{title}</p>
                <p className="text-sm text-muted-foreground mt-2">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24">
        <div className="container">
          <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 grid lg:grid-cols-2 gap-10 relative overflow-hidden">
            <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-primary/15 rounded-full blur-[100px]" />
            <div className="relative">
              <span className="text-primary font-display tracking-widest text-sm uppercase">Контакты</span>
              <h2 className="font-display text-4xl font-bold mt-2 mb-6">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8">Оставьте заявку — менеджер подберёт освещение под ваш объект и рассчитает стоимость.</p>
              <div className="space-y-5">
                {[
                  ['Phone', 'Телефон', '+7 (343) 000-00-00'],
                  ['Mail', 'Email', 'info@arctic-group.ru'],
                  ['MapPin', 'Адрес', 'г. Екатеринбург'],
                  ['Clock', 'Режим работы', 'Пн–Пт, 9:00–18:00'],
                ].map(([icon, label, value]) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon name={icon} size={20} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">{label}</p>
                      <p className="font-medium">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <form className="relative space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input type="text" placeholder="Ваше имя" className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors" />
              <input type="tel" placeholder="Телефон" className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors" />
              <input type="email" placeholder="Email" className="w-full h-12 px-4 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors" />
              <textarea placeholder="Опишите задачу или укажите модели" rows={4} className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary outline-none transition-colors resize-none" />
              <Button size="lg" className="w-full glow-shadow">Отправить заявку</Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center">
              <Icon name="Zap" size={16} className="text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-foreground">АРКТИК ГРУПП</span>
            <span>· ПРОМСВЕТ</span>
          </div>
          <p>ИНН 6658495988 · Екатеринбург</p>
          <p>© 2026 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
