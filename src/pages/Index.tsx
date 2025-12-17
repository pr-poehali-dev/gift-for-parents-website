import { useState } from 'react';
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
    title: 'Страховка от возрастных падений',
    subtitle: 'Чтобы они не падали',
    description: 'Самая частая и опасная травма в возрасте — перелом шейки бедра. Цигун — это не монахи в полете. В данном случае – это улучшение баланса и координации. Практики учат чувствовать свое тело и устойчиво стоять на ногах. Это лучшая страховка от падений!',
    icon: 'ShieldCheck'
  },
  {
    id: '2',
    title: 'Чтобы ум оставался ясным',
    subtitle: 'Голова оставалась светлой',
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
    title: 'Чтобы они не оставались в одиночестве',
    subtitle: 'Новый круг общения',
    description: 'Пенсия — часто это потеря социальных связей. Цигун в группе или даже онлайн-клубе дает чувство принадлежности, новый круг общения и цель — регулярную заботу о себе. Это защита от апатии и депрессии.',
    icon: 'Users'
  },
  {
    id: '5',
    title: 'Чтобы они сохраняли самостоятельность',
    subtitle: 'Независимость в быту',
    description: 'Самая большая тревога детей — что родителям будет сложно самим себя обслуживать. Цигун возвращает и поддерживает подвижность суставов и пластичность сухожилий, чтобы человек в любом возрасте мог сам завязать шнурки, донести сумку, легко встать со стула или кровати, принять душ.',
    icon: 'Heart'
  },
  {
    id: '6',
    title: 'Чтобы улучшился сон и настроение',
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

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    variant: '',
    delivery: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена! 🎁",
      description: "Мы свяжемся с вами в ближайшее время для оформления подарка.",
    });
    setFormData({
      name: '',
      phone: '',
      email: '',
      variant: '',
      delivery: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-green-50">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block">
                <span className="text-secondary font-semibold text-lg tracking-wide">🎄 Новогодний подарок</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight">
                Лучший подарок для ваших родителей
              </h1>
              <p className="text-2xl md:text-3xl text-accent font-light">
                Шаг к здоровью и долголетию
              </p>
              <p className="text-lg text-muted-foreground max-w-xl">
                Подарите родителям не просто абонемент, а заботу об их здоровье, энергии и радости жизни. Легкий Цигун — это практика, которая меняет качество жизни.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="text-lg px-8 hover-scale" onClick={() => document.getElementById('gift-form')?.scrollIntoView({ behavior: 'smooth' })}>
                  Оформить подарок
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 hover-scale" onClick={() => document.getElementById('reasons')?.scrollIntoView({ behavior: 'smooth' })}>
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-fade-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-secondary/20 to-primary/20 rounded-3xl blur-2xl" />
              <img 
                src="https://cdn.poehali.dev/projects/9793789a-2da2-472f-8a54-22f43abc84e0/files/1a56c70d-1b47-49dc-a14b-b85e2ea32620.jpg" 
                alt="Счастливая бабушка у новогодней ёлки"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reasons" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              7 причин, почему ЛЕГКИЙ ЦИГУН — лучший подарок
            </h2>
            <p className="text-xl text-muted-foreground">
              Каждая причина — это забота о здоровье и счастье ваших родителей
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {reasons.map((reason, index) => (
                <AccordionItem 
                  key={reason.id} 
                  value={reason.id}
                  className="border-2 border-border rounded-2xl px-6 hover:border-secondary transition-colors bg-card shadow-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <div className="flex items-start gap-4 w-full pr-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                        <Icon name={reason.icon} size={24} className="text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-primary mb-1">
                          {reason.title}
                        </h3>
                        <p className="text-muted-foreground font-normal">
                          {reason.subtitle}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6">
                    <p className="text-lg text-foreground leading-relaxed pl-16">
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              Отзывы практикующих
            </h2>
            <p className="text-xl text-muted-foreground">
              Истории тех, кто уже изменил свою жизнь с помощью Легкого Цигун
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Что такое Легкий Цигун?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-foreground leading-relaxed">
                  Это древняя китайская практика работы с энергией тела через мягкие, плавные движения и дыхательные техники. В отличие от обычной гимнастики, цигун работает не только с мышцами, но и с энергетическими каналами организма.
                </p>
                <p className="text-lg text-foreground leading-relaxed">
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
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
                Оформить подарок
              </h2>
              <p className="text-xl text-muted-foreground">
                Заполните форму, и мы поможем выбрать идеальный вариант для ваших родителей
              </p>
            </div>

            <Card className="border-2 shadow-xl">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Ваше имя *</Label>
                    <Input 
                      id="name" 
                      placeholder="Как к вам обращаться?"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input 
                      id="phone" 
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Выберите вариант подарка *</Label>
                    <RadioGroup 
                      value={formData.variant}
                      onValueChange={(value) => setFormData({...formData, variant: value})}
                      required
                    >
                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:border-secondary transition-colors">
                        <RadioGroupItem value="trial" id="trial" />
                        <Label htmlFor="trial" className="flex-1 cursor-pointer">
                          <div className="font-semibold">Пробный месяц</div>
                          <div className="text-sm text-muted-foreground">4 занятия для знакомства с практикой</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:border-secondary transition-colors">
                        <RadioGroupItem value="standard" id="standard" />
                        <Label htmlFor="standard" className="flex-1 cursor-pointer">
                          <div className="font-semibold">Стандартный курс</div>
                          <div className="text-sm text-muted-foreground">3 месяца занятий (12 занятий)</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4 hover:border-secondary transition-colors">
                        <RadioGroupItem value="full" id="full" />
                        <Label htmlFor="full" className="flex-1 cursor-pointer">
                          <div className="font-semibold">Полный курс</div>
                          <div className="text-sm text-muted-foreground">6 месяцев для стабильных результатов</div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="delivery">Способ получения информации *</Label>
                    <Select 
                      value={formData.delivery}
                      onValueChange={(value) => setFormData({...formData, delivery: value})}
                      required
                    >
                      <SelectTrigger id="delivery">
                        <SelectValue placeholder="Выберите способ" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email (сертификат на почту)</SelectItem>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        <SelectItem value="telegram">Telegram</SelectItem>
                        <SelectItem value="print">Печатный сертификат</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Дополнительные пожелания</Label>
                    <Textarea 
                      id="message"
                      placeholder="Расскажите, если есть особые пожелания или вопросы"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full text-lg hover-scale">
                    Отправить заявку 🎁
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">
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