import CommonPageLayout from "../../components/layout/CommonPageLayout";
import WatchVideo from "../../components/shared/WatchVideo";
import LearningAdvice from "../../components/shared/LearningAdvice";
import dataScience from "../../data/resources/data-science";

function DataScience() {
   const resources = [
      { title: "Bootcamps", data: dataScience.bootcamp },
      { title: "Websites", data: dataScience.websites },
      { title: "Youtube", data: dataScience.youtube },
   ];

   return (
      <CommonPageLayout
         title="Data Science"
         heroImg="/assets/images/frontend-hero.jpg"
      >
         {dataScience.notes.map((item, index) => (
            <p className="my-5 note" key={index}>
               {item}
            </p>
         ))}

         <h2 className="heading-2">Life cycle in Data Science</h2>
         <div className="mt-8 ml-6">
            {dataScience.lifeCycle.map((item, index) => (
               <div key={index}>
                  <p className="font-medium text-lg mb-2 ">{`${index + 1}. ${
                     item.title
                  }`}</p>
                  <p className="mb-8 note">{item.description}</p>
               </div>
            ))}
         </div>

         <WatchVideo videoSrc="https://www.youtube.com/embed/X3paOmcrTjQ?si=fuHHwlHWqhsyE1kz" />

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

export default DataScience;
