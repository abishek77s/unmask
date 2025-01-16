export interface Subsidiary {
  name: string;
  ownership: number;
  type: 'launched' | 'acquired' | 'invested';
  dateOfAcquisition?: string; // Date in ISO format (e.g., '2024-01-01')
  description: string;
}

export interface Company {
  id: string;
  name: string;
  founded: string;
  headquarters: string;
  category: 'tech' | 'food' | 'automotive' | 'entertainment' | 'retail' | 'pharmaceutical';
  description: string;
  logo: string;
  subsidiaries: Subsidiary[];
}
export const companies: Company[] = [
  {
    id: 'xiaomi',
    name: 'Xiaomi',
    founded: '2010',
    headquarters: 'Beijing, China',
    category: 'tech',
    description: 'Global technology company focusing on consumer electronics and smart devices',
    logo: 'https://th.bing.com/th/id/R.d7edfc71646df7c9edeb43b65170e8ad?rik=8sp2GsYwSssjXA&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fxiaomi-logo-png-xiaomi-logo-2268.png&ehk=GU7w9trISjHqpByrJ4ogHgWQeOLOeUE7gBRh35uhv4o%3d&risl=&pid=ImgRaw&r=0',
    subsidiaries: [
      {
        name: 'POCO',
        ownership: 100,
        type: 'launched',
        description: 'Smartphone brand focusing on performance-oriented devices'
      },
      {
        name: 'Redmi',
        ownership: 100,
        type: 'launched',
        description: 'Sub-brand focusing on budget and mid-range smartphones'
      },
      {
        name: 'Black Shark',
        ownership: 51,
        type: 'acquired',
        dateOfAcquisition: '2018',
        description: 'Gaming smartphone manufacturer'
      },
    ]
  },
  {
    id: 'nestle',
    name: 'Nestlé',
    founded: '1866',
    headquarters: 'Vevey, Switzerland',
    category: 'food',
    description: 'World\'s largest food and beverage company',
    logo: '',
    subsidiaries: [
      {
        name: 'Nespresso',
        ownership: 100,
        type: 'launched',
        description: 'Premium coffee and coffee machines'
      },
      {
        name: 'Purina',
        ownership: 100,
        type: 'acquired',
        dateOfAcquisition: '2001',
        description: 'Pet food manufacturer'
      },
      {
        name: 'San Pellegrino',
        ownership: 100,
        type: 'acquired',
        dateOfAcquisition: '1997',
        description: 'Premium mineral water and beverages'
      },
      {
        name: 'KitKat',
        ownership: 100,
        type: 'launched',
        description: 'Popular chocolate wafer bar'
      },
      {
        name: 'Maggi',
        ownership: 100,
        type: 'launched',
        description: 'Instant noodles, soups, and seasonings brand'
      },
      {
        name: 'Nestlé Waters',
        ownership: 100,
        type: 'launched',
        description: 'Water brands including Perrier and Acqua Panna'
      },
      {
        name: 'Gerber',
        ownership: 100,
        type: 'acquired',
        dateOfAcquisition: '2007',
        description: 'Baby food and infant nutrition'
      },
      {
        name: 'Carnation',
        ownership: 100,
        type: 'launched',
        description: 'Evaporated milk and other dairy products'
      }
    ]
  },
  {
    id: 'toyota',
    name: 'Toyota',
    founded: '1937',
    headquarters: 'Toyota City, Japan',
    category: 'automotive',
    description: 'Japanese multinational automotive manufacturer',
    logo: 'https://th.bing.com/th/id/R.b6a6ccec252a7dafc0ccd153ef66c32c?rik=CCsBN4TDIiWvXQ&riu=http%3a%2f%2fwww.pngall.com%2fwp-content%2fuploads%2f2016%2f04%2fToyota-Logo-Free-Download-PNG.png&ehk=8o4dM4vVbuYrUwRxJfRlyxjq%2b5I8%2fea1ph%2fj9xxJUts%3d&risl=&pid=ImgRaw&r=0',
    subsidiaries: [
      {
        name: 'Lexus',
        ownership: 100,
        type: 'launched',
        description: 'Luxury vehicle division of Toyota'
      },
      {
        name: 'Hino Motors',
        ownership: 50.1,
        type: 'acquired',
        dateOfAcquisition: '1967',
        description: 'Manufacturer of commercial vehicles and diesel engines'
      },
      {
        name: 'Daihatsu',
        ownership: 100,
        type: 'acquired',
        dateOfAcquisition: '2016',
        description: 'Producer of small cars and kei vehicles'
      },
      {
        name: 'Toyota Financial Services',
        ownership: 100,
        type: 'launched',
        description: 'Financial services arm of Toyota'
      }
    ]
  },
  {
    id: 'apple',
    name: 'Apple',
    founded: '1976',
    headquarters: 'Cupertino, California, USA',
    category: 'tech',
    description: 'American multinational technology company specializing in consumer electronics, software, and services',
    logo: 'https://th.bing.com/th/id/OIP.pW0TOZyl_OZMIuo5HjUsyQHaIf?rs=1&pid=ImgDetMain',
    subsidiaries: [
      {
        name: 'Beats Electronics',
        ownership: 100,
        type: 'acquired',
        dateOfAcquisition: '2014',
        description: 'Producer of audio products and streaming service'
      },
      {
        name: 'Shazam',
        ownership: 100,
        type: 'acquired',
        dateOfAcquisition: '2018',
        description: 'Music identification app and service'
      },
      {
        name: 'Braeburn Capital',
        ownership: 100,
        type: 'launched',
        description: 'Subsidiary managing Apple’s investments'
      },
      {
        name: 'FileMaker',
        ownership: 100,
        type: 'launched',
        description: 'Database software subsidiary'
      }
    ]
  },
 

];
