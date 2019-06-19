

const requireContext = require.context("../assets", true, /\.(png|jpg|gif)$/);
const images = requireContext.keys().map(requireContext);

export const products = [{
    id: '1',
    name: '香水1',
    type: 'perfume',
    price: 10000,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('香水1')),
        title: '',
        count: '',
    }
},
{
    id: '2',
    name: '香水2',
    type: 'perfume',
    price: 998,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('香水2')),
        title: '',
        count: '',
    }
}, {
    id: '3',
    name: '香水3',
    type: 'perfume',
    price: 699,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('香水3')),
        title: '',
        count: '',
    }
}, {
    id: '4',
    name: '香水4',
    type: 'perfume',
    price: 799,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('香水4')),
        title: '',
        count: '',
    }
},
{
    id: '5',
    name: '香水5',
    type: 'perfume',
    price: 499,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('香水5')),
        title: '',
        count: '',
    }
},
{
    id: '6',
    name: '鞋子1',
    type: 'shoe',
    price: 399,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('鞋子1')),
        title: '',
        count: '',
    }
},
{
    id: '7',
    name: '鞋子2',
    type: 'shoe',
    price: 199,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('鞋子2')),
        title: '',
        count: '',
    }
},
{
    id: '8',
    name: '鞋子3',
    type: 'shoe',
    price: 299,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('鞋子3')),
        title: '',
        count: '',
    }
},
{
    id: '9',
    name: '鞋子4',
    type: 'shoe',
    price: 99,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('鞋子4')),
        title: '',
        count: '',
    }
},
{
    id: '10',
    name: '鞋子5',
    type: 'shoe',
    price: 599,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('鞋子5')),
        title: '',
        count: '',
    }
},
{
    id: '11',
    name: '手机1',
    type: 'phone',
    price: 3999,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('手机1')),
        title: '',
        count: '',
    }
},
{
    id: '12',
    name: '手机2',
    type: 'phone',
    price: 2999,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('手机2')),
        title: '',
        count: '',
    }
},
{
    id: '13',
    name: '手机3',
    type: 'phone',
    price: 1999,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('手机3')),
        title: '',
        count: '',
    }
},
{
    id: '14',
    name: '手机4',
    type: 'phone',
    price: 5999,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('手机4')),
        title: '',
        count: '',
    }
},
{
    id: '15',
    name: '手机5',
    type: 'phone',
    price: 6999,
    reserve: 50,
    info: {
        img: images.find(img => img.includes('手机5')),
        title: '',
        count: '',
    }
},]