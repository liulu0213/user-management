const curDate = new Date();
const curYear = curDate.getFullYear();
const Footer = () => (
  <footer className="footer mt-auto text-center bg-dark text-white">
    {curYear}
  </footer>
);

export default Footer;
