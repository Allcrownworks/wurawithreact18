const Footer = () => {
  return (
    <footer className="footer px-2 text-xs md:text-lg">
      <p className="gap-2 flex">
        <span className="font-bold text-slate-600">Copyright</span>
        <span className="text-slate-700">Wura © {new Date().getFullYear()} </span>{" "}
      </p>
    </footer>
  );
};

export default Footer;
