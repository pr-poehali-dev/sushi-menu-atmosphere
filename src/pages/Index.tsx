import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PHONE = '+7 (495) 123-45-67';
const PHONE_TEL = 'tel:+74951234567';

const heroImg = 'https://cdn.poehali.dev/projects/2715dd07-a75c-42d5-96d2-ca90eb850359/files/86b0f1ed-4013-447b-a042-b05002f1ee63.jpg';
const atmoImg = 'https://cdn.poehali.dev/projects/2715dd07-a75c-42d5-96d2-ca90eb850359/files/65645678-0373-441c-bc14-3fb62876cd41.jpg';

const nav = [
  { id: 'home', label: 'Главная' },
  { id: 'menu', label: 'Меню' },
  { id: 'atmosphere', label: 'Атмосфера' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'booking', label: 'Бронирование' },
  { id: 'contacts', label: 'Контакты' },
];

const menu = [
  { emoji: '🍣', name: 'Филадельфия', desc: 'Лосось, сливочный сыр, огурец, авокадо', price: '490 ₽', tag: 'Хит' },
  { emoji: '🍤', name: 'Темпура с креветкой', desc: 'Хрустящие тигровые креветки, спайси-соус', price: '560 ₽', tag: 'Новинка' },
  { emoji: '🐟', name: 'Сет «Атмосфера»', desc: '32 кусочка, ассорти из 4 видов роллов', price: '1390 ₽', tag: 'Выгодно' },
  { emoji: '🥢', name: 'Калифорния', desc: 'Краб, авокадо, икра тобико, огурец', price: '450 ₽', tag: '' },
  { emoji: '🍱', name: 'Унаги маки', desc: 'Копчёный угорь, соус унаги, кунжут', price: '520 ₽', tag: '' },
  { emoji: '🌶️', name: 'Спайси лосось', desc: 'Острый лосось, рис, нори, лук', price: '420 ₽', tag: 'Острое' },
];

const reviews = [
  { name: 'Анна К.', text: 'Лучшие роллы в городе! Рыба свежайшая, подача — космос. Заказываем каждую неделю.', stars: 5 },
  { name: 'Дмитрий В.', text: 'Атмосфера невероятная, неоновые акценты, приятная музыка. Сет «Атмосфера» — топ за свои деньги.', stars: 5 },
  { name: 'Марина С.', text: 'Бронировали стол на годовщину — всё прошло идеально. Спасибо за вечер и комплимент от шефа!', stars: 5 },
];

