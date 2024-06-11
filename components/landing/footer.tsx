import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-trasparent dark:bg-neutral-900 py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">© 2024 PejuangKorea. All rights reserved.</p>
        <div className="mt-2">
          <Link href="/privacy-policy" 
                className="text-blue-500 hover:underline">
             Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link href="/terms-of-service"
                className="text-blue-500 hover:underline">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
