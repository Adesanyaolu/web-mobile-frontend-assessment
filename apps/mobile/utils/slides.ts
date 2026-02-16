export interface Slide {
  id: string;
  title: string;
  description: string;
  span?: string;
  image: any; // Using 'any' for now as we might use require() or remote URLs
}

export default [
  {
    id: '1',
    title: 'Investing for Everybody',
    description: 'We let you easily invest in fractional shares for as little as',
    span: " $1.",
    image: require('../assets/images/onboarding_one.png'),
  },
  {
    id: '2',
    title: 'Get Better Returns',
    description: 'Invest in the world\'s leading brands and unlock amazing returns.',
    image: require('../assets/images/onboarding_two.png'),
  },
];
