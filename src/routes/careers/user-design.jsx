import CommonPageLayout from "../../components/layout/CommonPageLayout";
import LearningAdvice from "../../components/shared/LearningAdvice";
import userDesign from "../../data/resources/user-design";
import WatchVideo from "../../components/shared/WatchVideo";

function UserDesign() {
   const resources = [
      { title: "Bootcamps", data: userDesign.bootcamp },
      { title: "Youtube", data: userDesign.youtube },
   ];

   return (
      <CommonPageLayout
         title="UI/UX design"
         heroImg="/assets/images/career-covers/user-design.jpg"
      >
         {userDesign.notes.map((item, index) => (
            <p className="my-5 note" key={index}>
               {item}
            </p>
         ))}

         <h2 className="heading-2">UI Design</h2>
         {userDesign.ui_design.map((item, index) => (
            <p className="my-5 note" key={index}>
               {item}
            </p>
         ))}

         <h2 className="heading-2">UX Design</h2>
         {userDesign.ux_design.map((item, index) => (
            <p className="my-5 note" key={index}>
               {item}
            </p>
         ))}

         <WatchVideo videoSrc="https://www.youtube.com/embed/zHAa-m16NGk?si=pdcxj9BZujCyDZKY" />

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

export default UserDesign;
