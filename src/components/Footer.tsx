'use client'

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Volodymyr Vlasov. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
