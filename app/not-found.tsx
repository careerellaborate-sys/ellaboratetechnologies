import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-dark flex items-center justify-center text-white">
      <div className="text-center px-4">
        <div className="text-8xl font-bold text-brand-blue mb-4">404</div>
        <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="btn-cta">
          Return Home
        </Link>
      </div>
    </div>
  );
}
