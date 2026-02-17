import { Integration } from '../types';

// We'll use simple SVGs or placeholders for now since we don't have the actual assets.
// In a real app, these would be imported SVG components or image paths.

export const origins: Integration[] = [
  {
    id: 'zillow',
    name: 'Zillow',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.',
    category: 'origin',
    icon: 'zillow', // specific rendering handled in IntegrationIcon
  },
  {
    id: 'redfin',
    name: 'Redfin',
    description: 'Odio ut sem nulla pharetra diam sit. Ornare aenean euismod elementum nisi quis eleifend.',
    category: 'origin',
    icon: 'redfin',
  },
  {
    id: 'trulia',
    name: 'Trulia',
    description: 'Amet consectetur adipiscing elit pellentesque habitant.',
    category: 'origin',
    icon: 'trulia',
  },
  {
    id: 'realtor',
    name: 'Realtor',
    description: 'Arcu cursus euismod quis viverra nibh cras pulvinar mattis.',
    category: 'origin',
    icon: 'realtor',
  },
];

export const destinations: Integration[] = [
  {
    id: 's3',
    name: 'Amazon S3',
    description: 'Turpis egestas pretium aenean pharetra magna ac placerat.',
    category: 'destination',
    icon: 's3',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    description: 'Accumsan sit amet nulla facilisi morbi tempus.',
    category: 'destination',
    icon: 'mysql',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    description: 'Sagittis purus sit amet volutpat consequat mauris nunc congue nisi.',
    category: 'destination',
    icon: 'mongodb',
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    description: 'Neque sodales ut etiam sit amet nisl purus in mollis. Ut sem viverra aliquet eget sit.',
    category: 'destination',
    icon: 'postgres',
  },
];