const marquee = ['СВЕЖАЯ РЫБА', '🍣', 'ДОСТАВКА 60 МИН', '🥢', 'АВТОРСКИЕ СЕТЫ', '🍤', 'ОНЛАЙН-БРОНЬ', '🐟'];

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground grain overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 glass">
        <div className="container flex items-center justify-between h-16">
          <button onClick={() => scrollTo('home')} className="font-display text-2xl font-bold tracking-widest">
            <span className="text-gradient">АТМОСФЕРА</span>
          </button>
          <nav className="hidden md:flex items-center gap-7">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors">
                {n.label}
              </button>
            ))}
          </nav>
          <a href={PHONE_TEL} className="hidden sm:inline-flex">
            <Button className="bg-primary hover:bg-primary/90 font-medium gap-2">
              <Icon name="Phone" size={16} /> Позвонить
            </Button>
          </a>
          <button className="md:hidden" onClick={() => setMenuOpen((v) => !v)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={26} />
          </button>
        </div>
        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-1 px-6 pb-5 animate-fade-in">
            {nav.map((n) => (
              <button key={n.id} onClick={() => scrollTo(n.id)} className="text-left py-2 uppercase text-sm tracking-wide text-muted-foreground">
                {n.label}
              </button>
            ))}
            <a href={PHONE_TEL}><Button className="w-full mt-2 gap-2"><Icon name="Phone" size={16} /> {PHONE}</Button></a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="Суши" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-[120px] animate-glow" />
          <div className="absolute -top-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-[120px] animate-glow" />
        </div>
        <div className="container">
          <div className="max-w-2xl animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-accent mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-glow" /> Открыто с 11:00 до 22:00
            </span>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold leading-[0.95] uppercase">
              Вкус <span className="text-gradient">Японии</span><br />в каждом кусочке
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg">
              Авторские роллы, свежайшая рыба и атмосфера настоящего изакая. Готовим с душой — доставим за 60 минут.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollTo('menu')} className="bg-primary hover:bg-primary/90 text-base h-13 px-8 gap-2">
                Смотреть меню <Icon name="ArrowRight" size={18} />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('booking')} className="text-base h-13 px-8 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground gap-2">
                <Icon name="CalendarHeart" size={18} /> Забронировать стол
              </Button>
            </div>
            <div className="mt-12 flex gap-8">
              {[['12', 'лет на рынке'], ['80+', 'видов роллов'], ['4.9', 'рейтинг ★']].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-gradient">{n}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-4 border-y border-border bg-card/40 overflow-hidden">
        <div className="flex w-max animate-marquee">
          {[...marquee, ...marquee].map((m, i) => (
            <span key={i} className="font-display text-2xl uppercase tracking-widest mx-6 text-muted-foreground">{m}</span>
          ))}
        </div>
      </div>

      {/* Menu */}
      <section id="menu" className="py-24 relative">
        <div className="container">
          <div className="text-center mb-14 animate-fade-in">
            <span className="text-accent uppercase tracking-[0.3em] text-sm">Наше меню</span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase mt-3">Хиты <span className="text-gradient">кухни</span></h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {menu.map((item) => (
              <div key={item.name} className="group glass rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 hover:border-primary/60">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-5xl group-hover:scale-110 transition-transform inline-block">{item.emoji}</span>
                  {item.tag && (
                    <span className="text-xs uppercase tracking-wide px-3 py-1 rounded-full bg-primary/20 text-primary font-medium">{item.tag}</span>
                  )}
                </div>
                <h3 className="font-display text-2xl font-semibold uppercase">{item.name}</h3>
                <p className="text-sm text-muted-foreground mt-2 min-h-[40px]">{item.desc}</p>
                <div className="flex items-center justify-between mt-5">
                  <span className="font-display text-2xl font-bold text-secondary">{item.price}</span>
                  <Button size="sm" variant="ghost" className="gap-2 text-accent hover:text-accent hover:bg-accent/10">
                    <Icon name="Plus" size={16} /> В корзину
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere */}
      <section id="atmosphere" className="py-24 relative">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative animate-scale-in">
            <img src={atmoImg} alt="Атмосфера ресторана" className="rounded-3xl w-full object-cover aspect-[4/3]" />
            <div className="absolute -inset-4 -z-10 bg-gradient-to-tr from-primary/30 to-secondary/30 blur-2xl rounded-3xl" />
            <div className="absolute bottom-6 left-6 glass rounded-2xl px-5 py-4 animate-float">
              <div className="font-display text-3xl font-bold text-gradient">★ 4.9</div>
              <div className="text-xs text-muted-foreground uppercase">2 400+ отзывов</div>
            </div>
          </div>
          <div className="animate-fade-in">
            <span className="text-accent uppercase tracking-[0.3em] text-sm">Атмосфера</span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase mt-3 leading-tight">
              Место, где хочется <span className="text-gradient">остаться</span>
            </h2>
            <p className="text-muted-foreground mt-5 text-lg">
              Тёплое дерево, мягкий неоновый свет и приглушённая музыка. Мы создали пространство в духе токийских изакая — для свиданий, встреч с друзьями и тихих вечеров.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {[
                ['Sparkles', 'Авторская подача', 'Каждое блюдо — произведение искусства'],
                ['Music', 'Живая музыка', 'Уютные вечера по пятницам и субботам'],
                ['Wine', 'Барная карта', 'Саке, японский виски и коктейли'],
                ['Heart', 'Особые даты', 'Поможем устроить незабываемый праздник'],
              ].map(([icon, t, d]) => (
                <div key={t} className="glass rounded-xl p-5">
                  <Icon name={icon} size={24} className="text-secondary mb-2" />
                  <h4 className="font-display uppercase text-lg">{t}</h4>
                  <p className="text-sm text-muted-foreground mt-1">{d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24">
        <div className="container">
          <div className="text-center mb-14 animate-fade-in">
            <span className="text-accent uppercase tracking-[0.3em] text-sm">Отзывы</span>
            <h2 className="font-display text-4xl sm:text-6xl font-bold uppercase mt-3">Что говорят <span className="text-gradient">гости</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="glass rounded-2xl p-7 hover:-translate-y-1 transition-transform">
                <div className="flex gap-1 mb-4 text-accent">
                  {Array.from({ length: r.stars }).map((_, i) => <Icon key={i} name="Star" size={18} className="fill-accent" />)}
                </div>
                <p className="text-foreground/90 leading-relaxed">«{r.text}»</p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-display font-bold">
                    {r.name[0]}
                  </div>
                  <span className="font-medium">{r.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="py-24 relative">
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[600px] h-[400px] bg-primary/20 blur-[140px] rounded-full" />
        </div>
        <div className="container max-w-3xl">
          <div className="glass rounded-3xl p-8 sm:p-12 animate-scale-in">
            <div className="text-center mb-8">
              <span className="text-accent uppercase tracking-[0.3em] text-sm">Бронирование</span>
              <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase mt-3">Забронируй <span className="text-gradient">стол</span></h2>
              <p className="text-muted-foreground mt-3">Оставь заявку — мы перезвоним и подтвердим бронь за пару минут.</p>
            </div>
            <form className="grid sm:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <Input placeholder="Ваше имя" className="h-12 bg-muted/40 border-border" />
              <Input placeholder="Телефон" className="h-12 bg-muted/40 border-border" />
              <Input type="date" className="h-12 bg-muted/40 border-border" />
              <Input type="time" className="h-12 bg-muted/40 border-border" />
              <Input placeholder="Количество гостей" className="h-12 bg-muted/40 border-border sm:col-span-2" />
              <Button type="submit" size="lg" className="sm:col-span-2 h-13 bg-primary hover:bg-primary/90 text-base gap-2">
                <Icon name="CalendarCheck" size={18} /> Забронировать стол
              </Button>
            </form>
            <p className="text-center text-sm text-muted-foreground mt-5">
              Или позвоните нам: <a href={PHONE_TEL} className="text-secondary font-medium">{PHONE}</a>
            </p>
          </div>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-24 border-t border-border">
        <div className="container grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold uppercase">
              <span className="text-gradient">Контакты</span>
            </h2>
            <div className="mt-8 space-y-5">
              {[
                ['MapPin', 'Адрес', 'г. Москва, ул. Сакуры, 12'],
                ['Clock', 'Часы работы', 'Ежедневно с 11:00 до 22:00'],
                ['Phone', 'Телефон', PHONE],
                ['Mail', 'Почта', 'hello@sakura-sushi.ru'],
              ].map(([icon, t, d]) => (
                <div key={t} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                    <Icon name={icon} size={20} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground uppercase tracking-wide">{t}</div>
                    <div className="text-lg">{d}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-8">
              {['Send', 'Instagram', 'Phone'].map((s) => (
                <a key={s} href="#" className="w-11 h-11 rounded-xl glass flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                  <Icon name={s} size={20} />
                </a>
              ))}
            </div>
          </div>
          <div className="glass rounded-3xl p-8 flex flex-col justify-center text-center">
            <Icon name="PhoneCall" size={40} className="text-secondary mx-auto mb-4 animate-float" />
            <h3 className="font-display text-3xl font-bold uppercase">Быстрая связь</h3>
            <p className="text-muted-foreground mt-2">Звоните — примем заказ или забронируем стол прямо сейчас</p>
            <a href={PHONE_TEL} className="mt-6">
              <Button size="lg" className="w-full h-14 text-lg bg-primary hover:bg-primary/90 gap-2">
                <Icon name="Phone" size={20} /> {PHONE}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border text-center text-sm text-muted-foreground">
        <span className="font-display text-lg text-gradient tracking-widest">АТМОСФЕРА</span> — суши &amp; роллы © 2026
      </footer>

      {/* Floating call button */}
      <a href={PHONE_TEL} className="fixed bottom-6 right-6 z-50 group">
        <div className="absolute inset-0 rounded-full bg-primary blur-md animate-glow" />
        <div className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Icon name="Phone" size={26} className="text-primary-foreground" />
        </div>
      </a>
    </div>
  );
};

export default Index;