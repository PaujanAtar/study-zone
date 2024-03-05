import React from "react";
import Link from "next/link";

const Footer = () => {
  const navigations = [
    { name: "Study Destinations", link: "study-destinations" },
    { name: "Services", link: "services" },
    { name: "English Test", link: "english-test", hasImage: true },
    { name: "Events", link: "events" },
    { name: "Insights", link: "insights" },
    { name: "About Us", link: "about-us" },
  ];

  return (
    <footer className="rounded-tl-[72px] rounded-tr-[72px] bg-[#EFEFE8] text-[#191919]">
      <div className="container">
        {/* ----------------------------------------------------------------------------------------- */}

        <div className="grid grid-cols-4 gap-[50px] py-[72px] md:flex md:flex-col">
          {/* ----------------------------------------------------------------------------------------- */}

          <div>
            <img
              className="w-[240px]"
              src="https://www.studyzone.co.id/wp-content/uploads/2023/07/Logo-Studyzone.png"
              alt="Logo"
            />
            <h2 className="text-[14px]">
              Your trusted international education consultant
            </h2>
          </div>

          {/* ----------------------------------------------------------------------------------------- */}

          <div>
            <h2 className="text-xl font-semibold">Central jakarta Offce</h2>
            <h3 className="mt-[12px]">
              Jl. Cideng Timur No. 79 Cideng, Kec. Gambir, Jakarta Pusat –
              Indonesia
            </h3>
            <h2 className=" mt-[12px] text-xl font-semibold">
              North jakarta Offce
            </h2>
            <h3 className="mt-[12px]">
              Ruko Elang Laut Blok B No.39, Pantai Indah Kapuk (PIK), Jakarta
              Utara – Indonesia
            </h3>
          </div>

          {/* ----------------------------------------------------------------------------------------- */}

          <div className="flex flex-col gap-[12px]">
            <h1 className="text-xl font-medium">Contact Us</h1>
            <h2 className="text-xl font-semibold">Email</h2>
            <h3>info@studyzone.co.id</h3>
            <h2 className="text-xl font-semibold">Office Phone</h2>
            <h3>+62 (21) 386 8383</h3>
            <a href="wa.me/+628158833855">
              <div className="flex items-center gap-[8px]">
                <img
                  src="/wa_footer.png"
                  alt="Whatsapp"
                  className="h-[20px] w-[20px]"
                />
                <h2 className="text-xl font-semibold">Counselor 1</h2>
              </div>
              <h3>+62 815-8833-855</h3>
            </a>
            <a href="wa.me/+62895622562225">
              <div className="flex items-center gap-[8px]">
                <img
                  src="/wa_footer.png"
                  alt="Whatsapp"
                  className="h-[20px] w-[20px]"
                />
                <h2 className="text-xl font-semibold">Counselor 2</h2>
              </div>
              <h3>+62 895-6225-62225</h3>
            </a>
          </div>

          {/* ----------------------------------------------------------------------------------------- */}

          <div className="flex flex-col gap-[12px]">
            <h1 className="text-xl font-medium">Contact Us</h1>
            {navigations.map((nav, i) => (
              <Link key={i} href={nav.link}>
                {nav.name}
              </Link>
            ))}
          </div>

          {/* ----------------------------------------------------------------------------------------- */}
        </div>

        {/* ----------------------------------------------------------------------------------------- */}

        <div className="pb-[13px]">
          <hr className="border-[1px] border-black" />
          <div className="flex flex-row justify-between py-[42px]">
            <div>
              <h1>&copy; 2023 Studyzone. All rights Reserved</h1>
            </div>
            <div className="flex flex-row gap-[24px]">
              <a href="facebook.com">
                <img src="/facebook.png" alt="facebook" />
              </a>
              <a href="instagram.com">
                <img src="/instagram.png" alt="instagram" />
              </a>
              <a href="linkedin.com">
                <img src="/linkedin.png" alt="linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
