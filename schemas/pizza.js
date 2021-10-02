import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  name: 'pizza',
  title: 'Meals',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Meal Name',
      type: 'string',
      description: 'Name of the meal',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'entree',
      title: 'Entree',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'riceOrNoodle',
      title: 'RiceOrNoodle',
      type: 'boolean',
      options: {
        layout: 'checkbox',
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Tell us a bit about them',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the meal in cents',
      inputComponent: PriceInput,
      validation: (Rule) => Rule.min(100),
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      topping1: 'toppings.1.name',
      topping2: 'toppings.2.name',
      topping3: 'toppings.3.name',
    },
    prepare: ({ title, media, ...toppings }) => {
      // console.log('STAY');
      const tops = Object.values(toppings).filter(Boolean);
      return {
        title,
        media,
        subtitle: Object.values(tops).join(',  '),
      };
    },
  },
};
