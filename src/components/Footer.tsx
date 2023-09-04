function Footer() {
  const date = new Date().getFullYear().toString();
  return (
    <div className="w-full py-4 border-t-[1px] border-LightAccent flex justify-center text-secondary dark:text-BgWhite">
      <small>Copyright &copy;, {date}</small>
    </div>
  );
}

export default Footer;
