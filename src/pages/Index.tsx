import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const reasons = [
  {
    id: '1',
    title: 'Для защиты от случайных падений',
    subtitle: 'И более уверенной походки',
    description: 'Самая частая и опасная травма в возрасте — перелом шейки бедра. Цигун — это не монахи в полете. В данном случае – это улучшение баланса и координации. Практики учат чувствовать свое тело и устойчиво стоять на ногах. Это лучшая страховка от падений!',
    icon: 'ShieldCheck'
  },
  {
    id: '2',
    title: 'Чтобы ум оставался ясным',
    subtitle: 'Для здоровья мозга',
    description: 'Не «для памяти», а конкретно: замедлить возрастные изменения мозга. Медленные, координированные движения, с поэтапным запоминанием — это мощная тренировка нейропластичности. Это способ поддержать ясность ума и снизить риски.',
    icon: 'Brain'
  },
  {
    id: '3',
    title: 'Чтобы меньше пить таблеток',
    subtitle: 'Естественное здоровье',
    description: 'От давления, от боли в суставах, от тревоги, снотворное. Цигун естественным образом нормализует давление, снимает мышечные зажимы, успокаивает нервную систему. Это не отмена врачей, это снижение лекарственной нагрузки и её побочных эффектов.',
    icon: 'Pill'
  },
  {
    id: '4',
    title: 'Чтобы не оставаться в одиночестве',
    subtitle: 'Новый круг общения',
    description: 'Пенсия — часто это потеря социальных связей. Цигун в группе или даже онлайн-клубе дает чувство принадлежности, новый круг общения и цель — регулярную заботу о себе. Это защита от апатии и депрессии.',
    icon: 'Users'
  },
  {
    id: '5',
    title: 'Чтобы сохранять самостоятельность',
    subtitle: 'Независимость в быту',
    description: 'Самая большая тревога детей — что родителям будет сложно самим себя обслуживать. Цигун возвращает и поддерживает подвижность суставов и пластичность сухожилий, чтобы человек в любом возрасте мог сам завязать шнурки, донести сумку, легко встать со стула или кровати, принять душ.',
    icon: 'Heart'
  },
  {
    id: '6',
    title: 'Чтобы улучшить сон и настроение',
    subtitle: 'Покой и радость',
    description: 'Бессонница, раздражительность, тревожность — частые спутники возраста. Регулярная практика гармонизирует нервную систему, снимает внутреннее напряжение. Появляется чувство радости внутри. Вы заметите, как родители станут спокойнее и позитивнее.',
    icon: 'Moon'
  },
  {
    id: '7',
    title: 'Чтобы появилась энергия жить',
    subtitle: 'А не существовать',
    description: 'Цигун — это практика накопления энергии, а не её траты. Она даёт силы не просто на быт, а на интересы, внуков, прогулки. Это шанс вернуть им ощущение полноты жизни и радости.',
    icon: 'Sparkles'
  }
];

const testimonials = [
  {
    name: 'Мария Ивановна, 68 лет',
    text: 'После трех месяцев занятий я перестала бояться выходить на улицу зимой. Чувствую себя намного увереннее, спина перестала болеть.',
    avatar: '👵'
  },
  {
    name: 'Владимир Петрович, 72 года',
    text: 'Давление нормализовалось, таблеток пью в два раза меньше. Врач удивляется моим анализам!',
    avatar: '👴'
  },
  {
    name: 'Анна Сергеевна, 65 лет',
    text: 'Нашла новых друзей в группе, теперь с удовольствием жду каждое занятие. Настроение улучшилось невероятно.',
    avatar: '👵'
  }
];

const tariffs = [
  {
    id: 'without-chat',
    name: 'БЕЗ ЧАТА',
    description: 'Самостоятельная практика',
    icon: 'Video',
    oldPrice: '9 900',
    newPrice: '5 000',
    features: [
      'Изучение разминочного комплекса цигун',
      'Тесты и ежедневные упражнения на баланс',
      'Пластичность и восстановление мозга',
      'Подвижность и оздоровление суставов',
      'Уроки в Telegram канале',
      'Уроки выходят через день',
      'Продолжительность: 3 месяца',
      'Дополнительный доступ: 3 месяца'
    ],
    link: 'https://your-payment-link.com/without-chat'
  },
  {
    id: 'with-chat',
    name: 'С ЧАТОМ',
    description: 'С поддержкой и общением',
    icon: 'MessageCircle',
    oldPrice: '12 900',
    newPrice: '8 000',
    features: [
      'Всё из тарифа БЕЗ ЧАТА',
      'Доступ к общему чату участников',
      'Поддержка куратора',
      'Ответы на вопросы',
      'Мотивация и общение с группой',
      'Обмен опытом с другими практикующими'
    ],
    recommended: true,
    link: 'https://your-payment-link.com/with-chat'
  }
];

