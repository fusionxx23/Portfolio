import { FiGithub, FiTwitter, FiMail, FiLinkedin} from 'react-icons/fi'
import { SiDiscord } from 'react-icons/si';
import {RxDiscordLogo} from 'react-icons/rx'

export default function SocialsLeft() {
    return (
        <div className="fixed bottom-4 left-20 font-chivo">
            <div className=' flex-col  justify-center items-center'>
                <div className='flex justify-center mb-1'>
                    <div className='h-28 bg-white ' style={{ width: '1px' }}>
                    </div>
                </div>

                <div className='font-chivo text-light-200'>
                    <SocialIcon Icon={FiGithub}/>  
                    <SocialIcon Icon={RxDiscordLogo}/>  
                    <SocialIcon Icon={FiTwitter}/>
                    <SocialIcon Icon={FiMail}/>
                    <SocialIcon Icon={FiLinkedin}/>
                </div>

            </div>

        </div>
    )
}

function SocialIcon({Icon}: {Icon:any}) {
    return (
        <div className='my-6 cursor-pointer hover:-translate-y-1 hover:text-light-100  transition-all ease-out'>
            <Icon className='hover:scale-125' size={20} />
        </div>
    )
}
