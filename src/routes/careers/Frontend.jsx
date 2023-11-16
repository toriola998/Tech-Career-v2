import CommonPageLayout from "../../components/layout/CommonPageLayout";
import frontend from "../../data/resources/frontend";

function Frontend() {
   const categories = [
      { title: "Bootcamps", data: frontend.bootcamp },
      { title: "Websites", data: frontend.websites },
      { title: "Books", data: frontend.books },
      { title: "Youtube", data: frontend.youtube },
   ];

   return (
      <CommonPageLayout>
         <div className="bg-gray-50 py-32 px-6 sm:px-[10%]">
            <div className="max-w-[700px] mx-auto">
               <h1 className="text-dark font-semibold text-2xl md:text-3xl">
                  Frontend development
               </h1>
               <img
                  src="/assets/images/frontend-hero.jpg"
                  alt=""
                  role="presentation"
                  className="h-[200px] md:h-[250px] w-full object-cover my-10"
               />
               <p className="my-5 note">
                  Commonly referred to as Client-Side Development, Front-End
                  Development is the software development aspect responsible for
                  designing the client-side interface of the software, website,
                  or application. Basically, front-end developers are
                  responsible for developing everything a user sees and
                  interacts with on the software. Their role is to turn the code
                  written by back-end developers into an interactive graphical
                  interface that will present information in a user-friendly
                  format.
               </p>
               <p className="mb-5 note">
                  Developing software without a front end will result in a site
                  or app with just codes that users with no programming
                  background cannot understand. So basically, the role of
                  front-end development is to help develop an interface that
                  will allow users to easily interact with the back-end of a
                  website, software, or application.
               </p>
               <p className="mb-5 note">
                  However, there are factors that a front-end needs to consider
                  in order to be able to design an efficient front-end. The
                  first one is the varying devices that often come in different
                  screen sizes and resolutions, thus making the developer
                  consider this during development.
               </p>
               <p className="mb-5 note">
                  The other factors include varying browser types and operating
                  systems. This means that a front-end developer has to ensure
                  the website, app or software is cross-browser, cross-OS, and
                  cross-device.
               </p>
               <p className="mb-2 font-medium">Watch a video</p>
               <iframe
                  className="w-full h-[200px] md:h-[300px]"
                  src="https://www.youtube.com/embed/GJ8jidDdWVg?si=I8cbhyNpCWhWsVBs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
               ></iframe>
               <h2 className="heading-2">
                  Web Technologies Used For Frontend Development
               </h2>
               <p className="mb-5 note">
                  Developers can use many web technologies to convert codes into
                  user-friendly graphical interfaces. However, the main ones are
                  HTML (Hyper Text Markup Language), CSS (Cascading Style
                  Sheets), and JavaScript.
               </p>
               <div className="mt-8 ml-6">
                  {frontend.technologies.map((item, index) => (
                     <>
                        <p className="font-medium mb-2 ">{`${index + 1}. ${
                           item.title
                        }`}</p>
                        <p className="mb-8 note">{item.description}</p>
                     </>
                  ))}
               </div>
               <h2 className="heading-2">Learning resources</h2>
               <p className="mb-5 note">
                  There are various ways of honing this skill, you can check out
                  the resources below and find the one that best suits you. Note
                  that it is perfectly okay to use more than one resource to
                  learn, you can use a bootcamp, and also check a documentation,
                  youtube videos, blogposts for clarifications. Just choose
                  what's best for you!.
               </p>
               <p className="mb-5 note">
                  <b>N.B:</b> HTML & CSS is a pre-requisite for javascript,
                  ensure you learn and build with HTML & CSS before proceeding
                  to javascript.
               </p>
               {categories.map((category, index) => (
                  <div key={index}>
                     <h3 className="heading-3">{category.title}</h3>

                     <ul className="ml-5 list-disc">
                        {category.data.map((item, index) => (
                           <li key={index}>
                              <a
                                 href={item.link}
                                 className="note mb-2 inline-block underline"
                                 target="_blank"
                              >
                                 {item.text}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </div>
               ))}
            </div>
         </div>
      </CommonPageLayout>
   );
}

export default Frontend;
