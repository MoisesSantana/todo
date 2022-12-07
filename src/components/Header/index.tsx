import Logo from '../../assets/Logo.svg';

export function Header() {
  return (
    <header className="w-screen h-52 bg-neutral-900 flex justify-center align-center">
      <img className="w-20" src={Logo} alt="logo" />
    </header>
  );
}
