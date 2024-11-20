import LoginForm from '@/components/forms/login';
import SocialIcon from '@/components/icons/social';
import { Link } from '@nextui-org/react';
import Image from 'next/image';

export default function LoginPage() {
  return (
    // min-h calculado quitandole navbar
    <div className='grid place-content-center space-y-10 min-h-[calc(100vh-93px)] text-white'>
      <Image
        src="/imgs/auth-bg.jpg"
        alt="Background"
        fill
        className="z-0 absolute top-0 left-0 w-full h-full object-cover blur-lg"
      />

      <div className='relative z-10 space-y-4'>
        <div className='space-y-10'>
          <h1 className="text-3xl font-semibold text-center">KlowHub - Acceso</h1>
          <div>
            <p>Explora, aprende, enseña y conecta. </p>
            <p>Crea tu cuenta en KlowHub y accede a un mundo de posibilidades.</p>
          </div>
        </div>
        <LoginForm />
        <div className='space-y-4'>
          <p className='text-center font-semibold'>O continuar con:</p>
          <div className='flex flex-row justify-center gap-4'>
            <Link href={'#'} className='border-1 border-gray-300 rounded-full px-2 py-2'>
              <SocialIcon icon='github' />
            </Link>
            <Link href={'#'} className='border-1 border-gray-300 rounded-full px-2 py-2'>
              <SocialIcon icon='facebook' />
            </Link>
            <Link href={'#'} className='border-1 border-gray-300 rounded-full px-2 py-2'>
              <SocialIcon icon='google' />
            </Link>
          </div>
        </div>
        <p className='text-center'>
          ¿No tienes cuenta? {" "}
          <Link href={'/register'} className='font-bold text-sky-300'>
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}
