import Logo from '../../assets/Logo.svg';

export function Header() {
  return (
    <header className="w-screen h-52 bg-stone-900 flex justify-center items-center">
      <img src={Logo} alt="logo" />
    </header>
  );
}
