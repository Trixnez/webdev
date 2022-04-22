export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  rating: string;
  image: string;
  link: string;
}

export const products = [
  {
    id: 1,
    name: 'HP 15 Laptop',
    price: 455,
    description:
    'Series	HP Laptop 15-ef2024nr; Brand	HP; Specific Uses For Product	Personal, Student, Business; Screen Size	15 Inches; Operating System	Windows 11 Home; CPU Manufacturer	AMD; Card Description	Integrated; Special Feature	Operating system: Windows 11 Home, Internal storage: 256 GB PCIe NVMe M.2 SSD, Memory: 8 GB DDR4-3200 MHz RAM (1 X 8 GB), Display: 15.6-inch diagonal, HD (1366 x 768), micro-edge, BrightView, Processor: AMD Ryzen 3 5300U; Color	Natural silver; Connectivity Technology	Bluetooth, Wi-Fi, USB, HDMI',
    rating: '4.5 / 5',
    image: 'https://m.media-amazon.com/images/I/81vZsNmHMwL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/HP-Processor-Micro-Edge-Long-Lasting-15-ef2024nr/dp/B09J1PS4TG/ref=sr_1_17?qid=1647081232&rnid=13896617011&s=computers-intl-ship&sr=1-17&th=1',
  },
  {
    id: 2,
    name: 'ASUS VivoBook 15 OLED K513 Thin & Light Laptop',
    price: 859,
    description:
      'Series ASUS VivoBook 15 Laptop; Brand ASUS; Specific Uses For Product Personal, Student, Business; Screen Size 15.6 Inches; Operating System Windows 10 Home; Human Interface Input Keyboard; CPU Manufacturer Intel; Card Description Intel Iris Xe; Special Feature OLED Display; Color Indie Black',
    rating: '3.9 / 5',
    image: 'https://m.media-amazon.com/images/I/810JYMXVRuL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/ASUS-VivoBook-i5-1135G7-Fingerprint-K513EA-AB54/dp/B09DDG1VXL/ref=sr_1_54?qid=1647082509&rnid=13896617011&s=computers-intl-ship&sr=1-54&th=1',
  },
  {
    id: 3,
    name: 'ASUS ROG Strix G15 (2021) Gaming Laptop',
    price: 1999,
    description:
      'Series ROG Strix G15; Brand ASUS; Specific Uses For Product Personal, Gaming, Business; Screen Size 15.6 Inches; Operating System Windows 10 Home; Human Interface Input Keyboard; CPU Manufacturer AMD; Card Description GeForce RTX 3070; Color Original Black; Connectivity Technology Bluetooth, Wi-Fi, USB, Ethernet, HDMI',
    rating: '4.5 / 5',
    image: 'https://m.media-amazon.com/images/I/81Cm1VMdxrL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/ASUS-Display-R9-5900HX-Keyboard-G513QR-ES96/dp/B08SJTW9LK/ref=sr_1_73?qid=1647082880&rnid=13896617011&s=computers-intl-ship&sr=1-73',
  },
  {
    id: 4,
    name: 'Razer Blade 15 Gaming Laptop',
    price: 2555,
    description:
      'Series Blade 15; Brand Razer; Specific Uses For Product Personal, Gaming, Business; Screen Size 15.6 Inches; Operating System Windows 10 Home; Human Interface Input Keyboard; CPU Manufacturer Intel; Card Description RTX 3070; Color Black; Connectivity Technology Bluetooth, Wi-Fi, USB, HDMI',
    rating: '4.4 / 5',
    image: 'https://m.media-amazon.com/images/I/71kcJxMggRL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Razer-Blade-Advanced-Gaming-Laptop/dp/B08SJJ9MQ5/ref=sr_1_74?qid=1647109101&rnid=13896617011&s=computers-intl-ship&sr=1-74&th=1',
  },
  {
    id: 5,
    name: 'Lenovo IdeaPad 3 15.6" HD (1366x768) Touchscreen Laptop',
    price: 583,
    description:
      'Series 81WR000AUS; Brand Lenovo; Specific Uses For Product Personal, Student, Business; Screen Size 15.6 Inches; Operating System Windows 10 Home; Human Interface Input Touchscreen, Microphone; CPU Manufacturer Intel; Card Description Integrated; Connectivity Technology Wi-Fi; Hard Disk Size 512 GB',
    rating: '4.6 / 5',
    image: 'https://m.media-amazon.com/images/I/71QLVOeWtzS._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Lenovo-IdeaPad-1366x768-Touchscreen-i5-10210U/dp/B091KHLNWY/ref=sr_1_73?qid=1647109337&rnid=13896617011&s=computers-intl-ship&sr=1-73',
  },
  {
    id: 6,
    name: 'ASUS VivoBook 15 M515 Thin and Light Laptop',
    price: 629,
    description:
      'Series VivoBook 15; Brand ASUS; Specific Uses For Product Multimedia, Personal, Business; Screen Size 15.6 Inches; Operating System Windows 10 Home; Human Interface Input Keyboard; CPU Manufacturer AMD; Card Description Integrated; Color Gray; Connectivity Technology Bluetooth, Wi-Fi, USB, HDMI',
    rating: '4.6 / 5',
    image: 'https://m.media-amazon.com/images/I/71bzKR1IZkL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/ASUS-VivoBook-Display-Fingerprint-M515UA-EB72/dp/B099XCXZCJ/ref=sr_1_83?qid=1647110019&rnid=13896617011&s=computers-intl-ship&sr=1-83&th=1',
  },
  {
    id: 7,
    name: 'Apple MacBook Pro 13-inch MD313LL/A (4GB RAM, 500GB HD, macOS 10.13)',
    price: 230,
    description:
      'Series IPad; Brand Apple; Screen Size 9.7 Inches; Operating System MacOS 10.13 High Sierra; CPU Manufacturer Intel; Color Silver; Hard Disk Size 500 GB; Processor Count 1 CPU; Model Unknown; Item Weight 4.8 Pounds',
    rating: '3,8 / 5',
    image: 'https://m.media-amazon.com/images/I/71k5eyE2z9S._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Apple-MacBook-MD313LL-500GB-macOS/dp/B07MWFZRNP/ref=sr_1_2?crid=S4VIUY8YBIQZ&keywords=macbook&qid=1646858949&sprefix=%2Caps%2C226&sr=8-2',
  },
  {
    id: 8,
    name: 'Apple 13in MacBook Pro',
    price: 519,
    description:
      'Series FBA_MPXQ2LL/A; Brand Apple; Screen Size 13.3 Inches; Operating System MacOS 10.14 Mojave; Human Interface Input Touch Pad; CPU Manufacturer Intel; Card Description Integrated; Color Space Grey; Hard Disk Size 128 GB; Processor Count 2',
    rating: '4.1 / 5',
    image: 'https://m.media-amazon.com/images/I/71nM55mRvxL._AC_SL1475_.jpg',
    link: 'https://www.amazon.com/Apple-MacBook-Display-MPXQ2LL-Refurbished/dp/B078GX9R5W/ref=sr_1_3?crid=S4VIUY8YBIQZ&keywords=macbook&qid=1646858949&sprefix=%2Caps%2C226&sr=8-3',
  },
  {
    id: 9,
    name: 'Newest MSI GF63 Premium Gaming Laptop',
    price: 899,
    description:
      'Brand MSI; Specific Uses For Product Gaming; Screen Size 15.6 Inches; Operating System Windows 10; Human Interface Input Touchscreen; CPU Manufacturer Intel; Card Description Dedicated; Color Black; Hard Disk Size 1 TB; Processor Count 4' ,
    rating: '4.3 / 5',
    image: 'https://m.media-amazon.com/images/I/716sWoIVxDS._AC_SL1500_.jpg',
    link: 'amazon.com/MSI-Thin-Bezel-Quad-Core-i5-10300H-Keyboard/dp/B098JFL5DK/ref=sr_1_104?qid=1647110486&rnid=13896617011&s=computers-intl-ship&sr=1-104&th=1',
  },
  {
    id: 10,
    name: 'Lenovo Ideapad L340 Gaming Laptop',
    price: 758,
    description:
      'Series L340 Gaming; Brand Lenovo; Specific Uses For Product Personal, Gaming; Screen Size 15.6 Inches; Operating System Windows 10; Human Interface Input Keypad; CPU Manufacturer Intel; Card Description Dedicated; Color Black; Connectivity Technology Bluetooth, HDMI'  ,
    rating: '4.5 / 5',
    image: 'https://m.media-amazon.com/images/I/71Aoh+S2ZIL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Lenovo-Ideapad-i5-9300H-Processor-81LK00HDUS/dp/B07VC55LF5/ref=sr_1_129?qid=1647111077&rnid=13896617011&s=computers-intl-ship&sr=1-129',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
