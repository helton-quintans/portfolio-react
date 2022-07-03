import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiCss3, SiHtml5, SiJavascript, SiJest, SiMysql, SiPuppeteer, SiSass, SiStyledcomponents, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb"
import { DiLinux, DiMongodb, DiMysql } from "react-icons/di";

export default function () {
  return (
    <>
      <h1 className=' mt-8 text-center text-white text-4xl mt-md underline decoration-fuchsia-500 underline-offset-8 transition-colors '>
        Techs
      </h1>
      <p className='justify-center item-center text-center text-lg py-8  text-slate-200'>
        Main technologies I work currently:
      </p>
      <div className="px-8 md:lg:xl:px-16 bg-opacity-10">
        <div className="grid grid-cols-1 md:lg:xl:grid-cols-3 group shadow-xl shadow-purple-500  ">

          <div className="p-10 text-purple-500 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <SiHtml5 size={80} />
            <p className="text-xl font-medium text-white mt-3">HTML5</p>
            <p className="mt-2 text-sm text-slate-500">markup language for the World Wide Web and is a key Internet technology, originally proposed by Opera Software. It is the fifth version of the HTML language.</p>
          </div>

          <div className="p-10 text-purple-500 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <SiCss3 size={80} />
            <p className="text-xl font-medium text-white mt-3">CSS</p>
            <p className="mt-2 text-sm text-slate-500">Cascading Style Sheets is a mechanism for adding style to a web document. </p>
          </div>

          <div className="p-10 text-purple-500 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <SiJavascript size={80} />
            <p className="text-xl font-medium text-white mt-3">JavaScript</p>
            <p className="mt-2 text-sm text-slate-500">JavaScript is a structured, multi-paradigm, weak dynamically typed, high-level scripting interpreted programming language..</p>
          </div>

          <div
            className="p-10 text-purple-500 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <SiTypescript size={80} />
            <p className="text-xl font-medium text-white mt-3">Typescript</p>
            <p className="mt-2 text-sm text-slate-500">TypeScript is an open source programming language developed by Microsoft. It is a strict syntactic superset of JavaScript and adds optional static typing to the language.</p>
          </div>

          <div
            className="p-10 text-purple-500 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-900 cursor-pointer">
            <FaReact size={80} />
            <p className="text-xl font-medium text-white mt-3">React</p>
            <p className="mt-2 text-sm text-slate-500">JavaScript library focused on creating user interfaces on web pages. It is maintained by Facebook.</p>
          </div>

          <div
            className="p-10 text-purple-500 flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:bg-slate-900 cursor-pointer">
            <TbBrandNextjs size={80} />
            <p className="text-xl font-medium text-white mt-3">Nextjs</p>
            <p className="mt-2 text-sm text-slate-500">Server-side rendering and static website generation for React-based web applications.</p>
          </div>


          <div className="p-10 text-purple-500 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <FaNodeJs size={80} />
            <p className="text-xl font-medium text-white mt-3">NodeJS</p>
            <p className="mt-2 text-sm text-slate-500">An open-source, cross-platform software, based on Google's V8 interpreter, that allows the execution of JavaScript code outside of a web browser..</p>
          </div>

          <div className="p-10 text-purple-500 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <FaGithub size={80} />
            <p className="text-xl font-medium text-white mt-3">Git e Github</p>
            <p className="mt-2 text-sm text-slate-500">source code and file hosting platform with version control using Git. It allows programmers, utilities or any user registered on the platform to contribute to private and/or Open Source projects from anywhere in the world. </p>
          </div>

          <div className="p-10 text-purple-500 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <SiStyledcomponents size={80} />
            <p className="text-xl font-medium text-white mt-3">Styled Components</p>
            <p className="mt-2 text-sm text-slate-500">Sass is a stylesheet language initially conceived by Hampton Catlin and developed by Natalie Weizenbaum.</p>
          </div>

          <div className="p-10 text-purple-500 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <SiJest size={80} />
            <p className="text-xl font-medium text-white mt-3">Jest</p>
            <p className="mt-2 text-sm text-slate-500">Jest is a JavaScript testing framework built on top of Jasmine and maintained by Meta. </p>
          </div>

          <div className="p-10 text-purple-500 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <SiSass size={80} />
            <p className="text-xl font-medium text-white mt-3">Saas</p>
            <p className="mt-2 text-sm text-slate-500">Library for React and React Native that allows you to use component-level styles in your application. They are written in a mixture of JavaScript and CSS.</p>
          </div>

          <div className="p-10 text-purple-500 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <DiMongodb size={80} />
            <p className="text-xl font-medium text-white mt-3">MongoDB</p>
            <p className="mt-2 text-sm text-slate-500">Open-source, cross-platform document-oriented database software written in the C++ language. Classified as a NoSQL database program, </p>
          </div>

          <div className="p-10 text-purple-500 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <DiMysql size={80} />
            <p className="text-xl font-medium text-white mt-3">MySQL</p>
            <p className="mt-2 text-sm text-slate-500">MySQL is a database management system, which uses the SQL language as an interface. It is currently one of Oracle Corporation's most popular database management systems, with over 10 million installations worldwide. </p>
          </div>

          <div className="p-10 text-purple-500 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <SiPuppeteer size={80} />
            <p className="text-xl font-medium text-white mt-3">Puppeteer</p>
            <p className="mt-2 text-sm text-slate-500">Puppeteer is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol.</p>
          </div>

          <div className="p-10 text-purple-500 flex flex-col items-center text-center group   md:lg:xl:border-b hover:bg-slate-50 cursor-pointer">
            <DiLinux size={80} />
            <p className="text-xl font-medium text-white mt-3">Linux</p>
            <p className="mt-2 text-sm text-slate-500">Linux is a term popularly used to refer to operating systems or operating systems that use the Linux Kernel. The kernel was developed by Finnish programmer Linus Torvalds, inspired by the Minix system. </p>
          </div>

          <div className="p-10 text-purple-500 flex flex-col items-center text-center group   md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-lime-500 text-white shadow-lg shadow-lime-200"><svg
              xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg></span>
            <p className="text-xl font-medium text-slate-700 mt-3">Best
              Track Record</p>
            <p className="mt-2 text-sm text-slate-500">Yet another year ! Yet another jewel in our crown!</p>
          </div>

          <div className="p-10 text-purple-500 flex flex-col items-center text-center group    md:lg:xl:border-r hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-teal-500 text-white shadow-lg shadow-teal-200"><svg
              xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
            </svg></span>
            <p className="text-xl font-medium text-slate-700 mt-3">Free
              Mock Exams</p>
            <p className="mt-2 text-sm text-slate-500">Get Topic-Wise Tests, Section- Wise and mock tests for your
              preparation.</p>
          </div>

          <div className="p-10 text-purple-500 flex flex-col items-center text-center group     hover:bg-slate-50 cursor-pointer">
            <span className="p-5 rounded-full bg-indigo-500 text-white shadow-lg shadow-indigo-200"><svg
              xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="1.5">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg></span>
            <p className="text-xl font-medium text-slate-700 mt-3">Genuine
              Visa Advice</p>
            <p className="mt-2 text-sm text-slate-500">Visa process by helping you create the necessary documentation
            </p>
          </div>
        </div>

      </div>
    </>
  )
}