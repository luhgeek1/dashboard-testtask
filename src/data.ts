import type { AIRecommendation, DailyData, StatMetric } from './types';

export const statMetrics: StatMetric[] = [
  {
    id: 'rev',
    title: 'Выручка',
    value: '₽1,245,000',
    trend: 12.5,
    iconName: 'dollar',
  },
  {
    id: 'margin',
    title: 'Маржа',
    value: '32.4%',
    trend: 2.1,
    iconName: 'percent',
  },
  {
    id: 'avg_check',
    title: 'Средний чек',
    value: '₽3,450',
    trend: -1.2,
    iconName: 'receipt',
  },
  {
    id: 'check_count',
    title: 'Кол-во чеков',
    value: '361',
    trend: 8.4,
    iconName: 'activity',
  },
];

export const chartData: DailyData[] = [
  { date: 'Пн', revenue: 145000, profit: 46000 },
  { date: 'Вт', revenue: 162000, profit: 51000 },
  { date: 'Ср', revenue: 138000, profit: 44000 },
  { date: 'Чт', revenue: 184000, profit: 62000 },
  { date: 'Пт', revenue: 215000, profit: 71000 },
  { date: 'Сб', revenue: 256000, profit: 85000 },
  { date: 'Вс', revenue: 205000, profit: 68000 },
];

export const aiRecommendations: AIRecommendation[] = [
  {
    id: 'rec-1',
    title: 'Оптимизация выходных',
    description: 'Анализ показывает пик продаж в выходные. Рекомендуется увеличить смены персонала на 20% в субботу для снижения времени ожидания.',
    impact: 'High',
    actionLabel: 'Применить график',
  },
  {
    id: 'rec-2',
    title: 'Падение среднего чека',
    description: 'Средний чек снизился на 1.2%. ИИ предлагает запустить акцию "Комбо-набор" в утренние часы (с 9 до 11) для апселла.',
    impact: 'Medium',
    actionLabel: 'Настроить акцию',
  },
  {
    id: 'rec-3',
    title: 'Управление запасами',
    description: 'Ожидается дефицит позиции "Капучино" к среде. Рекомендуется оформить дозаказ у поставщика до конца дня.',
    impact: 'High',
    actionLabel: 'Сформировать заказ',
  },
];
