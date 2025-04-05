const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-8">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Weather Dashboard. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
