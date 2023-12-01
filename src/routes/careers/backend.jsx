import CommonPageLayout from "../../components/layout/CommonPageLayout";
import backend from "../../data/resources/backend";
import WatchVideo from "../../components/shared/WatchVideo";
import LearningAdvice from "../../components/shared/LearningAdvice";

function Backend() {
   const resources = [
      { title: "Bootcamps", data: backend.bootcamp },
      { title: "Websites", data: backend.websites },
      { title: "Youtube", data: backend.youtube },
   ];
   return (
      <CommonPageLayout
         title="Backend Development"
         heroImg="/assets/images/career-covers/backend.jpg"
      >
         {backend.notes.map((item, index) => (
            <p className="my-5 note" key={index}>
               {item}
            </p>
         ))}

         <WatchVideo videoSrc="https://www.youtube.com/embed/cbSrsYiRamo?si=W1lF10TQaqpC4BEi&amp;start=30" />

         <h1 className="mt-10 font-bold text-lg">
            THERE ARE DIFFERENT TECHNOLOGIES THAT CAN BE USED FOR BACKEND
            DEVELOPMENT
         </h1>

         <h2 className="heading-2">Learning resources</h2>
         <LearningAdvice />

         {resources.map((category, index) => (
            <div key={index}>
               <h3 className="heading-3">{category.title}</h3>

               <ul className="resources ml-5 list-disc">
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

export default Backend;
