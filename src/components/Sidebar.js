import React from 'react'


const Sidebar = () => {
  return (
    <aside
      class="bg-white shadow-xl outline outline-offset-2 outline-3 outline-[#A020F0]  box-border hidden lg:block transition-transform duration-300 ease-in-out bottom-0 flex-shrink-0 w-64 max-h-screen-[calc(100vh-88px)] left-0 top-0 overflow-hidden sticky z-10 transform-none"
      aria-label="Sidenav"
      id="drawer-navigation"
    >

      <div class=" pt-8 pb-20 px-3 h-full bg-white dark:bg-gray-800">

        {/* sidebar items */}
        <ul class="space-y-6">

          {/* Dashboard */}
          <li>
            <a
              href="/dashboard"
              class="flex items-center p-2 text-base font-medium text-[#A020F0] hover:bg-gray-100  rounded-lg dark:text-white dark:hover:bg-gray-700 group"
            >
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 14h6m-3 3v-6M1.857 1h4.286c.473 0 .857.384.857.857v4.286A.857.857 0 0 1 6.143 7H1.857A.857.857 0 0 1 1 6.143V1.857C1 1.384 1.384 1 1.857 1Zm10 0h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857h-4.286A.857.857 0 0 1 11 6.143V1.857c0-.473.384-.857.857-.857Zm-10 10h4.286c.473 0 .857.384.857.857v4.286a.857.857 0 0 1-.857.857H1.857A.857.857 0 0 1 1 16.143v-4.286c0-.473.384-.857.857-.857Z" />
              </svg>

              <span class="ml-3">Dashboard</span>
            </a>
          </li>

          {/* Activation */}
          <li>
            <a
              href="/activation"
              class="flex items-center p-2 text-base font-medium text-gray-900 hover:text-[#A020F0] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2" />
              </svg>

              <span class="ml-3">Activation</span>
            </a>
          </li>

          {/* License key */}
          <li>
            <a
              href="/license"
              class="flex items-center p-2 text-base font-medium text-gray-900 hover:text-[#A020F0] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >

              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 10h3.439a.991.991 0 0 1 .908.6 3.978 3.978 0 0 0 7.306 0 .99.99 0 0 1 .908-.6H17M1 10v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6M1 10l2-9h12l2 9" />
              </svg>

              <span class="ml-3">License key</span>
            </a>
          </li>

          {/* Wallet */}
          <li>
            <a
              href="/wallet"
              class="flex items-center p-2 text-base font-medium text-gray-900 hover:text-[#A020F0] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.905 1.316 15.633 6M18 10h-5a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5m0-5a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1m0-5V7a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h15a1 1 0 0 0 1-1v-3m-6.367-9L7.905 1.316 2.352 6h9.281Z" />
              </svg>

              <span class="ml-3">Wallet</span>
            </a>
          </li>

          {/* Payout */}
          <li>
            <a
              href="/payout"
              class="flex items-center p-2 text-base font-medium text-gray-900 hover:text-[#A020F0] rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            >
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 6V2a.97.97 0 0 0-.933-1H5.828a2 2 0 0 0-1.414.586L1.586 4.414A2 2 0 0 0 1 5.828V18a.969.969 0 0 0 .933 1H14a1 1 0 0 0 1-1M6 1v4a1 1 0 0 1-1 1H1m6 6h9m-1.939-2.768L16.828 12l-2.767 2.768" />
              </svg>

              <span class="ml-3">Payout</span>
            </a>
          </li>


        </ul>

        <ul
          class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700"
        >
          {/* Support */}
          <li>
            <a
              href="/support"
              class="flex items-center p-2 text-base font-medium text-gray-900 hover:text-[#A020F0] rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5" />
              </svg>

              <span class="ml-3">Support</span>
            </a>
          </li>

        </ul>

      </div>




    </aside>
  )
}

export default Sidebar