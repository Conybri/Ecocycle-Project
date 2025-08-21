import EcocycleLogo from "../assets/ecocycle-logo.png"; // Ajusta la ruta según tu estructura

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12 py-6">
      <div className="container mx-auto flex flex-col items-center gap-2">
        <img src={EcocycleLogo} alt="Ecocycle Logo" className="h-10" />
        <span className="text-gray-500 text-sm">© {new Date().getFullYear()} Ecocycle</span>
      </div>
    </footer>
  );
}
