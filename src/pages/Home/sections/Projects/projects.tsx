// import { Swiper, SwiperSlide } from 'swiper/react';
// // Import Swiper styles
// import 'swiper/css';

// import { EffectCards, Navigation, Pagination } from 'swiper/modules';

// const Projects = () => {
//   return (
//     <div className='h-[40rem] items-center justify-center flex-col align-middle '>

    
//     <div className=''>
//       <h2 className="text-center text-purple-500 mb-4">PROJECTS</h2>
//       <div className='w-screen flex justify-center'>

      
//       <div className='w-2/4'>

      
//       <Swiper
//          slidesPerView={3}
//          spaceBetween={0}
//          loop={true}
//          pagination={{
//            clickable: true,
//          }}
//          navigation={true}
//          modules={[Pagination, Navigation]}
//          className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className={`bg-gray-700 rounded-lg h-40 w-72 flex flex-col justify-between drop-shadow-2xl`}>
//             <div className="flex-1 rounded-t-lg bg-red-600 drop-shadow-2xl"></div>
//             <div className="flex items-center justify-between bg-slate-900 p-2 rounded-b-lg drop-shadow-2xl"></div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className={`bg-gray-700 rounded-lg h-40 w-72 flex flex-col justify-between`}>
//             <div className="flex-1 rounded-t-lg bg-blue-600 drop-shadow-2xl"></div>
//             <div className="flex items-center justify-between bg-slate-900 p-2 rounded-b-lg drop-shadow-2xl"></div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className={`bg-gray-700 rounded-lg h-40 w-72 flex flex-col justify-between`}>
//             <div className="flex-1 rounded-t-lg bg-green-600 drop-shadow-2xl"></div>
//             <div className="flex items-center justify-between bg-slate-900 p-2 rounded-b-lg drop-shadow-2xl"></div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className={`bg-gray-700 rounded-lg h-40 w-72 flex flex-col justify-between`}>
//             <div className="flex-1 rounded-t-lg bg-orange-600 drop-shadow-2xl"></div>
//             <div className="flex items-center justify-between bg-slate-900 p-2 rounded-b-lg drop-shadow-2xl"></div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className={`bg-gray-700 rounded-lg h-40 w-72 flex flex-col justify-between`}>
//             <div className="flex-1 rounded-t-lg bg-yellow-600 drop-shadow-2xl"></div>
//             <div className="flex items-center justify-between bg-slate-900 p-2 rounded-b-lg drop-shadow-2xl"></div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className={`bg-gray-700 rounded-lg h-40 w-72 flex flex-col justify-between`}>
//             <div className="flex-1 rounded-t-lg bg-pink-600 drop-shadow-2xl"></div>
//             <div className="flex items-center justify-between bg-slate-900 p-2 rounded-b-lg drop-shadow-2xl"></div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className={`bg-gray-700 rounded-lg h-40 w-72 flex flex-col justify-between`}>
//             <div className="flex-1 rounded-t-lg bg-green-800 drop-shadow-2xl"></div>
//             <div className="flex items-center justify-between bg-slate-900 p-2 rounded-b-lg drop-shadow-2xl"></div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className={`bg-gray-700 rounded-lg h-40 w-72 flex flex-col justify-between`}>
//             <div className="flex-1 rounded-t-lg bg-blue-800 drop-shadow-2xl"></div>
//             <div className="flex items-center justify-between bg-slate-900 p-2 rounded-b-lg drop-shadow-2xl"></div>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
          // <div className={`bg-gray-700 rounded-lg h-40 w-72 flex flex-col justify-between`}>
          //   <div className="flex-1 rounded-t-lg bg-purple-600 drop-shadow-2xl"></div>
          //   <div className="flex items-center justify-between bg-slate-900 p-2 rounded-b-lg drop-shadow-2xl"></div>
          // </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//     </div>
//     </div>
//     </div>
//   );
// };

// export default Projects;


import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import github from '../Hero/github.png'
import linkedin from '../Hero/logotipo-do-linkedin.png'

import python from './python.png'
import html from './html-5.png'

import {register} from 'swiper/element/bundle'
import { motion } from 'framer-motion';
register();
// import { EffectCards, Navigation, Pagination } from 'swiper/modules';

