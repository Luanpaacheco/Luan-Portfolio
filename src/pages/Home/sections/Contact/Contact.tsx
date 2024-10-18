
import instagram from '../../../../assets/instagram.png'
import email from '../../../../assets/o-email.png'
import telefone from '../../../../assets/telefone.png'
import twitter from '../../../../assets/twitter.png'
import linkedin from '../../../Home/sections/Hero/logotipo-do-linkedin.png'
import github from '../../../Home/sections/Hero/github.png'



const Contact=()=> {
   

  return (
    <div >
            <h1 className='text-4xl font-bold mt-6 text-center bg-gradient-to-r from-[#6148ac] to-[#6312d6] bg-clip-text text-transparent'>Contact</h1>

    
    <div className='text-center text-white flex flex-col justify-center items-center h-fit  py-9 w-full '>
        <div className=' flex flex-row h-fit  w-full items-start pb-5'>
            <div className='w-2/3 text-center flex flex-col items-start pl-[26rem]'>
            <div className='flex flex-row items-center gap-2 '>
                <img className='h-3' src={email} alt="" />
                <h3 className='text-xs underline-offset-8 text-white'>luanpachecolima00@gmail.com</h3>
            </div>
                
            <div className='flex flex-row items-center gap-2'>
                <img className='h-3' src={telefone} alt="" />
                <h3 className='text-xs'>+55 (51)999083711</h3>
            </div>
            </div>
            <div className='flex flex-row gap-2  items-start w-fit pr-6'>
                <button>
                    <img className='h-3' src={instagram} alt="" />
                </button> 
                <button>
                    <img className='h-3' src={twitter} alt="" />
                </button>
            </div>
        </div>
        <div className='flex flex-row gap-5'>
        <button>
            <img className='h-10' src={linkedin} alt="" />
            </button> 
        <button>
        <img className='h-10' src={github} alt="" />
        </button>
        </div>
        </div>
    </div>

    
  )
}

export default Contact
