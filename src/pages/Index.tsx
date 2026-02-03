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
    name: 'Марина, 66 лет',
    text: 'Леночка! Я открыла сегодня в своем теле огромную энергию, я даже сама от себя не ожидала таких волнующих ощущений энергии 🥰 Это было мощное что-то для меня! Начала ощущаться энергия в руках, животе, лице! Слезы просто захватывали прямо волнами при вдыхании! Тело дрожало, руки тряслись в энергии. Лодочки в центре, при приближении друг к другу и вытягивании нити средним пальцем, визуализировалась нить, и покалывания во всех пальцах, но в среднем сильнее всего (сердце). При приближении рук друг к другу, энергия не давала сближаться - только раскрывать больше и больше! С земли в ладони шла сильная энергия и снова слезы! В конце, когда положила ладонь на ладонь сзади, на место родовой силы, ладони были холодные, но со вздохом этот вихрь энергии снова нахлынул, я даже увидела какое-то желтое свечение, и в своих ладонях почувствовала пульсацию! Я благодарна Леночка за такую мощную практику, именно сегодня! 🙏🥰❤️',
    avatar: '👩'
  },
  {
    name: 'Анна',
    text: 'Прусь от Ней Ян Гун и Бадуаньцзинь. Не могу без них проснуться)). Тепло и энергия растекаются по телу и так кайфово. Я, правда, зависимость ощущаю)). Раньше такое только с душем и кофе было. Вчера почувствовала себя неважно, видимо простыла. Сделала сегодня комплексы, понажимала точки - болезнь как рукой сняло! Хотя до этого за год два раза на месяц с температурой сваливалась. Словно сил выздороветь не хватало, ходила с 37,3-37,5. А теперь - пару дней и всё, как огурчик! Очень здорово найти, наконец, то, что помогает чувствовать себя ХОРОШО! И ещё бонусом - фонтан энергии, подтянутое тело и сияющий взгляд! Я думала, что всё - наступил средний возраст и сдулась. Но оказывается, всё только начинается! Обычно я более сдержана в эмоциях, но тут сами прорываются 😁',
    avatar: '👩'
  }
];

const tariffs = [
  {
    id: 'basic',
    name: 'Базовый',
    description: 'Основы практики',
    icon: 'BookOpen',
    oldPrice: '',
    newPrice: '1 900',
    features: [
      'Изучение разминочного комплекса цигун',
      'Восстановление подвижности суставов',
      'Исцеляющие дыхательные практики',
      'Ежедневные упражнения на баланс',
      'Восстановление пластичности мозга',
      'Объяснения и инструкции',
      'Уроки в Telegram канале',
      'Продолжительность: 3 месяца',
      'Доступ к материалам: 1 месяц после курса'
    ],
    link: 'https://olvonata.ru/Lightqigong_basa'
  },
  {
    id: 'practice',
    name: 'Практика',
    description: 'Самостоятельная практика',
    icon: 'Video',
    oldPrice: '9 900',
    newPrice: '5 445',
    features: [
      'Видео основного комплекса с доступом навсегда',
      'Изучение разминочного комплекса цигун',
      'Тест-опросник на понимание состояния здоровья',
      'Исцеляющие дыхательные практики',
      'Восстановление пластичности мозга',
      'Самые знаменитые точки китайской медицины',
      'Дыхательные тесты',
      'Восстанавливающий массаж ног',
      'Тесты и ежедневные упражнения на баланс',
      'Восстановление подвижности суставов',
      'Уроки в Telegram канале',
      'Уроки выходят через день',
      'Продолжительность: 3 месяца',
      'Доступ к материалам: 1 год'
    ],
    link: 'https://olvonata.ru/Lightqigong'
  },
  {
    id: 'practice-support',
    name: 'Практика с поддержкой',
    description: 'С поддержкой и общением',
    icon: 'MessageCircle',
    oldPrice: '14 900',
    newPrice: '8 195',
    features: [
      'Видео основного комплекса с доступом навсегда',
      'Всё из тарифа Практика',
      'Доступ к общему чату участников',
      'Поддержка куратора',
      'Ответы на вопросы',
      'Мотивация и общение с группой',
      'Обмен опытом с другими практикующими',
      'Доступ к материалам: 1 год'
    ],
    recommended: true,
    link: 'https://olvonata.ru/Lightqigong_copy'
  },
  {
    id: 'practice-vip',
    name: 'Практика с VIP поддержкой',
    description: 'Индивидуальное сопровождение',
    icon: 'Crown',
    oldPrice: '',
    newPrice: '',
    priceOptions: [
      { duration: 'В течение 1 мес', price: '39 920' },
      { duration: 'В течение 3 мес', price: '119 920' }
    ],
    features: [
      'Видео основного комплекса с доступом навсегда',
      'Индивидуальный чат с Еленой',
      'Индивидуальные объясняющие видео',
      'Проверка техники выполнения',
      'Ответы на вопросы',
      'Доступ к материалам: навсегда'
    ],
    link: 'https://olvonata.ru/Lightqigong_individ'
  }
];

