import {
	HiOutlineViewGrid,
	HiOutlineCube,
	HiOutlineShoppingCart,
	HiOutlineUsers,
	HiOutlineDocumentText,
	HiOutlineAnnotation,
	HiOutlineCog
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'manageuser',
		label: 'Manage User',
		path: '/manageuser',
		icon: <HiOutlineCube />
	},
	{
		key: 'landingpage',
		label: 'Landing Page',
		path: '/landingpage',
		icon: <HiOutlineShoppingCart />
	},
	{
		key: 'contacts',
		label: 'Contacts',
		path: '/contacts',
		icon: <HiOutlineUsers />
	},
	{
		key: 'integration',
		label: 'Integration',
		path: '/integration',
		icon: <HiOutlineDocumentText />
	},
	{
		key: 'help',
		label: 'Help',
		path: '/help',
		icon: <HiOutlineAnnotation />
	},
    {
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <HiOutlineCog />
	},
]
