import CommonPageLayout from "../../components/layout/CommonPageLayout";
import LearningAdvice from "../../components/shared/LearningAdvice";
import WatchVideo from "../../components/shared/WatchVideo";
import frontend from "../../data/resources/frontend";

function Frontend() {
   const resources = [
      { title: "Bootcamps", data: frontend.bootcamp },
      { title: "Websites", data: frontend.websites },
      { title: "Books", data: frontend.books },
      { title: "Youtube", data: frontend.youtube },
   ];

   return (
      <CommonPageLayout
         title="Frontend Development"
         heroImg="/assets/images/frontend-hero.jpg"
      >
         {/***********  PARAGRAPHS  *********/}
         {frontend.notes.map((item, index) => (
            <p className="my-5 note" key={index}>
               {item}
            </p>
         ))}

         <WatchVideo videoSrc="https://www.youtube.com/embed/GJ8jidDdWVg?si=I8cbhyNpCWhWsVBs" />

         <h2 className="heading-2">
            Web Technologies Used For Frontend Development
         </h2>
         <p className="mb-5 note">
            Developers can use many web technologies to convert codes into
            user-friendly graphical interfaces. However, the main ones are HTML
            (Hyper Text Markup Language), CSS (Cascading Style Sheets), and
            JavaScript.
         </p>

         <div className="mt-8 ml-6">
            {frontend.technologies.map((item, index) => (
               <div key={index}>
                  <p className="font-medium mb-2 ">{`${index + 1}. ${
                     item.title
                  }`}</p>
                  <p className="mb-8 note">{item.description}</p>
               </div>
            ))}
         </div>

         <h2 className="heading-2">Learning resources</h2>
         <LearningAdvice />
         <p className="mb-5 note">
            <b>N.B:</b> HTML & CSS is a pre-requisite for javascript, ensure you
            learn and build with HTML & CSS before proceeding to javascript.
         </p>
         {resources.map((category, index) => (
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
      </CommonPageLayout>
   );
}

export default Frontend;