const Index = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2025-12-25T23:59:59').getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleTariffClick = (link: string) => {
    window.open(link, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent" />
        <div className="container mx-auto px-4 py-12 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-6 md:space-y-8 animate-fade-in">
              <div className="inline-block">
                <span className="text-secondary font-semibold text-base md:text-xl tracking-wide">🎄 НА НОВЫЙ ГОД</span>
              </div>
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-red-700 text-center">
                  Подарите родителям не вещи, а новое качество жизни!
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-accent/80 tracking-wide">
                  Легкий Цигун
                </h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl">
                Подарок, который заботится!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 md:pt-4">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 hover-scale w-full sm:w-auto" onClick={() => document.getElementById('gift-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Оформить подарок
                </Button>
                <Button size="lg" variant="outline" className="text-base sm:text-lg px-6 sm:px-8 hover-scale w-full sm:w-auto" onClick={() => document.getElementById('reasons')?.scrollIntoView({ behavior: 'smooth' })}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in mt-8 md:mt-0">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-2xl" />
              <img 
                src="https://cdn.poehali.dev/projects/9793789a-2da2-472f-8a54-22f43abc84e0/files/d67ae690-441e-452d-8d2f-2f4a5968367d.jpg" 
                alt="Счастливая бабушка у новогодней ёлки"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-square md:aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reasons" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 px-4">
              7 ПРИЧИН, ПОЧЕМУ ЛЁГКИЙ ЦИГУН — ЛУЧШИЙ ПОДАРОК ДЛЯ РОДИТЕЛЕЙ
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Родители получают заботу о здоровье. Вы – спокойствие за них
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {reasons.map((reason, index) => (
                <AccordionItem 
                  key={reason.id} 
                  value={reason.id}
                  className="border-2 border-border rounded-2xl px-4 md:px-6 hover:border-secondary transition-colors bg-card shadow-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4 md:py-6">
                    <div className="flex items-start gap-3 md:gap-4 w-full pr-2 md:pr-4">
                      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Icon name={reason.icon} size={20} className="text-secondary md:w-6 md:h-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary mb-1">
                          {reason.title}
                        </h3>
                        <p className="text-sm sm:text-base text-muted-foreground font-normal">
                          {reason.subtitle}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-4 md:pb-6">
                    <p className="text-base md:text-lg text-foreground leading-relaxed pl-0 md:pl-16">
                      {reason.description}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 px-4">
              Отзывы практикующих
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-4">
              Истории тех, кто уже изменил свою жизнь с помощью Легкого Цигун
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="hover-scale border-2 hover:border-secondary transition-all duration-300 bg-card/80 backdrop-blur"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-5xl">{testimonial.avatar}</div>
                    <div>
                      <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 px-4">
                Что такое Легкий Цигун?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Это древняя китайская практика работы с энергией тела через мягкие, плавные движения и дыхательные техники. В отличие от обычной гимнастики, цигун работает не только с мышцами, но и с энергетическими каналами организма.
                </p>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  <strong className="text-primary">Легкий Цигун</strong> адаптирован специально для людей старшего возраста — здесь нет сложных поз или чрезмерных нагрузок. Только то, что приносит пользу и удовольствие.
                </p>
              </div>

              <Card className="border-2 border-secondary/20 bg-gradient-to-br from-secondary/5 to-primary/5">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Результаты практики</CardTitle>
                  <CardDescription className="text-base">Чего ожидать через 2-3 месяца занятий</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-3">
                    <Icon name="Check" className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <p className="text-foreground">Улучшение равновесия и координации</p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Check" className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <p className="text-foreground">Нормализация давления и сна</p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Check" className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <p className="text-foreground">Снижение болей в суставах и спине</p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Check" className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <p className="text-foreground">Повышение настроения и энергии</p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Check" className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <p className="text-foreground">Новые знакомства и социальная активность</p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Check" className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <p className="text-foreground">Улучшение памяти и концентрации</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="gift-form" className="py-16 md:py-24 bg-gradient-to-br from-amber-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <div className="inline-block bg-red-500 text-white px-4 py-3 md:px-6 md:py-4 rounded-2xl shadow-lg">
                <p className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-3">🎄 НОВОГОДНЕЕ ПРЕДЛОЖЕНИЕ!</p>
                <p className="text-xs sm:text-sm mb-2 md:mb-3">Только до 25 декабря</p>
                <div className="flex gap-2 md:gap-3 justify-center flex-wrap mb-3 md:mb-4">
                  <div className="bg-white/20 backdrop-blur px-2 py-1.5 md:px-3 md:py-2 rounded-lg min-w-[60px] md:min-w-[70px]">
                    <div className="text-xl md:text-2xl font-bold">{timeLeft.days}</div>
                    <div className="text-xs">дней</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur px-2 py-1.5 md:px-3 md:py-2 rounded-lg min-w-[60px] md:min-w-[70px]">
                    <div className="text-xl md:text-2xl font-bold">{timeLeft.hours}</div>
                    <div className="text-xs">часов</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur px-2 py-1.5 md:px-3 md:py-2 rounded-lg min-w-[60px] md:min-w-[70px]">
                    <div className="text-xl md:text-2xl font-bold">{timeLeft.minutes}</div>
                    <div className="text-xs">минут</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur px-2 py-1.5 md:px-3 md:py-2 rounded-lg min-w-[60px] md:min-w-[70px]">
                    <div className="text-xl md:text-2xl font-bold">{timeLeft.seconds}</div>
                    <div className="text-xs">секунд</div>
                  </div>
                </div>
                <div className="inline-block bg-yellow-400 text-primary px-6 py-2 md:px-8 md:py-3 rounded-xl font-bold text-base md:text-xl shadow-lg">
                  ⚡ Места ограничены!
                </div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary px-4 mt-6 md:mt-8">
                ВЫБЕРИТЕ ПОДАРОК
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
              {tariffs.map((tariff) => (
                <Card 
                  key={tariff.id}
                  className={`border-2 hover-scale cursor-pointer transition-all duration-300 ${
                    tariff.recommended 
                      ? 'border-secondary bg-secondary/10 shadow-2xl scale-105' 
                      : 'hover:border-secondary hover:shadow-xl'
                  } relative overflow-hidden`}
                  onClick={() => handleTariffClick(tariff.link)}
                >
                  {tariff.recommended && (
                    <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-secondary text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-bold shadow-lg">
                      ⭐ Рекомендуем
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                        <Icon name={tariff.icon} size={24} className="text-secondary md:w-7 md:h-7" />
                      </div>
                      <div>
                        <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold">{tariff.name}</CardTitle>
                        <CardDescription className="text-sm md:text-base mt-1">{tariff.description}</CardDescription>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 mt-3 md:mt-4">
                      <div className="text-muted-foreground line-through text-lg md:text-2xl">
                        {tariff.oldPrice} ₽
                      </div>
                      <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary">
                        {tariff.newPrice} ₽
                      </div>
                      <div className="bg-red-500 text-white px-2.5 py-1 md:px-3 rounded-full text-xs md:text-sm font-semibold">
                        Скидка {Math.round((1 - parseInt(tariff.newPrice.replace(/\s/g, '')) / parseInt(tariff.oldPrice.replace(/\s/g, ''))) * 100)}%
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      {tariff.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <Icon name="Check" className="text-secondary flex-shrink-0 mt-0.5" size={20} />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button 
                      className="w-full mt-4 md:mt-6 hover-scale text-base md:text-lg py-5 md:py-6"
                      size="lg"
                      variant={tariff.recommended ? "default" : "outline"}
                    >
                      Выбрать тариф 🎁
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 md:mt-12 text-center">
              <Card className="border-2 border-primary/30 bg-gradient-to-r from-amber-50 to-green-50 max-w-2xl mx-auto">
                <CardContent className="pt-4 md:pt-6">
                  <div className="space-y-2 md:space-y-3 text-left">
                    <p className="text-base md:text-lg"><strong>В основе курса:</strong> «Мой Цигун. Моя энергия» — первая ступень</p>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Понятные простые уроки под присмотром опытного мастера. Всё просто и удобно 🙌
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <p className="text-xs md:text-sm text-muted-foreground text-center mt-6 md:mt-8 px-4">
              После выбора тарифа вы перейдёте на страницу оплаты
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base md:text-lg mb-3 md:mb-4">
            Подарите родителям здоровье, радость и долголетие 🎄
          </p>
          <p className="text-sm opacity-80">
            © 2024 Легкий Цигун. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;