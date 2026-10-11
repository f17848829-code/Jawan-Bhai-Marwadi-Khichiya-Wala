/**
 * Jawan Bhai Marwadi Khichiya Wala
 * Central Business Configuration
 * 
 * Correct business identity: "Jawan Bhai Marwadi Khichiya Wala"
 * Update these verified values once provided by the business owner.
 * Never invent phone numbers, exact addresses, or unsupported claims.
 */

// Import image assets so Vite bundles and resolves them in production & GitHub Pages
import heroMarwadiKhichiya from '../assets/images/hero_marwadi_khichiya_1791632824607.jpg';
import productWheatCornKhichiya from '../assets/images/product_wheat_corn_khichiya_1791632838334.jpg';
import productMintCorianderKhichiya from '../assets/images/product_mint_coriander_khichiya_1791632856895.jpg';
import productTikhaKhichiya from '../assets/images/product_tikha_khichiya_1791632867413.jpg';
import freshMasalaKhichiyaShop from '../assets/images/fresh_masala_khichiya_shop_1791632879456.jpg';

import galleryWheatRoasted from '../assets/images/gallery_wheat_roasted_1791634144058.jpg';
import galleryWheatFriedSnack from '../assets/images/gallery_wheat_fried_snack_1791634160370.jpg';
import galleryWheatSundrying from '../assets/images/gallery_wheat_sundrying_1791634182039.jpg';

import galleryMintRoastedChutney from '../assets/images/gallery_mint_roasted_chutney_1791634197851.jpg';
import galleryMintTextureMacro from '../assets/images/gallery_mint_texture_macro_1791634211701.jpg';

import galleryTikhaRoastedFlame from '../assets/images/gallery_tikha_roasted_flame_1791634280712.jpg';
import galleryTikhaChaatStyle from '../assets/images/gallery_tikha_chaat_style_1791634296089.jpg';
import galleryTikhaSpiceMacro from '../assets/images/gallery_tikha_spice_macro_1791634309903.jpg';

export {
  heroMarwadiKhichiya,
  productWheatCornKhichiya,
  productMintCorianderKhichiya,
  productTikhaKhichiya,
  freshMasalaKhichiyaShop,
};

export interface ProductGalleryImage {
  id: string;
  url: string;
  title: string;
  caption: string;
  alt: string;
  isRepresentative: boolean;
}

export interface PackagedProduct {
  id: string;
  slug: string;
  name: string;
  marwadiName?: string;
  pricePerKg: number;
  description: string;
  longDescription: string;
  ingredients: string[];
  bestUsedFor: string[];
  image: string;
  imageAlt: string;
  isRepresentativeImage: boolean;
  gallery: ProductGalleryImage[];
}

export interface FreshMenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  toppings: string[];
  servingNote: string;
}

