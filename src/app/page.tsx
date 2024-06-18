import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const registration =
  "https://docs.google.com/forms/d/e/1FAIpQLSf1qTplup4L1mh8Mlv8Edrtmb6WsfKv3qpgs-_oO-sQAngx_Q/viewform";

const waPsKevin = "https://api.whatsapp.com/send/?phone=6285156326343";
const waPsDaniel = "https://api.whatsapp.com/send/?phone=6282218075558";

const mapCabangBali =
  "https://www.google.com/maps/@-8.684978,115.191756,3a,75y,135.64h,82.39t/data=!3m7!1e1!3m5!1stshoeXzlFXy9Y7ZocBveTg!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fpanoid%3DtshoeXzlFXy9Y7ZocBveTg%26cb_client%3Dmaps_sv.share%26w%3D900%26h%3D600%26yaw%3D135.636870919836%26pitch%3D7.613171239176609%26thumbfov%3D90!7i16384!8i8192?coh=205410&entry=ttu";
const mapCabangPapua =
  "https://www.google.com/maps/@-0.9016933,131.3164105,52m/data=!3m1!1e3?entry=ttu";

export default function Home() {
  return (
    <main className="bg-slate-300 min-h-screen cursor-pointer">
      <Head>
        <title>OPEN HEAVEN LEARNING CENTRE</title>
        <meta name="description" content="Theological School Program" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/*-----NAVBAR-XL-LG-MD-----*/}
      <div className="hidden md:block bg-black text-white font-bold py-4 px-6 w-full fixed">
        <div className="flex justify-start items-center">
          <Image
            src="/logo.png"
            alt="Open Heaven Foundation Logo"
            width={75}
            height={100}
            className="mr-6"
          />
          <h1 className="text-3xl xl:text-4xl">OPEN HEAVEN LEARNING CENTRE</h1>
        </div>
        <div className="flex justify-end gap-8">
          <Link href="#about" className="hover:text-yellow-500">
            ABOUT
          </Link>
          <Link href="#program" className="hover:text-yellow-500">
            PROGRAM
          </Link>
          <Link href="#contact" className="hover:text-yellow-500">
            CONTACT
          </Link>
        </div>
      </div>

      {/*-----NAVBAR-SM-----*/}
      <div className="block md:hidden bg-black text-white font-bold py-4 px-6 w-full fixed">
        <div className="flex justify-center items-center">
          <Image
            src="/logo.png"
            alt="Open Heaven Foundation Logo"
            width={60}
            height={80}
            className="mb-2"
          />
        </div>
        <h1 className="text-lg text-center mb-8">
          OPEN HEAVEN LEARNING CENTRE
        </h1>
        <div className="flex justify-center text-xs gap-8">
          <Link href="#about-sm" className="hover:text-yellow-500">
            ABOUT
          </Link>
          <Link href="#program" className="hover:text-yellow-500">
            PROGRAM
          </Link>
          <Link href="#contact" className="hover:text-yellow-500">
            CONTACT
          </Link>
        </div>
      </div>

      {/*-----CONTENTS-----*/}
      <div className="pt-51 md:pt-44 p-2 md:p-6">
        {/* -----ABOUT-XL-LG-MD----- */}
        <div
          id="about"
          className="hidden md:block bg-indigo-950 rounded-3xl text-white mb-6"
        >
          <div className="grid grid-cols-2">
            <div className="p-6">
              {/* TITLE */}
              <div className="text-2xl lg:text-4xl font-bold mb-2 lg:mb-4">
                <h1 className="text-yellow-500">THEOLOGICAL</h1>
                <h1>
                  SCHOOL
                  <span className="text-yellow-500 text-lg lg:text-2xl font-bold ml-4">
                    ONLINE CLASS
                  </span>
                </h1>
              </div>
              <div className="text-sm lg:text-xl">
                {/* INTRODUCTION */}
                <p className="mb-2 lg:mb-4">
                  Yayasan Open Heaven membuka program kelas{" "}
                  <span className="font-bold">Teologi </span>dan{" "}
                  <span className="font-bold">Pendidikan Agama Kristen </span>
                  yang dapat di konversikan ke jenjang S1 dan S2.
                </p>
                {/* BENEFIT */}
                <h1 className="font-bold text-yellow-500 text-lg lg:text-2xl">
                  BENEFIT :
                </h1>
                <ul className="list-disc ml-5">
                  <li>
                    Kelulusan disertai ijazah Nasional Pendidikan Tinggi
                    terakreditasi.
                  </li>
                  <li>Kelas dilaksanakan secara full online.</li>
                  <li>
                    Kuliah metode block teaching dua minggu dalam satu bulan.
                  </li>
                  <li>Biaya pendidikan terjangkau.</li>
                </ul>
              </div>
            </div>
            <div className="flex">
              <Image
                src="/theological-class.jpg"
                alt="Theological Class"
                width={1280}
                height={720}
                className="rounded-r-3xl w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* -----ABOUT-SM----- */}
        <div
          id="about-sm"
          className="block md:hidden bg-indigo-950 rounded-3xl text-white text-sm p-4 mb-2"
        >
          {/* TITLE */}
          <div className="text-white font-bold text-2xl mb-2">
            <h1 className="text-yellow-500">THEOLOGICAL</h1>
            <h1 className="text-white">
              SCHOOL
              <span className="text-yellow-500 text-sm ml-4">ONLINE CLASS</span>
            </h1>
          </div>
          {/* INTRODUCTION */}
          <p className="mb-2">
            Yayasan Open Heaven membuka program kelas{" "}
            <span className="font-bold">Teologi </span>dan{" "}
            <span className="font-bold">Pendidikan Agama Kristen </span>
            yang dapat di konversikan ke jenjang S1 dan S2.
          </p>
          <div className="flex mb-2">
            <Image
              src="/theological-class.jpg"
              alt="Theological Class"
              width={1280}
              height={720}
              className="rounded-3xl w-full h-auto"
            />
          </div>
          {/* BENEFIT */}
          <h1 className="font-bold text-yellow-500 mb-1">BENEFIT :</h1>
          <ul className="list-disc ml-4">
            <li>
              Kelulusan disertai ijazah Nasional Pendidikan Tinggi
              terakreditasi.
            </li>
            <li>Kelas dilaksanakan secara full online.</li>
            <li>Kuliah metode block teaching dua minggu dalam satu bulan.</li>
            <li>Biaya pendidikan terjangkau.</li>
          </ul>
        </div>

        {/* -----PROGRAM-ALL-RESOLUTION----- */}
        <div
          id="program"
          className="bg-indigo-950 rounded-3xl text-white text-sm p-4 mb-2 md:mb-6"
        >
          <h1 className="text-yellow-500 text-center text-2xl lg:text-4xl font-bold mb-4">
            PROGRAM
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {/* PROGRAM STUDI TEOLOGI S1 */}
            <div className="flex justify-center items-center">
              <div className="bg-black border-2 border-yellow-500 flex flex-col justify-between items-center rounded-3xl px-8 py-4 lg:p-4 w-80 lg:w-64 h-80">
                <div>
                  <h2 className="font-bold text-center text-md lg:text-lg mb-4">
                    Sarjana Teologi (S. Th)
                  </h2>
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                  <div className="border-2 border-white rounded-xl grid grid-cols-2 text-xs font-semibold pl-4 py-2 mb-4">
                    <div>Pendaftaran</div>
                    <div>: Rp 100K</div>
                    <div>SPP / Bulan</div>
                    <div>: Rp 600K</div>
                  </div>
                  <Image
                    src="/toga.png"
                    alt="Toga"
                    width={100}
                    height={50}
                    className="rounded-3xl mb-4"
                  />
                  <Link
                    href={registration}
                    target="_blank"
                    className="bg-slate-500 hover:bg-slate-700 border-2 border-white hover:border-yellow-500 rounded-xl text-center hover:font-bold w-full px-3 py-1"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            </div>

            {/* PROGRAM STUDI PENDIDIKAN AGAMA KRISTEN S1 */}
            <div className="flex justify-center items-center">
              <div className="bg-black border-2 border-yellow-500 flex flex-col justify-between items-center rounded-3xl px-8 py-4 lg:p-4 w-80 lg:w-64 h-80">
                <div>
                  <h2 className="font-bold text-center text-md lg:text-lg mb-4">
                    Sarjana Pendidikan Agama Kristen (S. Pd)
                  </h2>
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                  <div className="border-2 border-white rounded-xl grid grid-cols-2 text-xs font-semibold pl-4 py-2 mb-4">
                    <div>Pendaftaran</div>
                    <div>: Rp 100K</div>
                    <div>SPP / Bulan</div>
                    <div>: Rp 600K</div>
                  </div>
                  <Image
                    src="/toga.png"
                    alt="Toga"
                    width={100}
                    height={50}
                    className="rounded-3xl mb-4"
                  />
                  <Link
                    href={registration}
                    target="_blank"
                    className="bg-slate-500 hover:bg-slate-700 border-2 border-white hover:border-yellow-500 rounded-xl text-center hover:font-bold w-full px-3 py-1"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            </div>

            {/* PROGRAM STUDI TEOLOGI S2 */}
            <div className="flex justify-center items-center">
              <div className="bg-black border-2 border-yellow-500 flex flex-col justify-between items-center rounded-3xl px-8 py-4 lg:p-4 w-80 lg:w-64 h-80">
                <div>
                  <h2 className="font-bold text-center text-md lg:text-lg mb-4">
                    Magister Teologi (M. Th)
                  </h2>
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                  <div className="border-2 border-white rounded-xl grid grid-cols-2 text-xs font-semibold pl-4  py-2 mb-4">
                    <div>Pendaftaran</div>
                    <div>: Rp 100K</div>
                    <div>SPP / Bulan</div>
                    <div>: Rp 800K</div>
                  </div>
                  <Image
                    src="/toga.png"
                    alt="Toga"
                    width={100}
                    height={50}
                    className="rounded-3xl mb-4"
                  />
                  <Link
                    href={registration}
                    target="_blank"
                    className="bg-slate-500 hover:bg-slate-700 border-2 border-white hover:border-yellow-500 rounded-xl text-center hover:font-bold w-full px-3 py-1"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            </div>

            {/* PROGRAM STUDI PENDIDIKAN AGAMA KRISTEN S2 */}
            <div className="flex justify-center items-center">
              <div className="bg-black border-2 border-yellow-500 flex flex-col justify-between items-center rounded-3xl px-8 py-4 lg:p-4 w-80 lg:w-64 h-80">
                <div>
                  <h2 className="font-bold text-center text-md lg:text-lg mb-4">
                    Magister Pendidikan Agama Kristen (M. Pd)
                  </h2>
                </div>

                <div className="flex flex-col justify-center items-center w-full">
                  <div className="border-2 border-white rounded-xl grid grid-cols-2 text-xs font-semibold pl-4  py-2 mb-4">
                    <div>Pendaftaran</div>
                    <div>: Rp 100K</div>
                    <div>SPP / Bulan</div>
                    <div>: Rp 800K</div>
                  </div>
                  <Image
                    src="/toga.png"
                    alt="Toga"
                    width={100}
                    height={50}
                    className="rounded-3xl mb-4"
                  />
                  <Link
                    href={registration}
                    target="_blank"
                    className="bg-slate-500 hover:bg-slate-700 border-2 border-white hover:border-yellow-500 rounded-xl text-center hover:font-bold w-full px-3 py-1"
                  >
                    Daftar Sekarang
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <p className="text-yellow-500 font-bold ml-4">
            Keterangan: Biaya SPP / Bulan belum termasuk biaya lain-lain
          </p>
        </div>

        {/* -----CONTACT-ALL-RESOLUTION----- */}
        <div
          id="contact"
          className="bg-indigo-950 rounded-3xl text-white text-sm p-6"
        >
          <h1 className="text-yellow-500 text-center text-2xl lg:text-4xl font-bold mb-4">
            CONTACT
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* PS. KEVIN */}
            <div className="flex justify-center md:justify-end items-center">
              <div className="bg-black border-2 border-yellow-500 flex flex-col justify-between items-center rounded-3xl p-4 w-80 h-80">
                <h2 className="font-bold text-center text-md lg:text-lg mb-4">
                  Ps. Kevin Zefanya M.Th.
                </h2>
                <div className="flex flex-col justify-center items-center w-full">
                  <Image
                    src="/ps-kevin.png"
                    alt="Ps. Kevin"
                    width={170}
                    height={145}
                    className="rounded-full mb-6"
                  />
                  <Link
                    href={waPsKevin}
                    target="_blank"
                    className="bg-slate-500 hover:bg-slate-700 border-2 border-white hover:border-yellow-500 rounded-xl text-center hover:font-bold w-full px-3 py-1"
                  >
                    Hubungi Via WA
                  </Link>
                </div>
              </div>
            </div>

            {/* PS. DANIEL */}
            <div className="flex justify-center md:justify-start items-center">
              <div className="bg-black border-2 border-yellow-500 flex flex-col justify-between items-center rounded-3xl p-4 w-80 h-80">
                <h2 className="font-bold text-center text-md lg:text-lg mb-4">
                  Ps. Daniel M.Th.
                </h2>
                <div className="flex flex-col justify-center items-center w-full">
                  <Image
                    src="/ps-daniel.png"
                    alt="Ps. Daniel"
                    width={170}
                    height={145}
                    className="rounded-full mb-6"
                  />
                  <Link
                    href={waPsDaniel}
                    target="_blank"
                    className="bg-slate-500 hover:bg-slate-700 border-2 border-white hover:border-yellow-500 rounded-xl text-center hover:font-bold w-full px-3 py-1"
                  >
                    Hubungi Via WA
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -----FOOTER----- */}
      <footer className="bg-black font-semibold text-white text-center text-sm md:text-md p-6">
        <p className="mb-5">&copy; 2024 OPEN HEAVEN LEARNING CENTRE</p>

        <Link
          href={mapCabangBali}
          target="_blank"
          className="flex justify-center items-center hover:text-yellow-500 mb-5"
        >
          <Image
            src="/map.png"
            alt="Map"
            width={24}
            height={24}
            className="mr-2"
          />
          <p>
            Kantor Cabang Bali: Jl.Kertapura Gg.Segina No.25 Pemecutan Klod
            Denpasar
          </p>
        </Link>

        <Link
          href={mapCabangPapua}
          target="_blank"
          className="flex justify-center items-center hover:text-yellow-500"
        >
          <Image
            src="/map.png"
            alt="Map"
            width={24}
            height={24}
            className="mr-2"
          />
          <p>
            Kantor Cabang Papua: Jl. Malibela KM 11 Kota Sorong Papua Barat Daya
          </p>
        </Link>
      </footer>
    </main>
  );
}
