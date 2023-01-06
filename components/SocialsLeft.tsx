import Link from 'next/link';
import { FiGithub, FiTwitter, FiMail, FiLinkedin } from 'react-icons/fi'
import { RxDiscordLogo } from 'react-icons/rx'
import { display } from '../libs/types';



export default function SocialsLeft({ display }: display) {
    return (
        <div className={" hidden md:block md:fixed bottom-0 md:left-2 lg:left-14 font-chivo "}>
            <div className={` flex-col  justify-center items-center ease-out transition-all duration-500 delay-1200 ${display ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'}`}>
                <div className='flex justify-center mb-4'>
                    <div className='h-20 bg-white ' style={{ width: '1px' }}>
                    </div>
                </div>

                <div className={`font-chivo text-light-200 `}>
                    <SocialIcon Icon={FiGithub} link={'https://github.com/fusionxx23'}/>
                    <SocialIcon Icon={RxDiscordLogo} link={'https://discord.gg/XEPb5da9tx'}/>
                    <SocialIcon Icon={FiTwitter} link={'https://twitter.com/tarpley_travis'}/>
                    <SocialIcon Icon={FiMail} />
                    <SocialIcon Icon={FiLinkedin} />
                </div>

                <div className='flex justify-center mt-4'>
                    <div className='h-20 bg-white ' style={{ width: '1px' }}>
                    </div>
                </div>
            </div>

        </div>
    )
}

function SocialIcon({ Icon, link }: { Icon: any, link?: string }) {
    return (
        <div className='px-10 hover:scale-125 py-4 cursor-pointer hover:-translate-y-1 hover:text-light-100 transition-all ease-out'>
            <Link href={link ? link : ''}>
                <Icon className='' size={20} />
            </Link>
        </div>
    )
}