export const BUSINESS_CONFIG = {
  name: 'Jawan Bhai Marwadi Khichiya Wala',
  shortName: 'Jawan Bhai Khichiya Wala',
  tagline: 'Authentic Traditional Marwari Khichiya & Handcrafted Snacks',
  heritageYears: 'Approximately 80 Years',
  heritageSummary:
    'Founded by the grandfather and continued and expanded by the father for around 40 years, carrying forward timeless Marwari snack craft with uncompromised quality.',
  
  // Location details strictly as supplied
  locationDescription: 'Near Kaal Bhairav Mandir, close to the Mumbadevi area, Mumbai, Maharashtra, India',
  area: 'Mumbadevi / Bhuleshwar precinct',
  city: 'Mumbai',
  state: 'Maharashtra',
  country: 'India',
  postalCodePlaceholder: '400002 [Subject to Owner Pin Verification]',
  
  // Verified contact details:
  primaryPhone: '+91 98928 29283',
  secondaryPhone: '+91 91720 62761',
  phonePlaceholder: '+91 98928 29283',
  whatsappPlaceholder: '+91 98928 29283',
  rawPhoneNumber: '919892829283',
  rawSecondaryPhoneNumber: '919172062761',
  rawWhatsAppNumber: '919892829283',
  rawSecondaryWhatsAppNumber: '919172062761',
  phoneDisplay: '+91 98928 29283 / +91 91720 62761',
  
  // Google Maps URL (Configurable search query pointing to Kaal Bhairav Mandir, Mumbadevi area)
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kaal+Bhairav+Mandir+Mumbadevi+Mumbai',
  
  // Opening Hours Placeholder
  openingHoursPlaceholder: 'Daily 10:00 AM – 9:00 PM [Temple market timings; to be confirmed by shop owner]',

  // Delivery & Serving policies
  deliveryPolicy: {
    packagedKhichiya:
      'Packaged khichiya orders may be eligible for home delivery across Mumbai and courier across India. Delivery coverage, charges, and minimum order quantities are confirmed upon enquiry.',
    freshKhichiya:
      'Freshly prepared khichiya items are exclusively prepared and served at our physical shop. Not available for home delivery. Customers may call ahead before visiting.',
  },

  packagedProducts: [
    {
      id: 'wheat-corn-khichiya',
      slug: 'wheat-corn-khichiya',
      name: 'Wheat-Corn Khichiya',
      marwadiName: 'गेहूं-मक्का खींचीया',
      pricePerKg: 250,
      description: 'Traditional sun-dried disc made from stone-ground wheat and corn, spiced with cumin, carom seeds, and papad khar.',
      longDescription: 'Our signature staple Wheat-Corn Khichiya is crafted through time-tested Marwari techniques. Hand-rolled and sun-dried to brittle perfection, this khichiya puffs into an airy, crunchy delicacy when roasted directly over flame or fried in pure groundnut oil. Made with zero artificial preservatives.',
      ingredients: ['Wheat Flour', 'Corn Meal', 'Cumin (Jeera)', 'Carom Seeds (Ajwain)', 'Papad Khar', 'Salt', 'Spices'],
      bestUsedFor: ['Direct flame roasting', 'Deep frying for evening snacks', 'Base for street-style Masala Khichiya', 'Daily accompaniment with tea'],
      image: productWheatCornKhichiya,
      imageAlt: 'Handcrafted stack of dried Wheat-Corn Khichiya discs',
      isRepresentativeImage: true,
      gallery: [
        {
          id: 'wc-1',
          url: productWheatCornKhichiya,
          title: 'Sun-Dried Wheat-Corn Discs',
          caption: 'Hand-rolled raw khichiya discs dried to brittle perfection on traditional wooden racks.',
          alt: 'Neatly stacked sun-dried raw wheat-corn khichiya discs',
          isRepresentative: true,
        },
        {
          id: 'wc-2',
          url: galleryWheatRoasted,
          title: 'Direct Flame Roasting',
          caption: 'Puffed golden blistered khichiya freshly roasted over gas flame with tongs.',
          alt: 'Crispy flame-roasted wheat corn khichiya blistered over gas stove',
          isRepresentative: true,
        },
        {
          id: 'wc-3',
          url: galleryWheatFriedSnack,
          title: 'Crispy Chai Accompaniment',
          caption: 'Deep-fried puffed khichiya crisps served with hot cutting masala chai.',
          alt: 'Crunchy golden fried khichiya pieces in earthen bowl beside hot tea',
          isRepresentative: true,
        },
        {
          id: 'wc-4',
          url: galleryWheatSundrying,
          title: 'Artisanal Sun-Drying Heritage',
          caption: 'Authentic preparation method of laying fresh dough discs under the warm sun on clean muslin.',
          alt: 'Traditional khichiya drying process on white fabric under open sun',
          isRepresentative: true,
        },
      ],
    },
    {
      id: 'mint-coriander-khichiya',
      slug: 'mint-coriander-khichiya',
      name: 'Mint-Coriander Khichiya',
      marwadiName: 'पुदीना-धनिया खींचीया',
      pricePerKg: 350,
      description: 'Refreshing artisanal khichiya infused with garden-fresh mint, fragrant coriander leaves, and gentle zesty spices.',
      longDescription: 'A cooling, aromatic specialty crafted with freshly ground mint leaves, green coriander, and traditional Marwari spices. Each sun-dried disc carries a distinctive green hue and refreshing herbal fragrance that elevates when heated. Perfect for elevated gatherings and tea-time crunch.',
      ingredients: ['Fine Wheat & Grain Flour', 'Fresh Mint (Pudina)', 'Fresh Coriander (Dhaniya)', 'Green Chilies', 'Cumin', 'Papad Khar', 'Rock Salt'],
      bestUsedFor: ['Light roasting', 'Crisp frying', 'Serving with coriander chutney and butter', 'High-tea snack platters'],
      image: productMintCorianderKhichiya,
      imageAlt: 'Fresh herb-infused Mint-Coriander Khichiya discs on traditional brass ware',
      isRepresentativeImage: true,
      gallery: [
        {
          id: 'mc-1',
          url: productMintCorianderKhichiya,
          title: 'Herbal Sun-Dried Discs',
          caption: 'Naturally green-flecked khichiya discs infused with fresh garden mint and coriander leaves.',
          alt: 'Sun-dried Mint-Coriander Khichiya discs stacked on brass plate',
          isRepresentative: true,
        },
        {
          id: 'mc-2',
          url: galleryMintRoastedChutney,
          title: 'Roasted with Green Chutney',
          caption: 'Crisp roasted mint khichiya disc brushed with butter and paired with zesty coriander dip.',
          alt: 'Roasted mint khichiya on bronze plate with spicy green chutney and lemon',
          isRepresentative: true,
        },
        {
          id: 'mc-3',
          url: galleryMintTextureMacro,
          title: 'Herb & Cumin Texture Macro',
          caption: 'Extreme close-up showing visible specks of sun-dried mint leaves and fragrant whole jeera.',
          alt: 'Macro photograph of mint coriander khichiya disc grain texture',
          isRepresentative: true,
        },
        {
          id: 'mc-4',
          url: freshMasalaKhichiyaShop,
          title: 'Street Style Topped Masala',
          caption: 'Mint khichiya prepared street-style with cucumber, tomatoes, sev namkeen, and chutneys.',
          alt: 'Loaded street style masala khichiya snack with chutney and toppings',
          isRepresentative: true,
        },
      ],
    },
    {
      id: 'special-tikha-khichiya',
      slug: 'special-tikha-khichiya',
      name: 'Special Tikha Khichiya',
      marwadiName: 'स्पेशल तीखा मारवाड़ी खींचीया',
      pricePerKg: 350,
      description: 'Boldly spiced with hand-pounded red chilies, freshly cracked black pepper, and authentic Rajasthani masala punch.',
      longDescription: 'For those who love robust Marwari heat, our Special Tikha Khichiya blends sun-dried grain discs with coarse Rajasthani red chili flakes, ajwain, and special spice masalas. It provides a savory kick that pairs exceptionally well with evening chai, cold beverages, or layered with diced onions and lemon.',
      ingredients: ['Grain Flour', 'Rajasthani Red Chili Flakes', 'Cracked Black Pepper', 'Carom Seeds (Ajwain)', 'Cumin', 'Papad Khar', 'Marwari Spice Blend'],
      bestUsedFor: ['Charcoal or flame roasting', 'Spicy evening chakhna/snack', 'Topped with raw onion, coriander & lime', 'Wholesale snack counters'],
      image: productTikhaKhichiya,
      imageAlt: 'Spiced red chili Tikha Khichiya discs stacked on earthenware',
      isRepresentativeImage: true,
      gallery: [
        {
          id: 'st-1',
          url: productTikhaKhichiya,
          title: 'Handcrafted Spicy Discs',
          caption: 'Coarse Rajasthani red chili and cumin studded khichiya discs resting on earthenware.',
          alt: 'Spiced red chili Tikha Khichiya stack on rustic earthenware',
          isRepresentative: true,
        },
        {
          id: 'st-2',
          url: galleryTikhaRoastedFlame,
          title: 'Charred Flame Roast',
          caption: 'Crisp roasted spicy khichiya with caramelized red chili blisters on an antique brass thali.',
          alt: 'Flame-roasted spicy tikha khichiya with charred spice blisters',
          isRepresentative: true,
        },
        {
          id: 'st-3',
          url: galleryTikhaChaatStyle,
          title: 'Spicy Chaat Style Snack',
          caption: 'Broken spiced tikha khichiya seasoned with chopped red onions, lime juice, and chaat spices.',
          alt: 'Broken spicy tikha khichiya street snack in leaf bowl with chopped onion and lime',
          isRepresentative: true,
        },
        {
          id: 'st-4',
          url: galleryTikhaSpiceMacro,
          title: 'Red Chili & Ajwain Macro',
          caption: 'Detailed texture revealing coarse sun-dried chili flakes and carom seeds embedded in dough.',
          alt: 'Close-up macro of raw dough disc showing red chili flakes and carom seeds',
          isRepresentative: true,
        },
      ],
    },
  ] as PackagedProduct[],

  freshMenu: [
    {
      id: 'plain-khichiya',
      name: 'Plain Khichiya',
      price: 25,
      description: 'Crisp roasted khichiya served fresh with our homemade signature green chutney.',
      toppings: ['Roasted Khichiya', 'Spicy Mint-Coriander Chutney'],
      servingNote: 'Prepared hot at the shop only. Eat fresh right off the stove.',
    },
    {
      id: 'butter-khichiya',
      name: 'Butter Khichiya',
      price: 35,
      description: 'Hot roasted khichiya generously brushed with rich yellow butter and served with spicy chutney.',
      toppings: ['Hot Roasted Khichiya', 'Generous Butter Glaze', 'Special Chutney'],
      servingNote: 'Prepared hot at the shop only. Served immediately.',
    },
    {
      id: 'masala-khichiya',
      name: 'Masala Khichiya',
      price: 50,
      description: 'Crispy roasted khichiya topped with finely chopped cucumber, tomato, onion, crunchy namkeen, secret spices, and chutney.',
      toppings: ['Butter / Seasoning', 'Chopped Cucumber', 'Ripe Tomatoes', 'Crisp Onions', 'Mumbai Besan Namkeen / Sev', 'Marwari Chaat Masala', 'Tangy Chutney'],
      servingNote: 'Our most sought-after shop specialty. Freshly assembled upon order at the shop.',
    },
    {
      id: 'mint-coriander-plain-khichiya',
      name: 'Mint-Coriander Plain Khichiya',
      price: 30,
      description: 'Herbal mint-coriander khichiya roasted crisp and served with refreshing green chutney.',
      toppings: ['Roasted Mint Khichiya', 'Herbal Chutney'],
      servingNote: 'Prepared fresh at the shop only.',
    },
    {
      id: 'mint-coriander-butter-khichiya',
      name: 'Mint-Coriander Butter Khichiya',
      price: 40,
      description: 'Mint-coriander khichiya roasted warm, topped with melted butter and served with chutney.',
      toppings: ['Roasted Mint Khichiya', 'Pure Butter', 'Special Chutney'],
      servingNote: 'Prepared fresh at the shop only.',
    },
    {
      id: 'mint-coriander-masala-khichiya',
      name: 'Mint-Coriander Masala Khichiya',
      price: 60,
      description: 'Aromatic mint khichiya loaded with cucumber, tomato, onion, crunchy namkeen, spice dusting, and tangy chutney.',
      toppings: ['Roasted Mint Khichiya', 'Butter', 'Fresh Cucumber', 'Tomatoes', 'Onions', 'Crunchy Namkeen', 'Marwari Spices', 'Green Chutney'],
      servingNote: 'Gourmet street-style preparation, served fresh at the shop only.',
    },
  ] as FreshMenuItem[],
};
