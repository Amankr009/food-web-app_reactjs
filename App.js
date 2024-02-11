import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav Items
 * Body
 * - Search
 * - ResturantContainer
 *   - ResturantCard
 *     - Img
 *     - Name of Res, Start Rating, Cusine, Delay Time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

// add object, render all cards

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://cdn.dribbble.com/users/630677/screenshots/3833541/media/201454f743f48c415a38c49419275692.jpg?resize=400x0" />
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

const resData = [
    {
        "info": {
          "id": "23719",
          "name": "McDonald's",
          "cloudinaryImageId": "03501c33ecb3a3105124441e541e6fe4",
          "locality": "JM Road",
          "areaName": "Shivajinagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.5,
          "parentId": "630",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-12 03:00:00",
            "opened": true
          },
          "badges": {  
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {  
              },
              "textBased": {  
              },
              "textExtendedBadges": {  
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "ABOVE ₹1000",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {  
              },
              "video": {  
              }
            }
          },
          "reviewsSummary": {  
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {  
          }
        },
        "analytics": {
          
        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-jm-road-shivajinagar-pune-23719",
          "type": "WEBLINK"
        }
    },
    {
        "info": {
          "id": "243625",
          "name": "KFC",
          "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
          "locality": "Deccan Gymkhana",
          "areaName": "Deccan Gymkhana",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
          ],
          "avgRating": 4.1,
          "parentId": "547",
          "avgRatingString": "4.1",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-12 03:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/kfc-deccan-gymkhana-pune-243625",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "5743",
          "name": "Madinah",
          "cloudinaryImageId": "n07bhbglbqthyd45clul",
          "locality": "Camp",
          "areaName": "Camp",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Mughlai",
            "North Indian",
            "Chinese",
            "Biryani"
          ],
          "avgRating": 3.9,
          "parentId": "1397",
          "avgRatingString": "3.9",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-11 23:30:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/madinah-camp-pune-5743",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "35370",
          "name": "Falahaar",
          "cloudinaryImageId": "ynt91kk0vyornubvrdgl",
          "locality": "The pavillion mall",
          "areaName": "Shivajinagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Beverages",
            "Juices",
            "Fast Food",
            "Snacks",
            "Pizzas",
            "Italian",
            "Street Food",
            "Desserts"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "364",
          "avgRatingString": "4.5",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 1.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-12 00:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/falahaar-the-pavillion-mall-shivajinagar-pune-35370",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "5370",
          "name": "Cafe Goodluck",
          "cloudinaryImageId": "jsxy3zkxvxzkuqqpvjgd",
          "locality": "Deccan Gymkhana",
          "areaName": "Deccan Gymkhana",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "North Indian",
            "Biryani",
            "Snacks",
            "Beverages",
            "Bakery"
          ],
          "avgRating": 4.5,
          "parentId": "6539",
          "avgRatingString": "4.5",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-11 23:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/cafe-goodluck-deccan-gymkhana-pune-5370",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "263939",
          "name": "The Brooklyn Creamery - Healthy Ice Cream",
          "cloudinaryImageId": "b1b35780a9b1dfeb26d680506d494eaa",
          "locality": "Ghole Road",
          "areaName": "Shivaji Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Desserts",
            "Ice Cream"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "236673",
          "avgRatingString": "4.6",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 2.2,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-11 23:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-brooklyn-creamery-healthy-ice-cream-ghole-road-shivaji-nagar-pune-263939",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "395169",
          "name": "McDonald's Gourmet Burger Collection",
          "cloudinaryImageId": "oh5peivnub6ziiy9ia5o",
          "locality": "JM Road",
          "areaName": "Shivajinagar",
          "costForTwo": "₹600 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.3,
          "parentId": "10761",
          "avgRatingString": "4.3",
          "totalRatingsString": "100+",
          "sla": {
            "deliveryTime": 42,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-12 01:45:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/mcdonalds-gourmet-burger-collection-jm-road-shivajinagar-pune-395169",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "394784",
          "name": "Theobroma",
          "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
          "locality": "Shivaji Nagar",
          "areaName": "Shivajinagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Bakery",
            "Desserts"
          ],
          "avgRating": 4.6,
          "parentId": "1040",
          "avgRatingString": "4.6",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 1.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-11 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Gourmet",
                      "imageId": "newg.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹849",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/theobroma-shivaji-nagar-shivajinagar-pune-394784",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "32443",
          "name": "Natural Ice Cream",
          "cloudinaryImageId": "p8af4xnqjzsei0umtgnn",
          "locality": "JM Road",
          "areaName": "Shivajinagar",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "2093",
          "avgRatingString": "4.7",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-12 01:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/natural-ice-cream-jm-road-shivajinagar-pune-32443",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "35873",
          "name": "Sweet Truth - Cake and Desserts",
          "cloudinaryImageId": "78408969d316991befba0a6eca303e1c",
          "locality": "Shaniwar Peth FC",
          "areaName": "Shaniwar Peth",
          "costForTwo": "₹450 for two",
          "cuisines": [
            "Snacks",
            "Bakery",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "4444",
          "avgRatingString": "4.2",
          "totalRatingsString": "500+",
          "sla": {
            "deliveryTime": 30,
            "lastMileTravel": 0.4,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "0.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-11 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹110"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/sweet-truth-cake-and-desserts-fc-shaniwar-peth-pune-35873",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "155434",
          "name": "The Good Bowl",
          "cloudinaryImageId": "6e04be27387483a7c00444f8e8241108",
          "locality": "Shanivarpeth",
          "areaName": "Shaniwar Peth",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Biryani",
            "Pastas",
            "Punjabi",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.3,
          "parentId": "7918",
          "avgRatingString": "4.3",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 0.4,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "0.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-11 23:59:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹110"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/the-good-bowl-shanivarpeth-shaniwar-peth-pune-155434",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "25396",
          "name": "Oven Story Pizza - Standout Toppings",
          "cloudinaryImageId": "b39e4312ae2e9f65c3b58faaed83f488",
          "locality": "Shaniwar Peth",
          "areaName": "Narayan Peth",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.6,
          "parentId": "3534",
          "avgRatingString": "4.6",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 26,
            "lastMileTravel": 0.4,
            "serviceability": "SERVICEABLE",
            "slaString": "23-29 mins",
            "lastMileTravelString": "0.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-11 23:59:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹699",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/oven-story-pizza-standout-toppings-shaniwar-peth-narayan-peth-pune-25396",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "16847",
          "name": "Behrouz Biryani",
          "cloudinaryImageId": "89fccaa76f2f760e2742b9e53d32bb69",
          "locality": "Senapati Bapat Road",
          "areaName": "Shaniwar Peth",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Biryani",
            "North Indian",
            "Kebabs",
            "Mughlai",
            "Beverages",
            "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "1803",
          "avgRatingString": "4.4",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 0.4,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "0.4 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-11 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Gourmet",
                      "imageId": "newg.png"
                    }
                  }
                ]
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/behrouz-biryani-senapati-bapat-road-shaniwar-peth-pune-16847",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "507940",
          "name": "EatFit",
          "cloudinaryImageId": "543307dc74eeb9dc5e0a58c81fe54996",
          "locality": "Ghole Road",
          "areaName": "Shivajinagar",
          "costForTwo": "₹270 for two",
          "cuisines": [
            "Chinese",
            "Healthy Food",
            "Tandoor",
            "Pizzas",
            "North Indian",
            "Thalis",
            "Biryani"
          ],
          "avgRating": 4.2,
          "parentId": "76139",
          "avgRatingString": "4.2",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 27,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-11 23:30:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹179"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/eatfit-ghole-road-shivajinagar-pune-507940",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "386176",
          "name": "NIC Ice Creams",
          "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
          "locality": "Prabhat Road",
          "areaName": "Shivaji Nagar",
          "costForTwo": "₹120 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.7,
          "veg": true,
          "parentId": "6249",
          "avgRatingString": "4.7",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 23,
            "lastMileTravel": 0.7,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "0.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-12 00:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "brand",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "brand"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹349",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/nic-ice-creams-prabhat-road-shivaji-nagar-pune-386176",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "288388",
          "name": "Starbucks Coffee",
          "cloudinaryImageId": "c4d3a93a80333184ee41048b4fda3a34",
          "locality": "FC Road",
          "areaName": "Shivajinagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Beverages",
            "Cafe",
            "Snacks",
            "Desserts",
            "Bakery",
            "Ice Cream"
          ],
          "avgRating": 4.4,
          "parentId": "195515",
          "avgRatingString": "4.4",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-11 23:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹499"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/starbucks-coffee-fc-road-shivajinagar-pune-288388",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "34415",
          "name": "Frozen Bottle - Milkshakes, Desserts And Ice Cream",
          "cloudinaryImageId": "sfjjgxe2uxlcmhux5khf",
          "locality": "F.C. Road",
          "areaName": "Shivajinagar",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Beverages",
            "Desserts",
            "Ice Cream",
            "Waffle",
            "Bakery",
            "Healthy Food"
          ],
          "avgRating": 4.4,
          "parentId": "5655",
          "avgRatingString": "4.4",
          "totalRatingsString": "5K+",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-12 00:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/frozen-bottle-milkshakes-desserts-and-ice-cream-f-c-road-shivajinagar-pune-34415",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "5625",
          "name": "Subway",
          "cloudinaryImageId": "63178e3e64d503a479f2a2048a474552",
          "locality": "East Street",
          "areaName": "Camp",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Fast Food",
            "Healthy Food",
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.1,
          "parentId": "2",
          "avgRatingString": "4.1",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 3,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "3.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-12 02:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/subway-east-street-camp-pune-5625",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "21001",
          "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "F.C. Road",
          "areaName": "Shivajinagar",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Pizzas"
          ],
          "avgRating": 4,
          "parentId": "721",
          "avgRatingString": "4.0",
          "totalRatingsString": "10K+",
          "sla": {
            "deliveryTime": 43,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "40-45 mins",
            "lastMileTravelString": "2.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-12 02:00:00",
            "opened": true
          },
          "badges": {
            
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹179"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/pizza-hut-f-c-road-shivajinagar-pune-21001",
          "type": "WEBLINK"
        }
    },  
    {   
        "info": {
          "id": "79334",
          "name": "Apsara Ice Creams",
          "cloudinaryImageId": "w2kygwwbs3yvtlkxm23g",
          "locality": "Camp",
          "areaName": "Camp",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.6,
          "veg": true,
          "parentId": "35219",
          "avgRatingString": "4.6",
          "totalRatingsString": "1K+",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 2.7,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-02-12 00:00:00",
            "opened": true
          },
          "badges": {
            "textExtendedBadges": [
              {
                "iconId": "guiltfree/GF_Logo_android_3x",
                "shortDescription": "options available",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {
            
          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                
              },
              "textBased": {
                
              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "guiltfree/GF_Logo_android_3x",
                      "shortDescription": "options available"
                    }
                  }
                ]
              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {
                
              },
              "video": {
                
              }
            }
          },
          "reviewsSummary": {
            
          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {
            
          }
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/restaurants/apsara-ice-creams-camp-pune-79334",
          "type": "WEBLINK"
        }
    }
];

const ResCard = (props) => {
    const {cloudinaryImageId,name,cuisines,avgRating,sla} = props?.resData?.info;
    return (
        <div className="res-card">
            <img alt="res-logo"
                className="res-logo"
                src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}
            />
            <h3 className="text-wrap">{name}</h3>
            <h4>{avgRating+" Stars. "+ sla.slaString}</h4>
            <h4 className="text-wrap">{cuisines.join(", ")}</h4>
        </div>
    );
};

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resData.map((resData)=> (
                    <ResCard resData={resData} />
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

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);