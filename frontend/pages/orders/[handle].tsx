import tw from 'twin.macro';
import { useState } from 'react';
import axios from 'axios';
import { CheckoutButton } from '../../components/orders/CheckoutButton';


const product = {
    name: 'Basic Tee 6-Pack',
    price: '$192',
    href: '#',
    breadcrumbs: [
        { id: 1, name: 'Men', href: '#' },
        { id: 2, name: 'Clothing', href: '#' },
    ],
    images: [
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
            alt: 'Two each of gray, white, and black shirts laying flat.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
            alt: 'Model wearing plain black basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
            alt: 'Model wearing plain gray basic tee.',
        },
        {
            src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
            alt: 'Model wearing plain white basic tee.',
        },
    ],
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
    ],
    description:
        'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
    highlights: ['Hand cut and sewn locally', 'Dyed with our proprietary colors', 'Pre-washed & pre-shrunk', 'Ultra-soft 100% cotton'],
    details:
        'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
};

const Example = ( props ) => {
    console.log('-- HANDLE --', props);

    const variantId = props.product.data.productByHandle.variants.edges[0].node.id;
    console.log(variantId);

    const [selectedColor, setSelectedColor] = useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = useState(product.sizes[2]);

    return (
        <div className='bg-slate-300'>
            <div className='pt-6'>
                {/* Image gallery */}
                <div className='mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8'>
                    <div className='hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block'>
                        <img src={product.images[0].src} alt={product.images[0].alt} className='w-full h-full object-center object-cover' />
                    </div>
                    <div className='hidden lg:grid lg:grid-cols-1 lg:gap-y-8'>
                        <div className='aspect-w-3 aspect-h-2 rounded-lg overflow-hidden'>
                            <img src={product.images[1].src} alt={product.images[1].alt} className='w-full h-full object-center object-cover' />
                        </div>
                        <div className='aspect-w-3 aspect-h-2 rounded-lg overflow-hidden'>
                            <img src={product.images[2].src} alt={product.images[2].alt} className='w-full h-full object-center object-cover' />
                        </div>
                    </div>
                    <div className='aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4'>
                        <img src={product.images[3].src} alt={product.images[3].alt} className='w-full h-full object-center object-cover' />
                    </div>
                </div>

                {/* Product info */}
                <div className='max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8'>
                    <div className='lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
                        <h1 className='text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl'>{product.name}</h1>
                    </div>

                    {/* Options */}
                    <div className='mt-4 lg:mt-0 lg:row-span-3'>
                        <h2 className='sr-only'>Product information</h2>
                        <p className='text-3xl text-gray-900'>{product.price}</p>

                        {/* Reviews */}
                        <CheckoutButton variantId={variantId} />
                    </div>

                    <div className='py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8'>
                        {/* Description and details */}
                        <div>
                            <h3 className='sr-only'>Description</h3>

                            <div className='space-y-6'>
                                <p className='text-base text-gray-900'>{product.description}</p>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <h3 className='text-sm font-medium text-gray-900'>Highlights</h3>

                            <div className='mt-4'>
                                <ul role='list' className='pl-4 list-disc text-sm space-y-2'>
                                    {product.highlights.map((highlight) => (
                                        <li key={highlight} className='text-gray-400'>
                                            <span className='text-gray-600'>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className='mt-10'>
                            <h2 className='text-sm font-medium text-gray-900'>Details</h2>

                            <div className='mt-4 space-y-6'>
                                <p className='text-sm text-gray-600'>{product.details}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Example;
