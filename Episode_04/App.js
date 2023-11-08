import React from 'react';
import ReactDOM from 'react-dom/client';
import img from './assets/logo.png';

/**
 * Header
 *  - LOgo
 *  - Nav Item
 * Body
 *  search
 *  button
 *  Restcontainer
 *      Rest cards
 *          img
 *          name of rest, star rating, cuisine, est time
 *
 * Footer
 *  links
 *  copyrights
 **/
const reslist = [
  {
    info: {
      id: '503027',
      name: 'Kwality Walls Frozen Dessert and Ice Cream Shop',
      cloudinaryImageId: 'f28kyv5lqypybavtva58',
      locality: 'Vinay Khand 4',
      areaName: 'Gomti Nagar',
      costForTwo: '₹200 for two',
      cuisines: ['Desserts', 'Ice Cream', 'Ice Cream Cakes'],
      avgRating: 4.5,
      veg: true,
      feeDetails: {
        restaurantId: '503027',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 8200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 8200,
      },
      parentId: '582',
      avgRatingString: '4.5',
      totalRatingsString: '1K+',
      promoted: true,
      adTrackingId:
        'cid=9115023~p=1~eid=0000018b-ab51-6606-1a0b-9ce300b5015c~srvts=1699386320390~45995',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 7.3,
        serviceability: 'SERVICEABLE',
        slaString: '27 mins',
        lastMileTravelString: '7.3 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 02:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹150 OFF',
        subHeader: 'ABOVE ₹399',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=503027',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '231204',
      name: 'Burger King',
      cloudinaryImageId: 'e33e1d3ba7d6b2bb0d45e1001b731fcf',
      locality: 'Hazratganj',
      areaName: 'Hazratganj',
      costForTwo: '₹350 for two',
      cuisines: ['Burgers', 'American'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '231204',
        fees: [
          {
            name: 'BASE_TIME',
          },
          {
            name: 'BASE_DISTANCE',
            fee: 2900,
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 2900,
      },
      parentId: '166',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 25,
        lastMileTravel: 1.1,
        serviceability: 'SERVICEABLE',
        slaString: '25 mins',
        lastMileTravelString: '1.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 03:30:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=231204',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '82387',
      name: 'Red Dragon (Chopstix)',
      cloudinaryImageId: 'f6etwqizmuaxxe21vxmu',
      locality: 'Sector C',
      areaName: 'Mahanagar',
      costForTwo: '₹250 for two',
      cuisines: ['Chinese', 'Arabian'],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: '82387',
        fees: [
          {
            name: 'BASE_TIME',
          },
          {
            name: 'BASE_DISTANCE',
            fee: 4500,
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4500,
      },
      parentId: '168369',
      avgRatingString: '3.8',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 4.3,
        serviceability: 'SERVICEABLE',
        slaString: '23 mins',
        lastMileTravelString: '4.3 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 02:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=82387',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '232061',
      name: 'Al Baike Arabecue',
      cloudinaryImageId: '84d3d537d758d58f897c201388de698c',
      locality: 'Gomti Nagar',
      areaName: 'Gomti Nagar',
      costForTwo: '₹200 for two',
      cuisines: [
        'Snacks',
        'Fast Food',
        'Burgers',
        'Continental',
        'American',
        'Biryani',
        'Mughlai',
      ],
      avgRating: 3.6,
      feeDetails: {
        restaurantId: '232061',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 7200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 7200,
      },
      parentId: '28969',
      avgRatingString: '3.6',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 32,
        lastMileTravel: 6.9,
        serviceability: 'SERVICEABLE',
        slaString: '32 mins',
        lastMileTravelString: '6.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 07:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=232061',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '782029',
      name: 'The Belgian Waffle Co.',
      cloudinaryImageId: 'd6c91295b4ec19deb086f9c543bb6bf7',
      locality: 'KANPUR ROAD',
      areaName: 'AASHIYANA',
      costForTwo: '₹200 for two',
      cuisines: ['Waffle', 'Desserts', 'Ice Cream'],
      avgRating: 4.8,
      veg: true,
      feeDetails: {
        restaurantId: '782029',
        fees: [
          {
            name: 'BASE_TIME',
          },
          {
            name: 'BASE_DISTANCE',
            fee: 10200,
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 10200,
      },
      parentId: '2233',
      avgRatingString: '4.8',
      totalRatingsString: '20+',
      promoted: true,
      adTrackingId:
        'cid=9310476~p=2~eid=0000018b-ab51-6606-1a0b-9ce400b50267~srvts=1699386320390~45995',
      sla: {
        deliveryTime: 32,
        lastMileTravel: 9.6,
        serviceability: 'SERVICEABLE',
        slaString: '32 mins',
        lastMileTravelString: '9.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=782029',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '573595',
      name: "La Pino'z Pizza",
      cloudinaryImageId: 'vcjlhsxo2dcjxhepdnld',
      locality: 'Sapru Marg',
      areaName: 'Hazratganj',
      costForTwo: '₹350 for two',
      cuisines: ['Pizzas', 'Pastas', 'Italian', 'Desserts', 'Beverages'],
      avgRating: 4,
      feeDetails: {
        restaurantId: '573595',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 2900,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 2900,
      },
      parentId: '4961',
      avgRatingString: '4.0',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 0.2,
        serviceability: 'SERVICEABLE',
        slaString: '23 mins',
        lastMileTravelString: '0.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 04:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=573595',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '648199',
      name: 'KFC',
      cloudinaryImageId: '56c9ab92bd79745fd152a30fa2525426',
      locality: 'Vardhan Khand',
      areaName: 'Gomti Nagar',
      costForTwo: '₹400 for two',
      cuisines: ['Burgers', 'Biryani', 'American', 'Snacks', 'Fast Food'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '648199',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 9700,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 9700,
      },
      parentId: '547',
      avgRatingString: '4.1',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 35,
        lastMileTravel: 8.2,
        serviceability: 'SERVICEABLE',
        slaString: '35 mins',
        lastMileTravelString: '8.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=648199',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '150226',
      name: 'Rovers',
      cloudinaryImageId: 'rgdv1xbiy4pyywkm9nbh',
      locality: 'MG Marg',
      areaName: 'Hazratganj',
      costForTwo: '₹250 for two',
      cuisines: [
        'Fast Food',
        'Chinese',
        'Pizzas',
        'Tandoor',
        'North Indian',
        'Pan-Asian',
        'Indonesian',
        'Punjabi',
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: '150226',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 2900,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 2900,
      },
      parentId: '171762',
      avgRatingString: '4.0',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 1.2,
        serviceability: 'SERVICEABLE',
        slaString: '23 mins',
        lastMileTravelString: '1.2 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 02:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=150226',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '77956',
      name: 'Burger Point',
      cloudinaryImageId: 'lacqlvrpawshmxjxeqge',
      locality: 'Harihar Prasad Nagar',
      areaName: 'Alambagh',
      costForTwo: '₹200 for two',
      cuisines: ['Burgers', 'Snacks', 'Beverages'],
      avgRating: 3.2,
      feeDetails: {
        restaurantId: '77956',
        fees: [
          {
            name: 'BASE_TIME',
          },
          {
            name: 'BASE_DISTANCE',
            fee: 9200,
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 9200,
      },
      parentId: '168',
      avgRatingString: '3.2',
      totalRatingsString: '10K+',
      promoted: true,
      adTrackingId:
        'cid=9259616~p=3~eid=0000018b-ab51-6606-1a0b-9ce500b5034e~srvts=1699386320390~45995',
      sla: {
        deliveryTime: 33,
        lastMileTravel: 8.5,
        serviceability: 'SERVICEABLE',
        slaString: '33 mins',
        lastMileTravelString: '8.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 04:58:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=77956',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '367778',
      name: 'Burger Singh (Big Punjabi Burgers)',
      cloudinaryImageId: 'ul7hxrp3anfa5vk2ih1i',
      locality: 'Viram Khand 1',
      areaName: 'Gomti Nagar',
      costForTwo: '₹300 for two',
      cuisines: ['American', 'Beverages', 'Desserts', 'Snacks', 'Indian'],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '367778',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 8200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 8200,
      },
      parentId: '375065',
      avgRatingString: '4.2',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 29,
        lastMileTravel: 7.6,
        serviceability: 'SERVICEABLE',
        slaString: '29 mins',
        lastMileTravelString: '7.6 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 04:15:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=367778',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '665104',
      name: 'Old Al-Baik',
      cloudinaryImageId: 'cdc2164200725239b505d424761fbd29',
      locality: 'Quantum Road',
      areaName: 'Lalbagh',
      costForTwo: '₹200 for two',
      cuisines: ['Snacks', 'Burgers', 'Tandoor'],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: '665104',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 2900,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 2900,
      },
      parentId: '11432',
      avgRatingString: '3.8',
      totalRatingsString: '500+',
      sla: {
        deliveryTime: 31,
        lastMileTravel: 1.8,
        serviceability: 'SERVICEABLE',
        slaString: '31 mins',
        lastMileTravelString: '1.8 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 01:30:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textExtendedBadges: {},
          textBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=665104',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '755855',
      name: 'Woodpecker',
      cloudinaryImageId: 'b33020eb6608b35bc925b8cf8614b418',
      locality: 'Hazratganj',
      areaName: 'Vidhansabha Marg',
      costForTwo: '₹300 for two',
      cuisines: ['Chinese', 'Biryani', 'North Indian', 'Fast Food'],
      avgRating: 4,
      feeDetails: {
        restaurantId: '755855',
        fees: [
          {
            name: 'BASE_TIME',
          },
          {
            name: 'BASE_DISTANCE',
            fee: 2900,
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 2900,
      },
      parentId: '311271',
      avgRatingString: '4.0',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.7,
        serviceability: 'SERVICEABLE',
        slaString: '27 mins',
        lastMileTravelString: '1.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '60% OFF',
        subHeader: 'UPTO ₹120',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=755855',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '629703',
      name: 'Warsi Dawate',
      cloudinaryImageId: 'rfb7n8rcaxgvhodif8ra',
      locality: 'Vijay Khand',
      areaName: 'Gomti Nagar',
      costForTwo: '₹120 for two',
      cuisines: ['Mughlai', 'Chinese', 'Indian', 'Continental'],
      avgRating: 4,
      feeDetails: {
        restaurantId: '629703',
        fees: [
          {
            name: 'BASE_TIME',
          },
          {
            name: 'BASE_DISTANCE',
            fee: 6200,
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 6200,
      },
      parentId: '376091',
      avgRatingString: '4.0',
      totalRatingsString: '10+',
      promoted: true,
      adTrackingId:
        'cid=8972090~p=4~eid=0000018b-ab51-6606-1a0b-9ce600b5046d~srvts=1699386320390~45995',
      sla: {
        deliveryTime: 34,
        lastMileTravel: 5.7,
        serviceability: 'SERVICEABLE',
        slaString: '34 mins',
        lastMileTravelString: '5.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-14 00:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textExtendedBadges: {},
          textBased: {},
          imageBased: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=629703',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '132663',
      name: 'Shri Balaji Dhaba',
      cloudinaryImageId: 'mz76cmtw79td4mzk2fvi',
      locality: 'Alambagh',
      areaName: 'Alambagh',
      costForTwo: '₹200 for two',
      cuisines: ['Indian', 'Chinese', 'North Indian', 'Thalis', 'Street Food'],
      avgRating: 3.8,
      veg: true,
      feeDetails: {
        restaurantId: '132663',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 8200,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 8200,
      },
      parentId: '12121',
      avgRatingString: '3.8',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 30,
        lastMileTravel: 7.1,
        serviceability: 'SERVICEABLE',
        slaString: '30 mins',
        lastMileTravelString: '7.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 03:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=132663',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '60240',
      name: 'Pizza Hut',
      cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
      locality: 'MG Marg',
      areaName: 'Hazratganj',
      costForTwo: '₹350 for two',
      cuisines: ['Pizzas'],
      avgRating: 3.9,
      feeDetails: {
        restaurantId: '60240',
        fees: [
          {
            name: 'BASE_TIME',
          },
          {
            name: 'BASE_DISTANCE',
            fee: 2900,
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 2900,
      },
      parentId: '721',
      avgRatingString: '3.9',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.5,
        serviceability: 'SERVICEABLE',
        slaString: '27 mins',
        lastMileTravelString: '1.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 04:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=60240',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
  {
    info: {
      id: '741772',
      name: 'Fauji Dhaba',
      cloudinaryImageId: 'fb3be3440f81b88157f50c9485e8c127',
      locality: 'Ayodhya road',
      areaName: 'Gomti Nagar',
      costForTwo: '₹400 for two',
      cuisines: ['North Indian', 'Biryani', 'Thalis', 'Beverages'],
      avgRating: 4,
      feeDetails: {
        restaurantId: '741772',
        fees: [
          {
            name: 'BASE_TIME',
          },
          {
            name: 'BASE_DISTANCE',
            fee: 10200,
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 10200,
      },
      parentId: '16695',
      avgRatingString: '4.0',
      totalRatingsString: '50+',
      sla: {
        deliveryTime: 32,
        lastMileTravel: 9.4,
        serviceability: 'SERVICEABLE',
        slaString: '32 mins',
        lastMileTravelString: '9.4 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-11-08 06:00:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          textBased: {},
          imageBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '20% OFF',
        subHeader: 'UPTO ₹50',
      },
      differentiatedUi: {
        displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
        differentiatedUiMediaDetails: {
          mediaType: 'ADS_MEDIA_ENUM_IMAGE',
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: 'swiggy://menu?restaurant_id=741772',
      text: 'RESTAURANT_MENU',
      type: 'DEEPLINK',
    },
  },
];

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={img} alt="OniFood logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  // console.log(props);
  return (
    <div className="res-card" style={{ backgroundColor: '#f0f0f0' }}>
      <img
        className="res-logo"
        src={
          'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
          cloudinaryImageId
        }
        alt="res-image"
      />
      <h3>{name}</h3>
      <span className="res-rating">⭐{avgRating}</span>
      <span style={{ margin: '0 15px' }}>-</span>
      <span className="res-time">{deliveryTime} MINS</span>
      <div className="res-avgprice">{costForTwo.toUpperCase()}</div>
      <h4>{cuisines.join(' . ')}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" />
      </div>
      <div className="searchButton">
        <button className="searchBtn">Search</button>
      </div>
      <div className="res-container">
        {reslist.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
