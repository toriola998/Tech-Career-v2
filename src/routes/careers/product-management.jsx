import CommonPageLayout from "../../components/layout/CommonPageLayout";
import WatchVideo from "../../components/shared/WatchVideo";
import LearningAdvice from "../../components/shared/LearningAdvice";
import productManagement from "../../data/resources/product-management";

function ProductManagement() {
   const resources = [
      { title: "Bootcamps", data: productManagement.bootcamp },
      { title: "Books", data: productManagement.books },
      { title: "Youtube", data: productManagement.youtube },
   ];

   return (
      <CommonPageLayout
         title="Product Management"
         heroImg="/assets/images/frontend-hero.jpg"
      >
         {productManagement.notes.map((item, index) => (
            <p className="my-5 note" key={index}>
               {item}
            </p>
         ))}

         <h2 className="heading-2">Responsibilities of A Product Manager</h2>

         <div className="mt-8 ml-6">
            {productManagement.roles.map((item, index) => (
               <div key={index}>
                  <p className="font-medium text-lg mb-2 ">{`${index + 1}. ${
                     item.title
                  }`}</p>

                  {item.description.map((descItem, descIndex) => (
                     <p className="mb-8 note" key={descIndex}>
                        {descItem}
                     </p>
                  ))}
               </div>
            ))}
         </div>
         <WatchVideo videoSrc="https://www.youtube.com/embed/88ZfjnDOmp4?si=0_i82t4d8JZskfDc" />

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

export default ProductManagement;
