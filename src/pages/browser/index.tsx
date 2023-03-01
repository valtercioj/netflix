import Movie from "@/components/Movie";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Avatar1 from "public/assets/avatar1.png";
import Avatar2 from "public/assets/avatar2.png";
import Avatar3 from "public/assets/avatar3.png";
import Avatar4 from "public/assets/avatar4.png";
import Avatar5 from "public/assets/avatar5.png";
import React, { useState } from "react";
import {
  AiOutlineSearch,
  AiFillBell,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import { BsInstagram, BsYoutube } from "react-icons/bs";
export default function Browser() {
  const [page, setPage] = useState(1);
  const [avatar, setAvatar] = useState(Avatar1);

  const variants = {
    hidden: { scale: 1.2, opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      className="h-screen w-screen flex flex-col items-center"
      variants={variants}
      initial="hidden"
      animate="show"
    >
      <div
        className={
          page === 2
            ? "flex w-full mt-8 ml-12 transition-colors duration-700 z-10 bg-gradient-to-t from-transparent to-[#01010199]"
            : "flex w-full mt-8 ml-12"
        }
      >
        <Link href="/">
          <svg
            viewBox="0 0 111 30"
            data-uia="netflix-logo"
            className="h-9 w-24 fill-red-logo"
            aria-hidden="true"
            focusable="false"
          >
            <g id="netflix-logo">
              <path
                d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                id="Fill-14"
              ></path>
            </g>
          </svg>
        </Link>
        {page === 2 && (
          <div className="flex justify-between w-[90vw] px-8">
            <div className="flex gap-4 items-center text-white">
              <span className="hidden md:block">Inicio</span>
              <span>Séries</span>
              <span>Filmes</span>
              <span className="hidden md:block">Minha Lista</span>
            </div>
            <div className="flex gap-4 items-center text-white text-xl">
              <span className="hidden md:block">
                <AiOutlineSearch />
              </span>
              <span>
                <AiFillBell />
              </span>

              <Image
                src={avatar}
                alt="Netflix"
                className="w-[6vw] md:w-[2vw] rounded-md"
              />

              <div className="relative inline-block text-left">
                <div>
                  <svg
                    className="w-4 h-4 ml-2 hover:cursor-pointer"
                    fill="white"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    type="button"
                    onClick={toggleMenu}
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                {/* Dropdown menu */}
                <div
                  className={`${
                    isOpen ? "block" : "hidden"
                  } origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-gray ring-1 ring-black ring-opacity-5`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <div className="py-1" role="none">
                    <span
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:cursor-pointer"
                      onClick={() => {
                        setPage(page - 1);
                        setIsOpen(false);
                      }}
                    >
                      Voltar
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {page === 1 && (
        // crie uma animação com tailwind que começe na escala 50 e vá para 100
        <div className="flex flex-col w-full h-full items-center">
          <h1 className="font-medium text-4xl md:text-5xl text-white my-14 md:my-20">
            Quem está assistindo?
          </h1>
          <div className="grid grid-cols-5 gap-x-6 px-4">
            <div className="flex flex-col items-center">
              <Image src={Avatar1} alt="Netflix" className="w-[10vw]" />
              <span
                className="font-medium text-xl text-gray2 hover:text-white hover:underline hover:cursor-pointer"
                onClick={() => {
                  setAvatar(Avatar1);
                  setPage(page + 1);
                }}
              >
                Pessoa 1
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Avatar2} alt="Netflix" className="w-[10vw]" />
              <span
                className="font-medium text-xl text-gray2 hover:text-white hover:underline hover:cursor-pointer"
                onClick={() => {
                  setAvatar(Avatar2);
                  setPage(page + 1);
                }}
              >
                Pessoa 2
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Avatar3} alt="Netflix" className="w-[10vw]" />
              <span
                className="font-medium text-xl text-gray2 hover:text-white hover:underline hover:cursor-pointer"
                onClick={() => {
                  setAvatar(Avatar3);
                  setPage(page + 1);
                }}
              >
                Pessoa 3
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Avatar4} alt="Netflix" className="w-[10vw]" />
              <span
                className="font-medium text-xl text-gray2 hover:text-white hover:underline hover:cursor-pointer"
                onClick={() => {
                  setAvatar(Avatar4);
                  setPage(page + 1);
                }}
              >
                Pessoa 4
              </span>
            </div>
            <div className="flex flex-col items-center">
              <Image src={Avatar5} alt="Netflix" className="w-[10vw]" />
              <span
                className="font-medium text-xl text-gray2 hover:text-white hover:underline hover:cursor-pointer"
                onClick={() => {
                  setAvatar(Avatar5);
                  setPage(page + 1);
                }}
              >
                Pessoa 5
              </span>
            </div>
          </div>
        </div>
      )}
      {page === 2 && (
        <div className="flex flex-col w-full h-full items-center mt-8">
          <Movie />

          <h1 className="text-white flex w-full pl-8 mt-8 mb-4 text-xl font-medium">
            Continuar assistindo como Pessoa 1
          </h1>
          <Movie />
          <h1 className="text-white flex w-full pl-8 mt-8 mb-4 text-xl font-medium">
            Em alta
          </h1>
          <Movie />
          <h1 className="text-white flex w-full pl-8 mt-8 mb-4 text-xl font-medium">
            Só na Netflix
          </h1>
          <Movie />
          <div className="flex flex-col w-full mt-16 mb-24 px-40">
            <div className="flex gap-x-4 text-white text-2xl">
              <span>
                <AiFillFacebook />
              </span>
              <span>
                <BsInstagram />
              </span>

              <span>
                <AiOutlineTwitter />
              </span>
              <span>
                <BsYoutube />
              </span>
            </div>
            <div className="flex justify-around mb-14 mt-8">
              <div className="flex flex-col text-sm text-gray2 font-normal">
                <span>Idioma e legendas</span>
                <span>Imprensa</span>
                <span>Privacidade</span>
                <span>Entre em contato</span>
              </div>
              <div className="flex flex-col text-sm text-gray2 font-normal">
                <span>Autodescrição</span>
                <span>Relações com investidores</span>
                <span>Avisos legais</span>
              </div>
              <div className="flex flex-col text-sm text-gray2 font-normal">
                <span>Centro de ajuda</span>
                <span>Carreiras</span>
                <span>Preferências de cookies</span>
              </div>
              <div className="flex flex-col text-sm text-gray2 font-normal">
                <span>Cartão pré-pago</span>
                <span>Termos de uso</span>
                <span>Informações corporativas</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
}
