import CommonPageLayout from "../../components/layout/CommonPageLayout";
import devOps from "../../data/resources/devops";
import WatchVideo from "../../components/shared/WatchVideo";
import LearningAdvice from "../../components/shared/LearningAdvice";

function DevOps() {
   const resources = [
      { title: "Bootcamps", data: devOps.bootcamp },
      { title: "Websites", data: devOps.websites },
      { title: "Youtube", data: devOps.youtube },
   ];

   return (
      <CommonPageLayout
         title="Development Operations (DevOps)"
         heroImg="/assets/images/frontend-hero.jpg"
      >
         {devOps.notes.map((item, index) => (
            <p className="my-5 note" key={index}>
               {item}
            </p>
         ))}

         <WatchVideo videoSrc="https://www.youtube.com/embed/Xrgk023l4lI?si=G5pz3ZFL8fKdxn_r" />

         <h2 className="heading-2">Roles of devOps</h2>
         <div className="mt-8 ml-6">
            {devOps.roles.map((item, index) => (
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

export default DevOps;
