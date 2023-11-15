import { createSignal, For, Show } from 'solid-js';

function Navbar() {
  const [isOpen, setIsOpen] = createSignal(false);
  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Expertise', path: '/Expertise' },
    { name: 'Neutrals', path: '/Neutrals' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav class="bg-white shadow">
      <div class="mx-auto px-24 sm:px-16 lg:px-18 mx-24 my-24 listcontain">
        <div class="flex justify-between">
          <div class="flex">
              <div className="flex flex-shrink-0 items-center logocontain">
                <img
                    className="h-40 w-40 flex-shrink-0"
                    src="/cslogo2.png"
                    alt="Your Company"
                  />
                </div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8"></div>
            <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
              <For each={links}>
                {(link) => (
                  <a
                    href={link.path}
                    class="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    {link.name}
                  </a>
                )}
              </For>
            </div>
          </div>

          {/* Additional icons or elements can be added here */}
          
          <div class="-mr-2 flex items-center flex-col sm:hidden">
            {/* Mobile menu button */}
            <button
              type="button"
              class="relative inline-flex  items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setIsOpen(!isOpen())}
            >
              <span class="sr-only">Open main menu</span>
              {isOpen() ? (
                <img
                    className="h-40 w-40"
                    src="/cslogo2.png"
                    alt="Your Company"
                  />
              ) : (
                <img
                    className="h-40 w-40 flex-shrink-0"
                    src="/cslogo2.png"
                    alt="Your Company"
                  /> /* Replace with your menu icon */
              )}
            </button>
          </div>
        </div>
      </div>

      <Show when={isOpen()}>
        <div class="sm:hidden">
          <div class="space-y-1 pb-3 pt-2">
            <For each={links}>
              {(link) => (
                <a
                  href={link.path}
                  class="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
                >
                  {link.name}
                </a>
              )}
            </For>
          </div>
        </div>
      </Show>
    </nav>
  );
}

export default Navbar;
