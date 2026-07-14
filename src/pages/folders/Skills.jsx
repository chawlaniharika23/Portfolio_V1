import { useState } from "react";
import BackButton from "../../components/BackButton";

import folderWallpaper from "../../assets/about/grid-paper.jpg";
import { certificates } from "../../data/certificates";

function Skills({ onBack }) {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <div
      className="min-h-screen bg-repeat"
      style={{
        backgroundImage: `url(${folderWallpaper})`,
        backgroundSize: "600px",
      }}
    >
      <BackButton onClick={onBack} />

      <div className="max-w-7xl mx-auto px-16 py-12">

        {/* Heading */}

        <h1
          className="
            text-center
            text-[110px]
            font-extrabold
            uppercase
            leading-[0.9]
            mb-20
            text-transparent
            stroke-heading
          "
        >
          Skills and
          <br />
          Certifications
        </h1>

        {/* Certificates */}

        <div className="space-y-24">

          {certificates.map((certificate) => (

            <div
              key={certificate.title}
              className="
                flex
                justify-between
                items-start
                gap-20
              "
            >

              {/* LEFT */}

              <div className="flex-1">

                <h2
                  className="
                    text-[34px]
                    font-bold
                    text-[#EF3D3D]
                    mb-5
                  "
                >
                  • {certificate.title}
                </h2>

                <p className="text-2xl font-bold mb-3">
                  Skills Learned
                </p>

                <ul
                  className="
                    list-disc
                    ml-8
                    space-y-1
                    text-xl
                  "
                >
                  {certificate.skills.map((skill) => (

                    <li key={skill}>
                      {skill}
                    </li>

                  ))}
                </ul>

                <div className="mt-8 text-lg space-y-1">

                  <p>
                    <span className="font-bold">
                      Issuer :
                    </span>{" "}
                    {certificate.issuer}
                  </p>

                  <p>
                    <span className="font-bold">
                      Year :
                    </span>{" "}
                    {certificate.year}
                  </p>

                </div>

              </div>

              {/* RIGHT */}

              <div className="flex flex-col items-center">

                <img
                  src={certificate.image}
                  alt={certificate.title}
                  draggable={false}
                  onClick={() =>
                    setSelectedCertificate(certificate)
                  }
                  className="
                    w-[420px]
                    rounded-xl
                    shadow-xl
                    cursor-pointer
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-2xl
                  "
                />

                <button
                  onClick={() =>
                    setSelectedCertificate(certificate)
                  }
                  className="
                    mt-5
                    px-6
                    py-3
                    rounded-full
                    bg-[#EF3D3D]
                    text-white
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-[#d93030]
                  "
                >
                  View Certificate
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* Certificate Modal */}

      {selectedCertificate && (

        <div
          className="
            fixed
            inset-0
            bg-black/70
            backdrop-blur-sm
            flex
            items-center
            justify-center
            z-[999]
          "
          onClick={() =>
            setSelectedCertificate(null)
          }
        >

          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={() =>
                setSelectedCertificate(null)
              }
              className="
                absolute
                -top-5
                -right-5
                w-12
                h-12
                rounded-full
                bg-white
                text-3xl
                shadow-xl
                hover:scale-110
                transition
              "
            >
              ×
            </button>

            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="
                max-w-[85vw]
                max-h-[85vh]
                rounded-xl
                shadow-2xl
              "
            />

          </div>

        </div>

      )}

    </div>
  );
}

export default Skills;