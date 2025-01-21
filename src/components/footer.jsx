import React, { useEffect, useRef } from 'react'
import ScrollReveal from "scrollreveal"
const Footer  = () =>  {
 const titleRef = useRef(null);
  const titlRef = useRef(null);
 useEffect(() => {
    ScrollReveal().reveal(titlRef.current, {
      origin: 'top',
      distance: '80px',
      duration: 1000,
      delay: 300,
      easing: 'ease',
      reset: false,
    });
     ScrollReveal().reveal(titleRef.current, {
      origin: 'top',
      distance: '80px',
      duration: 1000,
      delay: 300,
      easing: 'ease',
      reset: false,
    });
  })
  return (
    <footer className="bg-[2A4E8D] text-white px-28 py-16 xl:px-0 w-full  ">
      <div ref={titlRef} className="px-20 xl:px-12 nb:px-5 grid grid-cols-4 gap-8 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 sm:grid-cols-1">
       
        <div>
          <h4 className="text-xl font-semibold mb-4 text-[#F7EF8A]">Info</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <button
            
                className="hover:text-white"
              >
                Asosiy
              </button>
            </li>
            <li>
              <button
               
                className="hover:text-white"
              >
               Men Haqimda
              </button>
            </li>
            <li>
              <a href="" className="hover:text-white">
               Servis
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="" className="hover:text-white">
             Bog`lanish
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold text-[#F7EF8A] mb-4">Servislar</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href="" className="hover:text-white">Pedagog</a></li>
            <li><a href="" className="hover:text-white">Dizayner</a></li>
            <li><a href="" className="hover:text-white">Rassom</a></li>
            <li><a href="" className="hover:text-white">Libos Dizayneri</a></li>
            <li><a href="" className="hover:text-white">Qalam Ustasi</a></li>
            <li><a href="" className="hover:text-white">Libos Rassomi</a></li>
          </ul>
        </div>

        {/* Legal Section */}
        <div>
          <h4 className="text-xl font-semibold text-[#F7EF8A] mb-4">Bog`lanish</h4>
          <ul className="space-y-2 text-gray-400">
            <li><a href=""className="hover:text-white">Telegram</a></li>
            <li><a href="" className="hover:text-white">Instagram</a></li>
            
         
          </ul>
        </div>

        {/* Newsletter Section */}
        <div>
          <h4 className="text-xl font-semibold text-[#F7EF8A] mb-4">Email</h4>
          <p className="text-gray-400 mb-4">
           Sen hamma narsani uddalaysan
          </p>
          <form className="flex flex-col gap-4">
            <button className="p-3 rounded bg-transparent border border-gray-500 text-white placeholder-gray-400 focus:outline-none"
            > fotixovashaxzoda@icloud.com</button>
            <button
              type="submit"
              className="p-3 rounded bg-white text-[#10182F] hover:bg-gray-300 transition"
            >
              Bosh Sahifaga O`tish`
            </button>
          </form>
          <div className="flex space-x-4 mt-6">
            <a href="" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="text-gray-400 hover:text-white">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="text-gray-400 hover:text-white">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
