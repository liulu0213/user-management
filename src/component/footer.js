const curDate = new Date();
const curYear = curDate.getFullYear();
const Footer = () => (
  <footer className="footer mt-auto text-center bg-secondary text-white">
    {curYear}
  </footer>
);

export default Footer;
