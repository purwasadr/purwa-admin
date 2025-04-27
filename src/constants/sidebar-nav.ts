import {
  ArrowRightLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  GalleryVerticalEndIcon,
  Home,
  MoveIcon,
  PackagePlusIcon,
  User2Icon,
} from 'lucide-react';
// Menu items.
export const inventoryNav = [
  {
    title: 'Dashboard',
    icon: Home,
    url: '/inventory/dashhboard',
  },
  {
    title: 'Pemindahan',
    icon: ArrowRightLeftIcon,
    url: '/inventory/transfer',
    items: [
      {
        title: 'Tanda Terima',
        url: '/inventory/transfer/receipts',
      },
      {
        title: 'Pengiriman',
        url: '/inventory/transfer/deliveries',
      },
    ],
  },
  {
    title: 'Penyesuaian',
    icon: PackagePlusIcon,
    items: [
      {
        title: 'Persediaan Fisik',
        url: '/inventory/adjustments/physical-inventory',
      },
      {
        title: 'Barang Afkir',
        url: '/inventory/adjustments/scrap',
      },
    ],
  },
  {
    title: 'Pengadaan',
    icon: MoveIcon,
    items: [
      {
        title: 'Pemulihan Stok',
        url: '/inventory/procurement/replenishment',
      },
    ],
  },
  {
    title: 'Laporan',
    icon: MoveIcon,
    items: [
      {
        title: 'Stok',
        url: '/inventory/procurement/replenishment',
      },
    ],
  },
];
