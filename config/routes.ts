export default [
  {
    path: '/map',
    name: 'map',
    icon: 'GroupOutlined',
    access: 'canAdmin',
    component: './map/index',
  },
  
  {
    path: '/',
    redirect: '/map',
  },
  {
    component: './404',
  },
];
