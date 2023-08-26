import Heading from '@/components/Heading';
import Nav from './Nav';

function Header() {
  return (
    <header>
      <Heading />
      <Nav
        className="flex justify-between text-base font-semibold mx-6 my-5"
        navClassName={({isActive}) =>
          isActive ? 'font-semibold text-rose-600' : ''
        }
      />
    </header>
  );
}

export default Header;
