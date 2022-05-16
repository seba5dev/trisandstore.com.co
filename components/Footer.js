export default function Footer() {
  return (
    <footer className="footer footer-center p-10 bg-base-300 bg-opacity-75 text-base-100">
      <div>
        <span className="text-xl font-semibold">Trisand Bordados</span>
        <p>
          Copyright © {new Date().getUTCFullYear()} - Todos los derechos
          reservados
        </p>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/#/" rel="noopener noreferrer"></a>
          <a href="https://www.instagram.com/#" rel="noopener noreferrer"></a>
        </div>
      </div>
    </footer>
  );
}
