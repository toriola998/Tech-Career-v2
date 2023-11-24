import CommonPageLayout from "../../components/layout/CommonPageLayout";
import softwareTesting from "../../data/resources/software-testing";
import LearningAdvice from "../../components/shared/LearningAdvice";
import WatchVideo from "../../components/shared/WatchVideo";

function SoftwareTesting() {
   const resources = [
      { title: "Bootcamps", data: softwareTesting.bootcamp },
      { title: "Websites", data: softwareTesting.websites },
      { title: "Youtube", data: softwareTesting.youtube },
   ];

   return (
      <CommonPageLayout
         title="Software Testing (Quality Assurance)"
         heroImg="/assets/images/frontend-hero.jpg"
      >
         {/***********  PARAGRAPHS  *********/}
         {softwareTesting.notes.map((item, index) => (
            <p className="my-5 note" key={index}>
               {item}
            </p>
         ))}

         <h2 className="heading-2">
            Roles of a software tester
         </h2>
         <div className="mt-8 ml-6">
            {softwareTesting.roles.map((item, index) => (
               <div key={index}>
                  <p className="font-medium mb-2 ">{`${index + 1}. ${
                     item.title
                  }`}</p>
                  <p className="mb-8 note">{item.description}</p>
               </div>
            ))}
         </div>

         <WatchVideo videoSrc="https://www.youtube.com/embed/xtQpNdGK6WI?si=1bOhlywef70exD59" />

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

export default SoftwareTesting;
