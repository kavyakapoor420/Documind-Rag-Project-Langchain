import {Link} from 'react-router-dom'
import {Button} from '@/components/ui/button'


export function Navbar(){

    return(
        <>
           <div className='fixed top-4 left-1/2 transform -translate-x-1/2 z-50'>

            <div className='flex items-center justify-center gap-20 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg text-white'>

                <Link to='/' className='text-xl sm:text-2xl font-extrabold whitespace-nowrap bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-transparent bg-clip-text flex items-center gap-1 sm:gap-2'>
                     <span className='text-2xl sm:text-3xl'>
                        Documind
                     </span>
                </Link>

                <div className='hidden sm:flex items-center gap-8'>
                    <Link to={'/#features'} className='text-sm text-black hover:text-purple-300 transition-colors'>
                       <span>Features</span>
                    </Link>
                    <Link to={'/#pricing'} className='text-sm text-black hover:text-purple-300 transition-colors'>
                        <span>
                            Pricing 
                        </span>
                    </Link><Link to={'/#dashboard'} className='text-sm text-black hover:text-purple-300 transition-colors'>
                        <span>
                            Dashboard 
                        </span>
                    </Link>

                </div>
            </div>
           </div>
        </>
    )
}