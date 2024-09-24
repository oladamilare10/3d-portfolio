const Footer = () => {
  return (
    <div>
        <div className="bg-footer py-4 text-center w-full border-t border-t-gray-500">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} | {"DreyCode"}
          </p>
        </div>
    </div>
  )
}

export default Footer
