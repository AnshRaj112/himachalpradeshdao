"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#708090] text-white px-6 md:px-20 py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link href="/gallery" className="hover:text-gray-300">Gallery</Link></li>
            <li><Link href="/links" className="hover:text-gray-300">Links</Link></li>
          </ul>
        </div>

        {/* Notifications */}
        <div>
          <h3 className="font-bold text-lg mb-4">Notifications</h3>
          <ul className="space-y-2">
            <li><Link href="/notifications/circulars" className="hover:text-gray-300">Circulars</Link></li>
            <li><Link href="/notifications/events" className="hover:text-gray-300">Events</Link></li>
          </ul>
        </div>

        {/* Books */}
        <div>
          <h3 className="font-bold text-lg mb-4">Books</h3>
          <ul className="space-y-2">
            <li><Link href="/books/ebooks" className="hover:text-gray-300">E-Books</Link></li>
            <li><Link href="/books/hardcover" className="hover:text-gray-300">Hardcover</Link></li>
          </ul>
        </div>

        {/* RTI */}
        <div>
          <h3 className="font-bold text-lg mb-4">RTI</h3>
          <ul className="space-y-2">
            <li><Link href="/rti/apply" className="hover:text-gray-300">Apply RTI</Link></li>
            <li><Link href="/rti/status" className="hover:text-gray-300">RTI Status</Link></li>
          </ul>
        </div>

        {/* Association */}
        <div>
          <h3 className="font-bold text-lg mb-4">Association</h3>
          <ul className="space-y-2">
            <li><Link href="/association/team" className="hover:text-gray-300">Our Team</Link></li>
            <li><Link href="/association/membership" className="hover:text-gray-300">Membership</Link></li>
          </ul>
        </div>

        {/* Member */}
        <div>
          <h3 className="font-bold text-lg mb-4">Member</h3>
          <ul className="space-y-2">
            <li><Link href="/member/benefits" className="hover:text-gray-300">Member Benefits</Link></li>
            <li><Link href="/member/renew" className="hover:text-gray-300">Renew Membership</Link></li>
          </ul>
        </div>

        {/* Archives */}
        <div>
          <h3 className="font-bold text-lg mb-4">Archives</h3>
          <ul className="space-y-2">
            <li><Link href="/archives/newsletters" className="hover:text-gray-300">Newsletters</Link></li>
            <li><Link href="/archives/events" className="hover:text-gray-300">Past Events</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li><Link href="/contact" className="hover:text-gray-300">Contact Page</Link></li>
          </ul>
        </div>
      </div>

      {/* Separator */}
      <div className="border-t border-gray-400 my-8"></div>

      {/* Disclaimer */}
      <div className="text-sm leading-6 text-justify">
        <p>
          Disclaimer: All the material hosted on this website is for information purposes only. 
          Though all efforts have been made to ensure the accuracy and currency of the contents on this site, 
          the same should not be construed as a statement of law or used for any legal purposes. 
          Association accepts no responsibility in relation to the accuracy, completeness, usefulness or otherwise, 
          of the contents. Users are advised to verify/check the information with the relevant Government / department(s) 
          and/or other source(s), and to obtain any professional advice before acting on the information provided in the site. 
          We do not accept any responsibility for loss or damage suffered by any person or body directly or indirectly on any 
          information contained within this website. Links to other websites that have been included on this website are provided 
          for public convenience only. We are not responsible for the contents or reliability of linked websites and do not endorse 
          the view expressed within them. We also do not guarantee the availability of such linked pages at all times.
        </p>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-400 my-6"></div>
      <div className="text-center text-sm">
        <p>© Copyrights All Rights Reserved by Himachalpradeshdao.com {year}</p>
        <p>
          Made by <Link href="https://anshraj.com" target="_blank" className="hover:text-gray-300 underline">anshraj.com</Link>
        </p>
      </div>
    </footer>
  );
}
