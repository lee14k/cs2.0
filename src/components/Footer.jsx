const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Services", href: "/Services" },
    { name: "Accessibility", href: "/accessibility" },
    { name: "Privacy Policy", href: "/privacypolicy" },
  ],
};

export default function Footer() {
  return (
    <footer class="bg-white">
      <div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} class="pb-6">
              <a
                href={item.href}
                class="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div class="mt-10 flex justify-center space-x-10"></div>
        <p class="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2023 Conflict Solutions, All rights reserved.
        </p>
      </div>
    </footer>
  );
}
