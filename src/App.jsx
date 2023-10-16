import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material";
import Layout from "Layout"
import Home from "Pages/Home";
import 'globals.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import theme from "assets/theme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        children: [
          {
            index: true,
            lazy: () => import('Pages/About/AboutUs'),
          },
          {
            path: 'medical-services',
            children: [
              {
                index: true,
                lazy: () => import('Pages/About/Services')
              },
              {
                path: 'neurology-clinic',
                lazy: () => import('Pages/About/Services/Service/NeurologyClinic/index')
              },
              {
                path: 'cardiology-clinic',
                lazy: () => import('Pages/About/Services/Service/CardiologyClinic/index')
              },
              {
                path: 'pathology-clinic',
                lazy: () => import('Pages/About/Services/Service/PathologyClinic//index')
              },
              {
                path: 'laboratory-analysis',
                lazy: () => import('Pages/About/Services/Service/LaboratoryAnalysis/index')
              },
              {
                path: 'pediatric-clinic',
                lazy: () => import('Pages/About/Services/Service/PediatricClinic/index')
              },
              {
                path: 'cardiac-clinic',
                lazy: () => import('Pages/About/Services/Service/CardiacClinic/index')
              },
            ],
          },
          {
            path: 'pricing',
            lazy: () => import('Pages/About/Pricing'),
          },
          {
            path: 'appointments',
            lazy: () => import('Pages/About/Appointments'),
          },
          {
            path: 'FAQ',
            lazy: () => import('Pages/About/FAQ'),
          },
        ],
      },
      {
        path: 'doctors',
        children: [
          {
            index: true,
            lazy: () => import('Pages/Doctors/OurDoctors'),
          },
          {
            path: 'timetable',
            lazy: () => import('Pages/Doctors/Timetable'),
          },
        ]
      },
      {
        path: 'blog',
        lazy: () => import('Pages/Blog'),
      },
      {
        path: 'shop',
        children: [
          {
            index: true,
            lazy: () => import('Pages/Shop/OurProducts')
          },
          {
            path: 'cart',
            lazy: () => import('Pages/Shop/Cart')
          },
          {
            path: 'checkout',
            lazy: () => import('Pages/Shop/Checkout')
          },
          {
            path: 'my-account',
            lazy: () => import('Pages/Shop/MyAccount')
          },
        ],
      },
      {
        path: 'contacts',
        lazy: () => import('Pages/Contacts'),
      },
      {
        path: 'departments',
        children: [
          {
            index: true,
            lazy: () => import('Pages/Departments/OurDepartments')
          },
          {
            path: 'neurology-clinic',
            lazy: () => import('Pages/Departments/NeurologyClinic')
          },
          {
            path: 'pathology-clinic',
            lazy: () => import('Pages/Departments/PathologyClinic')
          },
          {
            path: 'laboratory-analysis',
            lazy: () => import('Pages/Departments/LaboratoryAnalysis')
          },
          {
            path: 'pediatric-clinic',
            lazy: () => import('Pages/Departments/PediatricClinic')
          },
          {
            path: 'cardiac-clinic',
            lazy: () => import('Pages/Departments/CardiacClinic')
          },
          {
            path: 'ophthalmology-clinic',
            lazy: () => import('Pages/Departments/OphthalmologyClinic')
          },
        ]
      },
      {
        path: '*',
        lazy: () => import('Pages/404')
      }
    ]
  }
])

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
    </ThemeProvider>
  )
}

export default App