const Index = () => {

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
              <div className="space-y-4 md:space-y-6">
                <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight text-red-600 text-center uppercase">
                  Подарок,<br />который заботится!
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground tracking-wide text-center">
                  Легкий Цигун
                </h2>
              </div>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl text-center">
                Подарите родителям заботу и радость долголетия!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 md:pt-4">
                <Button size="lg" className="text-base sm:text-lg px-6 sm:px-8 hover-scale w-full sm:w-auto" onClick={() => window.open('https://olvonata.ru/Lightqigong_tarif', '_blank')}>
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
                src="https://cdn.poehali.dev/files/IMG_0296.jpeg" 
                alt="Елена - преподаватель цигун"
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

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6 md:mb-8 px-4">
                Обо мне
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-center max-w-4xl mx-auto">
                <div className="flex-shrink-0">
                  <img 
                    src="https://cdn.poehali.dev/files/IMG_0284.jpeg" 
                    alt="Елена - преподаватель цигун"
                    className="w-full max-w-sm md:max-w-md rounded-2xl shadow-xl"
                  />
                </div>
                <div className="text-left space-y-4">
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    <strong className="text-primary">Елена Никитина</strong>
                  </p>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    Сертифицированный преподаватель цигун и других восточных практик.
                  </p>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    <strong className="text-primary">Мастер с многолетним стажем.</strong>
                  </p>
                  <p className="text-lg md:text-xl text-foreground leading-relaxed">
                    Ученица одного из самых известных китайских мастеров ушу <strong className="text-secondary">шифу Шенч Чжи</strong>.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a 
                      href="https://t.me/+49d_SUnVvHxkMjhi" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-lg font-semibold"
                    >
                      <Icon name="Send" size={24} />
                      Telegram
                    </a>
                    <a 
                      href="https://www.instagram.com/olvonata?igsh=dHhibnRjMmlpNXQ4" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors text-lg font-semibold"
                    >
                      <Icon name="Instagram" size={24} />
                      Instagram
                    </a>
                  </div>
                  <p className="text-base text-muted-foreground pt-2">
                    Узнать больше обо мне
                  </p>
                </div>
              </div>
            </div>
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
                  <CardDescription className="text-base">Чего ожидать через 2-3 недели занятий</CardDescription>
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

      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 px-4">
                План занятий
              </h2>
            </div>

            <Card className="border-2 border-secondary/20 bg-white shadow-xl">
              <CardHeader>
                <CardDescription className="text-base md:text-lg text-foreground leading-relaxed">
                  Курс проходит в отдельном канале Телеграм. Без дополнительных сайтов и переходов🙌 (уроки открываются каждый день)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-lg md:text-xl font-semibold text-primary mb-4">
                    Три месяца легких ежедневных практик, которые шаг за шагом меняют качество жизни.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-primary">Ежедневные Упражнения:</h3>
                  <div className="flex gap-3">
                    <Icon name="Check" className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <p className="text-foreground">Для баланса и устойчивости</p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Check" className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <p className="text-foreground">Для легких и внутренних органов</p>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="Check" className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <p className="text-foreground">Для восстановления мозга</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Icon name="Plus" className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-foreground font-semibold">Легкий утренний комплекс из 8 движений</p>
                      <p className="text-muted-foreground">Который пожилой человек в состоянии выучить за три месяца.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Icon name="Plus" className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-foreground font-semibold">Вся база знаний из любимого курса моих учеников «Мой Цигун. Моя Энергия» Первая ступень.</p>
                      <p className="text-muted-foreground">(Видео так же будут регулярно выкладываться в канале курса).</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <Icon name="Plus" className="text-secondary flex-shrink-0 mt-1" size={20} />
                    <div>
                      <p className="text-foreground font-semibold">Возможность быть со мной на связи 7 дней в неделю</p>
                      <p className="text-muted-foreground">(в некоторых тарифах)</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-2xl">
                  <p className="text-xl md:text-2xl font-bold text-primary text-center">
                    Легкий цигун — это одна из лучших инвестиций в здоровье родителей.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-base md:text-lg mb-3 md:mb-4">
            Подарите родителям здоровье, радость и долголетие ❤️
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