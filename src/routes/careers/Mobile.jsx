import CommonPageLayout from "../../components/layout/CommonPageLayout";
import mobile from "../../data/resources/mobile";
import LearningAdvice from "../../components/shared/LearningAdvice";

function Mobile() {
   const resources = [
      { title: "Bootcamps", data: mobile.bootcamp },
      { title: "Youtube", data: mobile.youtube },
   ];
   return (
      <>
         <CommonPageLayout
            title="Mobile Development"
            heroImg="/assets/images/frontend-hero.jpg"
         >
            {/***********  PARAGRAPHS  *********/}
            {mobile.notes.map((item, index) => (
               <p className="my-5 note" key={index}>
                  {item}
               </p>
            ))}

            <h2 className="heading-2">Types of Mobile development</h2>

            <p className="my-5 note">
               Mobile Development is generally categorized based on Operating
               Systems. The two most popular and widely used operating systems
               are Apple iOS and Google Android OS. Although there are other
               types of mobile devices out there with different kinds of
               operating systems, their percentage is very small compared to
               these two.
            </p>

            <p className="my-5 note">
               Mobile development is therefore divided into two main types.
               <ul className="list-disc pl-10">
                  <li>Android mobile development</li>
                  <li>iOS Mobile development.</li>
               </ul>
            </p>

            <p className="my-5 note">
               An Android based application will never run on an ios device and
               vice versa. These type of single OS applications are called{" "}
               <b>native applications.</b>
            </p>

            <p className="my-5 note">
               However, there are applications that run on both devices or
               operating system. These type of cross platform OS applications
               are called <b>hybrid applications.</b>{" "}
            </p>

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
      </>
   );
}

export default Mobile;
