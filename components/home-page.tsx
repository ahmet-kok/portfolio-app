"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Skeleton } from "@nextui-org/skeleton";
import { Card } from "@nextui-org/card";
import info from "@/info.json";

import { Button } from "@/components/ui/button";
import { Header } from "./header";
import Image from "next/image";

export function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isClientLoaded, setIsClientLoaded] = useState(false);
  const [clients, setClients] = useState([
    {
      Name: "Client 1",
      Description: "Description 1",
      Logo: [
        {
          thumbnails: {
            large: {
              url: "/placeholder.svg",
              width: 150,
              height: 50,
            },
          },
        },
      ],
    },
    {
      Name: "Client 2",
      Description: "Description 2",
      Logo: [
        {
          thumbnails: {
            large: {
              url: "/placeholder.svg",
              width: 150,
              height: 50,
            },
          },
        },
      ],
    },
    {
      Name: "Client 3",
      Description: "Description 3",
      Logo: [
        {
          thumbnails: {
            large: {
              url: "/placeholder.svg",
              width: 150,
              height: 50,
            },
          },
        },
      ],
    },
    {
      Name: "Client 4",
      Description: "Description 4",
      Logo: [
        {
          thumbnails: {
            large: {
              url: "/placeholder.svg",
              width: 150,
              height: 50,
            },
          },
        },
      ],
    },
  ]);
  const [projects, setProjects] = useState([
    {
      Name: "Project 1",
      Description: "Description 1",
      Image: [
        {
          thumbnails: {
            small: {
              url: "/placeholder.svg",
              width: 600,
              height: 600,
            },
            large: {
              url: "/placeholder.svg",
              width: 600,
              height: 600,
            },
          },
        },
      ],
    },
    {
      Name: "Project 2",
      Description: "Description 2",
      Image: [
        {
          thumbnails: {
            small: {
              url: "/placeholder.svg",
              width: 600,
              height: 600,
            },
            large: {
              url: "/placeholder.svg",
              width: 600,
              height: 600,
            },
          },
        },
      ],
    },
    {
      Name: "Project 3",
      Description: "Description 3",
      Image: [
        {
          thumbnails: {
            small: {
              url: "/placeholder.svg",
              width: 600,
              height: 600,
            },
            large: {
              url: "/placeholder.svg",
              width: 600,
              height: 600,
            },
          },
        },
      ],
    },
  ]);
  console.log(projects.length);

  useEffect(() => {
    fetch("api/projects")
      .then((res) => res.json())
      .then((json) => setProjects(json))
      .then(() => setIsLoaded(true));
    fetch("api/clients")
      .then((res) => res.json())
      .then((json) => setClients(json))
      .then(() => setIsClientLoaded(true));
  }, []);

  return (
    <div key="1" className="flex flex-col min-h-[100dvh] overflow-hidden">
      <Header />
      <main className="bg-gray-100 dark:bg-gray-800">
        <section className="container mx-auto px-4 py-12 md:py-20 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start space-y-4">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700 dark:text-gray-200">
                Software Engineer
              </div>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-4xl font-bold">
                  JD
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    {info.name} {info.lastname}
                  </h1>
                  <p className="text-gray-500 dark:text-gray-400">
                    I am a skilled software engineer with a passion for building
                    innovative and user-friendly applications.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  View Portfolio
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                  href="#"
                >
                  Contact
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-100 dark:to-gray-950 rounded-lg overflow-hidden">
                <img
                  alt="Rubik's Cube"
                  className="w-full h-full object-cover animate-spin-slow"
                  height={600}
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "600/600",
                    objectFit: "cover",
                  }}
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12 md:py-20 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm font-medium dark:bg-gray-700 dark:text-gray-200">
                Featured Projects
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                My Recent Work
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Take a look at some of my recent projects and see how I've
                brought my clients' ideas to life.
              </p>
            </div>
          </div>
          <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <Skeleton
                  isLoaded={isLoaded}
                  className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-t-lg"
                >
                  <Image
                    alt=""
                    placeholder="blur"
                    blurDataURL={project.Image[0].thumbnails.small.url}
                    width={project.Image[0].thumbnails.large.width}
                    height={project.Image[0].thumbnails.large.height}
                    src={project.Image[0].thumbnails.large.url}
                    className="aspect-video bg-gray-200 dark:bg-gray-800 rounded-t-lg"
                  ></Image>
                </Skeleton>
                <div className="p-4 md:p-6 space-y-2">
                  <Skeleton
                    isLoaded={isLoaded}
                    className="h-5 bg-gray-200 dark:bg-gray-800 rounded-md w-3/4"
                  >
                    <div className="h-5">{project.Name}</div>
                  </Skeleton>
                  <Skeleton
                    isLoaded={isLoaded}
                    className="h-4 bg-gray-200 dark:bg-gray-800 rounded-md w-4/5"
                  >
                    <div className="h-4">{project.Description}</div>
                  </Skeleton>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="container mx-auto px-4 py-12 md:py-20 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl">
                My Design Expertise
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I have a strong background in design and can help bring your
                ideas to life with visually appealing and user-friendly
                interfaces.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 text-left  hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="flex items-center gap-4">
                  <PaletteIcon className="w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-bold">UI Design</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Crafting visually appealing and intuitive user interfaces.
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-4 space-y-2 mt-4">
                  <li>Crafting clean and modern layouts</li>
                  <li>Selecting appropriate color schemes and typography</li>
                  <li>Implementing responsive and accessible design</li>
                  <li>Prototyping and iterating on design concepts</li>
                  <li>
                    Collaborating with developers to ensure seamless
                    implementation
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6 text-left  hover:shadow-lg transition-shadow duration-300 ease-in-out">
                <div className="flex items-center gap-4">
                  <FigmaIcon className="w-10 h-10" />
                  <div>
                    <h3 className="text-xl font-bold">Interaction Design</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Crafting intuitive and engaging user experiences.
                    </p>
                  </div>
                </div>
                <ul className="list-disc pl-4 space-y-2 mt-4">
                  <li>Conducting user research and usability testing</li>
                  <li>
                    Designing intuitive navigation and information architecture
                  </li>
                  <li>
                    Prototyping interactive experiences using tools like Figma
                    or Adobe XD
                  </li>
                  <li>
                    Collaborating with developers to ensure smooth
                    implementation
                  </li>
                  <li>Iterating on designs based on user feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-12 md:py-20 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl">
                Worked With
              </h2>
              <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                I have had the privilege of collaborating with a diverse range
                of clients and partners, each bringing unique challenges and
                opportunities.
              </p>
            </div>
            <div className="justify-center w-full flex [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] p-4 gap-6 overflow-x-auto  ">
              {clients.map((client) => (
                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">
                  <Skeleton
                    isLoaded={isClientLoaded}
                    className="flex items-center justify-center p-2"
                    style={{
                      width: "190px",
                      height: "80px",
                    }}
                  >
                    <Image
                      alt={client.Name}
                      src={client.Logo[0].thumbnails.large.url}
                      width={150}
                      height={50}
                    ></Image>
                  </Skeleton>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FigmaIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  );
}

function PaletteIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  );
}
