import cloudComputing from "../../data/resources/cloud-computing";
import CommonPageLayout from "../../components/layout/CommonPageLayout";
import LearningAdvice from "../../components/shared/LearningAdvice";
import WatchVideo from "../../components/shared/WatchVideo";

function CloudComputing() {
   const resources = [
      { title: "Bootcamps", data: cloudComputing.bootcamp },
      { title: "Books", data: cloudComputing.books },
      { title: "Youtube", data: cloudComputing.youtube },
   ];

   return (
      <CommonPageLayout
         title="Cloud Computing"
         heroImg="/assets/images/career-covers/cloud.jpg"
      >
         {cloudComputing.notes.map((item, index) => (
            <p className="my-5 note" key={index}>
               {item}
            </p>
         ))}

         <ol className="mt-3 mb-8 ml-6 list-disc">
            {cloudComputing.tasks.map((item, index) => (
               <li className="mb-2 note" key={index}>
                  {item}
               </li>
            ))}
         </ol>

         <WatchVideo videoSrc="https://www.youtube.com/embed/mxT233EdY5c?si=lUO6pSzjniJDUgiX" />

         <h2 className="heading-2">Roles In Cloud Computing</h2>
         <p className="note my-3">
            There are a few roles in cloud computing, and they include;
         </p>
      
         <div className="mt-8 ml-6">
            {cloudComputing.roles.map((item, index) => (
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

export default CloudComputing;
