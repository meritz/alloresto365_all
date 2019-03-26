import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  private data = [
    {
      category: 'LES FORMULES',
      expanded: true,
      products: [
        { id: 0, name: 'SftRegal', price: '3000' , menutImage: '../../assets/img/animee/9.jpg'},
        { id: 1, name: 'SweetRegal', price: '3500', menutImage: '../../assets/img/animee/4.jpg' },
        { id: 2, name: 'Akoumé ', price: '3000' ,  menutImage: '../../assets/img/animee/9.jpg'},
        { id: 3, name: ' Djékoumé', price: '3000',  menutImage: '../../assets/img/animee/6.jpg'},
        { id: 4, name: ' Fried rice', price: '3000',  menutImage: '../../assets/img/animee/4.jpg'},
        { id: 5, name: 'Riz au gras', price: '3000',  menutImage: '../../assets/img/animee/9.jpg'},

      ]
    },
    // {
    //   category: 'Pasta',
    //   products: [
    //     { id: 4, name: ' Cheese', price: '8' },
    //     { id: 5, name: 'Bolognese', price: '6' }
    //   ]
    // },
    // {
    //   category: 'Salad',
    //   products: [
    //     { id: 6, name: 'Ham & Egg', price: '8' },
    //     { id: 7, name: 'Basic', price: '5' },
    //     { id: 8, name: 'Ceaser', price: '9' }
    //   ]
    // },
    // {
    //   category: 'riz',
    //   products: [
    //     { id: 6, name: 'Ham & Egg', price: '8' },
    //     { id: 7, name: 'Basic', price: '5' },
    //     { id: 8, name: 'Ceaser', price: '9' }
    //   ]
    // }
  ];

  //
  //

  private listRestaurant = [
    {
      name: 'SHALOM',
      firstImage: '../../assets/img/restaurant/142601_cropped_900_550_70_58ac2fa906b14_restaurant-sofitel.jpg' ,
      specialiter: 'Poulet * Pizza * Salades * Sandwiches',
      note: 2.8,
      products: [{
        expanded: true,
        category: 'entre',
        plats: [
          // tslint:disable-next-line:max-line-length
          { id: 6, name: 'Ham & Egg', price: '2000',  menutImage: '../../assets/img/plat-fon/14702362_670926693058767_2957661286413590959_n.jpg' },
          { id: 7, name: 'Basic', price: '7480',  menutImage: '../../assets/img/plat-fon/6153495191491945652.jpg' },
          { id: 8, name: 'Spagueti', price: '1000',  menutImage: '../../assets/img/plat-fon/Bases-Photo-culinaire-679x350.jpg' },
          { id: 8, name: 'botokoin', price: '2000',  menutImage: '../../assets/img/plat-fon/c-abc3a9gan.jpg' },
          { id: 8, name: 'ablo', price: '2500',  menutImage: '../../assets/img/plat-fon/causa.jpg' },
          { id: 8, name: 'akpan', price: '3500',  menutImage: '../../assets/img/plat-fon/COsb1ayVEAAJJsK.jpg' },
          { id: 8, name: 'gali', price: '4300',  menutImage: '../../assets/img/plat-fon/p3158_750x459_10.jpg' },
          { id: 8, name: 'aloko+poisson', price: '8500',  menutImage: '../../assets/img/plat-fon/photo-culinaire-vacherin.jpg' },

        ]},
        {
        category: 'jus',
        plats: [
          { id: 6, name: 'liora', price: '8',  menutImage: '../../assets/img/jus/000021392.jpg' },
          { id: 7, name: 'liora bio', price: '5',  menutImage: '../../assets/img/jus/23601-0w345h345_Jus_Pomme_100_Jus.jpg' },
          { id: 8, name: 'baobab', price: '9',  menutImage: '../../assets/img/jus/50019-2.jpg' }

        ]},
        {
        category: 'resitance',
        plats: [
          { id: 6, name: 'poison braise', price: '8',  menutImage: '../../assets/img/plats/336143-svetik.jpg' },
          { id: 7, name: 'salade', price: '5',  menutImage: '../../assets/img/plats/6186cd7be2f46a7cd7b4f51c5501c9c7.png' },
          { id: 8, name: 'Ceaser gombo', price: '9',  menutImage: '../../assets/img/plats/7584650-11709219.jpg' },
          { id: 8, name: 'Ceaser gombo', price: '9',  menutImage: '../../assets/img/gris/_a6a9764-2-copie.jpg' },
          { id: 8, name: 'Ceaser gombo', price: '9',  menutImage: '../../assets/img/gris/_a6a9794-2-copie.jpg' },


        ]},
    ]
    },
    {
      name: 'TALIE',
      firstImage: '../../assets/img/restaurant/1456839997_vatelrestaurant_Slider1-paris.jpg' ,
      specialiter: 'Poulet * Pizza * Salades * Sandwiches',
      note: 2.8,
      products: [{
        expanded: true,
        category: 'entre',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }

        ]},
        {
        category: 'jus',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }

        ]},
        {
        category: 'resitance',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }
        ]},
    ]
    },
    {
      name: 'RUMBA',
      firstImage: '../../assets/img/restaurant/H117-810x565.jpg' ,
      specialiter: 'Poulet * Pizza * Salades * Sandwiches',
      note: 2.8,
      products: [{
        expanded: true,
        category: 'entre',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }

        ]},
        {
        category: 'jus',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }

        ]},
        {
        category: 'resitance',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }
        ]},
    ]
    },
    {
      name: 'KING PLACE',
      firstImage: '../../assets/img/restaurant/Hotel_restaurant_St_Nicolas©Panoramaweb-11-Copier.jpg' ,
      specialiter: 'Poulet * Pizza * Salades * Sandwiches',
      note: 2.8,
      products: [{
        expanded: true,
        category: 'entre',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }

        ]},
        {
        category: 'jus',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }

        ]},
        {
        category: 'resitance',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }
        ]},
    ]
    },
    {
      name: 'CUSINE',
      firstImage: '../../assets/img/restaurant/manavabeachresortmoorea_restaurant_14.jpg' ,
      specialiter: 'Poulet * Pizza * Salades * Sandwiches',
      note: 2.8,
      products: [{
        expanded: true,
        category: 'entre',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }

        ]},
        {
        category: 'jus',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }

        ]},
        {
        category: 'resitance',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }
        ]},
    ]
    },
    {
      name: '@LLOPIZZA',
      firstImage: '../../assets/img/restaurant/Manotel-Geneve-Restaurants.jpg' ,
      specialiter: 'Poulet * Pizza * Salades * Sandwiches',
      note: 2.8,
      products: [{
        expanded: true,
        category: 'entre',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }

        ]},
        {
        category: 'jus',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }

        ]},
        {
        category: 'resitance',
        plats: [
          { id: 6, name: 'Ham & Egg', price: '8',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 7, name: 'Basic', price: '5',  menutImage: '../../assets/img/restaurant/17840.jpg' },
          { id: 8, name: 'Ceaser', price: '9',  menutImage: '../../assets/img/restaurant/17840.jpg' }
        ]},
    ]
    },
  ];

  private cart = [];

  constructor() { }

  getProducts() {
    return this.data;
  }

  getlistRestaurant() {
    return this.listRestaurant;
  }

  getCart() {
    return this.cart;
  }

  addProduct(product) {
    this.cart.push(product);
  }

  

}
