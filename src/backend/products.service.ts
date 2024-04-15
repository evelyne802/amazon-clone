import { Injectable } from '@angular/core';
import { Product, ReccomendedByHistoryProduct } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  homeImprovement : Product[] = [
    { productPicture: 'https://m.media-amazon.com/images/I/61b1AO+3pUL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/61Ixk96heSL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71UE2v-RpXL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/51tgD7ftrBL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71oGQ4MIPsL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/81CS7ekqy0L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/51yZ4nL6sLL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/81W+7QvYtLL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71KRrKtoTpL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/51LChoVViyL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/81Or6b7I75S._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71XlG3+OEdL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/81til+F0whL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/41Qja8wqjSL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71Iyl3IURGL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/61EZurIJrFL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/81H-bCeIo-L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71knXIQw2cL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/41qbRCptw0L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
  ]

  excitingDeals : Product[] = [
    { productPicture: 'https://m.media-amazon.com/images/I/41GyTQeM+vL._AC_SY200_.jpg', 
      description: 'Stanley - SL18116P Wet/Dry Vacuum, 6 Gallon, 4 Horsepower Black', 
      listPrice: 84.99, percentageOff: 24, price: 64.97},
    { productPicture: 'https://m.media-amazon.com/images/I/41FX8IQdZlL._AC_SY200_.jpg', 
      description: 'Reloop RP-7000 MK2 Professional Upper Torque Turntable System, Black', 
      listPrice: 599.99, percentageOff: 33, price: 399.99},
    { productPicture: 'https://m.media-amazon.com/images/I/41tQizlUdOL._AC_SY200_.jpg', 
      description: 'ViewSonic OMNI VX3418-2KPC 34 Inch Ultrawide Curved 1440p', 
      listPrice: 379.99, percentageOff: 21, price: 299.99},
    { productPicture: 'https://m.media-amazon.com/images/I/51XUgD7RdgL._AC_SY200_.jpg', 
      description: 'BOSCH RA1181 Benchtop Router Table 27 in. x 18 in. Aluminum Top with 2-1/2 in. Vacuum Hose Port', 
      listPrice: 249.00, percentageOff: 12, price: 219.99},
    { productPicture: 'https://m.media-amazon.com/images/I/51Wf8oDZD0L._AC_SY200_.jpg', 
      description: 'National Geographic Bucket List Family Travel', 
      listPrice: 35.00, percentageOff: 26, price:  25.80},
    { productPicture: 'https://m.media-amazon.com/images/I/21HzxK53u1L._AC_SY200_.jpg', 
      description: 'GE Appliances Point of Use Water Heater | Electric Water Heater', 
      listPrice: 399.00, percentageOff: 20, price: 319.00},
    { productPicture: 'https://m.media-amazon.com/images/I/41pD87QK1-L._AC_SY200_.jpg', 
      description: 'Wahl USA Clipper Rechargeable Lithium Ion Cordless Haircutting Clipper & Battery Trimming Combo Kit', 
      listPrice: 64.99, percentageOff: 15, price: 55.24},
    { productPicture: 'https://m.media-amazon.com/images/I/21zu4vW3fiL._AC_SY200_.jpg', 
      description: 'Dometic 310 Standard Toilet - Oblong Shape, Lightweight and Efficient Flush with Pressure', 
      listPrice: 284.10, percentageOff: 24, price: 215.84 },
    { productPicture: 'https://m.media-amazon.com/images/I/41KQHYU6S5L._AC_SY200_.jpg', 
      description: 'Wahl Aqua Blade Rechargeable Wet/Dry Lithium-Ion Deluxe Beard Trimmer for Men', 
      listPrice: 69.99, percentageOff: 15, price: 59.49},
    { productPicture: 'https://m.media-amazon.com/images/I/41gjsA0+2wL._AC_SY200_.jpg', 
      description: 'Drop Safe - Digital Safe Compact Steel Money Security Box with Keypad ', 
      listPrice: 139.95, percentageOff: 36, price: 89.90},
    { productPicture: 'https://m.media-amazon.com/images/I/51Te-XJ22vL._AC_SY200_.jpg', 
      description: 'Pocket Guide to the Sacrament of Reconciliation', 
      listPrice: 24.95, percentageOff: 22, price: 19.47},
    { productPicture: 'https://m.media-amazon.com/images/I/41Kb-RumX1L._AC_SY200_.jpg', 
      description: 'Dear Black Girls: How to Be True to You', 
      listPrice: 24.99, percentageOff: 32, price: 16.87},
  ]

  dealsUnder25 : Product[] = [
    { productPicture: 'https://m.media-amazon.com/images/I/51pA6cKQbUL._AC_SY200_.jpg', 
      description: 'Glad ForceFlex Tall Kitchen Drawstring Trash Bags, Clorox 13 Gallon Trash Bags for Tall Trash Can, Industrial Cleaning, 100 Count (Packaging May Vary) - 78526', 
      listPrice: 43.77, percentageOff: 67, price: 14.59 },
    { productPicture: 'https://m.media-amazon.com/images/I/51ZJdwatFbL._AC_SY200_.jpg', 
      description: 'Medgar and Myrlie: Medgar Evers and the Love Story That Awakened America', 
      listPrice: 30, percentageOff: 27, price: 21.98 },
    { productPicture: 'https://m.media-amazon.com/images/I/41VG+ol-EtL._AC_SY200_.jpg', 
      description: 'Burma Sahib: A Novel', 
      listPrice: 30, percentageOff: 20, price: 24 },
    { productPicture: 'https://m.media-amazon.com/images/I/410T9MtWMgL._AC_SY200_.jpg', 
      description: 'It Is Finished: A 40-Day Pilgrimage Back to the Cross', 
      listPrice: 29.99, percentageOff: 20, price: 23.99 },
    { productPicture: 'https://m.media-amazon.com/images/I/416DtwLGXIL._AC_SY200_.jpg', 
      description: 'OGX Extra Strength Refreshing + Invigorating Teatree Mint Dry Scalp Treatment', 
      listPrice: 10.69, percentageOff: 16, price: 10.69},
    { productPicture: 'https://m.media-amazon.com/images/I/51iKqkAizPL._AC_SY200_.jpg', 
      description: 'Fisher-Price Little People Toddler Learning Toy', 
      listPrice: 20.99, percentageOff: 22, price: 16.28 },
    { productPicture: 'https://m.media-amazon.com/images/I/41ZIXZoGrYL._AC_SY200_.jpg', 
      description: 'Aveeno Baby Welcome Little One Gift Basket', 
      listPrice: 23.98, percentageOff: 14, price: 20.72},
    { productPicture: 'https://m.media-amazon.com/images/I/51OYJwB4rgL._AC_SY200_.jpg', 
      description: 'Crochet Amigurumi for Every Occasion', 
      listPrice: 24.99, percentageOff:25 , price: 18.64},
    { productPicture: 'https://m.media-amazon.com/images/I/51Te-XJ22vL._AC_SY200_.jpg', 
      description: 'Pocket Guide to the Sacrament of Reconciliation', 
      listPrice: 24.95, percentageOff: 22, price: 19.47},
    { productPicture: 'https://m.media-amazon.com/images/I/41Kb-RumX1L._AC_SY200_.jpg', 
      description: 'Dear Black Girls: How to Be True to You', 
      listPrice: 24.99, percentageOff: 32, price: 16.87},
    { productPicture: 'https://m.media-amazon.com/images/I/5141FWYmy5L._AC_SY200_.jpg', 
      description: "The Wheel of the Year: An Illustrated Guide to Nature's Rhythms", 
      listPrice: 19.99, percentageOff: 21, price: 15.75},
    { productPicture: 'https://m.media-amazon.com/images/I/412Mx3zTTzL._AC_SY200_.jpg', 
      description: 'Outofshapeworthlessloser: A Memoir of Figure Skating', 
      listPrice: 28.99, percentageOff: 20, price: 23.14},
    { productPicture: 'https://m.media-amazon.com/images/I/51vPIF52byL._AC_SY200_.jpg', 
      description: 'Mattel Games Skip Bo Card Games', 
      listPrice: 16.99, percentageOff: 17, price: 14.17},
    { productPicture: 'https://m.media-amazon.com/images/I/41Rbtt-EKvL._AC_SY200_.jpg', 
      description: 'UDDERLY SMOOTH NonGreasy Hand and Body Moisturizer', 
      listPrice: 15.99, percentageOff: 28, price: 11.56},
    { productPicture: 'https://m.media-amazon.com/images/I/41KXGmNF0VL._AC_SY200_.jpg', 
      description: 'Hallmark Paper Wonder Pop Up Musical Valentines Day Card', 
      listPrice: 12.99, percentageOff: 16, price: 10.96},
    { productPicture: 'https://m.media-amazon.com/images/I/5113Dz0zOUL._AC_SY200_.jpg', 
      description: 'The C. S. Lewis Signature Classics: An Anthology of 8 C. S. Lewis Titles', 
      listPrice: 39.99, percentageOff: 41, price: 23.70},
    { productPicture: 'https://m.media-amazon.com/images/I/51ufUTDx1EL._AC_SY200_.jpg', 
      description: 'Crystalpedia: The Wisdom, History', 
      listPrice: 26.99, percentageOff: 25, price: 20.18},
    { productPicture: 'https://m.media-amazon.com/images/I/41I1t9lfM9L._AC_SY200_.jpg', 
      description: 'Pyle Premium Direct Injection Audio Box ', 
      listPrice: 19.99, percentageOff: 35, price: 12.98},
    { productPicture: 'https://m.media-amazon.com/images/I/518T3qnnfRL._AC_SY200_.jpg', 
      description: 'The Boxcar Children Mysteries Boxed Set 1-4', 
      listPrice: 31.96, percentageOff: 38, price: 19.96},
  ]

  beauty : Product[] = [
    { productPicture: 'https://m.media-amazon.com/images/I/61NFkX7td8L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/51YlAYwPx6L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/51CRZuf7SgL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71PXjjbQCzL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71XeBzXVE+L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/61pP5gObVXL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/51lEPa776HL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/61skAGn53GL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71+CaUj9EtL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/61iB1kaDQhL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71fizOWwhFL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/51iMh82b5UL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/61viR94S9QL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/61IzR5YS9gL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71PQla8xf3L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/41xE4gTTZQL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/61pp+20Oo0L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71x8eJYN4JL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/61KedtnoewL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/51DbQev1thL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
  ]

  homeAndKitchen : Product[] = [
    { productPicture: 'https://m.media-amazon.com/images/I/41Ewz2W3GPL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/61nY9nYn30L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/718RbhzhVbL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/713afJ6oJ+L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/41Ai-GLQzQL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71M6a8SHCeL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/51lFr88wxML._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/81RLgrUwG5L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71RekxT+qML._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/81s8SAaQdLL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71nhPE7vxHL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/812Bae40uHL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/81lnPKhwFfL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/61W1tcj0ygL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/61mdPtC0iIL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/61mdPtC0iIL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71eq9TU1f5L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71EQDn-rBgL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/81jUEgf7F3L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/81yeSy2PbtL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
  ]

  babyGifts : Product[] = [
    { productPicture: 'https://m.media-amazon.com/images/I/61t66wWbwSL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/81URDd4193L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/81MJhRednWL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71PG-5HXMVL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/817Rqx4FHSL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/81elrEu+PCL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/61KlU-X-0+L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71nhwb38j9L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71y5ZsbotZL._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/91cmJZhpc9L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/8198yfo8r0S._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/71uUrl5py9L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
    { productPicture: 'https://m.media-amazon.com/images/I/613hQ37QW3L._AC_SY200_.jpg', description: '', listPrice: 0, percentageOff: 0, price:0 },
  ]

  electronics : Product[] = [
    { productPicture: 'https://m.media-amazon.com/images/I/31jLzG60cAL._AC_SY200_.jpg', 
      description: 'LensPen New DSLR Pro Camera Cleaning Kit, NDSLRK-1', 
      listPrice: 34.95, percentageOff: 43, price: 19.89},
    { productPicture: 'https://m.media-amazon.com/images/I/31PTZ2guFzL._AC_SY200_.jpg', 
      description: 'WILDGAME Innovations SD Card Reader Compatible with Apple/Android Devices', 
      listPrice: 21.99, percentageOff: 22, price: 17.21},
    { productPicture: 'https://m.media-amazon.com/images/I/51zdVAZunDL._AC_SY200_.jpg', 
      description: 'MAXPEDITION RDP Radio Pouch (Black)', 
      listPrice: 33.98, percentageOff: 16, price: 28.65},
    { productPicture: 'https://m.media-amazon.com/images/I/41WN2mI4EKL._AC_SY200_.jpg', 
      description: 'Tripp Lite DVI Dual Link Extension Cable', 
      listPrice: 31.72, percentageOff: 54, price: 14.66},
    { productPicture: 'https://m.media-amazon.com/images/I/51-UMnX8zFL._AC_SY200_.jpg', 
      description: 'Bushnell Binocular Harness - Comfortable and Secure Hands-Free Binocular Holder - Adjustable and Lightweight for Outdoor Activities', 
      listPrice: 23.95, percentageOff: 22, price: 18.59},
    { productPicture: 'https://m.media-amazon.com/images/I/51vX7KQS+-L._AC_SY200_.jpg', 
      description: 'uxcell a13112600ux0340 Computer Case Power Supply', 
      listPrice: 16.78, percentageOff: 31, price: 11.54},
    { productPicture: 'https://m.media-amazon.com/images/I/41nb6h+8RkL._AC_SY200_.jpg', 
      description: 'Speck Google Pixel Tablet Case & Stand', 
      listPrice: 39.95, percentageOff: 30, price: 27.87},
    { productPicture: 'https://m.media-amazon.com/images/I/31N+INHdC8L._AC_SY200_.jpg', 
      description: 'EPOS I SENNHEISER C10 USB Headset with Microphone', 
      listPrice: 71.54, percentageOff: 30, price: 49.94},
    { productPicture: 'https://m.media-amazon.com/images/I/41yeK14q4tL._AC_SY200_.jpg', 
      description: 'LG UltraPC 16U7R Laptop, 16” IPS Display', 
      listPrice: 999.99, percentageOff: 30, price:699.99 },
    { productPicture: 'https://m.media-amazon.com/images/I/41czR+q0ZfL._AC_SY200_.jpg', 
      description: 'Woods 41378 L L-Shaped Power Strip with 6 Outlets', 
      listPrice: 18.96, percentageOff: 20, price: 15.09},
    { productPicture: 'https://m.media-amazon.com/images/I/31ZBHgR08sL._AC_SY200_.jpg', 
      description: 'Adesso 7-Port USB 3.0 Hub', 
      listPrice: 39.99, percentageOff: 29, price: 28.36},
    { productPicture: 'https://m.media-amazon.com/images/I/51wS7MTwaUL._AC_SY200_.jpg', 
      description: 'Thermaltake Core P3 ATX Tempered Glass Gaming Computer Case', 
      listPrice: 129.99, percentageOff: 23, price: 99.99},
    { productPicture: 'https://m.media-amazon.com/images/I/21iO6exlSDL._AC_SY200_.jpg', 
      description: 'Scosche MI04B Compatible with Select 2008-17 Mitsubishi Power', 
      listPrice: 12.95, percentageOff: 23, price: 9.99},
    { productPicture: 'https://m.media-amazon.com/images/I/417KiniA76L._AC_SY200_.jpg', 
      description: 'VisionTek Radeon 7750 2GB GDDR5 6 4k Monitor Graphics Card', 
      listPrice: 259.99, percentageOff: 23, price: 200.71},
    { productPicture: 'https://m.media-amazon.com/images/I/41tQizlUdOL._AC_SY200_.jpg', 
      description: 'ViewSonic OMNI VX3418-2KPC 34 Inch Ultrawide Curved 1440p 1ms 144Hz Gaming Monitor', 
      listPrice: 379.99, percentageOff: 21, price: 299.99},
  ]


  reccomendedByHistory: ReccomendedByHistoryProduct[] = [
    { productPicture: 'https://images-na.ssl-images-amazon.com/images/I/81drOrfKBBL._AC_UL160_SR160,160_.jpg',
      description: 'Wahl Lithium Ion Pro Rechargeable Cord/Cordless Hair Clippers for Men, Woman, & Children with Smart Charge Technology', 
      category: 'Hair Clippers', price: 35.40, amazonsChoice: true, numShippingDays: 15, rating: 4.5, ratingsNum: 1987, shippingCost: 27.15,
      ratingImg: '', deliveryDate: ''},
    { productPicture: 'https://images-na.ssl-images-amazon.com/images/I/81c3p8tycUL._AC_UL160_SR160,160_.jpg',
      description: 'Wahl USA Clipper Lithium-Ion Cordless Haircutting Kit - Rechargeable Grooming and Trimming Kit', 
      category: 'Hair', price: 59.99, amazonsChoice: false, numShippingDays: 15, rating: 4.5, ratingsNum: 4932, shippingCost: 27.71,
      ratingImg: '', deliveryDate: ''},
    { productPicture: 'https://images-na.ssl-images-amazon.com/images/I/816A7pT9B3L._AC_UL160_SR160,160_.jpg',
      description: 'WAHL Clipper 2-in-1 Hair Clipper and Shaver Lithium-Ion Rechargeable Cord Cordless Hair Clipper and Shaver Combo Kit', 
      category: 'Hair', price: 64.20, amazonsChoice: false, numShippingDays: 15, rating: 4, ratingsNum: 108, shippingCost: 27.18,
      ratingImg: '', deliveryDate: ''},
    { productPicture: 'https://images-na.ssl-images-amazon.com/images/I/81gMm6JooHL._AC_UL160_SR160,160_.jpg',
      description: 'Wahl USA Rechargeable Lithium Ion All in One Beard Trimmer for Men with Detail and Ear & Nose Hair Trimmer Attachment', 
      category: 'Hair Finishing Trimmers', price: 44.99 ,amazonsChoice: true, numShippingDays: 15, rating: 4.5, ratingsNum: 10096, shippingCost: 26.51,
      ratingImg: '', deliveryDate: ''},
    { productPicture: 'https://images-na.ssl-images-amazon.com/images/I/815olt4G15L._AC_UL160_SR160,160_.jpg',
      description: 'Novah® Professional Hair Clippers for Men, Professional Barber Clippers and Trimmer Set, Mens Cordless Hair Clippers for Barbers Haircut Kit Fade',
      category: 'Hair', price: 99.95, amazonsChoice: false, numShippingDays: 15, rating: 4.5, ratingsNum: 7379, shippingCost: 27.90,
      ratingImg: '', deliveryDate: ''},
    { productPicture: 'https://images-na.ssl-images-amazon.com/images/I/61vuqkBvzEL._AC_UL160_SR160,160_.jpg',
      description: 'Poetic TurtleSkin Series for Google Pixel Tablet Case 11 inch (2023), Heavy Duty Shockproof Rugged Kids Friendly Drop Protection Silicone Cover Case, Black',
      category: '', price: 20.95, amazonsChoice: false, numShippingDays: 29, rating: 4.5, ratingsNum: 119, shippingCost: 12.27,
      ratingImg: '', deliveryDate: ''},
    { productPicture: 'https://images-na.ssl-images-amazon.com/images/I/71qgyTsbUrL._AC_UL160_SR160,160_.jpg',
      description: 'CoBak Case for All New Google Pixel Tablet 2023, Compatible with Charging Speaker Dock, Smart Cover Compatible with Google Pixel Tablet, Black',
      category: '', price: 8.99, amazonsChoice: false, numShippingDays: 30, rating: 4.5, ratingsNum: 41, shippingCost: 11.25,
      ratingImg: '', deliveryDate: ''},
    { productPicture: 'https://images-na.ssl-images-amazon.com/images/I/611CARzGsXL._AC_UL160_SR160,160_.jpg',
      description: 'Penoval Google Pixel Tablet Case 11 inch (2023), Silicone Cover Case, Adjustable Viewing Angle, Easy Carry-on, Protective Cover Compatible with Charging Speaker Dock', 
      category: '', price: 18.99, amazonsChoice: false, numShippingDays: 30, rating: 4, ratingsNum: 28, shippingCost: 49,
      ratingImg: '', deliveryDate: ''},
    { productPicture: 'https://images-na.ssl-images-amazon.com/images/I/81jEjrWqVHL._AC_UL160_SR160,160_.jpg',
      description: 'Fintie Case for Google Pixel Tablet 11 Inch 2023 Release, Multi-Angle Viewing Protective Stand Cover with Pocket & Pencil Holder Compatible with Charging Speaker Dock, Gray',
      category: 'Tablet Cases', price: 21.99, amazonsChoice: true, numShippingDays: 30, rating: 4.5, ratingsNum: 55, shippingCost: 11.43, 
      ratingImg: '', deliveryDate: ''},
    { productPicture: 'https://images-na.ssl-images-amazon.com/images/I/71h3PFdsA2L._AC_UL160_SR160,160_.jpg',
      description: 'Penoval USI2.0 Stylus Pen for Some Chromebook Model, 4096 Levels Pressure for Lenovo chromebook Duet, ASUS chromebook C436, HP chromebook X360 12b, HP chromebook X360 14b Google Pixel Tablet, USI2.0',
      category: '', price: 59.90, amazonsChoice: false, rating: 4.5, ratingsNum: 460, numShippingDays: 14, shippingCost: 22.22,
      ratingImg: '', deliveryDate: ''},
    { productPicture: 'https://images-na.ssl-images-amazon.com/images/I/81ZbzppiLxL._AC_UL160_SR160,160_.jpg',
      description: 'Wahl Clipper Compact Multi-Purpose Haircut, Beard, & Body Grooming Hair Clipper & Trimmer with Extreme Power & Easy Clean Blades - Model 79607',
      category: '', price: 49.32, amazonsChoice: false, rating: 4.5, ratingsNum: 2091, numShippingDays: 30, shippingCost: 0,
      ratingImg: '', deliveryDate: ''},
    { productPicture: 'https://images-na.ssl-images-amazon.com/images/I/71oeKu4k8tL._AC_UL160_SR160,160_.jpg',
      description: 'IMBZBK 3 Pack Screen Protector for Google Pixel Tablet 2023 Tempered Glass Protective Film, Ultra HD, Anti-Scratch, Case Friendly, Screen Cover for Pixel Tablet, Suitable with Face ID & Pencil',
      category: '', price: 9.99, rating: 4.5, ratingsNum: 663, amazonsChoice: false, shippingCost: 10.96, numShippingDays: 30,
      ratingImg: '', deliveryDate: ''},
    { productPicture: 'https://images-na.ssl-images-amazon.com/images/I/81WGBjzcTwL._AC_UL160_SR160,160_.jpg',
      description: 'ENET-CASE for Google Pixel Tablet Case 2023- Slim Folding Stand Folio Cover for Pixel Tablet, 11inch with Card Pocket, Brown',
      category: '', price: 19.99, amazonsChoice: false, rating: 4, ratingsNum: 19, shippingCost: 11.29, numShippingDays: 21,
      ratingImg: '', deliveryDate: ''},
    // { productPicture: '',
    //   description: '',
    //   category: '',
    //   ratingImg: ''},
    // { productPicture: '',
    //   description: '',
    //   category: '',
    //   ratingImg: ''},
  ]

  constructor() { 
    this.reccomendedByHistory.forEach((obj) => obj.ratingImg = this.getRatingImage(obj.rating));
    this.reccomendedByHistory.forEach((obj) => obj.ratingsNum = this.addCommas(obj.ratingsNum));
    this.reccomendedByHistory.forEach((obj) => obj.deliveryDate = this.getEstimatedDeliveryDate(obj.numShippingDays));
  }

  getHomeImprovementProducts(){
    return this.homeImprovement;
  }

  getExcitingDeals(){
    return this.excitingDeals;
  }

  getDealsUnder25(){
    return this.dealsUnder25;
  }

  getBeauty(){
    return this.beauty;
  }

  getHomeAndKitchen(){
    return this.homeAndKitchen;
  }

  getBabyGifts(){
    return this.babyGifts;
  }

  getElectronics(){
    return this.electronics;
  }

  getReccomendedByHistory(){
    return this.reccomendedByHistory;
  }

  getRatingImage(rating: number){
    if(rating == 1){ return '../assets/images/ratings/one-star.png' }
    if(rating > 1 && rating < 2){ return '../assets/images/ratings/one-half-stars.png' }
    if(rating == 2){ return '../assets/images/ratings/two-stars.png' }
    if(rating > 2 && rating < 3){ return '../assets/images/ratings/two-half-stars.png' }
    if(rating == 3){ return '../assets/images/ratings/three-stars.png' }
    if(rating > 3 && rating < 4){ return '../assets/images/ratings/three-half-stars.png' }
    if(rating == 4){ return '../assets/images/ratings/four-stars.png' }
    if(rating > 4 && rating < 5){ return '../assets/images/ratings/four-half-stars.png' }
    else{ return '../assets/images/ratings/five-stars.png' }
  }


  addCommas(ratingsNum: number){
    return ratingsNum.toLocaleString();
  }


  getEstimatedDeliveryDate(numDays: number) {
    let delivery = new Date();
    let weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    delivery.setDate(delivery.getDate() + numDays);
    return `${weekdays[delivery.getDay()]}, ${delivery.toLocaleString('default', { month: 'long' })} ${delivery.getDate()}`;
  }
}
