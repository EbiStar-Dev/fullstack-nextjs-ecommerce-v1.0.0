// shared/dashboard/config/sidebarLinks.ts
import { 
  HomeIcon, 
  ProductsIcon, 
  OrdersIcon, 
  CustomersIcon,
  CouponsIcon,
  NewsletterIcon,
  SalesReportIcon,
  InventoryIcon,
  SettingsIcon,
  PaymentsIcon,
  ShippingIcon
} from "../components/icons";

export const sidebarLinks = [
  {
    href: "/dashboard",
    label: "داشبورد",
    icon: HomeIcon,
    active: true,
  },
  {
    section: "فروشگاه",
    items: [
      {
        href: "/dashboard/products",
        label: "محصولات",
        icon: ProductsIcon,
      },
      {
        href: "/dashboard/orders",
        label: "سفارشات",
        icon: OrdersIcon,
      },
      {
        href: "/dashboard/customers",
        label: "مشتریان",
        icon: CustomersIcon,
      },
    ],
  },
  {
    section: "بازاریابی",
    items: [
      {
        href: "/dashboard/marketing/coupons",
        label: "کدهای تخفیف",
        icon: CouponsIcon,
      },
      {
        href: "/dashboard/marketing/newsletters",
        label: "خبرنامه",
        icon: NewsletterIcon,
      },
    ],
  },
  {
    section: "گزارش‌ها",
    items: [
      {
        href: "/dashboard/reports/sales",
        label: "گزارش فروش",
        icon: SalesReportIcon,
      },
      {
        href: "/dashboard/reports/inventory",
        label: "موجودی انبار",
        icon: InventoryIcon,
      },
    ],
  },
  {
    section: "تنظیمات",
    items: [
      {
        href: "/dashboard/settings/general",
        label: "عمومی",
        icon: SettingsIcon,
      },
      {
        href: "/dashboard/settings/payments",
        label: "پرداخت‌ها",
        icon: PaymentsIcon,
      },
      {
        href: "/dashboard/settings/shipping",
        label: "حمل‌ونقل",
        icon: ShippingIcon,
      },
    ],
  },
];