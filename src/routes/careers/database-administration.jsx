import CommonPageLayout from "../../components/layout/CommonPageLayout";
import LearningAdvice from "../../components/shared/LearningAdvice";
import WatchVideo from "../../components/shared/WatchVideo";
import databaseAdministration from "../../data/resources/database-administration";

function DatabaseAdministration() {
   const resources = [
      { title: "Bootcamps", data: databaseAdministration.bootcamp },
      { title: "Youtube", data: databaseAdministration.youtube },
   ];

   return (
      <CommonPageLayout
         title="Database Administration"
         heroImg="/assets/images/frontend-hero.jpg"
      >
         {databaseAdministration.notes.map((item, index) => (
            <p className="my-5 note" key={index}>
               {item}
            </p>
         ))}

         <WatchVideo videoSrc="https://www.youtube.com/embed/kU-V2Ld9WrY?si=skNiDLkPp7qwkNcD" />

         <h2 className="heading-2">Specializations of Database Administration</h2>
         <div className="mt-8 ml-6">
            {databaseAdministration.types.map((item, index) => (
               <div key={index}>
                  <p className="font-medium text-lg mb-2 ">{`${index + 1}. ${
                     item.title
                  }`}</p>
                  <p className="mb-8 note">{item.description}</p>
               </div>
            ))}
         </div>

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

export default DatabaseAdministration;