const Projects = () => {

  // const data={
  //   {id:'1', ima},{}
  // }
  return (

    <motion.section
    
    id="projects" 
    initial={{ opacity: 0, y: 50 }} 
    whileInView={{ opacity: 1, y: 0 }} 
    transition={{ duration: 0.2 }} 
    viewport={{ once: false }}>
        <div className='py-28'>
      <h1 className='text-4xl font-bold pb-9 text-center bg-gradient-to-r from-[#6148ac] to-[#6312d6] bg-clip-text text-transparent'>PROJECTS</h1>
    
    <Swiper
      slidesPerView={3}
      pagination={{clickable:true}}
      navigation
     className='w-2/4 flex justify-center align-middle items-center pb-10 ' 
    >
      <SwiperSlide className=''>
        <div className=' flex justify-center align-middle items-center'>
          <div className={`bg-gray-700 rounded-lg h-96 w-60 flex flex-col `}>
            <div className="flex-1 rounded-t-lg bg-purple-600 drop-shadow-2xl"></div>
            <div className="flex items-center gap-20 bg-slate-900 p-3 rounded-b-lg drop-shadow-2xl">
            <button>
            <img className='h-7 hover:scale-125 duration-300'src={github} alt="" />
          </button>
          <h2 className='text-white'>Instamovie</h2>
            </div>
          </div>
        </div>
      
          {/* <img className='object-fill w-full h-52' src={python} alt="" /> */}
      </SwiperSlide>
      <SwiperSlide className=''>
        <div className=' flex justify-center align-middle items-center'>
          <div className={`bg-gray-700 rounded-lg h-96 w-60 flex flex-col `}>
            <div className="flex-1 rounded-t-lg bg-purple-600 drop-shadow-2xl"></div>
            <div className="flex items-center gap-20 bg-slate-900 p-3 rounded-b-lg drop-shadow-2xl">
            <button>
            <img className='h-7 hover:scale-125 duration-300'src={github} alt="" />
          </button>
          <h2 className='text-white'>Instamovie</h2>
            </div>
          </div>
        </div>
      
          {/* <img className='object-fill w-full h-52' src={python} alt="" /> */}
      </SwiperSlide>
      <SwiperSlide className=''>
        <div className=' flex justify-center align-middle items-center'>
          <div className={`bg-gray-700 rounded-lg h-96 w-60 flex flex-col `}>
            <div className="flex-1 rounded-t-lg bg-purple-600 drop-shadow-2xl"></div>
            <div className="flex items-center gap-20 bg-slate-900 p-3 rounded-b-lg drop-shadow-2xl">
            <button>
            <img className='h-7 hover:scale-125 duration-300'src={github} alt="" />
          </button>
          <h2 className='text-white'>Instamovie</h2>
            </div>
          </div>
        </div>
      
          {/* <img className='object-fill w-full h-52' src={python} alt="" /> */}
      </SwiperSlide>
      <SwiperSlide className=''>
        <div className=' flex justify-center align-middle items-center'>
          <div className={`bg-gray-700 rounded-lg h-96 w-60 flex flex-col `}>
            <div className="flex-1 rounded-t-lg bg-purple-600 drop-shadow-2xl"></div>
            <div className="flex items-center gap-20 bg-slate-900 p-3 rounded-b-lg drop-shadow-2xl">
            <button>
            <img className='h-7 hover:scale-125 duration-300'src={github} alt="" />
          </button>
          <h2 className='text-white'>Instamovie</h2>
            </div>
          </div>
        </div>
      
          {/* <img className='object-fill w-full h-52' src={python} alt="" /> */}
      </SwiperSlide>
      <SwiperSlide className=''>
        <div className=' flex justify-center align-middle items-center'>
          <div className={`bg-gray-700 rounded-lg h-96 w-60 flex flex-col `}>
            <div className="flex-1 rounded-t-lg bg-purple-600 drop-shadow-2xl"></div>
            <div className="flex items-center gap-20 bg-slate-900 p-3 rounded-b-lg drop-shadow-2xl">
            <button>
            <img className='h-7 hover:scale-125 duration-300'src={github} alt="" />
          </button>
          <h2 className='text-white'>Instamovie</h2>
            </div>
          </div>
        </div>
      
          {/* <img className='object-fill w-full h-52' src={python} alt="" /> */}
      </SwiperSlide>
      
    </Swiper>
    </div>
    </motion.section>
    
  );
};

export default Projects;


