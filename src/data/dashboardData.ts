
import { EventItemProps } from "@/components/dashboard/EventItem";
import { OfficeStatItemProps } from "@/components/dashboard/OfficeStatItem";

export const officeStatsData: Omit<OfficeStatItemProps, 'onMoreClick'>[] = [
  {
    name: "Главный офис",
    status: "optimal",
    consumption: 126.4,
    trend: 11.5
  },
  {
    name: "Отдел разработки",
    status: "high",
    consumption: 98.2,
    trend: -5.2
  },
  {
    name: "Переговорная",
    status: "optimal",
    consumption: 42.6,
    trend: 3.8
  }
];

export const eventsData: EventItemProps[] = [
  {
    type: "warning",
    message: "Повышенное энергопотребление в Отделе разработки",
    time: "10:24"
  },
  {
    type: "success",
    message: "Система кондиционирования переключена в эко-режим",
    time: "09:15"
  },
  {
    type: "info",
    message: "Отчет за апрель 2025 сформирован",
    time: "08:32"
  },
  {
    type: "info",
    message: "Обновлены настройки лимитов потребления",
    time: "Вчера"
  }
];

export const quickActionsData = [
  {
    icon: "FileText",
    label: "Отчеты",
    path: "/reports"
  },
  {
    icon: "Sliders",
    label: "Управление",
    path: "/devices"
  },
  {
    icon: "Users",
    label: "Пользователи",
    path: "/profile"
  },
  {
    icon: "Bell",
    label: "Уведомления",
    path: "/monitoring"
  }
];
