import { $, component$, useContext } from '@builder.io/qwik';
import ImgLogo from '~/media/img/navigation/logo.svg?jsx';
import { NavigationLinkCard } from '../cards';
import {
  BlueMailIcon,
  BlueMapIcon,
  BluePhoneIcon,
  YellowCloseIcon
} from '../icons';
import { WhiteCloseIcon } from '../icons/white-close-icon';
import type { NavigationLink } from './model';
import type { NavigationState } from './navigation.context';
import { NavigationContext } from './navigation.context';

export const Navigation = component$((props: { open: boolean }) => {
  const navigationLinks: NavigationLink[] = [
    {
      heading: 'Lösungen',
      path: '/solutions',
      text: 'Alles aus einer Hand'
    },
    {
      heading: 'Qualität',
      path: '/quality',
      text: 'Auf den Punkt abgestimmt'
    },
    {
      heading: 'Karriere',
      path: '/career',
      text: 'Geprägt durch Menschen'
    },
    {
      heading: 'Über uns',
      path: '/about',
      text: 'Motiviert von Werten'
    }
  ];

  const navigation = useContext<NavigationState>(NavigationContext);

  const closeMenu$ = $(() => (navigation.isOpen = false));

  return (
    <div
      class={`${
        props.open ? 'block' : 'hidden'
      } fixed top-0 z-40 w-full bg-primary pb-12 pt-6 shadow-xl lg:pb-24`}
    >
      <div class='container mx-auto flex flex-col gap-y-10 lg:gap-y-20'>
        <div class='flex flex-col justify-between lg:flex-row'>
          <a href='/'>
            <ImgLogo class='mx-auto h-fit w-32 lg:mx-0 lg:w-44' />
          </a>
          <div
            class='my-auto hidden cursor-pointer flex-row gap-x-2 hover:opacity-75 md:flex'
            onClick$={() => closeMenu$()}
          >
            <WhiteCloseIcon />
            <div class='my-auto text-lg font-bold leading-5 text-white'>
              Schließen
            </div>
          </div>
        </div>

        <div class='flex flex-col gap-y-14'>
          <div class='container mx-auto grid grid-cols-2 gap-5 px-7 lg:grid-cols-4 lg:gap-10 lg:px-0'>
            {navigationLinks.map((navigationLink, key) => (
              <NavigationLinkCard link={navigationLink} key={key} />
            ))}
          </div>

          <div class='flex justify-center'>
            <a
              href='/contact'
              class='w-fit rounded bg-secondary-900 px-14 py-5 text-lg font-bold text-white hover:bg-white hover:text-secondary-900'
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>

        <div class='flex flex-row justify-between px-10 lg:hidden'>
          <div class='flex flex-row gap-x-5'>
            <a
              href='tel:+49721935163052'
              target='_self'
              class='relative h-14 w-14 rounded-full bg-white shadow-lg'
            >
              <div class='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>
                <BluePhoneIcon />
              </div>
            </a>
            <a
              href='mailto:info@co-IT.eu'
              target='_blank'
              class='relative h-14 w-14 rounded-full bg-white shadow-lg'
            >
              <div class='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>
                <BlueMailIcon />
              </div>
            </a>
            <a
              href='https://g.page/communicativeIT?share'
              target='_blank'
              class='relative h-14 w-14 rounded-full bg-white shadow-lg'
            >
              <div class='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>
                <BlueMapIcon />
              </div>
            </a>
          </div>

          <div
            class='relative h-14 w-14 rounded-full bg-white shadow-lg'
            onClick$={() => closeMenu$()}
          >
            <div class='absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4'>
              <YellowCloseIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
